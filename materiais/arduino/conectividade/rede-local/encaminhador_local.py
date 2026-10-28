"""Encaminhamento HTTP local real; não cria um túnel público nem criptografado."""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.error import URLError
from urllib.request import ProxyHandler, build_opener

cliente = build_opener(ProxyHandler({}))


class Encaminhar(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path != "/":
            self.send_error(404, "Caminho inexistente")
            return
        try:
            with cliente.open("http://127.0.0.1:8000/", timeout=3) as resposta:
                conteudo = resposta.read(65536)
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(conteudo)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(conteudo)
            print("Pedido da porta 9000 encaminhado à porta 8000.", flush=True)
        except URLError:
            self.send_error(502, "Inicie o servidor da porta 8000")

    def log_message(self, formato, *valores):
        pass


if __name__ == "__main__":
    servidor = ThreadingHTTPServer(("127.0.0.1", 9000), Encaminhar)
    print("Abra http://127.0.0.1:9000/ neste computador. Ctrl+C encerra.", flush=True)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("Encaminhamento encerrado.")
    finally:
        servidor.server_close()

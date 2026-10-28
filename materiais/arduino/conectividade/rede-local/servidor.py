"""Aviso fictício e somente leitura. Não publica arquivos do computador."""
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

PAGINA = """<!doctype html>
<html lang="pt-BR"><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Ambiente MbB — aviso de teste</title>
<style>body{font-family:Arial;max-width:650px;margin:3rem auto;padding:1rem;
background:#eef8fa;color:#134956}article{background:white;padding:2rem;border-radius:1rem}</style>
<article><h1>Ambiente MbB</h1><p>Mensagem fictícia: bancada disponível para estudo.</p>
<p>Este servidor está no computador. Ele não controla um ESP32.</p></article></html>""".encode("utf-8")


class PaginaDeTeste(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path != "/":
            self.send_error(404, "Caminho inexistente")
            return
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(PAGINA)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(PAGINA)
        print("Pedido GET / atendido.", flush=True)

    def log_message(self, formato, *valores):
        pass  # Não registra IPs nem cabeçalhos dos visitantes.


if __name__ == "__main__":
    servidor = ThreadingHTTPServer(("127.0.0.1", 8000), PaginaDeTeste)
    print("Abra http://127.0.0.1:8000/ neste computador. Ctrl+C encerra.", flush=True)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("Servidor encerrado.")
    finally:
        servidor.server_close()

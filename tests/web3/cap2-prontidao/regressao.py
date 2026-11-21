"""Reutiliza o cenário de mensagens/painel sobre uma cópia com a ligação nova."""
from pathlib import Path
import importlib.util
import shutil
import sys
import unittest

ROOT = Path(__file__).resolve().parents[3]
spec = importlib.util.spec_from_file_location('pratica_cap1', ROOT / 'tests/web3/verificar-pratica.py')
modulo = importlib.util.module_from_spec(spec)
spec.loader.exec_module(modulo)
ensaio = Path(sys.argv[1]) / 'cafe-aurora-web3'


class CafeEvoluido(modulo.Pratica):
    def setUp(self):
        super().setUp()
        for relativo in ['src/atendimento.php', 'public/balcao.php', 'public/api/atendimento.php', 'public/js/balcao/main.js']:
            destino = self.app / relativo
            destino.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(ensaio / relativo, destino)

    def test_10_mensagem_persistida_e_painel_autenticado(self):
        self.assertIn('Cardápio', self.get('/cardapio.php'))
        self.assertIn('Atendimento no balcão', self.get('/balcao.php'))
        super().test_10_mensagem_persistida_e_painel_autenticado()


suite = unittest.TestSuite([CafeEvoluido('test_10_mensagem_persistida_e_painel_autenticado')])
resultado = unittest.TextTestRunner(verbosity=2).run(suite)
raise SystemExit(0 if resultado.wasSuccessful() else 1)

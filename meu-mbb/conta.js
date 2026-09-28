(function () {
  'use strict';
  let sdk = null;
  let usuario = null;
  let inicializacao;
  const ouvintes = new Set();

  function avisar() { ouvintes.forEach(ouvinte => ouvinte(usuario)); }
  function observar(ouvinte) { ouvintes.add(ouvinte); ouvinte(usuario); return () => ouvintes.delete(ouvinte); }

  async function iniciar() {
    if (inicializacao) return inicializacao;
    inicializacao = (async () => {
      const config = window.MBB_FIREBASE_CONFIG;
      if (!config?.apiKey || !config?.projectId) throw new Error('Autenticação indisponível. O conteúdo público continua acessível.');
      const [appSdk, authSdk] = await Promise.all([
        import('https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js'),
        import('https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js')
      ]);
      const app = appSdk.getApps().find(item => item.options.projectId === config.projectId) || appSdk.initializeApp(config);
      const auth = authSdk.getAuth(app);
      sdk = { authSdk, auth, app, dbSdk: null, db: null };
      authSdk.onAuthStateChanged(auth, atual => { usuario = atual; avisar(); });
      await auth.authStateReady();
      usuario = auth.currentUser;
      avisar();
      return usuario;
    })().catch(error => { sdk = null; usuario = null; avisar(); throw error; });
    return inicializacao;
  }

  async function exigirConta() {
    await iniciar();
    if (!usuario) throw new Error('Entre para salvar seu estudo.');
    if (!sdk.dbSdk) {
      sdk.dbSdk = await import('https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js');
      sdk.db = sdk.dbSdk.getFirestore(sdk.app);
    }
  }
  async function entrar(email, senha) { await iniciar(); return sdk.authSdk.signInWithEmailAndPassword(sdk.auth, email, senha); }
  async function cadastrar(nome, email, senha) {
    await iniciar();
    const credencial = await sdk.authSdk.createUserWithEmailAndPassword(sdk.auth, email, senha);
    await sdk.authSdk.updateProfile(credencial.user, { displayName: nome });
    usuario = credencial.user;
    avisar();
    return usuario;
  }
  async function recuperar(email) { await iniciar(); return sdk.authSdk.sendPasswordResetEmail(sdk.auth, email); }
  async function sair() { await iniciar(); await sdk.authSdk.signOut(sdk.auth); }

  function ref(id) { return sdk.dbSdk.doc(sdk.db, 'meuMbb', usuario.uid, 'registros', id); }
  async function listar() {
    await exigirConta();
    const fotos = await sdk.dbSdk.getDocs(sdk.dbSdk.collection(sdk.db, 'meuMbb', usuario.uid, 'registros'));
    return Object.fromEntries(fotos.docs.map(documento => [documento.id, documento.data()]));
  }
  async function salvar(unidade, campos) {
    await exigirConta();
    const { serverTimestamp, setDoc } = sdk.dbSdk;
    await setDoc(ref(unidade.conteudo_id), {
      conteudoId: unidade.conteudo_id,
      versaoVista: unidade.versao_conteudo,
      atualizadoEm: serverTimestamp(),
      ...campos
    }, { merge: true });
  }
  async function visitar(unidade, ancora = '') {
    await exigirConta();
    await salvar(unidade, { ultimoAcesso: sdk.dbSdk.serverTimestamp(), ancora: ancora.slice(0, 100) });
  }
  function atual() { return usuario; }
  window.MBBMeuConta = { iniciar, observar, atual, entrar, cadastrar, recuperar, sair, listar, salvar, visitar };
}());

window.backendFastapiVisuals = {
  'capitulo-06': `
    <section class="backend-visual" aria-labelledby="visual-docs-title">
      <div class="backend-visual-heading">
        <span class="visual-kicker">Visualize antes de continuar</span>
        <h3 id="visual-docs-title">Como o /docs organiza a API</h3>
        <p>O Swagger UI transforma o contrato OpenAPI em uma interface navegável. Cada linha representa uma operação que outro programa pode descobrir e testar.</p>
      </div>
      <div class="swagger-mock" role="img" aria-label="Ilustração de uma documentação Swagger UI com endpoints GET produtos e POST pedidos">
        <div class="mock-browser-bar"><span></span><span></span><span></span><div>127.0.0.1:8000/docs</div></div>
        <div class="swagger-brand"><strong>FastAPI</strong><span>OpenAPI 3.x</span></div>
        <div class="swagger-route get"><b>GET</b><code>/produtos</code><span>Listar produtos</span></div>
        <div class="swagger-route get"><b>GET</b><code>/produtos/{produto_id}</code><span>Consultar produto</span></div>
        <div class="swagger-route post"><b>POST</b><code>/pedidos</code><span>Criar pedido</span></div>
      </div>
      <p class="visual-caption"><strong>O ponto principal:</strong> o aluno não precisa imaginar o que significa “documentação interativa”; ele consegue reconhecer visualmente métodos, rotas e operações.</p>
    </section>`,

  'capitulo-23': `
    <section class="backend-visual" aria-labelledby="visual-relacoes-title">
      <div class="backend-visual-heading">
        <span class="visual-kicker">Mapa das relações</span>
        <h3 id="visual-relacoes-title">Um pedido conecta várias entidades</h3>
        <p>As tabelas não estão soltas. As chaves estrangeiras representam relações que já existiam no mundo real do estabelecimento.</p>
      </div>
      <div class="relation-map" role="img" aria-label="Diagrama Cliente possui Pedidos, Pedido possui Itens e Item referencia Produto">
        <div class="relation-node customer"><span>CLIENTE</span><strong>Ana</strong><small>id = 7</small></div>
        <div class="relation-arrow"><b>1</b><span>→</span><b>N</b><small>faz</small></div>
        <div class="relation-node order"><span>PEDIDO</span><strong>#1042</strong><small>cliente_id = 7</small></div>
        <div class="relation-arrow"><b>1</b><span>→</span><b>N</b><small>possui</small></div>
        <div class="relation-node item"><span>ITEM</span><strong>2 unidades</strong><small>produto_id = 3</small></div>
        <div class="relation-arrow"><b>N</b><span>→</span><b>1</b><small>referencia</small></div>
        <div class="relation-node product"><span>PRODUTO</span><strong>Água 20 L</strong><small>id = 3</small></div>
      </div>
      <p class="visual-caption"><strong>Leia da esquerda para a direita:</strong> um cliente pode fazer vários pedidos; um pedido possui vários itens; cada item referencia um produto.</p>
    </section>`,

  'capitulo-34': `
    <section class="backend-visual" aria-labelledby="visual-jwt-title">
      <div class="backend-visual-heading">
        <span class="visual-kicker">Segurança em uma imagem</span>
        <h3 id="visual-jwt-title">Do login até a rota protegida</h3>
        <p>O JWT não é a senha viajando pela rede. Ele é um token assinado que carrega informações mínimas para identificar a sessão do usuário.</p>
      </div>
      <div class="auth-journey" role="img" aria-label="Fluxo visual de login, geração de JWT, cabeçalho Bearer e validação de rota protegida">
        <div class="auth-step"><span class="auth-number">1</span><strong>Login</strong><small>usuário + senha</small></div>
        <div class="auth-link">→</div>
        <div class="auth-step"><span class="auth-number">2</span><strong>API valida</strong><small>hash Argon2</small></div>
        <div class="auth-link">→</div>
        <div class="jwt-card"><span>JWT</span><div><b>header</b><b>payload</b><b>signature</b></div><small>sub + exp</small></div>
        <div class="auth-link">→</div>
        <div class="auth-step bearer"><span class="auth-number">3</span><strong>Bearer</strong><small>Authorization</small></div>
        <div class="auth-link">→</div>
        <div class="auth-step protected"><span class="auth-number">4</span><strong>Rota protegida</strong><small>identidade + papel</small></div>
      </div>
      <div class="jwt-warning"><strong>JWT assinado ≠ conteúdo secreto.</strong><span>O payload pode ser lido. A assinatura serve para detectar alteração e validar autenticidade segundo a chave usada pela aplicação.</span></div>
    </section>`
};

# Revisão MbB — Infraestrutura e Sistemas — 29/10/2026

## Resultado e alcance

Revisão documental, pedagógica e de aplicação web das 49 aulas, com preparação
específica em cada uma, introdução ampliada, guias operacionais, cinco kits,
correções de continuidade/segurança e integração dos destinos à pesquisa.
A sequência, os IDs, os personagens e as atividades corretas foram preservados.

**Não é uma certificação integral das práticas técnicas.** Não há Windows,
Packet Tracer, VirtualBox ou Docker neste executor. Instalações, comportamento
dos serviços, imagens de contêiner e recuperação de aplicação nesses ambientes
continuam dependentes de execução externa. Os materiais declaram essa condição.
Não foram fabricadas capturas de tela nem saídas de laboratório.

Base preservada: `865125d39b03b4668de2d796a145d3559f03cc3c`.
A correção de `showPortal()` do commit `f07850cb` foi mantida: `currentLessonId`
continua sendo limpo ao voltar à área. A reabertura foi testada na prévia.

## Diagnóstico inicial: hipóteses confirmadas e refinadas

| Hipótese | Evidência encontrada | Tratamento |
|---|---|---|
| Faltam fundamentos para alguns diagnósticos | Alternativas citam RAM, SSD, DNS, privilégio e recuperação sem preparação equivalente | Apoio curto específico antes das decisões, sem transformar diagnóstico em apostila |
| Pressupõe ambiente previamente montado | Rede Interna sozinha não cria gateway/DNS/cliente; destino /mnt/backup não era preparado | Laboratório pessoal Host-only/NAT; réplica completa explicitamente separada |
| Algumas práticas exigem professor/recursos não disponíveis | Oficina “recebe” VM, falha e cartões; várias missões dependem de equipamento escolar | Kits autônomos, casos representativos e limites de cada percurso |
| Checkpoints carecem de produto de referência | Relatórios existiam, mas sem kits completos vinculados às cinco oficinas | Cinco ZIPs com registro, exemplo comentado, autonomia e recuperação |
| Faltam capturas autênticas de operações complexas | Há fotos reais de componentes e representações HTML identificadas, mas não capturas de todas as ferramentas | Fotos preservadas; esquema novo e roteiros detalhados. Capturas reais continuam pendentes |
| Progressão é incoerente em todo o curso | Não confirmado: casos, registros, segurança e passagem já eram consistentes | Preservada a trajetória; corrigidos os pontos concretos sem substituir o curso |

## Correções e escolhas de revisão

- /24 das estações foi distinguido do plano /26 a implantar; o cenário Packet
  Tracer registra seu DNS simplificado em .20, sem fingir equivalência com .1.
- NAT temporário permite baixar pacotes; Host-only oferece cliente Windows
  acessível, sem exigir segunda VM. Rede Interna permanece opção ampliada.
  Packet Tracer não foi apresentado como rede automaticamente ligada ao VirtualBox.
- Formatação do segundo disco tornou-se extensão supervisionada. Pasta no disco
  de sistema permite avançar com serviços, mas não demonstra volume independente.
- Corrigido o caminho da chave SSH: a string JavaScript eliminava barras do
  PowerShell. O teste verifica o HTML gerado, não apenas o texto no fonte.
- UFW: `show added` antes de ativar; `status numbered` depois. Docker pode desviar
  portas publicadas da filtragem UFW; publicação local e fronteiras foram explicitadas.
- Nginx começa em loopback, com atenção ao site default que o pacote pode iniciar;
  cabeçalho HTTP é distinguido de corpo e resolução DNS.
- Backup de amostra pode ser feito sem disco extra. Backup completo exige destino
  montado/independente, não sobrescreve arquivo existente e restringe acesso.
  O escopo não foi anunciado como restauração completa de identidades do servidor.
- WordPress básico não implementa inscrições: o post privado fictício é o teste
  funcional proposto. Formulário real fica fora desse laboratório de infraestrutura.
- A tag WordPress antiga não foi mantida como promessa de suporte: `wordpress:apache`
  é referência oficial mutável e exige registro de digest. MariaDB mantém a linha
  oficial 11.8; disponibilidade e execução local ainda precisam de `pull` real.
- Para capacidade reduzida há Compose Nginx estático, sem alegar competência de
  transação ou restauração WordPress. A recomendação de segunda VM é condicionada.
- Fontes e requisitos: Packet Tracer pede RAM livre, não instalada. Windows
  continua exigindo ambiente compatível/licenciado; download não fornece licença.

## Inventário das 49 aulas

A coluna registra o apoio/correção documental. “Guia” indica roteiro adicional
expansível na aula; não significa execução da prática pelo revisor.

| Aula | Destino | Apoio/revisão | Guia |
|---|---|---|---|
| 00 — Diagnóstico inicial | `diagnostico` | Separar sintoma/hipótese antes das alternativas; sem nota de entrada. | Apoio e missão existente |
| 01 — Atendimento e triagem | `atendimento-inicial` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 02 — Componentes e compatibilidade | `componentes-compatibilidade` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 03 — Intervenção física segura | `intervencao-segura` | Análise por fotos/documentação quando não há bancada; montagem não certificada. | Apoio e missão existente |
| 04 — UEFI, boot e mídia | `firmware-boot-midia` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 05 — Instalação limpa | `instalacao-particionamento` | Análise de alvo e VM de treino compatível; licença e requisitos explícitos. | Sim |
| 06 — Drivers e pós-instalação | `drivers-validacao` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 07 — Usuários e permissões | `usuarios-permissoes` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 08 — Processos, serviços e logs | `processos-servicos-logs` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 09 — Manutenção e backup | `manutencao-backup` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 10 — Diagnóstico controlado | `diagnostico-substituicao` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 99 — Oficina de suporte | `oficina-suporte` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 00 — Diagnóstico de entrada | `redes-diagnostico` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 01 — Ambiente e topologia | `redes-topologia` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Sim |
| 02 — Ethernet, Wi-Fi e organização | `redes-fisica` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Sim |
| 03 — IPv4, prefixos e sub-redes | `redes-ipv4` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Sim |
| 04 — DHCP, gateway e DNS | `redes-configuracao` | /24 atual distinto do plano /26; saídas rotuladas representativas. | Sim |
| 05 — Roteamento, NAT e caminho | `redes-rota` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Sim |
| 06 — TCP, UDP, portas e serviços | `redes-portas` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Sim |
| 07 — Ferramentas de diagnóstico | `redes-ferramentas` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 08 — Segmentação e VLANs | `redes-vlan` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Sim |
| 09 — Wi-Fi no ambiente real | `redes-wifi` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 10 — Resolver sem adivinhar | `redes-diagnostico-integrado` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 99 — Plantão integrado | `redes-oficina` | Roteiro gradual, configurações e testes; .pkt validado permanece pendente. | Sim |
| 00 — Diagnóstico inicial | `linux-diagnostico` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 01 — VM e instalação | `linux-instalacao-vm` | Instalação guiada; NAT/Host-only no percurso pessoal, sem Bridge. | Sim |
| 02 — Shell, sudo e APT | `linux-shell-apt` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Sim |
| 03 — Usuários e permissões | `linux-usuarios-permissoes` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 04 — Armazenamento e montagem | `linux-armazenamento` | Pasta sem formatação; volume separado passa a extensão supervisionada. | Sim |
| 05 — Rede com Netplan | `linux-netplan` | Dois adaptadores, sem gateway/DNS inexistentes na Host-only. | Sim |
| 06 — SSH seguro | `linux-ssh` | Caminho PowerShell corrigido no HTML efetivamente gerado; público/privado distinguidos. | Apoio e missão existente |
| 07 — systemd e logs | `linux-systemd-logs` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 08 — Serviço Web com Nginx | `linux-nginx` | Página e caminhos concretos; loopback primeiro; teste de corpo além de cabeçalhos. | Sim |
| 09 — Samba e UFW | `linux-samba-ufw` | Contas/grupo, permissões, teste por identidade e ordem de ativação UFW. | Sim |
| 10 — Backup e troubleshooting | `linux-backup-monitoramento` | Amostra restaurável sem alvo destrutivo; destino independente exigido no backup completo. | Sim |
| 99 — Plantão integrado | `linux-plantao` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 00 — Novo serviço, novo risco | `moderna-diagnostico` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 01 — VM com evidência | `moderna-virtualizacao` | Uma VM no percurso B; separação no C com IPs distintos. | Sim |
| 02 — O custo da segunda VM | `moderna-custo-vm` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 03 — Imagem, contêiner e processo | `moderna-containers` | Remove versão fixa não verificada; revisão individual de conflitos; UFW/Docker explicado. | Apoio e missão existente |
| 04 — Estado e persistência | `moderna-persistencia` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Sim |
| 05 — Compose e serviço composto | `moderna-compose` | Post privado nativo substitui cadastro de inscrição que exigiria plugin. | Sim |
| 06 — Atualização e rollback | `moderna-atualizacao` | Backup frio/volumes, projeto de recuperação separado, imagens por digest. | Sim |
| 07 — Nuvem sem propaganda | `moderna-nuvem` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 08 — Ensaio de implantação | `moderna-implantacao` | Diferencia túnel em uma VM de migração real entre ambientes. | Apoio e missão existente |
| 09 — DNS, TLS e exposição | `moderna-dns-tls` | Três cartões concretos; túnel HTTP não apresentado como implantação TLS. | Sim |
| 10 — Decisão de arquitetura | `moderna-arquitetura` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 99 — Migrar e recuperar | `moderna-oficina` | Fundamentos, primeira prática compatível, conferência/recuperação e limite específicos desta aula. | Apoio e missão existente |
| 99 — Feira de Projetos | `integrador-final` | Envelope autônomo, entregas por percurso e evidências com origem declarada. | Apoio e missão existente |

## Referências, versões e recursos

| Ambiente | Referência adotada | Limite de verificação |
|---|---|---|
| Windows | Windows 11 compatível e licenciado; ferramentas nativas | Sem execução ou captura Windows |
| Packet Tracer | 9.0.1 na página Cisco consultada; AMD64 e 4 GB livres | Sem execução ou arquivo .pkt validado |
| VM | VirtualBox pacote-base; orientação cotejada com manual 7.2 | Sem instalação ou medição de VM |
| Linux | Ubuntu Server 24.04 LTS, imagem Server amd64 em host x86-64 | Não afirmar versão de ponto instalada |
| Docker | Engine/Compose pelo APT oficial, versão registrada no laboratório | Sem daemon ou pull neste executor |
| Aplicação | WordPress variante apache, MariaDB linha 11.8 | YAML conferido; runtime não executado |
| Ensaio leve | nginx:stable-alpine e bind somente leitura | YAML conferido; não equivale ao WordPress |

Recursos adicionados: um SVG próprio da topologia NAT/Host-only, identificado
como esquema; guias textuais de interfaces/terminal; cinco ZIPs determinísticos,
com manifestos SHA256; configurações Netplan/Nginx/Samba; scripts de amostra;
Compose completo/leve; roteiro de recuperação; modelos e registros comentados.
As fotos reais já existentes e seus créditos foram preservados. Nenhuma nova
captura autêntica das ferramentas foi adicionada nesta revisão.

Os arquivos HTML de demonstração ficam como `.html.exemplo` no fonte para não
serem confundidos com páginas do portal. O empacotador os entrega como `index.html`
nos kits. A geração é reproduzível por `scripts/empacotar-infraestrutura.py`.

## Verificações realizadas

- 37 testes Node passaram: conteúdo, busca, visitas/retomada, notas, conta e
  mecanismos existentes de Meu MbB, sem autenticação real externa.
- JavaScript alterado passou em análise sintática Node; `git diff --check` passou.
- Cinco ZIPs: integridade, hashes, ausência de caminhos que escapam da pasta,
  presença dos modelos e ausência de segredos gerados.
- YAML: três arquivos carregados por PyYAML. Não substitui `netplan generate`
  ou `docker compose config` executados nas ferramentas reais.
- Endereçamento: IPs únicos, hosts utilizáveis, gateway dentro do prefixo no kit.
- `backup-amostra.sh` executado no shell Linux disponível: criação, arquivo tar,
  extração em local separado e `cmp` passaram. Não altera originais do usuário;
  não prova backup independente nem Ubuntu Server/serviços.
- Prévia no navegador: 49 rotas confirmadas pelo menu ativo e conteúdo de aula;
  retorno à área e reabertura da mesma aula; diagnóstico sem respostas e 6/6;
  botão Copiar no guia YAML. Sem overflow horizontal global no desktop.
- Bancada com iframe e viewports 375, 768 e 1280: portal, instalação Linux,
  Netplan, Compose e VLAN, aguardando a aula correta em cada troca. Quinze
  combinações sem overflow global. É teste de viewport, não dispositivo físico.
- Os IDs, a versão interna e o status originais foram mantidos, preservando o histórico de estudo.
  O gerador de pesquisa agora extrai as aulas na ordem dos scripts da página,
  incluindo os complementos; 49 destinos de pesquisa e retomada foram conferidos.
- 68 URLs externas examinadas por HEAD: 65 retornaram 200. Dell segurança e duas
  páginas Microsoft responderam 403 ao cliente HTTP. As três páginas foram
  encontradas em fonte oficial pela pesquisa; isso não é confirmação de download
  de instaladores nem autenticação NetAcad. Nenhum 404 foi retornado nessa coleta.

## Passagens MbB e limites pedagógicos

1. Arquitetura: sequência/IDs/49 aulas preservados; introdução orienta escolha.
2. Fundamentos: apoio específico antes das missões e diagnósticos.
3. Didática: necessidade e narrativa mantidas; guia opcional evita teoria uniforme longa.
4. Práticas: dependências concretas e riscos corrigidos; runtime externo pendente.
5. Evidências: exemplos identificados, kits e amostra executada sem extrapolar resultados.
6. Integração: /24 → /26, Host-only vs réplica completa, post WordPress e IPs de VMs.
7. Autonomia: modelos/casos sem professor e entrega por percurso; sem avaliação com aluno real.
8. Qualidade web: rotas, viewport, busca, retomada, exercícios e referências conferidos.

A revisão em espiral voltou aos guias e materiais após detectar o caminho SSH,
a ordem UFW e a indexação gerada. A busca não é uma cópia manual que fica obsoleta
no próximo rebuild; o gerador acompanha os conteúdos executados para apresentação.

## Pendências reais para concluir a missão integral

1. Executar instalação e tarefas Windows em VM compatível/licenciada e coletar capturas.
2. Construir os cenários no Packet Tracer indicado, conferir configurações e entregar
   os .pkt reais. O roteiro não foi rotulado como projeto executado.
3. Executar instalação Ubuntu/VirtualBox, rede, identidades, montagens supervisionadas,
   Nginx/Samba/UFW, testes de múltiplas origens e recuperação de servidor.
4. Executar Engine/Compose, pull das imagens, post persistente, backup frio e restauração
   isolada com digests reais; somente então certificar a referência de runtime.
5. Capturar interfaces e resultados reais das ferramentas, em WebP legível, com créditos.
6. Validar o percurso completo com um iniciante e ajustar dúvidas observadas.

**Avaliação final:** a preparação e a autonomia documental avançaram de forma
concreta. Não há base para declarar o curso perfeito ou toda a competência prática
validada. A reforma web/documental pode ser revisada no site; a missão integral
continua parcialmente dependente desses laboratórios externos.

## Arquivos e publicação

O escopo inclui somente Infraestrutura, suas referências e o suporte necessário
no catálogo/gerador de pesquisa. Veja o diff do PR/commit para a lista completa.
O workflow `infraestrutura-validacao.yml` repete testes de conteúdo, busca,
integridade dos ZIPs e geração reproduzível.

Página: https://www.mundobitbyte.com.br/pages/infraestrutura.html

Fontes primárias consultadas: Microsoft (requisitos/download/ciclo de suporte),
Cisco Networking Academy (download/requisitos Packet Tracer), Oracle VirtualBox
(rede e instalação), Canonical (Ubuntu Server 24.04), Docker (APT, portas/UFW,
Compose e imagens oficiais), Wireshark e Dell (segurança ESD). Links estão no
curso e nos arquivos, junto ao assunto correspondente.

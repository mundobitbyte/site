// Complementos específicos de preparação, prática e evidência para as 49 aulas.
// Carregado após os conteúdos e antes do controlador; IDs e ordem permanecem estáveis.
(() => {
  'use strict';
  const apoio = {
  "diagnostico": [
    "Um sintoma é o que você observa; hipótese é uma explicação que ainda precisa de teste. Backup é uma cópia para recuperação, não apenas outro atalho.",
    "Leia o relato e separe o que aconteceu do que alguém sugeriu. Se um termo for desconhecido, anote-o e escolha a ação que preserva pessoas e arquivos.",
    "Registre uma decisão inicial e uma dúvida. Volte aqui após a oficina 99: compare suas justificativas. Não há obrigação de acertar antes de aprender."
  ],
  "atendimento-inicial": [
    "Triagem é decidir o que vem primeiro. “Lento” é uma queixa; “a planilha leva 40 segundos para abrir” é uma observação verificável.",
    "Em um editor de texto, preencha o modelo abaixo usando o caso SEC-02. Deixe a causa como desconhecida. Não reproduza travamentos no seu computador.",
    "Seu registro deve permitir localizar pessoa, equipamento, momento, arquivo em risco e próximo teste. Se faltar informação, escreva a pergunta que faria."
  ],
  "componentes-compatibilidade": [
    "CPU é o processador que executa instruções. RAM mantém dados em uso e perde seu conteúdo ao desligar; SSD e HDD guardam arquivos. A placa-mãe conecta as peças; a fonte fornece energia; mouse e impressora são periféricos.",
    "No Windows, pressione Ctrl+Shift+Esc e abra Desempenho. Compare Memória com Disco; depois pesquise Informações do Sistema no Iniciar. Apenas observe, sem encerrar processos.",
    "Registre CPU, RAM instalada e capacidade do disco. Um uso alto em uma única leitura não prova defeito. Se o menu mudar, pesquise o nome da ferramenta no Iniciar."
  ],
  "intervencao-segura": [
    "Eletricidade estática pode danificar peças sem produzir choque perceptível. A fonte pode reter energia perigosa internamente; desconectar não autoriza abri-la.",
    "Sem equipamento de treino e supervisão, faça a etapa documental: nas fotos da aula, identifique RAM, trava e contato; localize o manual do modelo e monte a sequência de preparação.",
    "Entregue uma sequência com desligamento, desconexão, controle antiestático e conferência do modelo. Identificar em foto não comprova habilidade de instalar RAM; a montagem fica pendente de bancada adequada."
  ],
  "firmware-boot-midia": [
    "Firmware é o programa inicial da máquina; UEFI é uma interface de firmware. Boot significa inicialização. Uma ISO é a imagem de uma mídia; Secure Boot verifica componentes de inicialização assinados.",
    "Abra Informações do Sistema pelo Iniciar e localize Modo da BIOS. Leia o fluxo abaixo. Nesta primeira passagem, não entre no firmware nem crie pendrive.",
    "Explique onde termina o firmware e começa o sistema operacional. Não altere Secure Boot para contornar uma mensagem; registre-a e confira compatibilidade."
  ],
  "instalacao-particionamento": [
    "Partição é uma divisão lógica do disco; sistema de arquivos organiza seu conteúdo. NTFS é usado pelo Windows. Formatar prepara um volume e pode destruir dados; excluir uma partição remove sua organização.",
    "Antes de qualquer instalação, compare o desenho dos discos com o inventário. Sem VM compatível ou máquina de treino autorizada, resolva a escolha do alvo no esquema e registre por que preservaria a outra unidade.",
    "A evidência deve conter nome da VM, capacidade e finalidade de cada disco. Se não puder confirmar o alvo, pare. A análise do esquema não comprova que você instalou o Windows."
  ],
  "drivers-validacao": [
    "Driver permite ao Windows usar um dispositivo. Um ícone sem alerta indica reconhecimento, mas a função ainda precisa ser experimentada. Baseline é um registro do estado de referência.",
    "Pressione Win+R, digite devmgmt.msc e confirme. Expanda Adaptadores de vídeo e abra Propriedades apenas para ler fabricante e versão. Em Configurações → Sistema → Som, faça um teste em volume baixo.",
    "Registre dispositivo, versão observada e função testada. Não instale pacotes de “atualizar todos os drivers”; se houver alerta, anote código e modelo antes de procurar a fonte oficial."
  ],
  "usuarios-permissoes": [
    "Autenticação verifica quem entra; autorização define o que essa identidade pode fazer. Administrador pode alterar o sistema; uma conta comum não deve receber esse poder só para abrir um arquivo.",
    "Crie uma pasta de teste dentro de Documentos e um arquivo fictício. Abra Propriedades → Segurança para observar nomes e permissões; não altere heranças ou contas reais.",
    "Explique a diferença entre ler, modificar e administrar. Testes entre contas exigem contas didáticas autorizadas. Não remova sua própria permissão nem altere pastas do Windows."
  ],
  "processos-servicos-logs": [
    "Processo é um programa em execução; serviço pode trabalhar sem janela; log registra eventos com data e origem. PID é o identificador de um processo.",
    "Abra o Gerenciador de Tarefas, inicie o Bloco de Notas e localize seu processo. Feche o programa pela própria janela e observe a mudança. Depois abra eventvwr.msc por Win+R e leia um evento em Logs do Windows → Sistema.",
    "Relacione programa, horário e estado. Um evento vermelho isolado não comprova a causa da lentidão. Não encerre serviços do sistema para produzir um exemplo."
  ],
  "manutencao-backup": [
    "Sincronização pode propagar uma exclusão. Backup precisa permitir recuperar uma versão ou cópia. Restauração é trazer o conteúdo de volta e conferir se ele serve.",
    "Crie um texto fictício em Documentos. Copie para uma pasta didática diferente e restaure uma cópia em uma terceira pasta, sem apagar o original. Compare o conteúdo.",
    "Registre origem, destino e comparação. Três pastas no mesmo disco ensinam o procedimento, mas não protegem contra falha desse disco; proteção real exige destino independente."
  ],
  "diagnostico-substituicao": [
    "Um teste controlado muda uma variável por vez. Uma peça “conhecida boa” só ajuda se for compatível e funcionar em uma condição de referência.",
    "Escolha um dos três relatos. Escreva duas hipóteses e preveja resultados diferentes para um teste seguro. Sem peças de treino, use o caso resolvido do kit; não remova componentes do próprio PC.",
    "Registre por que o teste separa hipóteses. Se ele muda cabo, driver e configuração juntos, refaça o plano com uma variável por vez."
  ],
  "oficina-suporte": [
    "Passagem de plantão é entregar contexto, estado atual, evidências e próximo responsável. Resolver não dispensa registrar o que foi feito.",
    "Baixe o kit do módulo 1. Preencha o registro em branco antes de abrir o exemplo resolvido. Use o caso de lentidão e proponha um teste de baixo risco.",
    "Compare sua justificativa com o exemplo, faça o teste de autonomia e identifique se sua evidência foi observação real ou análise de cenário. Uma assinatura ou checklist marcado não substitui o teste."
  ],
  "redes-diagnostico": [
    "Rede conecta dispositivos para trocar dados. Serviço é uma função, como imprimir ou abrir uma página. Um caminho pode funcionar para um serviço e falhar para outro.",
    "Separe os dois relatos: quem tenta fazer o quê, de onde e para qual destino? Não reinicie sua rede doméstica para simular a escola.",
    "Escreva duas investigações independentes. Na volta após a oficina, explique por que o sucesso de um site não comprova impressão."
  ],
  "redes-topologia": [
    "LAN é uma rede local, como a da escola; WAN liga redes em maior escala. Switch conecta dispositivos na LAN; roteador encaminha dados entre redes; AP é um ponto de acesso Wi-Fi. Topologia é o mapa dessas ligações.",
    "Abra o roteiro Packet Tracer desta aula. Primeiro conecte dois PCs a um switch, nomeie SEC-02 e ADM-01 e salve. Não tente montar toda a escola de uma vez.",
    "O arquivo salvo deve mostrar cada PC ligado a uma porta conhecida. Se o programa não puder rodar, desenhe e explique o mapa; a execução em simulador ficará pendente."
  ],
  "redes-fisica": [
    "Ethernet é uma família de tecnologias de rede; link é a conexão física ou de enlace estabelecida. Um patch panel organiza cabos e não substitui um switch.",
    "No arquivo de dois PCs, confira as duas pontas de cada cabo. No simulador, retire só o cabo de ADM-01, observe a mudança e reconecte à mesma porta.",
    "Salve duas observações: com link e sem link. Isso modela desconexão, mas não reproduz mau contato, interferência ou qualidade elétrica de um cabo real."
  ],
  "redes-ipv4": [
    "IPv4 identifica interfaces com 32 bits, normalmente escritos em quatro números. A máscara delimita a rede; /24 e /26 indicam quantos bits são do prefixo. Na sub-rede /26 comum há 64 endereços, dos quais 62 são usados por hosts.",
    "Comece no cenário pequeno /24: SEC-02 usa .22 e ADM-01 usa .30. Depois compare .0/26, .64/26 e .128/26 na tabela. Calcule o intervalo antes de configurar VLANs.",
    "Confirme que .20, .22, .30 e .50 cabem em .0/26; .70 pertence a .64/26. Trocar o prefixo exige atualizar todos os envolvidos, não apenas o desenho."
  ],
  "redes-configuracao": [
    "DHCP fornece configuração automaticamente. Gateway é a saída para outras redes. DNS traduz nomes em endereços. APIPA é a autoconfiguração IPv4 169.254/16 usada pelo Windows quando não obtém concessão DHCP.",
    "No PC simulado, Desktop → IP Configuration permite ver Static e DHCP. Sem servidor DHCP configurado, não espere receber a configuração. Compare primeiro as saídas representativas abaixo.",
    "Identifique o campo divergente em ADM-01 e SALA-04. DHCP, DNS e gateway têm funções diferentes; não copie os endereços da escola para sua placa real."
  ],
  "redes-rota": [
    "Uma rota indica o próximo caminho para uma rede. NAT traduz endereços; não é uma confirmação de segurança ou de que um site funciona.",
    "Use o roteiro de roteamento no kit: crie duas LANs isoladas no Packet Tracer e teste os gateways antes do destino remoto. O laboratório não usa sua internet real.",
    "Compare um teste na LAN com outro entre LANs. Um asterisco em tracert pode ser silêncio do roteador, não interrupção; escreva o limite da conclusão."
  ],
  "redes-portas": [
    "TCP estabelece conexões e oferece entrega ordenada; UDP envia datagramas sem garantir entrega. Porta identifica um ponto de comunicação de um serviço. ICMP, usado pelo ping, não testa uma porta TCP.",
    "No Server-PT do roteiro, habilite HTTP em Services e abra a página pelo Web Browser do PC simulado. Desabilite só HTTP e compare página e ping.",
    "Ping pode continuar respondendo quando a página falha. O servidor HTTP simulado não substitui o teste físico de uma impressora nem oferece todos os serviços de um Windows real."
  ],
  "redes-ferramentas": [
    "Cada ferramenta responde a uma pergunta. ARP associa IPv4 a endereço de enlace local; a tabela aprendida muda com o tráfego. “Sem resposta” pede interpretação do contexto.",
    "No Windows, pesquise PowerShell no Iniciar e execute somente ipconfig /all para ler sua configuração. Faça os testes de falhas no arquivo do simulador, nunca em ativos desconhecidos.",
    "No registro, escreva origem, destino, horário, previsão e limite. O Prompt de Comando do Packet Tracer oferece apenas parte dos comandos do Windows."
  ],
  "redes-vlan": [
    "VLAN significa rede local virtual: separa grupos de camada 2 em um switch. Access liga uma porta a uma VLAN; trunk transporta VLANs entre equipamentos. ACL é uma lista de controle de acesso aplicada ao tráfego.",
    "Siga o roteiro VLAN do kit em uma cópia do projeto: crie VLANs 10, 20 e 30; associe portas; só depois configure roteamento e política do roteador didático.",
    "Um teste negado precisa de um controle positivo que confirme link e configuração. “Não pingou” com cabo desconectado não demonstra que a ACL protegeu a rede."
  ],
  "redes-wifi": [
    "SSID é o nome anunciado da rede sem fio. Cobertura é onde ela alcança condições úteis; capacidade é quantos clientes e tráfego atende. Sinal forte não garante capacidade.",
    "Se o PC tem Wi-Fi, rode netsh wlan show interfaces no Windows e registre banda/canal/sinal sem expor identificadores pessoais. Se usa apenas cabo, interprete a tabela da aula e proponha pontos de medição.",
    "Compare condições equivalentes. Packet Tracer não mede propagação e interferência da sua sala; uma planta conceitual não é um levantamento real."
  ],
  "redes-diagnostico-integrado": [
    "Separar estação, enlace, configuração, nome e serviço reduz tentativas aleatórias. Sua conclusão deve caber no alcance do teste realizado.",
    "Volte ao arquivo de rede salvo e altere apenas o DNS de um PC simulado para um endereço não usado. Compare abrir o servidor por IP e pelo nome; depois restaure o DNS registrado.",
    "Entregue previsão e resultado antes/depois. Se não há DNS no seu projeto, configure o Server-PT conforme o roteiro antes de criar a falha."
  ],
  "redes-oficina": [
    "Uma topologia utilizável acompanha endereçamento, portas, serviços e testes. O desenho sozinho não registra quais fluxos devem ser permitidos.",
    "Baixe o kit de redes, reconstrua os cenários graduais e salve seus próprios .pkt. Compare o endereçamento e os testes com o roteiro, que inclui uma falha reversível.",
    "O kit contém roteiro e configurações textuais; não contém .pkt previamente executado. Valide no Packet Tracer e registre sua versão. Análise documental cobre raciocínio, não a operação do simulador."
  ],
  "linux-diagnostico": [
    "Linux é o núcleo de um sistema; uma distribuição reúne núcleo, programas e gerenciador de pacotes. Ubuntu Server é uma distribuição voltada a serviços. Cliente pede uma função; servidor a oferece.",
    "Retome o mapa do módulo 2 e marque quais serviços a escola precisa centralizar. Depois separe requisitos de uso e de recuperação antes de escolher recursos.",
    "Explique por que nome e IP não provam que os arquivos possam ser restaurados. O diagnóstico serve para planejar o estudo, sem exigir experiência prévia com Linux."
  ],
  "linux-instalacao-vm": [
    "VM é uma máquina virtual. Host é o computador que a executa; convidado é seu sistema virtual. VirtualBox é o hipervisor que fornece hardware virtual. Uma ISO do Ubuntu deve corresponder à arquitetura do host.",
    "Confira o percurso na preparação do curso. Use o guia desta aula para instalar apenas SRV-01. Adicione NAT temporário para downloads e rede Host-only para acesso do seu Windows, sem Bridge.",
    "Faça login pelo console e registre hostnamectl e free -h. Se não houver recursos ou permissão para instalar, trabalhe com o baseline representativo do kit; instalação e testes de serviço ficam pendentes."
  ],
  "linux-shell-apt": [
    "Terminal é a interface de texto; shell interpreta comandos. Diretório é uma pasta. / inicia um caminho absoluto e ~ representa sua pasta pessoal. sudo eleva uma ação; APT instala e atualiza pacotes.",
    "No console da VM, faça pwd, ls, mkdir -p ~/treino-mbb e cd ~/treino-mbb. Crie um texto com printf 'primeiro teste\\n' > aviso.txt; leia com cat aviso.txt. Depois use cd ~ para voltar.",
    "O arquivo deve reaparecer com cat ~/treino-mbb/aviso.txt. > substitui o conteúdo do alvo; use só o arquivo fictício. sudo não é necessário para essa pasta pessoal."
  ],
  "linux-usuarios-permissoes": [
    "Em ls -l, r permite ler, w escrever e x executar ou atravessar diretório. Há permissões para dono, grupo e outros; ser dono da pasta não equivale a ser administrador.",
    "Consulte id antes de mudar grupos. Pratique primeiro em ~/treino-mbb com chmod 600 aviso.txt e ls -l aviso.txt. Esse modo dá leitura/escrita apenas ao dono.",
    "Confira -rw------- no arquivo. Se estiver em outra pasta ou o alvo for configuração do sistema, pare. As contas da escola serão criadas apenas na VM e não devem compartilhar senha."
  ],
  "linux-armazenamento": [
    "Filesystem organiza arquivos; montar o conecta a uma pasta. UUID identifica o filesystem. /etc/fstab registra montagens. vda, sda e outros nomes dependem do controlador virtual, não da finalidade do disco.",
    "Comece pelo caminho sem formatação: use /srv/escola no disco de sistema e documente esse limite. A montagem de um segundo disco é uma extensão supervisionada, com alvo novamente confirmado.",
    "Use findmnt -T /srv/escola para identificar o filesystem que atende à pasta. Isso não prova que há volume de dados independente. Sem partição preparada, não execute mkfs nem invente /dev/vdb1."
  ],
  "linux-netplan": [
    "Netplan descreve a rede em YAML; espaços e níveis são parte da sintaxe. Interface é a placa vista pelo Linux. DHCP pode continuar no adaptador NAT enquanto o adaptador de laboratório recebe IP fixo.",
    "Leia ip -br addr e identifique os dois adaptadores por MAC no VirtualBox. Use o guia Host-only desta aula, sem gateway ou DNS fictício na interface isolada.",
    "Compare endereço do Windows e da VM no mesmo /26. O gateway .1 da narrativa só existe se você o construir; uma rede isolada sozinha não cria roteador, DHCP ou DNS da escola."
  ],
  "linux-ssh": [
    "SSH significa Secure Shell: canal autenticado e criptografado. Fingerprint é a impressão digital da chave do servidor; chave pública pode ser entregue, chave privada deve permanecer protegida no cliente.",
    "Instale openssh-server com NAT temporário ativo. Compare a fingerprint no console. Do PowerShell do host, conecte ao IP Host-only da VM com sua conta individual; mantenha o console aberto.",
    "A nova sessão precisa mostrar whoami e hostname corretos. Não digite joana se criou outro usuário na instalação. Um alerta de chave diferente exige investigação, não remoção automática da confiança anterior."
  ],
  "linux-systemd-logs": [
    "systemd gerencia unidades, como serviços. systemctl consulta seu estado; journalctl lê o registro de eventos. Um serviço ativo pode ainda responder errado à aplicação.",
    "No console da VM, leia systemctl status ssh --no-pager e sudo journalctl -u ssh.service --since '10 minutes ago'. Faça uma conexão SSH do host e procure o horário correspondente.",
    "Registre origem, serviço e horário. Para estudar uma falha sem interromper acesso, use os painéis representativos da aula; não pare o único SSH disponível remotamente."
  ],
  "linux-nginx": [
    "HTTP é um protocolo de requisições e respostas. Nginx atende a essas requisições e pode servir arquivos. O cabeçalho Host seleciona o site; DNS apenas localiza o endereço.",
    "Siga o guia para publicar index.html e conferir nginx -t antes de recarregar. Compare curl -I, que lê cabeçalhos, com curl sem -I, que mostra o corpo.",
    "Confira 200 e uma frase do arquivo. Não chame isso de validação DNS: enviar Host manualmente testa seleção de site, sem consultar o DNS para esse nome."
  ],
  "linux-samba-ufw": [
    "Samba compartilha arquivos por SMB; sua conta Linux e seu cadastro Samba precisam existir. UFW é o firewall do host. Ele filtra conexões, enquanto permissões de arquivo decidem o acesso ao conteúdo.",
    "Use o guia desta aula para criar o compartilhamento fictício, cadastrar Ana e testar pelo caminho \\\\192.168.10.20\\Secretaria. Só habilite UFW depois de revisar a regra SSH e confirmar o console.",
    "Confirme um acesso permitido e outro negado. No percurso com um cliente, teste identidades distintas; testes de várias redes/VLANs exigem topologia ampliada e permanecem pendentes."
  ],
  "linux-backup-monitoramento": [
    "RPO é a perda de dados tolerável no tempo; RTO é o tempo alvo para recuperar a função. Destino independente protege contra perda do volume de origem; tamanho de arquivo sozinho não comprova restauração.",
    "O kit oferece um exercício seguro com arquivos fictícios, arquivo tar protegido e restauração em pasta nova. Para o backup completo em /mnt/backup, prepare antes um destino montado e independente.",
    "Compare o arquivo restaurado com cmp e registre o tempo. Uma cópia no mesmo disco ensina o procedimento, mas não satisfaz independência nem prova recuperação do servidor inteiro."
  ],
  "linux-plantao": [
    "Operar é relacionar estado, serviço e usuário. Um registro representativo serve para treinar interpretação; evidência real deve identificar o comando e a VM em que foi coletada.",
    "Baixe o kit Linux, use a página Nginx e a configuração Samba como referência comentada. Resolva os chamados antes de abrir o caso comentado.",
    "Entregue testes locais e do cliente, limites, restauração de amostra e passagem. Não declare teste de visitante se seu laboratório só tem um cliente na mesma rede."
  ],
  "moderna-diagnostico": [
    "Virtualização executa sistemas convidados; contêiner isola processos que compartilham um núcleo. Serviço externo muda responsabilidades, mas não elimina operação ou recuperação.",
    "Compare a estação, SRV-01 e o futuro Portal de Eventos. Escolha que parte da necessidade já está atendida e o que mudou; não instale Docker antes de justificar o experimento.",
    "Registre uma decisão provisória e uma incerteza. Retome-as na aula 10 usando as evidências coletadas."
  ],
  "moderna-virtualizacao": [
    "Hipervisor fornece hardware virtual; vCPU é um processador virtual. Snapshot guarda um estado da VM, mas depende de arquivos do mesmo ambiente. Clonar pode duplicar nomes, IPs e identidades.",
    "Reutilize os conceitos do módulo 3. Em máquina de 8 GB, mantenha apenas uma VM ligada e registre a adaptação. Quem dispõe de capacidade pode criar APP-LAB-01 separada, seguindo o guia de rede do kit.",
    "Compare recursos do host antes/depois. Uma medição com uma VM não permite afirmar que duas caberão; preserve margem e interrompa se o host ficar sem resposta."
  ],
  "moderna-custo-vm": [
    "Separar serviços em VMs duplica sistemas a manter; contêineres compartilham núcleo, com fronteiras diferentes. Menor consumo não significa risco zero.",
    "Execute a comparação de duas VMs apenas com capacidade livre. Caso contrário, use a planilha CSV representativa do kit, calcule a diferença e indique quais medições ainda faltam.",
    "Não desligue nem remova SRV-01 para caber uma cópia. O cálculo interpreta capacidade; somente medições reais validam o desempenho do seu host."
  ],
  "moderna-containers": [
    "Docker Engine gerencia imagens e contêineres. Imagem é um pacote; contêiner é sua instância; daemon é o serviço que os controla. Compose descreve um conjunto de serviços.",
    "Faça a instalação oficial apenas na VM Ubuntu, com NAT temporário para pacotes e imagens. Leia cada bloco e confirme sistema, origem e versão antes de seguir.",
    "hello-world demonstra execução básica. Nginx em loopback demonstra HTTP local. Nenhum dos dois comprova cadastro, backup ou acesso pela rede da escola."
  ],
  "moderna-persistencia": [
    "A camada gravável desaparece quando o contêiner é removido. Bind mount liga uma pasta específica do host ao contêiner; volume é armazenamento gerenciado pelo Docker. Persistência não é backup.",
    "Use os comandos guiados desta aula para criar uma página fictícia em ~/portal-lab/html. Compare recriar o contêiner sem mount e com bind somente leitura.",
    "O texto do host deve sobreviver à recriação. Se a porta 8080 estiver ocupada, pare somente o experimento anterior pelo nome conhecido, sem matar processos ao acaso."
  ],
  "moderna-compose": [
    "Compose usa YAML: services descreve componentes, networks suas conexões e volumes seus dados. Secret em arquivo limita a entrega da senha, mas não é um cofre criptografado.",
    "Baixe o kit, revise compose.yaml e crie os segredos localmente. Inicie o laboratório; no WordPress, crie um post privado com título “Teste da Feira 001” e texto fictício. O WordPress básico não possui formulário de inscrição.",
    "Pare sem -v, suba novamente e confirme o post após login. Uma resposta HTTP 200 não comprova acesso ao banco ou persistência do conteúdo."
  ],
  "moderna-atualizacao": [
    "Tag é um nome que pode mudar de conteúdo; digest identifica conteúdo de uma imagem. Rollback retorna o estado, mas uma migração de banco pode exigir restaurar dados compatíveis.",
    "Antes de qualquer atualização do WordPress, siga o backup frio do kit: pare o projeto e copie seus dois volumes e configurações. Restaure em projeto separado e teste o post fictício.",
    "Se não puder provar a restauração isolada, limite-se ao planejamento e não atualize o único estado válido. Reiniciar imagem antiga sobre dados migrados não é retorno garantido."
  ],
  "moderna-nuvem": [
    "IaaS oferece infraestrutura; PaaS, uma plataforma gerenciada; SaaS, uma aplicação pronta. Em todos há decisões sobre dados e acesso que continuam com o cliente.",
    "Use a matriz do kit, com pesos e razões. Compare opções para a feira sem abrir conta, informar cartão ou supor gratuidade permanente.",
    "Entregue uma recomendação condicional. Se preço ou contrato não foram consultados, marque como desconhecidos, sem inventar valores."
  ],
  "moderna-implantacao": [
    "VPS é um servidor virtual privado contratado; VPS-LAB-01 é apenas seu modelo didático. Um túnel SSH encaminha uma porta sem publicar o serviço na internet.",
    "Com recursos suficientes, use outra VM preparada; com uma só VM, faça o ensaio de acesso pelo host e registre que não houve migração entre máquinas. Use ssh -L conforme a aula.",
    "Abra a página em localhost no Windows com o túnel ativo. O sucesso do túnel não comprova migração, disponibilidade externa ou TLS público."
  ],
  "moderna-dns-tls": [
    "DNS associa nomes a endereços; TLS protege e autentica conexões quando o certificado e a confiança estão corretos. .example é reservado para documentação e não recebe certificado público legítimo para esta escola fictícia.",
    "Compare HTTP local por túnel com o desenho de HTTPS. Não solicite certificado nem ignore aviso do navegador. Preencha a matriz de exposição do kit.",
    "Distinga proteger o túnel SSH de configurar HTTPS na aplicação. Sem CA interna preparada, a competência de emissão e distribuição de confiança permanece pendente."
  ],
  "moderna-arquitetura": [
    "Arquitetura é uma decisão sobre componentes, dependências e responsabilidades. ADR é um registro curto de decisão: contexto, opções, escolha, razões e consequências.",
    "Use o modelo ADR do kit. Cite as medidas e testes que realmente fez e registre o que depende de máquina, equipe ou autorização adicional.",
    "Sua escolha precisa justificar capacidade, recuperação e exposição. Se nenhum teste mediu carga real, não prometa quantidade de usuários."
  ],
  "moderna-oficina": [
    "Reproduzir exige configuração e dados compatíveis, não apenas baixar a mesma tag. Passagem de responsabilidade inclui recuperar o serviço e saber quando interromper.",
    "Use o checkpoint e o roteiro de recuperação do kit. Em laboratório com uma VM, valide recriação e restauração em projeto separado; com duas, acrescente a migração controlada.",
    "Entregue post fictício recuperado, configuração sem segredos, imagens identificadas e limites. Registre migração como pendente se o segundo ambiente não foi executado."
  ],
  "integrador-final": [
    "A mesma falha vista pelo usuário pode nascer na estação, rede, servidor ou aplicação. O integrador reutiliza o que você construiu; não pressupõe equipamentos invisíveis.",
    "Baixe o envelope final, escolha o percurso compatível e use os registros dos quatro módulos. Investigue primeiro o caso documental sem abrir a solução; depois valide no laboratório que você tem.",
    "A entrega separa observação real, simulação executada, interpretação de exemplo e prática pendente. O pacote precisa permitir que outra equipe continue sem suas senhas e sem você ao lado."
  ]
};
  const groups = [
    ['infraestruturaLessons', 'modulo1'], ['infraestruturaNetworkLessons', 'modulo2'],
    ['infraestruturaLinuxLessons', 'modulo3'], ['infraestruturaModernLessons', 'modulo4'],
    ['infraestruturaIntegratorLessons', 'integrador']
  ];
  for (const [name, folder] of groups) {
    for (const lesson of window[name] || []) {
      const item = apoio[lesson.id];
      if (!item) continue;
      const diagnostic = lesson.number === '00';
      const html = `<section class="learning-entry" aria-label="Preparação da aula">
        <h3>${diagnostic ? 'Primeiro, entenda a situação' : 'O que você precisa para começar'}</h3>
        <p>${item[0]}</p><p><strong>${diagnostic ? 'Como participar' : 'Primeira prática'}:</strong> ${item[1]}</p>
        <p><strong>Conferência e recuperação:</strong> ${item[2]}</p>
        <p class="microcopy"><a href="#area">Preparação e percursos do curso</a> · <a href="../materiais/infraestrutura/${folder}/LEIA-ME.md" target="_blank" rel="noopener">Roteiro e materiais deste módulo</a></p>
      </section>`;
      // Preserva abertura narrativa e prepara antes das primeiras decisões técnicas.
      const openingEnd = lesson.content.indexOf('</div>');
      lesson.content = openingEnd >= 0
        ? lesson.content.slice(0, openingEnd + 6) + html + lesson.content.slice(openingEnd + 6)
        : html + lesson.content;
      if (lesson.number === '99') {
        lesson.content += `<section class="checkpoint final-reference"><h3>Seu checkpoint final</h3>
          <p><a class="action-button primary" href="../downloads/infraestrutura/${folder}-referencia.zip" download>Baixar kit de referência (ZIP)</a></p>
          <p>Extraia em uma pasta nova. Comece pelo LEIA-ME: há registro em branco, exemplo comentado, teste de autonomia e orientações de recuperação. Confira o que foi executado por você; resultados representativos não são provas de funcionamento do seu ambiente.</p>
          <details><summary>Critério de entrega e continuidade</summary><ul>
          <li>Identifique cenário, percurso e recursos realmente disponíveis.</li>
          <li>Compare esperado e observado, anexe evidência e explique seu limite.</li>
          <li>Documente uma falha, teste, retorno e próximo responsável.</li>
          <li>Guarde os arquivos para a próxima etapa e registre práticas pendentes.</li>
          </ul></details></section>`;
      }
    }
  }
})();

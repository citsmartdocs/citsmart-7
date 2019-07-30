Title: FAQ
Description: Aqui você tem as respostas das pergundas mais comuns quando se fala da ferramenta CITSmart.

# Perguntas Frequentes - FAQ

!!! Question "Erro: certificado digital não assinado por autoridade (CA)"

   Exportação de Certificados SSL da aplicação alvo, importe-o para o servidor do Stash JVM TrustStore e reinicie Stash para que
   Stash a confiar no aplicativo de destino.
   
   **Resolução de um certificado auto assinado ou um certificado não assinado por uma autoridade CA**
   
   Senha padrão: a senha Java TrutstStore é: *changeit*.
   
   *Exportar o Certificado da aplicação (JIRA, Multidão, Bambu, etc), que deseja se conectar*:
   
   A sintaxe de comando:

   keytool-exportação-alias <existing_alias_in_keystore>-file

   <any_filename_here>-keystore <path/to/keystore>
   
   Por exemplo:
   
   - No Windows:
   % JAVA_HOME% \ bin \ keytool-export-apelido jira_tomcat-file jira_cert.cerkeystore C: \ Users \ jira_user \ jira.keystore
   
   - No Linux:

   $ JAVA_HOME / bin / keytool-export-apelido jira_tomcat-file jira_cert.cerkeystore / home / jira_user / jira.keystore
   
   *Importar o certificado do aplicativo para o servidor TrustStore Stash*:
   
   O arquivo TrustStore default (cacerts) está localizado no diretório home Java nesta pasta:
   
   <Java directory> home / jre / lib / security
   
   A sintaxe de comando:
   
   keytool-import-alias <new_unique_alias>-file
   
   <any_filename_here_from_above>-keystore <path/to/truststore>
   
   Por exemplo:
   
   - No Windows:
   % JAVA_HOME% \ bin \ keytool-import-alias do jira_tomcat-file jira_cert.cer-keystore% JAVA_HOME% \ jre \ lib \ security \ cacerts

  - No Linux:
  $ JAVA_HOME / bin / keytool-import-alias do jira_tomcat-file jira_cert.cerkeystore $ JAVA_HOME / jre / lib / security / cacerts
  
  **(OPCIONAL) Caso tenha alterado a localização TrustStore padrão certifique-se de definir o JAVA_OPTS variável de ambiente 
  antes de reiniciar**:
  
  - No Windows:
  set JAVA_OPTS =% JAVA_OPTS%-Djavax.net.ssl.trustStore = "c: \ my \ caminho \ \ aqui cacerts"-Djavax.net.ssl.trustStorePassword = "changeit"
   
   - No Linux:
   
   JAVA_OPTS exportação = "$ JAVA_OPTS-Djavax.net.ssl.trustStore = / meu / path / here / cacerts-Djavax.net.ssl.trustStorePassword = changeit"
    
   *Restart Stash*
   
!!! Question "[Ambiente] Erro: pesquisa na base não encontra o documento mesmo após acionar a atualização pelo sistema"
    
    Após mudanças **estruturais** nas coleções do SolR, não basta atualizar SolR pela aplicação ITSM, deve-se antes atualizar os
    configset do SolR.
    
    Segue os **passos** para atualização:
    
    1. Remover qualquer coleção existente no configset “base_conhecimento_configs”
    2. Parar o servidor Solr com o comando: **solr stop –all**
    3. Acessar a pasta raiz do Solr $PATH_SOLR/server/solr/configsets/
    4. Excluir a pasta “base_conhecimento_configs”
    5. Copiar o novo config que está em anexo para esta pasta
    6. Subir o servidor Solr com o comando: **solr start -noprompt**
    7. Executar o comando para criação da coleção: **solr create -c base_conhecimento -d base_conhecimento_configs**
    8. Acessar o sistema CITSmart no caminho: Sistema > Configurações > Gerência de Conhecimento (Indexação) (ver conhecimento
    Indexação de conhecimentos)
    9. Clicar no botão: **Indexar base de conhecimento**

!!! Question "[Ambiente] Perda do caminho das fontes"
    
    *Descrição*
    
    Não está sendo possível gerar o relatório nativo "Relatório Execução Solicitação".
    
    *Solução/Resposta*
    
    Atribuir ("setar") via linha de comando no servidor o caminho correto das fontes.
       
!!! Question "Como acessar a solicitação de serviço a partir da notificação de e-mail?"
    
    Para acessar a solicitação de serviço a partir da notificação de e-mail, proceda conforme orientações abaixo:
    
    1. Certifique-se de que esteja logado no sistema;
    2. Abra a notificação de e-mail referente a solicitação de serviço;
    3. A notificação terá o número da solicitação com um hyperlink, basta clicar no número, que logo em seguida será redirecionado
    para tela de Gerenciamento de Serviços apresentando as informações da solicitação.
    
    [Download][1]

!!! Question "Como configurar a autenticação do Nagios via LDAP?"
    
    A configuração de autenticação do Nagios via LDAP passa por:
    
    1. Alterar o arquivo thruk.conf da seguinte forma:
    
    - vim /etc/apache2/conf-available/thruk.conf
    
    - <Location /thruk/>
      Options ExecCGI FollowSymLinks
      AuthName "LDAP Authentication"
      AuthType Basic
      AuthBasicProvider ldap
      AuthLDAPURL ldap://auth01.citsmartcloud.com/dc=citsmart,dc=com?uid?sub?(objectClass=*)
      Require ldap-group ou=people,o=citsmartco,dc=citsmart,dc=com
      Require valid-user
      </Location>
      
    2. Executar:
    
    - /etc/init.d/apache2 restart
    
    - /etc/init.d/apache2 restart
    
    - /etc/init.d/nagios reload
      
!!! Question "Como configurar a resposta automática de pesquisas de satisfação?"

    O mecanismo de resposta automática, que responderá automaticamente as pesquisas de satisfação das solicitações de serviço, 
    acontece quando a pesquisa de satisfação não for respondida pelo usuário, dentro de um prazo definido pelo administrador do
    sistema.
    
    Para realizar a configuração das respostas automáticas, proceda conforme orientações abaixo:
    
    1. Configure os seguintes parâmetros do sistema que definem o comportamento do mecanismo de resposta automática ( ver 
    conhecimento Regras de parametrização - Provisionamento e logística):
    
        - **Parâmetro 139**: Define o prazo máximo, em dias, que o usuário tem para responder a pesquisa de satisfação, antes que 
        essa seja respondida automaticamente pelo sistema;
        - **Parâmetro 152**: Nota padrão que será atribuída as pesquisas de satisfação que forem respondidas automaticamente. 
        Opções: OTIMO, BOM, REGULAR E RUIM;
        - **Parâmetro 151**: Ativa ou Desativa as respostas automáticas no sistema. S para ativar e N para desativar.
        
    2. Acesse a funcionalidade de Processamento Batch (**Sistema > Processamento Batch**).
    
    3. Será apresentada a tela de cadastro de processamento batch preencha os campos:
    
        - **Descrição**: informe a descrição que identificará esse processamento. Por exemplo: “Resposta automática pesquisa
        satisfação”;
        - **Situação**: a situação define se esse processamento estará ativo ou inativo. Quando ele se encontrar inativado as 
        solicitações deixarão de ser respondidas;
        - **Tipo**: selecionar o tipo “Classe Java”;
        - **Agendamento**: define quando essa rotina será executada, cabe ao administrador do sistema definir qual o melhor 
        horário e frequência para a execução;
        - **Conteúdo**informe o texto: **br.com.centralit.citcorpore.quartz.job.AvaliarSolicitacoesNaoRespondidas**;
        
    4. Clique no botão Gravar para efetuar o registro.
    
    !!! info "IMPORTANTE"
    
        A partir do momento da gravação, no horário e dia agendado, as solicitações não respondidas (com prazo superior ao 
        definido no parâmetro 139) serão automaticamente respondidas (com o valor definido no parâmetro 152), caso o parâmetro 
        151 esteja com valor ‘S’.
        
!!! Question "Como configurar as notificações de e-mail de solicitação de serviços?"

    Ao registrar uma solicitação de serviço, realizar demais ações e encerrar a mesma, o solicitante será notificado.
    
    Para que essa notificação seja enviada é necessário realizar os seguintes procedimentos:
    
    1. Acesse os **Serviços do Contrato** referente ao serviço de negócio **Gerenciamento de Portfólio > Portfólio de Serviços >
    Serviço de Negócio > Contrato > Serviços e serviço técnico **Gerenciamento de Portfólio > Portfólio de Serviços > Serviço de
    Negócio > Serviço de Apoio/Técnico > Contrato > Serviços e informe o modelo de e-mail nos campos:
        - "Modelo de E-mail Abertura Incidente/Requisição"
        - "Modelo de E-mail na finalização de Solicitações/Incidentes"
        - "Modelo de E-mail nas demais ações de Solicitações/Incidentes"
        
    !!! info "IMPORTANTE"
    
        Caso não informe os modelos de e-mail, as notificações não serão enviadas.
        
    2. Acesse a funcionalidade de **Cadastro de Grupo** através da navegação no menu principal **Cadastro Gerais > Gerência de
    Pessoal > Grup**.
    
    3. Será apresentada a tela de **Cadastro de Grupo**. Caso o grupo já esteja registrado no sistema, realize a pesquisa do 
    grupo;
    
    4. Selecione o mesmo;
    
    5. Será exibida a tela de registro do determinado grupo, defina se as **notificações de e-mail** (abertura, andamento e 
    encerramento) referentes às solicitações, serão de envio obrigatório;
    
    !!! warning "ATENÇÃO"
    
        Caso tenha determinado que as notificações serão obrigatórias, ao registrar uma solicitação de serviço, na tela de 
        Registro de Incidente/Requisição de Serviço, essas opções já estarão selecionadas, não permitindo a sua alteração. Mas 
        caso tenha determinado que as notificações não serão obrigatórias, ao registrar uma solicitação de serviço, essas opções
        poderão ser definidas pelo responsável do registro da solicitação.
        
    6. Na tela de **Registro de Incidente/Requisição de Serviço**, ao registrar uma solicitação de serviço será estabelecida a
    regra referente a notificação por e-mail, definida no cadastro de grupo.
    
    !!! note "NOTA"
    
        Quando registrar uma solicitação de serviço, será enviada a notificação somente para o grupo executor, o qual é 
        responsável pelo atendimento da solicitação. Quando realizar a execução das demais ações e encerramento da solicitação de
        serviço, as notificações serão encaminhadas somente para o solicitante.
        
!!! Question "Como configurar o nome das fases do ciclo de vida dos ICs (itens de configuração)?"

    A configuração dos nomes das fases do ciclo de vida do IC pode ser realizada a partir da tela de Configuração do GCAS e a 
    partir da tela de Parâmetros do CITSmart. Para realizar essa configuração, proceda conforme orientações abaixo:
    
    *Configuração a partir da tela de configuração do GCAS*
    
    1. Acesse a funcionalidade de **Configuração do GCAS** através da navegação no menu principal **Processos ITIL > Gerência de
    Configuração > Configuração do GCAS**. Feito isso, será apresentada a tela de configuração dos parâmetros (atributos) de 
    gerenciamento de configuração e ativos de serviço;
    
    2. Informe os valores dos parâmetros (atributos):
        - **Nome do Grupo de ICs que estão na Fase de Desenvolvimento (Ex: ICs em Desenvolvimento)**
        - **Nome do Grupo de ICs que estão na Fase de Produção (Ex: ICs em Produção)**
        - **Nome do Grupo de ICs que estão na Fase de Produção (Ex: ICs em Homologação)**.
        
    3. Clique no botão Gravar para efetuar a operação, onde a data, hora e usuário serão gravados automaticamente para uma futura
    auditoria.
    
    4. Após configuração dos parâmetros referente ao nome das fases do ciclo de vida do IC, será exibido na tela de 
    **Gerenciamento de Itens de Configuração** a descrição das fases do ciclo de vida do IC, conforme especificado no valor do 
    parâmetro.
    
    *Configuração a partir da tela de parâmetros do CITSmart*
    
    1. Acesse a funcionalidade de **Parâmetros do CITSmart através da navegação no menu principal **Parametrização > Parâmetros 
    CITSmart**.
    
    2. Após isso, será apresentada a tela de **Parâmetros do Citsmart**, clique na aba **Pesquisa de Parâmetros do Citsmart**.
    Será apresenta a tela para pesquisa de parâmetros;
    
    3. Realize a pesquisa do parâmetro "**92 - Nome do Grupo de ICs que estão na Fase de Desenvolvimento (Ex: ICs em 
    Desenvolvimento)**"
    
    4. Selecione o mesmo. Após isso, será apresentada a tela de registro do parâmetro com o conteúdo referente ao registro 
    selecionado
    
    5. No campo **valor**, informe o nome do grupo de ICs da fase de desenvolvimento
    
    6. Clique no botão Gravar para efetuar a operação, neste caso a data, hora e usuário serão armazenados automaticamente para
    uma futura auditoria.
    
    7. Realize a pesquisa do parâmetro "**93 - Nome do Grupo de ICs que estão na Fase de Produção (Ex: ICs em Produção)**"
    
    8. Selecione o mesmo. Após isso, será apresentada a tela de registro do parâmetro com o conteúdo referente ao registro 
    selecionado;
    
    9. No campo **valor**, informe o nome do grupo de ICs da fase de produção
    
    10. Clique no botão Gravar para efetuar a operação, neste caso a data, hora e usuário serão armazenados automaticamente para
    uma futura auditoria.
    
    11. Selecione o mesmo. Após isso, será apresentada a tela de registro do parâmetro com o conteúdo referente ao registro 
    selecionado
    
    12. No campo **valor**, informe o nome do grupo de ICs da fase de homologação
    
    13. Clique no botão Gravar para efetuar a operação, neste caso a data, hora e usuário serão armazenados automaticamente para 
    uma futura auditoria.
    
!!! Question "Como definir a obrigatoriedade do vínculo da mudança com IC?"

    A obrigatoriedade do vínculo da mudança com o IC é definida na tela de Parâmetro do CITSmart. Para definir essa 
    obrigatoriedade, proceda conforme orientações abaixo:
    
    1. Acesse a funcionalidade de **Parâmetros do CITSmart** através da navegação no menu principal **Parametrização > Parâmetros
    CITSmart**;
    
    2. Será apresentada a tela de **Parâmetros do CITSmart**, clique na aba **Pesquisa de Parâmetros do CITSmart**;
    
    3. Será apresenta a tela para pesquisa de parâmetros. Realize a pesquisa do parâmetro "**85 - Verificação de vínculo de
    mudança relacionada ao Item de configuração (Default: S)**;
    
    4. Selecione o mesmo;
    
    5. Será apresentada a tela de registro do parâmetro com o conteúdo referente ao registro selecionado, no campo **valor**, 
    informe o valor "S";
    
    6. Clique no botão "Gravar" para efetuar a operação, neste caso a data, hora e usuário serão armazenados automaticamente para
    uma futura auditoria;
    
    7. Após configuração do parâmetro, quando for registrar um Item de Configuração, será obrigatório o vínculo da mudança.
    
!!! Question "Como definir um grupo padrão para o atendimento de primeiro nível da solicitação de serviço?"

    Para definir o grupo padrão para atendimento de 1º nível, proceda conforme as orientações abaixo:
    
    1. Acesse a funcionalidade de **Cadastro de Grupo** através da navegação no menu principal **Acesso e Permissão > Grupo**. 
    Será apresentada a tela de cadastro de grupo, exibindo os contratos;
    
    2. Realize o cadastro do grupo de 1º nível, caso não esteja cadastrado, e proceda com o preenchimento dos campos;
    
    3. Caso o grupo de 1º nível já esteja cadastrado no sistema, realize a pesquisa do grupo e obtenha o seu número de 
    identificação (ID);
    
    4. Após obter o ID do grupo de 1º nível, acesse a funcionalidade de **Parâmetros do Citsmart** através da navegação no menu 
    principal **Parametrização > Parâmetros Citsmart**;
    
    5. Será apresentada a tela **Parâmetros do Citsmart**, clique na aba **Pesquisa de Parâmetros do Citsmart**;
    
    6. Realize a pesquisa do parâmetro "**9 - ID Grupo Nível 1**";
    
    7. Selecione o mesmo;
    
    8. Será apresentada a tela de registro do parâmetro com o conteúdo referente ao registro selecionado, no campo **valor**, 
    informe o número de identificação (ID) do grupo de 1º nível;
    
    9. Clique no botão "Gravar" para efetuar a operação, neste caso a data, hora e usuário serão armazenados automaticamente para
    uma futura auditoria.
    
    !!! note "NOTA"
    
        Após a configuração do parâmetro, ao realizar o registro de uma Solicitação de Serviço/Incidente, caso não tenha
        informado o grupo para atendimento do serviço, será escalado o grupo, o qual foi definido no parâmetro para atendimento
        de 1º nível.
        
!!! Question "Como faço o desenho de ativos que compõem o meu serviço?"

    É feito o desenho de ativos que compõem o serviço utilizando a ferramenta de Desenho de Mapa de Serviço que proporciona 
    desenhos eficientes e eficazes para gerenciamento do serviço durante seu ciclo de vida, demonstrando os itens de configuração
    relacionados.
    
    Para realizar esse desenho, proceda conforme as orientações abaixo (ver conhecimento [Configuração dos atributos do serviço][2]
    
    1. Acesse a funcionalidade de **Desenho de Mapa do Serviço** referente ao Serviço de Negócio **Gerência de Portfólio e 
    Catálogo > Gerenciamento de Portfólio e Catálogo > Menu Apoio > Avançar Portfólio > Catálogo de Serviços > Avançar Serviço
    > Mapa de Serviço**;
    
    2. Será apresentada a tela para desenho dos ativos que compõem o serviço de negócio;
    
    3. Realize o desenho;
    
    4. Salvar o desenho.
    
!!! Question "Como habilitar a pesquisa de satisfação?"

    A pesquisa de satisfação é a avaliação do atendimento da solicitação feita através da notificação por e-mail.
    
    Para habilitar essa pesquisa de satisfação, proceda conforme orientações abaixo:
    
    1. Crie o modelo de e-mail (o modelo de e-mail deve conter a seguinte palavra-chave: ${LINKPESQUISASATISFACAO})
    
    2. Acesse a funcionalidade de **Parâmetros do Citsmart** através da navegação no menu principal **Parametrização >
    Parâmetros Citsmart**;
    
    3. Será apresentada a tela de **Parâmetros do Citsmart**, clique na aba **Pesquisa de Parâmetros do Citsmart**;
    
    4. Realize a pesquisa do parâmetro "**31 - Envia e-mail na execução dos fluxos de solicitações/incidentes**";
    
    5. Selecione o mesmo;
    
    6. Será apresentada a tela de registro do parâmetro com o conteúdo referente ao registro selecionado, no campo **valor**, 
    informe o valor "S" para que seja habilitado o envio de e-mail referente as solicitações de serviço;
    
    7. Clique no botão "Gravar" para efetuar a operação;
    
    8. Acesse os serviços de requisição, incidente e procedimento do contrato referente ao serviço de negócio **Gerência de 
    Portfólio e Catálogo > Gerenciamento de Portfólio e Catálogo > Menu Apoio > Avançar Portfólio > Catálogo de Serviços > 
    Avançar Serviço e serviço técnico Gerência de Portfólio e Catálogo > Gerenciamento de Portfólio e Catálogo > Menu Apoio >
    Avançar Portfólio > Catálogo de Serviços > Avançar Serviço** e verifique se o modelo de e-mail que foi criado está informado
    no campo "Modelo de E-mail na finalização de Solicitações/Incidentes";
    
    9. Ao receber uma notificação por e-mail da solicitação de serviço que foi atendida, será exibido um link para realizar a 
    avaliação do atendimento. Ao clicar no link será aberta uma tela para avaliação do atendimento.
    
!!! Question "Como habilitar a regra de escalonamento das solicitações de serviço?"

    A regra de escalonamento de solicitação de serviço é habilitada na tela de Parâmetro do Citsmart. Para habilitar essa regra,
    proceda conforme orientações abaixo:
    
    1. No arquivo citsmart.cfg colocar a rotina **START_MONITORA_INCIDENTES=TRUE**
    
    2. Acesse a funcionalidade de **Parâmetros do Citsmart** através da navegação no menu principal **Sistema → Parâmetros Citsmart**;
    
    3. Será apresentada a tela de **Parâmetros do Citsmart**, clique na aba **Pesquisa de Parâmetros do Citsmart**;
    
    4. Pesquise e altere o parâmetro **190 - Liga o funcionamento das regras de escalonamento? (Ex: S ou N - Default:'N')** 
    informando o valor "S" para ativar escalonamento de solicitação de serviço;
    
    5. Pesquise e altere o parâmetro **31 - Envia e-mail na execução dos fluxos de solicitações/incidentes (Ex: S ou N)** 
    informando o valor "S";
    
    6. Pesquise e altere o parâmetro **297 - Desativa envio de e-mails do sistema (Valores: "S" ou "N" Default: "N")** informando
    o valor "N";
    
    7. Também faça as devidas alterações nos seguintes parâmetros, conforme as necessidade e cenário da instalação:
        - 195: Id do modelo de e-mail para envio de notificação de solicitação com prazo a vencer (Ex.: 1 );
        - 197: Login do usuário que receberá e-mail referente a regras de escalonamento de solicitação de serviço que estão
        vencendo (Ex.: Consultor);
        - 113: ID do modelo de e-mail para escalação automática;
        - 10: SMTP ENVIO - E-mail origem das notificações de solicitações de serviço;
        - 33: URL de acesso ao sistema.
        
    8. Clique no botão "Gravar" para efetuar a operação, neste caso a data, hora e usuário serão armazenados automaticamente 
    para uma futura auditoria.
    
!!! Question "Como habilitar a regra de escalonamento do módulo de mudanças?"

    A regra de escalonamento de mudanças é habilitada na tela de Parâmetro do Citsmart.
    
    Para habilitar essa regra, proceda conforme orientações abaixo:
    
    1. Acesse a funcionalidade de **Parâmetros do Citsmart** através da navegação no menu principal **Parametrização > Parâmetros
    Citsmart**;
    
    2. Será apresentada a tela de **Parâmetros do Citsmart**, clique na aba **Pesquisa de Parâmetros do Citsmart**;
    
    3. Será apresenta a tela para pesquisa de parâmetros, realize a pesquisa do parâmetro "**193 - Habilita o escalonamento de
    mudanças definido nas regras de escalonamento? (Ex: S ou N - Padrão 'N')** e selecione o mesmo;
    
    4. Será apresentada a tela de registro do parâmetro com o conteúdo referente ao registro selecionado, no campo **valor**, 
    informe o valor "S" para ativar escalonamento de mudanças;
    
    5. Clique no botão "Gravar" para efetuar a operação, neste caso a data, hora e usuário serão armazenados automaticamente para 
    uma futura auditoria.
    
!!! Question "


  
  
[1]:![download](images/neuro (1).jpg)
[2]:/pt-br/citsmart-platform-7/processes/portfolio-and-catalog/configure-service-attribute.html

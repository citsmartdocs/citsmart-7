title: Ambiente do desenvolvedor (GRP)
Description: Ambiente do desenvolvedor (GRP)

# Ambiente do desenvolvedor (GRP)

!!! info "IMPORTANTE"

    Estas orientações são aplicáveis para: Adm Materiais, Contratos e DOCs.

1. Acessar o endereço sharepoint [Ambiente de Desenvolvimento
CITGRP](http://portalcdi.centralit.com.br/sites/filialgoiania/GRP/Ambiente%20de%20desenvolvimento/Desenvolvimento.rar) e
fazer o download da estrutura padrão de diretórios para o ambiente de
desenvolvimento.  
2. Copiar o arquivo "Desenvolvimento.rar" para o seu diretório "**D:\\**"   
3. Descompactá-lo neste mesmo diretório.

**JDK**

4. Verificar se existe a versão 1.7.0.71 do JDK instalado na sua máquina,
comumente no caminho "**C:\\Program Files\\Java**". Caso não esteja instalado,
instalar o Java "jdk-7u71-windows-x64" presente em
"**D:\\desenvolvimento\\instaladores**".   
O caminho de destino da instalação deve ser "**D:\\desenvolvimento\\java**". A
versão pdrão utilizada é a 1.7.0.71.  
  
4.1. Após a instalação do JDK, é necessário configurar as variáveis de ambiente.  
4.2. Clicar no Menu Iniciar \> Configurações \> Painel de Controle \> Sistema;  
  
4.3. Na janela do "Sistema" selecionar a opção "Configurações Avançadas do
Sistema" e clicar no botão "Variáveis de Ambiente";  
  
4.4. Na janela "Variáveis de Ambiente", no grupo "Variáveis de Sistema" clicar
no botão "Nova";  
4.5. Na janela "Nova Variável do Sistema", digitar:

-   No campo "Nome da Variável": **JAVA_HOME**

-   No campo "Valor da Variável" adicionar o caminho completo onde o Java JDK
    foi instalado: **D:\\desenvolvimento\\java\\jdk1.7.0_71**

-   Clicar em Ok.

4.6. Na janela "Variáveis de Ambiente", no grupo "Variáveis de Sistema" clicar
no botão "Nova";
4.7. Na janela "Nova Variável do Sistema", digitar:

-   No campo "Nome da Variável": **CLASSPATH**

-   No campo "Valor da Variável": **%JAVA_HOME%\\lib**

-   Clicar em Ok.

  
  
4.8. Na janela "Variáveis de Ambiente", no grupo "Variáveis de Sistema",
localizar a variável *PATH* e clicar no botão "Editar";

-   Na janela "Editar variável de ambiente", no campo "Valor da variável"
    acrescentar, no **final**, seguinte texto: **;%JAVA_HOME%\\bin**

-   Clicar em Ok.

-   Clicar em Ok na tela de "Variável de Ambiente" e tudo está configurado.

 
4.9. Para suportar chave de encriptação maior do que 128 bits, é necessário
colocar os jars "local_policy.jar" e "US_export_policy.jar" dentro da pasta
%JAVA_HOME/jre/lib/security/;

-   baixe e extraia o
    arquivo <http://www.oracle.com/technetwork/pt/java/javase/downloads/jce-7-download-432124.html> (Caso
    esteja utilizando Java 8 é necessário baixar o JCE 8)

-   Copie esses arquivos para a pasta %JAVA_HOME/jre/lib/security/

**Maven**

Para utilizar o maven baixe o arquivo zip do [site
oficial](http://ftp.unicamp.br/pub/apache/maven/maven-3/3.2.3/binaries/apache-maven-3.2.3-bin.zip).

Descompacte a pasta no diretório desejado. Configure a variável de ambiente do sistema operacional para que aponte para a pasta bin contida dentro da pasta recém descompactada. 
                                                                                                                                                                                   
Exemplo (windows):                                                                                                                                                                   

1.  Crie a variável MAVEN_HOME com o valor igual a: *D:\\dev\\tools\\apache-maven-3.2.3;*

2.  Adicione à variável PATH a variável MAVEN_HOME da seguinte forma: *;%MAVEN_HOME%\\bin*

Com Maven você pode tornar o projeto mais "limpo" sem adicionar bibliotecas de
framewoks dentro de pastas libs. Todas as dependências são declaradas em um
arquivo de configurações chamado pom.xml e o Maven se encarrega de
disponibilizar tudo para que o projeto seja executado. Além disto, podemos
configurar tarefas a serem executadas durante as fases de construção do projeto,
como por exemplo: durante a fase de build queremos que o Maven compile o projeto
e execute todos os testes unitários antes de empacotar o projeto, para que
depois possamos implantar em um servidor de aplicações.  
  
Para o Maven todo projeto é um artefato (dependência). O qual pode ser
gerenciado e armazenado em um repositório de dependências local ou remoto.  
  
Podemos modularizar o projeto de modo que cada artefato (componente) possa ser
facilmente substituído. Podemos também facilitar a alteração das configurações
do projeto baseado em "profiles" a cada build. Declarando wildcards \${} nos
arquivos, o conteúdo será substituído pelo valor configurado no "profile"
durante a fase de build. Isso se torna extremamente útil quando estamos
trabalhando com software em ambiente de desenvolvimento, homologação e produção,
os quais precisamos alterar as configurações para executar.  
  
O Maven torna o projeto independente de IDE pois, todo projeto deve
obrigatoriamente seguir a estrutura proposta. Então toda IDE que possui
compatibilidade com Maven é capaz de importar o projeto.  
  
Além das mais diversas funcionalidades incluídas no core do projeto, muitas
outras coisas podem ser feitas extendendo-se funcionalidades com plugins.  
  
O Maven possui "fases" que determinam as etapas de um build. São elas:

-   **validate** – valida o projeto sem compilar;

-   **compile** – compila o código-fonte;

-   **test** – executa os testes do projeto;

-   **package** – empacota o executável para distribuição (JAR);

-   **integration-test** – executa testes de integração;

-   **verify** – executa verificações sobre o código-gerado

-   **install** – instala o pacote no repositório maven;

-   **deploy** – instala o pacote no repositório corporativo

O comando para se executar uma fase por linha de comandos (prompt ou terminal) é
sempre: *mvn \<fase\>*. Exemplo: *mvn validate*

O Maven possui: Plugins, Escopo de dependências, Propriedades, Herança, Módulos,
Settings e Profiles.

Tudo é configurado em um arquivo chamado pom.xml, localizado na pasta raiz de
cada projeto. Todo projeto possui um único arquivo pom.xml. POM é a abreviação
de "Project Object Model" e representa a estrutura do projeto no formato XML.  
A estrutura de um pom é a seguinte:

Como dito anteriormente o Maven possibilita com que você possa dividir seus
projetos em módulos. Desta forma o projeto CITSmart GRP está dividido nos
seguintes módulos:  
  
  
Note que cada projeto está dividido em um "...-api" e um "...-web", exceto o
"cit-core". O projeto cit-core agrega classes, resources, e configurações de
dependências comuns a todos os projetos que o utilizam.  
  
A seguir temos que esclarecer alguns pontos de suma importância, como o por
exemplo o projeto citsmart-suite. Apesar da visão hierárquica da imagem, todos
os outros projetos são "filhos" deste. O motivo, para que todos os projetos
estejam representados no mesmo nível de diretório, é que por uma limitação do
processo de GCS cada projeto deve estar contido em um branch separado. Sendo
assim configuramos para que cada projeto fique no mesmo nível de diretório do
pai.  
  
Os seguintes projetos são apenas agregadores dos módulos "...-api" e "...-web":
cit-gestao, citgrp-patrimonio, cit-portal, cit-tabelas-corp. Isto significa que
estes projetos agregadores possui configurações que são herdadas por ambos
módulos "...-api" e "...-web".  
  
O projeto citsmart-suite agrega os projetos agregadores citados anteriormente.
Desta forma todas configurações de versões dos módulos, versões das
dependências, configurações de build, plugins do maven, comuns a todos os
módulos, são configurados no pom deste projeto. Configurações específicas,
dependências específicas e profiles específicos são definidos no pom de cada
projeto agregador respectivamente.  
  
Por exemplo: Configuramos o profile padrão das configurações de conexão com o
banco de dados no pom.xml do projeto raiz citsmart-suite para que esteja
disponível para todos os projetos filhos e, caso seja necessário que o projeto
cit-portal use configurações de banco de dados diferentes da padrão, criamos um
profile com essas informações no pom.xml do cit-portal.  
  
Para o maven o projeto que agrega outros projetos é chamado de parent. Desta
forma o projeto citsmart-suite é o parent dos projetos: cit-gestao,
citgrp-patrimonio, cit-portal, cit-tabelas-corp; e estes são os projetos parents
dos respectivos "...-api" e "...-web". Todas as configurações definidas no
pom.xml do parent será herdada pelo projeto (módulo) filho. Isso significa
também que se executar uma fase do maven em um parent implica na execução das
mesmas fases nos projetos filhos que ele agrega. Por exemplo: se executarmos o
comando "mvn install" no projeto citsmart-suite todos os projetos (módulos)
filhos deste, agregadores e os filhos dos agregadores também sofrerão a fase
install. Se fizermos o comando *mvn install* somente em um projeto agregador,
como por exemplo o cit-portal, somente os
projetos *cit-portal-api* e *cit-portal-api* sofrerão a fase install.

5. Configurar o Maven localmente:  
  
5.1. Clicar no Menu Iniciar \> Configurações \> Painel de Controle \> Sistema;  
5.2. Na janela do "Sistema" selecionar a opção "Configurações Avançadas do
Sistema" e clicar no botão "Variáveis de Ambiente";  
5.3. Na janela "Variáveis de Ambiente", no grupo "Variáveis de Sistema" clicar
no botão "Nova" e na janela "Nova Variável do Sistema", digitar:

-   No campo "Nome da Variável": **M2_HOME**

-   No campo "Valor da Variável" adicionar o caminho completo onde o Maven
    está: **D:\\desenvolvimento\\tools\\maven-3.2.3**

-   Clicar em Ok.

5.4. Na janela "Variáveis de Ambiente", no grupo "Variáveis de Sistema",
localizar a variável **PATH** e clicar no botão "Editar";

-   Na janela "Editar variável de ambiente", no campo "Valor da variável"
    acrescentar no **final** o seguinte texto **;%M2_HOME%\\bin** (note que no
    início do conteúdo existe um ponto-e-vírgula, é muito importante que o
    conteúdo seja idêntico ao informado no texto em negrito.)

-   Clicar em Ok.

-   Clicar em Ok na tela de "Variávels de Ambiente" e tudo está configurado.

  
  
5.5 Após configurar o maven no ambiente é preciso alterar algumas configurações
no arquivo **settings.xml** que está localizado na
pasta **D:\\desenvolvimento\\tools\\maven-3.2.3\\conf** as linhas a serem
alteradas são:  
  
\<servers\>  
\<server\>  
\<id\>central\</id\>  
**\<username\>\</username\>** 
**\<password\>\</password\>**  
\</server\>  
\<server\>  
\<id\>snapshots\</id\>  
**\<username\>\</username\>**  
**\<password\>\</password\>**  
\</server\>  
\</servers\>  
  
Os valores a serem preenchidos nos campos username e password, respectivamente,
são obtidos na ferramenta Artfactory.

-   Acesse o
    endereço [http://ferramentasgo.centralit.com.br:8092/artifactory](http://ferramentasgo.centralit.com.br:8092/artifactory) e
    autentique com seus dados de acesso à rede (Active Directory):

-   Após autenticar, vá no canto superiro direito da tela e clique sobre seu
    nome de usuário:

-   Digite a sua senha de rede e clique em "Unlock":

-   Copie o trecho que contém o nome de usuário e senha e substitua no
    settings.xml exatamente nas mesmas possições informadas anteriormente

-   Salve o arquivo, e todas as configurações do maven estão finalizadas.

**Check-out dos repositórios**

Existem dois repositórios: citsmart-corporativo e citsmart-grp. Vamos fazer o
checkout primeiro do citsmart-grp. Siga os passos abaixo:

8. Abra o
diretório *D:\\desenvolvimento\\projetos\\citsmart-grp-modules\\branches\\desenvolvimento*

8.1 Clique com o direito na área da pasta e vá na opção: *SVN Checkout...*

8.2 Na tela que se segue adicione no campo **URL Repository** o
valor: [https://citdfsrv013.cit.local:8443/svn/Citsmart-GRP/branches/desenvolvimento](https://citdfsrv013.cit.local:8443/svn/Citsmart-GRP/branches/desenvolvimento)  
  
8.3 No campo **Checkout Directory** adicione o
valor: *D:\\desenvolvimento\\projetos\\citsmart-grp-modules\\branches\\desenvolvimento*

8.4 Ao clicar em *OK *será iniciado o download do código-fonte. No término será
exibido a mensagem de sucesso:

Faça o checkout do repositório corporativo de modo semelhante ao passo anterior,
alterando a URL e o diretório dos projetos:
  
8.5 Abra o
diretório: **D:\\desenvolvimento\\projetos\\citsmart-corporativo\\branches\\desenvolvimento**  
8.6 Repita o passo **8.1**  
8.7 Na* *tela que se segue adicione no campo **URL Repository** o
valor: [https://citdfsrv013.cit.local:8443/svn/citsmart-corporativo/branches/desenvolvimento](https://citdfsrv013.cit.local:8443/svn/citsmart-corporativo/branches/desenvolvimento)  
8.8 No campo *Checkout Directory *adicione o
valor: **D:\\desenvolvimento\\projetos\\citsmart-corporativo\\branches\\desenvolvimento**  
8.9 Repita o passo 8.4.

**Eclipse**

Arquivos para download:

-   **java-cleanup.xml**

-   **java-code-templates.xml**

-   **java-formatter.xml**

Abra o Eclipse. Vá em Window \> Preferences \> Java \> Code Style \> Clean Up

-   Importe o arquivo java-cleanup.xml

-   Depois vá em Window \> Preferences \> Java \> Code Style \> Code Templates

-   Importe o arquivo java-code-templates.xml

    -   Marque a opção (*[x] Automatically add comments ...*)

-   Depois vá em Window \> Preferences \> Java \> Code Style \> Formatter

-   Importe o arquivo java-formatter.xml

9. Baixe o eclipse no link: [Download
Eclipse](http://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/kepler/SR2/eclipse-jee-kepler-SR2-win32-x86_64.zip&mirror_id=575%E2%80%8B)

9.1 Descompacte a pasta para o diretório **D:\\desenvolvimento\\ide**

9.2 Execute o arquivo **eclipse.exe**

9.3 Selecione a workspace: **D:\\desenvolvimento\\workspace\\centralit**

9.4 No "Package explorer" ou no "Project Explorer", clique com o botão direito e
selecione a opção "Import...".

9.5 Na janela que se abre, em "Select an import source", digite "maven" e
selecione a opção "Existing Maven Projects" e clique em "Next".

9.6 Em seguida, clique em "Browse" e selecione o caminho
do **cit-grp-parent** dentro do workspace ou simplesmente copie o
caminho: **D:\\Desenvolvimento\\projetos\\citsmart-corporativo\\branches\\desenvolvimento\\cit-grp-parent**

9.7 Os projetos que foram adicionados ao workspace durante o processo de
"Checkout" do SVN estarão disponíveis.  
9.8 Certifique-se de que todos estão marcados.  
9.9 Clique em "Finish".  
9.10 O próprio eclipse se encarrega de importar as URLs dos repositórios SVN.  
9.11 Clique com o botão direito no projeto "cismart-grp-parent" e selecione a
opção "Run as" \> "Maven install...".



9.12 Repita o passo 9.6 para o seguite
diretório: **D:\\Desenvolvimento\\projetos\\citsmart-grp-modules\\branches\\desenvolvimento\\cit-suite**  
9.13 O projeto cit-suite é a raiz dos modulos cit-grp. Em seguida execute o
maven install (conforme o passo 9.11) para o projeto cit-suite que no eclipse
aparece como citsmart-grp-modules.

**Broker JMS Apache ActiveMQ**

10 Para o projeto cit-esi é preciso um broker JMS para as filas de
mensagens. **Este passo só é obrigatório para os casos onde o desenvolvedor fará
deploy deste projeto**.

10.1 Se você fez o download da pasta do ambiente de desenvolvimento informada no
tópico 2 (caso contrário baixe o serviço em:
\\\\10.2.1.11\\Desenvolvimento\\Equipes CDI\\Equipe GRP\\Ambiente de
desenvolvimento\\Desenvolvimento\\tools\\apache-activemq-5.11.1.rar), deve ter
na estrutura de
diretórios */Desenvolvimento\\tools\\apache-activemq-5.11.1\\bin\\win64* execute
o script: **InstallService.bat** como administrador.

será aberto um prompt de comandos, instalado o serviço e fechado rapidamente.

10.2 Para confirmar se o serviço foi instalado com sucesso abra o gerenciador de
serviços do windows e procure pelo serviço nomeado como: ActiveMQ e verifique
seu status conforme imagem abaixo:


Caso o serviço esteja parado inicie clicando no botão de start informado no
print acima marcado como 1. O serviço será iniciado.

Projetos Maven

Os projetos da suite Citsmart-GRP estão divididos em dois repositórios SVN
distintos:

-   https://citdfsrv013.cit.local:8443/svn/citsmart-corporativo

-   [https://citdfsrv013.cit.local:8443/svn/Citsmart-GRP](https://citdfsrv013.cit.local:8443/svn/Citsmart-GRP)

Os projetos alocados no repositório nomeado "corporativo" são os projetos
principais e o núcleo do sistema CitSmart-GRP. São projetos que podem
compartilhar sua arquitetura para outros projetos do CDI.

Neste repositório a **estrutura dos diretórios** estão configurados na seguinte
forma:  
  
Corporativo  
├── **pom.xml**  
├── **cit-grp-parent**  
├── cit-portal-api  
├── cit-portal-web  
├── cit-core  
└── cit-esi-io  
  
O projeto **cit-grp-parent** abriga exclusivamente as configurações gerais de
build e plugins para ambos repositórios (corporativo e Citsmart-grp). Já o
pom.xml que está na raiz abriga as configurações dos projetos filhos contidos
neste repositório assim como dependências gerais que devam ser herdadas por
todos os projetos.  
A decisão desta separação foi tomada para que as configurações de plugins de
build em ambos repositórios esteja concentrada em apenas um local invés de
duplicá-la em cada repositório, o que poderia ocasionar diferenças de
configurações.  
  
Os projetos alocados no repositório nomeado "Citsmart-GRP" são os projetos
módulos da suite de aplicativos. Todo novo módulo deve ser adicionado neste
repositório.  
Neste repositório a **estrutura dos diretórios** estão configurados na seguinte
forma:

Citsmart-GRP  
├── **cit-grp-modules**  
\| └── **pom.xml**  
├── cit-adm-materiais  
\| ├── cit-adm-materiais-api  
\| └── cit-adm-materiais-web  
├── cit-almoxarifado  
\| ├── cit-almoxarifado-api  
\| └── cit-almoxarifado-web  
├── citgrp-patrimonio  
\| ├── citgrp-patrimonio-api  
\| └── citgrp-patrimonio-web  
├── cit-tabelas-corp  
\| ├── cit-tabelas-corp-api  
\| └── cit-tabelas-corp-web  
├── cit-alcada  
\| ├── cit-alcada-api  
\| └── cit-alcada-web  
├── cit-contratos  
\| ├── cit-contratos-api  
\| └── cit-contratos-web  
├── cit-ecm  
\| ├── cit-ecm-api  
\| └── cit-ecm-web  
├── cit-esi  
\| ├── cit-esi-api  
\| └── cit-esi-web  
├── cit-esi-listener  
\| ├── cit-esi-listener-api  
\| └── cit-esi-listener-web  
└── cit-monitor-es  
├── cit-monitor-es-api  
└── cit-monitor-es-web​

Note que para cada módulo existe um agrupador com seus respectivos sub-módulos
"...api" e "...web". Cada módulo agrupador é filho do módulo agrupador
master **deste repositório**. Assim é possível construir cada módulo
independentemente.  
O projeto agrupador **cit-grp-modules** contém propriedades e configurações
específicas dos projetos deste repositório.  
  
Apesar da estrutura de diretórios mostrar um determinado layout a árvore de
dependencias desses módulos **para o maven** é resolvida de forma diferente.
Abaixo segue uma imagem que ilustra como o Maven enxerga a estrutura dos
projetos (através do artifactId):  


Note o sentido das setas que saem do projeto citsmart-grp-parent. Elas são
importantes para entender quais projetos são resolvidos a partir dos
agrupadores. Pelo fato dos projetos citsmart-grp-parent e citsmart-grp-modules
estarem em repositórios SVN distintos, não é possível fazer com que o
citsmart-grp-parent enxegue o citsmart-grp-modules de modo que apenas um comando
de construção no parent construa todos os projetos em repositórios distintos,
por isso apenas o projeto citsmart-grp-modules enxerga o seu respectivo parent
mas o parent não o conhece. Nesta estrutura atual foi decidido utilizar caminhos
relativos para a resolução dos artefatos em repositórios distintos.

Plugins
-------

Como dito no tópico 1, os plugins de build estão configurados no pom do projeto
cit-grp-parent no repositório corporativo. Todos os plugins, sem exceção, possui
comentários do seu propósito no projeto e o link da página oficial (no dia que
foi configurado) para a documentação.

Os plugins configurados para o build dos projetos Citsmart-GRP são:

-   **maven-resources-plugin**;

-   **maven-jar-plugin**;

-   **maven-compiler-plugin**;

-   **maven-war-plugin**;

-   maven-source-plugin;

-   **maven-dependency-plugin**;

-   jacoco-maven-plugin;

-   maven-surefire-plugin;

-   maven-failsafe-plugin;

-   native2ascii-maven-plugin;

-   **versions-maven-plugin**;

-   **maven-license-plugin**;

-   **maven-antrun-plugin**;

-   **minify-maven-plugin**;

-   findbugs-maven-plugin;

-   **lifecycle-mapping**.

Todos os plugins citados acima são importantes para o projeto, etretanto, os que
estão em negrito são os mais utilizados e que merecem atenção especial. Como
dito anteriormente, cada um deles possui comentários que dizem seu propósito
claramente.

Perfis de build
---------------

Existem basicamente 4 perfis (profiles) de build: dev, prod, hom, test. O
profile dev é ativado por padrão em todos os builds. Cada perfil define
propriedades específicas para cada ambiente e estas propriedades é que são
usadas para a filtragem (filtering) dos tokens (placeholders \${} ) do maven em
arquivos. Os únicos arquivos que **não são filtrados pelo maven** são os de
extensão **.xml**. Isso se deve ao fato de que o spring possui uma configuração,
no arquivo application-context-base.xml e no arquivo web.xml de cada módulo,
para injetar as propriedades encontradas no arquivo cit-app.properties em tempo
de execução na aplicação e usa o mesmo token do maven (\${}).

​Em ambientes onde arquivos minificados são necessários, deve ser executado o
processo de buid como profile **prod**, Quando acessada, a aplicação irá busca
apenas estes tipos de arquivos.

Isso significa que se você encontrar o token **\${}** em algum arquivo .xml quem
vai substituir essa informação é o Spring. Significa também que se o token for
adicionado em algum arquivo .java e a chave da propriedade **for a
mesma** definida em algum profile no pom.xml do projeto o maven vai substituir e
o spring não vai conseguir ler e injetar o valor da propriedade em tempo de
execução ocasionando RuntimeException. Exemplo: no profile dev do pom.xml do
parent existe a propriedade *\<log4j.level\>debug\</log4j.level\>* se essa mesma
propriedade for adicionada em alguma classe java para que o spring use o maven
vai substituir e o spring não conseguirá injetar o valor. Então é importante que
as propriedades a serem usadas pelo spring e maven **não possuam o mesmo nome**.

Para saber mais informações sobre as propriedades que cada perfil define, favor
consultar o grupo \<profiles\> no pom do projeto cit-grp-parent.

Geração de um build
-------------------

Periodicamente builds são gerados pela ferramenta de integração contínua
Jenkins. Builds especiais são gerados para entrega para a sede e para o portal
do software público manualmente. Este tópico visa dar alguns exemplos de
comandos maven que devem ser executados para os casos desta publicação especial.

É uma exigência da sede que todos as entregas dos binários estejam acompanhadas
dos códigos fontes, para este caso não existe segredo. Basta copiar os
diretórios dos projetos ou pegar os artefatos gerados com o comando **"mvn
install"** na pasta target com o nome: **"...sources.jar"**, estes jars
simplesmente compactam o código fonte como estão na estrutura de diretórios.

Para o portal do software público é uma exigência que os códigos fontes possuam
cabeçalhos de licença de código livre GLP V2. Com o
plugin **maven-license-plugin** esta tarefa outrora árdua, se torna extremamente
simples.

Basta com que a partir dos projetos **cit-grp-parent** no repositório
corporativo e no projeto **cit-grp-modules** no repositório Citsmart-GRPexecute
o comando: **mvn license:format** assim todos os projetos filhos dentro dos seus
respectivos repositório serão adicionados os cabeçalhos de licença.

O cabeçalho template está no diretório **\\cit-grp-parent\\src\\licensing**. É
importante salientar que os arquivos pom.xml também deve conter o cabeçalho de
licença, mas o plugin não consegue inserir os cabeçalhos nestes arquivos pois
estão carregados em memória durante a execução do plugin desta forma, nestes
arquivos específicamente, **devem ser adicionados manualmente**. Atualmente, em
todos os pom.xml já estão adicionados esses cabeçalhos e commitados.

A cada entrega é preciso incrementar o número das versões dos artefatos. Para
fazer isto, basta executar o plugin **versions-maven-plugin**.

Siga os seguintes passos:

1.  Vá no projeto cit-grp-parent e execute o comando: **mvn versions:set
    -DnewVersion=0.0.7-BETA versions:commit clean install** onde o campo marcado
    em vermelho deve ser alterado para versão desejada.

2.  Vá no projeto cit-grp-modules e execute os comandos:

    -   **mvn versions:update-parent -DparentVersion=0.0.7-BETA**

    -   **mvn versions:set -DnewVersion=0.0.7-BETA versions:commit**

    -   **mvn clean install**

É importante notar que a versão a ser definida nos projetos filhos do
projeto **cit-grp-modules** devem **ser a mesma** definida no **projeto
cit-grp-parent**.  
Se o build ocorreu com sucesso então os binários estão prontos para serem
publicados.


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 – Anna Martins





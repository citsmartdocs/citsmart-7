title: Ambiente do desenvolvedor
Description: Ambiente do desenvolvedor

# Ambiente do desenvolvedor

**Dependências (projetos relacionados)**:

1.  cas;​​

2.  ​cit-portal-web; ​​

3.  cit-esi-web;

4.  cit-esi-listener-web;

5.  cit-ecm-web.

**Configuração armazenamento File System​**

1. Fazer download do arquivo [chave de
criptografia.rar](http://portalcdi.centralit.com.br/sites/filialgoiania/arquitetura/SiteAssets/wikiclportal/Configura%C3%A7%C3%A3o%20do%20ambiente%20SIGAD/chave.rar)​

2. ​​​​Abra o
arquivo **JBOSS_HOME**\\modules\\br\\com\\citsmart-grp\\main\\cit-app.properties

3. Acrescentar 3 propriedades no arquivo properties​

-   ecm.dir.output : Diretório base de armazenamento dos arquivos.

-   ecm.dir.privateKeyFile : Path do arquivo private.der​​​

-   ecm.dir.encryptedKeyFile : Path do arquivo key.encrypt

​4. Para a realização da criptografia do documento será necessário fazer download
do **UnlimitedJCEPolicyJDK7** no endereço: **[Java Cryptography
Extension](http://www.oracle.com/technetwork/pt/java/javase/downloads/jce-7-download-432124.html)**

5. Descompactar o arquivo, copiar os arquivos local_policy.jar e
US_export_policy.jar​​ para o diretorio: \\Java\\jdk1.7.0_71\\jre\\lib\\security​​​

**​​​​​Configuração Apache Solr**

​​

1. Baixar o servidor solr-5.4.0​​

2. No
arquivo **JBOSS_HOME**\\modules\\br\\com\\citsmart-grp\\main\\cit-app.properties
acrescentar a url do servidor Solr

ecm.solr.server=http://serverName:Port/solr/jcg

3. Criar uma collection jcg   
  
Configuração campos indexáveis:

-   baixe o
    arquivo [schema.xml](http://portalcdi.centralit.com.br/sites/filialgoiania/arquitetura/SiteAssets/wikiclportal/Configura%C3%A7%C3%A3o%20do%20ambiente%20DOCS/schema.xml) e
    sobrescreva no diretório **SOLR_HOME**​\\server\\solr\\jcg\\conf\\

**Configuração do highlight​**

Fazer download
do[solrconfig.xml](http://portalcdi.centralit.com.br/sites/filialgoiania/arquitetura/SiteAssets/wikiclportal/Configura%C3%A7%C3%A3o%20do%20ambiente%20SIGAD/solrconfig.xml) e
substitua o solrconfig.xml que está no conf da collection jcg​

**Configuração da assinatura Local**

1. Fazer download do arquivo
​[citdocs.zip](http://portalcdi.centralit.com.br/sites/filialgoiania/arquitetura/SiteAssets/wikiclportal/Configura%C3%A7%C3%A3o%20do%20ambiente%20DOCS/citdocs.zip)

​​​​Abra o
arquivo **JBOSS_HOME**\\modules\\br\\com\\citsmart-grp\\main\\cit-app.properties

2. Acrescentar 2 propriedades no arquivo properties​

-   ecm.signature.privateKeyDocs= Path do arquivo citdocs.pfx

-   ecm.signature.publicKeyDocs= Path do arquivo citdocs.jks​

​**Configuração de assinatura A3 via token safeNet​**

​Instalar e configurar o java​:

1. Verificar se existe a versão 8 do JDK instalado na sua máquina, comumente no
caminho "**C:\\Program Files\\Java**". Caso não esteja instalado, Instalar a JDK
8 (x64) .  
2. Após a instalação do JDK, é necessário configurar as variáveis de ambiente.​  
3. Clicar no Menu Iniciar \> Configurações \> Painel de Controle \> Sistema;  
4. Na janela do "Sistema" ​selecionar a opção "Configurações Avançadas do
Sistema" e clicar no botão "Variáveis de Ambiente";
5. Na janela "Variáveis de Ambiente", no grupo "Variáveis de Sistema" clicar no
botão "Nova";​  
6. Na janela "Nova Variável do Sistema", digitar:

-   No campo "Nome da Variável": *JAVA_HOME*

-   No campo "Valor da Variável" adicionar o caminho completo onde o JDK foi
    instalado, Ex: **C:\\Program Files\\Java\\jdk1.8.0_121**

-   ​Clicar em Ok.

7.​ Na janela "Variáveis de Ambiente", no grupo "Variáveis de Sistema" clicar no
botão "Nova";​  
8. Na janela "Nova Variável do Sistema", digitar:

-   No campo "Nome da Variável": *CLASSPATH*

-   No campo "Valor da Variável": *%JAVA_HOME%\\lib​*

-   ​Clicar em Ok.​

  
9. Na janela "Variáveis de Ambiente", no grupo "Variáveis de Sistema", localizar
a variável *PATH* e clicar no botão "Editar";​

-   Na janela "Editar variável de ambiente", no campo "Valor da variável"
    acrescentar, no **final, **seguinte texto: *;%JAVA_HOME%\\bin*

-   ​Clicar em Ok.​​​​​

-   ​Clicar em Ok na tela de "Variável de Ambiente" e tudo está configurado.


  
*Configuração do Token​*

Fazer [downlo​ad do
driver](https://www.certisign.com.br/atendimento-suporte/downloads/tokens/windows) do
token safeNet e instalar na máquina.

*Configuração da extensão do Chrome*

1.  Fazer download do
    arquivo [citsmart-assinatura-extension.zip](http://redmine-cdi.centralit.com.br/dmsf/files/852/view) que
    contém a extensão do Chrome utilizada para acessar o token.

2.  Copiar e descompactar o arquivo citsmart-assinatura-extension.zip na pasta
    raiz C:\\.

3.  Abrir a pasta a onde o arquivo citsmart-assinatura-extension.zip foi
    descompactado, editar o arquivo manifest.json e alterar o atributo "matches"
    da propriedade "externally_connectable":

4.  Acessar no Chrome a url *chrome://extensions/* em seguida habilitar o **Modo
    do desenvolvedor:** 

5.  Após habilitar o **Modo do desenvolver** no Chrome clique no
    botão **Carregar extensão expandida...** para realizar a instalação da
    extensão do Chrome.

6.  Ao clicar no botão **Carregar extensão expandia...** surgirá a
    janela **Procurar pasta**, selecione o diretório que foi criado após a
    extração do arquivo citsmart-assinatura-extension.zip e clique no
    botão **OK**, finalizando assim a instalação da exntensão.

7.  Finalizada a instalação da extensão do Chorme deve-se inserir o
    parâmetro **ecm.signature.chromeExtensionId** no arquivo cit-app.properties,
    que encontra-se no
    diretório **JBOSS_HOME**\\modules\\system\\layers\\base\\br\\com\\citsmart-grp\\main\\cit-app.properties.
    O valor a ser informado a este parâmetro é o ID gerado pelo Chrome após a
    instalação da extensão. Para obeter o ID da extensão do Chrome, acesse a
    url *chrome://extensions/* e copie o valor do atributo ID.

*Configuração do host da extensão do Chrome*

1.  Baixar o
    arquivo [Citsmart_Assinatura_Setup.exe](http://redmine-cdi.centralit.com.br/dmsf/files/859/view) que
    é instalador do host da extensão do Chrome. O host da extensão do Chrome é
    responsável pela comunicação entre o driver do token e a extensão do
    Chrome. 

Realize o download do arquivo ​abaixo e informe no arquivo de
configuração **citapp.properties** ​o caminho do diretório extraído.   
Ex.:
\#OCR **ecm.orc.img=** C:\\\\desenv\\\\workspaces\\\\git\\\\cit-grp-ecm\\\\cit-ecm-api\\\\tessdata


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/14/2019 – Anna Martins

title: Ambiente de execução
Description: Ambiente de execução

# Ambiente de execução

Este conhecimento descreve a configuração do ambiente ideal de execução do
CITSmart GRP.

Verificações
------------

**Gerando deploy**

O sistema CITGRP foi construído utilizando o Maven para auxiliar na geração de
builds e gerenciamento de dependências. Atualmente o sitema é compatível somente
com o Jboss 7.1.1 (profile dev).

Por padrão as configurações geradas no build são para o ambiente de
desenvolvimento. Para ser alterado o ambiente, todo o projeto deve ser compilado
utilizando os profiles maven "dev", "homo", "prod", "test".  
Com os seguintes comandos em um terminal de comandos é possível gerar build para
cada tipo de ambiente:

-   mvn install -P dev

Os profiles de ambiente alteram nível de log do hibernate, dialeto do banco,
método de autenticação e url do servidor do ambiente no arquivo
cit-app.properties. Este arquivo pode ser alterado posteriormente ao build a fim
de permitir  
configuração personalizada para cada tipo de ambiente. A ideia por trás do
profile maven preencher este arquivo é seguir padrões de projeto de integração
contínua e ter um template padrão de configuração de ambiente.  
  
Uma informação importante a respeito dos profiles é a URL do servidor o qual
está instalado o JBoss. Cada profile descreve a URL correta. Segue abaixo:

-   dev: [https://localhost:8443](https://localhost:8443/)

-   homo: [https://citsmart-grpdesen.centralit.com.br](https://citsmart-grpdesen.centralit.com.br/)

-   prod: [https://citsmart-grp.centralit.com.br](https://citsmart-grp.centralit.com.br/)

-   test: [https://10.2.1.46:9447](https://10.2.1.46:9447/)

Esta URL é alterada no arquivo cit-app.properties para que seja possível a
autenticação segura pelo projeto CAS (Central Authentication Service) que será
falado posteriormente.  
  
O comando acima descritos devem ser executados na raiz dos projetos na seginte
ordem: **cit-grp-parent** e depois **cit-suite** *(citsmart-grp-modules)*, desta forma
todos os módulos do projeto serão compilados usando as configurações deste
profile.  
Um arquivo na extensão .war será gerado na pasta \\target\\ de cada projeto. É
este arquivo .war que deve ser implantado no servidor de aplicação.

**Criando uma base de dados**

  
A aplicação foi configurada para o banco de dados PostgreSQL, desta forma é
preciso que na máquina em que será realizado a execução possua um servidor de
banco de dados PostgreSQL na versão 9.3+.  
  
É preciso também que uma base de dados com o nome **citgrp** seja criado para que
as aplicações possam conectar. Através da interface gráfica de gerenciamento do
servidor de banco de dados, *PGAdmin III* siga os seguintes passos:

-   Clique com o direito em Database e vá em "New Database"

-   Crie a base de dados com o nome **citgrp**, conforme dito acima:

-   Clique em OK e a configuração de banco de dados está concluída.

**Configurando o servidor de aplicação**

Cada servidor de aplicação possui uma configuração diferente para os datasources
(conexão com o banco de dados). Abaixo seguem as devidas configurações que devem
ser realizadas:

**JBoss**

No diretório de instalação do JBoss, navegue até a
pasta: **jboss-as-7.1.1\\standalone\\configuration** substitua o arquivo
standalone.xml pelo arquivo em anexo:

[standalone.xml](http://portalcdi.centralit.com.br/sites/filialgoiania/arquitetura/SiteAssets/wikiclportal/Configurar%20Ambiente%20para%20execu%C3%A7%C3%A3o%20de%20um%20Deploy/standalone.xml)

O arquivo xml possui configurado vários \<resources\>, um para cada módulo,
conforme exemplo abaixo:  
  
\<datasource jndi-name="java:/env/jdbc/cit-portal"
pool-name="/env/jdbc/cit-portal" enabled="true" use-java-context="true"\>  
\<connection-url\>jdbc:postgresql:// **localhost:5432** /citgrp\</connection-url\>  
\<driver\>postgres\</driver\>  
\<security\>  
**\<user-name\>postgres\</user-name\>**  
**\<password\>postgres\</password\>**  
\</security\>  
\</datasource\>  
  
Os campos destacados devem ser revisados e alterados de acordo com as
configurações do servidor do banco de dados.   
Caso o Postgres esteja em uma máquina diferente da máquina que está instalado o
Jboss deve-se substituir, no campo **url**, o ip do servidor do postgres.  
Os campos **user-name** e **password** devem ser alterados de acordo com as
configurações do banco de dados.

Feito as configurações dos datasources citadas acima, os arquivos de deploy .war
devem ser adicionados no diretório **jboss-as-7.1.1\\standalone\\deployments**

**Usando fila JMS JBoss - hornetq-server**

Ainda no arquivo standalone.xml (no
diretório **jboss-as-7.1.1\\standalone\\configuration**), vamos configurar a fila
JMS que a aplicação GRP irá utilizar. Até o momento, criaremos uma fila que será
utilizada para geração assíncrona de alguns relatórios no GRP que demanda muito
tempo em sua geração. Nossa fila será chamada de: **queue/filaDocumento**. Para
a fila funcionar, é necessário adicionar algumas instruções no arquivos
standalone.xml , que são:

*Adicionar (\<extension module="org.jboss.as.messaging"/\>) linha: 28*

\<extensions\>  
(...)  
\<extension module="org.jboss.as.webservices"/\>  
\<extension module="org.jboss.as.weld"/\>  
**\<extension module="org.jboss.as.messaging"/\>**  
\</extensions\>  
  
*Adicionar (\<mdb\>(...)\</mdb\>) linha: 137*  
  
\<subsystem xmlns="urn:jboss:domain:ejb3:1.2"\>  
\<session-bean\>  
\<stateless\>  
\<bean-instance-pool-ref pool-name="slsb-strict-max-pool"/\>  
\</stateless\>  
\<stateful default-access-timeout="5000" cache-ref="simple"/\>  
\<singleton default-access-timeout="5000"/\>  
\</session-bean\>  
**\<mdb\>**  
**\<resource-adapter-ref resource-adapter-name="hornetq-ra"/\>**  
**\<bean-instance-pool-ref pool-name="mdb-strict-max-pool"/\>**  
**\</mdb\>**  
\<pools\>  
\<bean-instance-pools\>  
\<strict-max-pool name="slsb-strict-max-pool" max-pool-size="20"
instance-acquisition-timeout="5" instance-acquisition-timeout-unit="MINUTES"/\>  
\<strict-max-pool name="mdb-strict-max-pool" max-pool-size="20"
instance-acquisition-timeout="5" instance-acquisition-timeout-unit="MINUTES"/\>  
\</bean-instance-pools\>  
\</pools\>  
  
*Adicionar (\<subsystem
xmlns="urn:jboss:domain:messaging:1.1"\>(...)\</subsystem\>) linha: 137*  
\<subsystem xmlns="urn:jboss:domain:weld:1.0"/\>  
**\<subsystem xmlns="urn:jboss:domain:messaging:1.1"\>**  
**\<hornetq-server\>**  
**\<persistence-enabled\>true\</persistence-enabled\>**  
**\<journal-file-size\>102400\</journal-file-size\>**  
**\<journal-min-files\>2\</journal-min-files\>**  
  
**\<connectors\>**  
**\<netty-connector name="netty" socket-binding="messaging"/\>**  
**\<netty-connector name="netty-throughput"
socket-binding="messaging-throughput"\>**  
**\<param key="batch-delay" value="50"/\>**  
**\</netty-connector\>**  
**\<in-vm-connector name="in-vm" server-id="0"/\>**  
**\</connectors\>**  
  
**\<acceptors\>**  
**\<netty-acceptor name="netty" socket-binding="messaging"/\>**  
**\<netty-acceptor name="netty-throughput"
socket-binding="messaging-throughput"\>**  
**\<param key="batch-delay" value="50"/\>**  
**\<param key="direct-deliver" value="false"/\>**  
**\</netty-acceptor\>**  
**\<in-vm-acceptor name="in-vm" server-id="0"/\>**  
**\</acceptors\>**  
  
**\<security-settings\>**  
**\<security-setting match="\#"\>**  
**\<permission type="send" roles="guest"/\>**  
**\<permission type="consume" roles="guest"/\>**  
**\<permission type="createNonDurableQueue" roles="guest"/\>**  
**\<permission type="deleteNonDurableQueue" roles="guest"/\>**  
**\</security-setting\>**  
**\</security-settings\>**  
  
**\<address-settings\>**  
**\<address-setting match="\#"\>**  
**\<dead-letter-address\>jms.queue.DLQ\</dead-letter-address\>**  
**\<expiry-address\>jms.queue.ExpiryQueue\</expiry-address\>**  
**\<redelivery-delay\>0\</redelivery-delay\>**  
**\<max-size-bytes\>10485760\</max-size-bytes\>**  
**\<address-full-policy\>BLOCK\</address-full-policy\>**  
**\<message-counter-history-day-limit\>10\</message-counter-history-day-limit\>**  
**\</address-setting\>**  
**\</address-settings\>**  
  
**\<jms-connection-factories\>**  
**\<connection-factory name="InVmConnectionFactory"\>**  
**\<connectors\>**  
**\<connector-ref connector-name="in-vm"/\>**  
**\</connectors\>**  
**\<entries\>**  
**\<entry name="java:/ConnectionFactory"/\>**  
**\</entries\>**  
**\</connection-factory\>**  
**\<connection-factory name="RemoteConnectionFactory"\>**  
**\<connectors\>**  
**\<connector-ref connector-name="netty"/\>**  
**\</connectors\>**  
**\<entries\>**  
**\<entry name="RemoteConnectionFactory"/\>**  
**\<entry name="java:jboss/exported/jms/RemoteConnectionFactory"/\>**  
**\</entries\>**  
**\</connection-factory\>**  
**\<pooled-connection-factory name="hornetq-ra"\>**  
**\<transaction mode="xa"/\>**  
**\<connectors\>**  
**\<connector-ref connector-name="in-vm"/\>**  
**\</connectors\>**  
**\<entries\>**  
**\<entry name="java:/JmsXA"/\>**  
**\</entries\>**  
**\</pooled-connection-factory\>**  
**\</jms-connection-factories\>**  
  
**\<jms-destinations\>**  
**\<jms-queue name="filaDocumentoQueue"\>**  
**\<entry name="queue/filaDocumento"/\>**  
**\<entry name="java:jboss/exported/jms/queue/filaDocumento"/\>**  
**\</jms-queue\>**  
**\<jms-topic name="filaDocumentoTopic"\>**  
**\<entry name="topic/filaDocumento"/\>**  
**\<entry name="java:jboss/exported/jms/topic/filaDocumento"/\>**  
**\</jms-topic\>**  
**\</jms-destinations\>**  
**\</hornetq-server\>**  
**\</subsystem\>**  
\</profile\>

Para o jboss versão 7.1.0, há a necessidade de adicionar mais 2 configurações
além dessas:

\<socket-binding-group name="standard-sockets" default-interface="public"
port-offset="\${jboss.socket.binding.port-offset:0}"\>  
\<socket-binding name="management-native" interface="management"
port="\${jboss.management.native.port:9999}"/\>  
\<socket-binding name="management-http" interface="management"
port="\${jboss.management.http.port:9990}"/\>  
\<socket-binding name="management-https" interface="management"
port="\${jboss.management.https.port:9443}"/\>  
\<socket-binding name="ajp" port="8009"/\>  
\<socket-binding name="http" port="8080"/\>  
\<socket-binding name="https" port="443"/\>  
\<socket-binding name="osgi-http" interface="management" port="8090"/\>  
\<socket-binding name="remoting" port="4447"/\>  
\<socket-binding name="txn-recovery-environment" port="4712"/\>  
\<socket-binding name="txn-status-manager" port="4713"/\>  
\<socket-binding name="messaging" port="5445"/\>  
\<socket-binding name="messaging-throughput" port="5455"/\>  
\<outbound-socket-binding name="mail-smtp"\>  
\<remote-destination host="localhost" port="25"/\>  
\</outbound-socket-binding\>  
\</socket-binding-group\>



E pode retirar a **\<extension module="org.jboss.as.messaging"/\>**.

**Configurando diretório para geração assíncrona de relatório**


*O passo 4, somente é executado se desejar criptografar os arquivos gerados
preocupando com a segurança da informação, caso contrário, não é obrigatório sua
execução.*

1. Abra o
arquivo **JBOSS_HOME**\\modules\\br\\com\\citsmart-grp\\main\\cit-app.properties

2. Acrescentar 3 propriedades no arquivo properties

-   documento.dir.output=Path da pasta onde sera criado os arquivos gerado no
    procedimento assíncrono

-   documento.dir.duracao.dia=tempo em dias em que o arquivo ficará na no
    diretório declarado

-   cron.expression.file.clean=tempo de verificação da job para apagar arquivos
    (utilize [cronmaker](http://www.cronmaker.com/) para gerar a expressão, por
    exemplo: **0 0/10 \* 1/1 \* ? \*** = 10 minutos)

3. Para encriptografar os arquivos gerados, é necessário realizar or seguintes
procedimentos:

-   Fazer download do arquivo [chave de
    criptografia.rar](http://portalcdi.centralit.com.br/sites/filialgoiania/arquitetura/SiteAssets/wikiclportal/Configura%C3%A7%C3%A3o%20do%20ambiente%20SIGAD/chave.rar) se
    não existir os arquivos (private.der e key.encrypt) na
    pasta **JBOSS_HOME**\\assets

-   2. Abra o
    arquivo **JBOSS_HOME**\\modules\\br\\com\\citsmart-grp\\main\\cit-app.properties,
    e acrescentar 2 propriedades no arquivo properties (**se não houver**)

    -   ecm.dir.privateKeyFile=Path do arquivo/private.der

    -   ecm.dir.encryptedKeyFile=Path do arquivo/key.encrypt

-   Fazer download do **UnlimitedJCEPolicyJDK7** no endereço : **[Java
    Cryptography Extension](http://www.oracle.com/technetwork/pt/java/javase/downloads/jce-7-download-432124.html)**

-   Descompactar o arquivo **UnlimitedJCEPolicyJDK7**, copiar os arquivos
    local_policy.jar e US_export_policy.jar para o diretorio:
    \\Java\\jdk1.7.0_71\\jre\\lib\\security

Exemplo configuração cit-app.properties:  
  
\# PROPRIEDADES LOCAL TEMP DOCUMENTOS GERADO  
documento.dir.output=C:/Users/erick.sato/Documents/Desenvolvimento/citgrp/documentos  
documento.dir.duracao.dia=1  
cron.expression.file.clean=0 0/1 \* 1/1 \* ? \*  
ecm.dir.privateKeyFile=C:/Users/erick.sato/Documents/Desenvolvimento/jboss-as-7.1.1/assets/private.der  
ecm.dir.encryptedKeyFile=C:/Users/erick.sato/Documents/Desenvolvimento/jboss-as-7.1.1/assets/key.encrypt​  
  


**Configurando um certificado digital auto assinado**



Para a autenticação segura é preciso um certificado digital devidamente
configurado no servidor de aplicações e no keystore da JRE. Para o ambiente de
desenvolvimento será usado um certificado digital auto assinado por ser
gratuito.

Vamos considerar que o ambiente de execução esteja devidamente configurado com
todas as variáveis de ambiente exportadas, seja windows ou linux, e que o
conteúdo da pasta **jre/bin** esteja acessível de qualquer lugar do sistema pelo
terminal de comandos.

Escolha uma pasta de trabalho para facilitar encontrar os arquivos gerados
posteriormente, pode ser a pasta Desktop (windows) ou /home/usuario (linux).

Navegue até a pasta de trabalho escolhida e execute os comandos abaixo:

-   Criar certificado digital: keytool -genkey -alias grp -keyalg RSA -keystore
    grp.keystore -validity 3650

Responda as perguntas de acordo com o informado a baixo:

>   I)Whats your first and last name?  
>   **localhost**  
>   II)What is the name of your organizational uniy ?  
>   IT  
>   III)What is the name of your organization ?  
>   Central IT  
>   IV)What is the name of your city or locality ?  
>   Goiania  
>   V)What is the name of your state or province ?  
>   GO  
>   VI)What is the two-letter country code for this unity ?  
>   BR  
>   Is CN=localhost, OU=IT, O=Central IT, L=Goiania, ST=GO, C=Br correct ?  
>   yes  


Insira a senha para o certificado (sugerido): 123456

!!! warning "ATENÇÃO"

    A primeira pergunta refere-se ao DNS do servidor o qual o certificado está
    sendo implantado. Use "localhost" somente se estiver gerando um certificado
    para ambiente de desenvolvimento. Caso precise usar o IP do servidor é
    importante adicionar um comando a mais na criação do certificado, sendo
    este: -ext san=ip:10.0.0.1 ou para ocaso de ser um DNS: -ext
    san=dns:www.example.com . Exemplo: keytool -genkey -alias grp -keyalg RSA
    -keystore grp.keystore -ext san=ip:10.0.0.1 -validity 3650

-   Exportar o certificado digital: keytool -exportcert -alias grp -keystore
    grp.keystore -validity 3650 -file grp.cer

-   Configurar certificado no Jboss:

   Abra o arquivo de configuração
   “**JBOSS_HOME**/standalone/configuration/standalone.xml” e procure o web
   subsystem, cujo trecho deve ser igual ao exibido abaixo:

   \<subsystem xmlns="urn:jboss:domain:web:1.1"
   default-virtual-server="default-host" native="false"\>

   \<connector name="http" protocol="HTTP/1.1" scheme="http"
   socket-binding="http"/\>  
   \<virtual-server name="default-host" enable-welcome-root="true"\>  
   \<alias name="localhost"/\>  
   \<alias name="example.com"/\>  
   \</virtual-server\>  
   \</subsystem\>  
     
   Adicione o connector para https logo abaixo do conector já existente:  
     
   \<connector name="https" protocol="HTTP/1.1" scheme="https"
   socket-binding="https" secure="true"\>  
   \<ssl name="https" key-alias="**grp**" password="**123456**"
   certificate-key-file="**\${jboss.server.config.dir}/certs/grp.keystore**"/\>  
   \</connector\>  
     
   Copie o keystore para a pasta: JBOSS_HOME/standalone/configuration/certs  
   Caso a pasta 'certs' não exista, crie-a.​

-   Adicionar certificado ao keystore da JVM​:

   Agora é preciso adicionar o certificado no keystore da jvm para certificados
   confiáveis. Para isto siga os passos abaixo:  
   Os comandos variam um pouco de sistema operacional, mas são semelhantes.  
     
   Copie o certificado exportado para o diretório:  
   **JAVA_HOME/jre/lib/security** 
     
   importe o certificado com o comando:

   *keytool -keystore cacerts -importcert -alias grp -file grp.cer*

   Será solicitado uma senha, esta é: **changeit**  
     
   Para listar o certificado importado, use o comando:

-   **Windows**:* keytool -keystore cacerts -list \| find "grp"*

-   **Linux**: *keytool -keystore cacerts -list \| grep grp*

>   Digite a senha do cacerts novamente e será exibido o certificado importado.

**Implantando serviço central de autenticação (CAS)**

Os módulos GRP utilizam o projeto Central Authentication Service (CAS) para
autenticar os usuáiros em um serviço centralizado (Single Sign-on). O site do
projeto pode ser acessado
via: [http://jasig.github.io/cas/4.0.x/index.html​](http://jasig.github.io/cas/4.0.x/index.html).
A versão utilizada no projeto CITSmart-GRP foi a 3.5.2.

O projeto CAS é uma aplicação web que é implantada no servidor juntamente com os
módulos CITSmart-GRP. Esta aplicação web foi personalizada para atender as
configurações do projeto GRP usando o cas-overlay-project
(<https://github.com/UniconLabs/simple-cas-overlay-template>).

Existem duas formas de autenticação, usando CAS, na aplicação CITSmart-GRP:
Usando banco de dados do próprio GRP e usando LDAP. As duas aplicações web do
CAS, uma para cada método de autenticação, encontra-se publicada no Artifactory
do CDI. As URL seguem abaixo:

-   CAS para autenticação via banco de
    dados: [http://ferramentasgo.centralit.com.br:8092/artifactory/builds-release-grp/org/jasig/cas/cas-server-webapp/3.5.2/cas-db-1.0.0-RELEASE.war​](http://ferramentasgo.centralit.com.br:8092/artifactory/builds-release-grp/org/jasig/cas/cas-server-webapp/3.5.2/cas-db-1.0.0-RELEASE.war)

-   CAS para autenticação via
    LDAP: [http://ferramentasgo.centralit.com.br:8092/artifactory/builds-release-grp/org/jasig/cas/cas-server-webapp/3.5.2/cas-ldap-1.0.0-RELEASE.war​](http://ferramentasgo.centralit.com.br:8092/artifactory/builds-release-grp/org/jasig/cas/cas-server-webapp/3.5.2/cas-ldap-1.0.0-RELEASE.war)

Escolha o método de autenticação desejado e faça o download. Antes de publicar
no JBoss é necessário fazer a configuração de conexão com seu banco ou com o
LDAP. Para isto, edite o arquio *cas.properties *localizado dentro do .war no
seguinte caminho:

-   **cas-db-1.0.0-RELEASE.war\\WEB-INF\\cas.properties**

    -   Linha 22, 32, 33, 34, 35, respectivamente:

        -   server.name=[https://localhost:8443](https://localhost:8443/)  
            cas.database.jdbc.driver=**org.postgresql.Driver**  
            cas.database.jdbc.url=**jdbc:postgresql://localhost:5432/citgrp**  
            cas.database.jdbc.user=**postgres**  
            cas.database.jdbc.password=**postgres**

Para este caso de autenticação em banco de dados é importante que essa
autenticação seja feita na mesma base de dados configurada anteriormente no
JBoss.

-   **cas-ldap-1.0.0-RELEASE.war\\WEB-INF\\cas.properties**

    -   Linhas 22, 23, 24, 25, 27, respectivamente:

        -   ldap.host.name=ldap://**\<IP\>:\<PORTA\>**  
            ldap.manager.password=**\<PASSWORD\>**  
            ldap.userDn=**\<cn=citsmart,cn=Users,dc=cit,dc=local\>**  
            ldap.search.filter=**\<%u\@cit.local\>**  
            s​erver.name=**\<**[http://localhost:8080](http://localhost:8080%E2%80%8B/)**\>**

Para este caso de autenticação em servidor LDAP é importante que seja alterado
os dados marcados com \<\>. Acima é dado alguns exemplos.  
  
Feito estas configurações, coloque a aplicação web escolhida na pasta
deployments do Jboss junto com os módulos da aplicação CITSmart-GRP e podemos
avançar para o próximo tópico.

**Serviço JMS Apache ActiveMQ**

O projeto cit-esi utiliza fila de mensagens para sua operação. Desta forma é
preciso instalar e iniciar o serviço, caso contrário o seguinte erro será
informado nos logs quando a aplicação iniciar:

   **ERROR [org.springframework.jms.listener.DefaultMessageListenerContainer]
   (jmsInputContainer-1) Could not refresh JMS Connection for destination
   'queue://esi.input.queue' - retrying in 5000 ms. Cause: Error while
   attempting to add new Connection to the pool; nested exception is
   javax.jms.JMSException: Could not connect to broker URL:
   tcp://localhost:61616. Reason: java.net.ConnectException: Connection
   refused**

Para não termos este problema, temos algumas opções:

1.  Baixar o serviço diretamente do
    site: [http://activemq.apache.org/activemq-5121-release.html](http://activemq.apache.org/activemq-5121-release.html)

2.  Copiar do nosso diretório de rede: \\\\10.2.1.11\\Desenvolvimento\\Equipes
    CDI\\Equipe GRP\\Ambiente de
    desenvolvimento\\Desenvolvimento\\tools\\apache-activemq-5.11.1.rar

Para qualquer uma das opções acima deve ser escolhido o script de instalação de
acordo com o sistema operacional:

-   **Windows**

    -   Para executar em modo console (dentro do prompt de comandos) execute
        o *scritp: apache-activemq-5.11.1\\bin\\activemq.bat;*

    -   Para instalar o serviço execute o
        script: *apache-activemq-5.11.1\\bin\\win64\\InstallService.bat* em modo
        administrador;

-   **Linux**

    -   Execute navegue até o diretório: *apache-activemq-5.11.1\\bin* e execute
        o comando: *./activemq start & *(OBS.: crie um script com prermissão de
        execução no diretório /etc/init.d que execute o comando citado neste
        tópico, desta forma será iniciado o serviço todas as vezes que o
        servidor for reiniciado).

**Inicializando a aplicação**

O sistema CITGRP foi projetado para criar automaticamente as tabelas no banco de
dados e os dados iniciais para seu funcionamento assim que é iniciado.

Após:

1.  Instalar o sistema de banco de dados;

2.  Criar a base de dados;

3.  Instalar o servidor de aplicação;

4.  Configurar o servidor de aplicação;

5.  Criar e configurar certificado digital;

6.  Gerar o deploy da aplicação;

7.  Baixar e configurar o Serviço central de autenticação CAS;

Deve-se iniciar o JBoss para que o sistema conecte na base de dados e crie as
tabelas. Depois de iniciado o servidor de aplicações, confira na base de dados a
criação das tabelas, atualmente na versão 1.0.0 com todos os módulos implantados
são no total 295 tabelas:  

  
Com as tabelas criadas a aplicação CIT-GRP pode ser acessada via browser através
da
URL: [http://localhost:8080/cit-portal-web](http://localhost:8080/cit-portal-web/)* .*  
Note que como ativamos o protocolo HTTPS, o próprio Jboss deve redirecionar a
aplicação para a porta correta, caso isto não aconteça, altere o acesso para a
seguinte URL: *https://localhot:8443/cit-portal-web*  
  
O valor destacado na URL deve ser substituído pelo ip e porta da máquina onde
está instalado o JBoss.  
Ao acessar o endereço citado acima a seguinte página será exibida:
  
  
Caso seja exibido a página inicial significa que todas as configurações foram
feitas com sucesso.  
  
Caso a autenticação escolhida tenha sido cas-db os dados de acesso serão:

-   Usuário: admin

-   Senha: admin

Caso a autenticação escolhida tenha sido cas-ldap os dados de acesso serão os
mesmos dados de acesso utilizado pelos usuários Active Directory no CDI.


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 – Anna Martins

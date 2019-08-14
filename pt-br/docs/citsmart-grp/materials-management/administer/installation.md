title: Manual de instalação on-premise (GRP)

Description: visa demostrar o passo a passo da instalação da solução CITSmart GRP, seguindo padrões do servidor de aplicação Wildfly e PostgreSQL server.


# Manual de instalação on-premise (GRP)

Esse conhecimento visa demostrar o passo a passo da instalação da solução
CITSmart GRP, seguindo padrões do servidor de aplicação Wildfly e PostgreSQL
server.

Requisitos de sistema
---------------------

A suite de aplicativos Citsmart GRP é desenvolvida em Java e possui
compatibilidade com algumas plataformas de sistema operacional.

Abaixo seguem as configurações mínimas de software e hardware para que seja
possível executar o aplicativo:

**Ambiente Linux**:

-   Software

    -   Sistema Operacional: CentOS 7 64 bits;

    -   **Oracle** JVM HotSpot 1.7 update 79 64bits (**JDK** ou **JRE Server**);

    -   Jboss AS 7.1;

    -   Postgres 9.4 64bits;

-   Hardware:

    -   Processador: 4 CPUs x 4 cores por cpu x 1 thread por core \@ 2.2GHZ;

    -   Memória Ram: 12 GB;

    -   Disco: 50GB livre para a aplicação;

**Ambiente Windows**:

-   Sistema Operacional: Windows Server 2008 64bits ou versão mais atual;

    -   **Oracle** JVM HotSpot 1.7 update 79 64bits (**JDK** ou **JRE Server**);

    -   Jboss AS 7.1;

    -   Postgres 9.4 64bits; Sql Server 2012 64bits ou versão superior.

-   Hardware:

    -   Processador: 4 CPUs x 4 cores por cpu x 1 thread por core \@ 2.2GHZ;

    -   Memória Ram: 12 GB;

    -   Disco: 50GB livre para a aplicação;

Software and download
-------------------

!!! warning "ATENÇÃO"

>   A partir desse ponto é obrigatório uma subscrição.

>   A instalação do CITSmart GRP requer sistema operacional GNU/Linux com kernel
>   igual ou superior ao 3.10.

>   Recomendamos Red Hat, CentOS, Debian ou Ubuntu.

Para execução do CITSmart GRP, baixaremos os pacotes necessários conforme o
procedimento relativo ao produto.

Servidor de aplicação Wildfly
-----------------------------

!!! warning "ATENÇÃO"

    No manual utilizaremos PostgreSQL, mas podem ser baixado seu pacote para
    Oracle ou MSSQL, basta fazer as alterações igualmente descritas para
    PostgreSQL.

Download do pacote conforme seu banco de dados (no manual utilizaremos o pacote
com PostgreSQL):

-   Wildfly 10.1.2 (PostgreSQL)
    : <http://files.citsmart.com/wildfly-10.1.0_postgres.tar.gz>

-   Wildfly 10.1.2
    (Oracle): <http://files.citsmart.com/wildfly-10.1.0_oracle.tar.gz>

-   Wildfly 10.1.2
    (MSSQL): <http://files.citsmart.com/wildfly-10.1.0_mssql.tar.gz>

-   Java JDK (qualquer banco): [http://files.citsmart.com/jdk1.8.0_131
    x64.tar.gz](http://files.citsmart.com/jdk1.8.0_131%20x64.tar.gz)

Servidor de banco de dados PostgreSQL/Oracle/MSSQL
--------------------------------------------------

   !!! note "NOTA"

      No manual utilizaremos PostgreSQL com download do repositório official.


O CITSmart GRP é compatível com o PostgreSQL 9.2 ou superior e o download será
feito no momento da configuração dos pacotes.

Recomenda-se que instalações de Oracle ou MSSQL sejam efetuados conforme
informações e melhores práticas de cada fabricante:

-   Oracle: <https://docs.oracle.com/cd/E11882_01/server.112/e10897/toc.htm>

-   MSSQL: <https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server>.

Configuração de pacotes
------------------------

!!! note "NOTA"

    Utiliza-se o diretório /opt para instalação de todos os pacotes para o
    CITSmart GRP e /etc/cas/config para a configuração do cas.**

    O GNU/Linux com instalação mínima deve estar configurado nas 2 máquinas.

    Utiliza-se neste manual Ubuntu Server LTS 16.04. Caso deseje utilizar
    outra distribuição altere os comandos conforme o gerenciamento de pacotes.

Com os downloads finalizados podemos dar início a instalação da solução CITSmart
GRP.

Servidor de aplicação Wildfly
-----------------------------

Devemos descompactar o pacote JAVA JDK no diretório /opt e criar dois links
simbólicos para o /usr/bin. Recomendamos que seu ambiente não possua nenhum JAVA
instalado. Execute java –version e confira a versão do java.

```sh
\# tar -xvzf jdk1.8.0_131-linux-x64.tar.gz -C /opt/

\# ln -s /opt/jdk1.8.0_131/bin/java /usr/bin

\# ln -s /opt/* *jdk1.8.0_131/bin/keytool /usr/bin

\# java -version

java version "1.8.0_131"

Java(TM) SE Runtime Environment (build 1.8.0_131-b11)

*Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)*
```

Extraia o Wildfly para o diretório /opt.

No exemplo abaixo utilizamos o Wildfly com o PostgreSQL configurado.

```sh
*\# tar -xvzf wildfly-10.1.0_postgres.tar.gz -C /opt/*
```

Agora devemos configurar o arquivo standalone-full.xml.

   !!! info "IMPORTANTE"

      Algumas configurações só serão possíveis após a instalação de todos os
      componentes da solução.

Para o banco de dados precisaremos de uma base, chamada de CITGRP_NAME_DB.

As seções necessárias de configuração estão demonstradas abaixo.

Existem **5 entradas** de datasource para o **CITGRP_NAME_DB**.

*\<!-- SET YOUR DATABASE INFORMATION - CHANGE IP_DB, PORT_DB, CITSMART_NAME_DB,
CITGRP_NAME_DB, USER_DB, PASSWD_DB --\>*

*\<connection-url\>jdbc:postgresql://IP_DB:PORT_DB/CITGRP_NAME_DB\</connection-url\>*

*\<driver\>postgres\</driver\>*

*\<pool\>*

*\<min-pool-size\>10\</min-pool-size\>*

*\<max-pool-size\>1000\</max-pool-size\>*

*\<flush-strategy\>IdleConnections\</flush-strategy\>*

*\</pool\>*

*\<security\>*

*\<user-name\>USER_DB\</user-name\>*

*\<password\>PASSWD_DB\</password\>*

SERVIDOR DE BANCO DE DADOS PostgreSQL/Oracle/MSSQL
--------------------------------------------------

O PostgreSQL podemos instalar diretamente do repositório da distribuição caso
seja igual ou superior a versão 9.2.

No manual estamos utilizando o Ubuntu Server LTS 16.0.4 que possuí a versão 9.5
no repositório.

*\# apt-get update*

*\# apt-get install postgresql-9.5*

Após instalar o PostgreSQL precisamos criar a base de dados, usuário e senha.

*\# systemctl start postgresql*

*\# su – postgres*

*\$ psql*

*\<mensagem CREATE DATABASE\>*

*postgres=\# create user citsmart with password 'yourpassword';*

*\<mensagem CREATE ROLE\>*

*postgres=\# create database citgrpdb with owner citsmart encoding 'UTF8'
tablespace pg_default;*

*\<mensagem CREATE DATABASE\>*

*postgres=\# alter role citsmart superuser;*

*\<mensagem ALTER ROLE\>*

*postgres=\#exit*

Observe o retorno dos comandos analisando a correta execução.

Agora iremos configurar o **/etc/postgresql/9.5/main/pg_hba.conf** para permitir
a conexão do Jboss para a database e usuário do citsmart. No final do arquivo
altere as linhas:

Hora de abrir o listening no arquivo **/etc/postgresql/9.5/main/postgresql.conf
.**

Após as configurações, de um restart no postgresql.

*Padrão:*

*host all all 127.0.0.1/32 md5*

*Alterado:*

*host CITGRP_NAME_DB USER_DB IP\_ Wildfly /32 md5*

*Padrão está comentado:*

*\#listen_addresses = 'localhost'*

*Alterado:*

*listen_addresses = ‘0.0.0.0'*

*\# systemctl restart postgresql*

CONFIGURAÇÃO DO CAS
-------------------

Execute a instrução mais indicada de instalação do CAS, segue dois exemplos:

1.  [Manual de instalação do Central Authentication Service (CAS) - versão 3.0
    (ITSM)](https://itsm.citsmartcloud.com/citsmart/pages/knowledgeBasePortal/knowledgeBasePortal.load#/knowledge/2718)

2.  [Manual de instalação do central authentication service (CAS) - versão 5.0
    (GRP)](https://itsm.citsmartcloud.com/citsmart/pages/knowledgeBasePortal/knowledgeBasePortal.load#/knowledge/2717)

Faça o download dos arquivos de configuração
em <http://files.citsmart.com/cas-config.tar.gz> e descompacte em
/etc/cas/config.

>   !!! note "NOTA"

>   Este acesso exigirá login e senha controlados pela CITSmart Corporation

*\# mkdir –p /etc/cas/config*

*\# tar xzvf cas-config.tar.gz –C /etc/cas/config*

Agora iremos configurar o cas para autenticação via banco de dados PostgreSQL.

Abra o arquivo **/etc/cas/config/cas.properties **e altere as informações de
conexão com o banco de dados.

*\# vim /etc/cas/config/cas.properties*

*cas.authn.jdbc.search[0].fieldUser=username*

*cas.authn.jdbc.search[0].tableUsers=seguranca_usuario*

*cas.authn.jdbc.search[0].fieldPassword=password*

*cas.authn.jdbc.search[0].healthQuery=SELECT 1*

*cas.authn.jdbc.search[0].isolateInternalQueries=false*

*cas.authn.jdbc.search[0].url=jdbc:postgresql://IP_DB:PORT_DB/CITGRP_NAME_DB*

*cas.authn.jdbc.search[0].failFast=true*

*cas.authn.jdbc.search[0].isolationLevelName=ISOLATION_READ_COMMITTED*

*cas.authn.jdbc.search[0].dialect=org.hibernate.dialect.PostgreSQL94Dialect*

*cas.authn.jdbc.search[0].leakThreshold=10*

*cas.authn.jdbc.search[0].propagationBehaviorName=PROPAGATION_REQUIRED*

*cas.authn.jdbc.search[0].batchSize=1*

*cas.authn.jdbc.search[0].user= USER_DB*

*cas.authn.jdbc.search[0].ddlAuto=validate*

*cas.authn.jdbc.search[0].maxAgeDays=180*

*cas.authn.jdbc.search[0].password= PASSWD_DB*

*cas.authn.jdbc.search[0].autocommit=false*

*cas.authn.jdbc.search[0].driverClass=org.postgresql.Driver*

*cas.authn.jdbc.search[0].idleTimeout=5000*

*cas.authn.jdbc.search[0].passwordEncoder.type=BCRYPT*

*\#cas.authn.jdbc.search[0].passwordEncoder.type=DEFAULT*

*cas.authn.jdbc.search[0].passwordEncoder.secret=*

*cas.authn.jdbc.search[0].passwordEncoder.characterEncoding=UTF-8*

*cas.authn.jdbc.search[0].passwordEncoder.strength=10*

*cas.authn.jdbc.search[0].passwordEncoder.encodingAlgorithm=MD5*

CONFIGURAÇÃO DO cit-app.properties
----------------------------------

>   Agora iremos configurar o arquivo cit-app.properties
>   em **/opt/wildfly/modules/system/layers/base/br/com/citsmart-grp/main/cit-app.properties **e
>   atualizar as informações conforme necessidade.

*\# 1 - Quando for autenticacao via banco de dados direto o arquivo
spring-security*

*\# 2 - Quando for autenticacao via jasig-cas o arquivo spring-security-cas*

*metodo.autenticacao=2*

*metodo.autenticacao.ldap=false*

*cas.return.url=https://10.2.1.82:8443/cit-portal-web/*

*authentication.method=spring-security-cas.xml*

*authentication.url=https://10.2.1.82:8443*

*server.port=8443*

*\# PROPRIEDADES DE AMBIENTE DE EXECUÇÃO*

*environment=dev*

*\#environment=prod*

*\# PROPRIEDADES DE PERSISTENCIA*

*hibernate.show.sql=false*

*hibernate.format.sql=true*

*hibernate.generate.ddl=true*

*hibernate.hbm2ddl.auto=validate*

*hibernate.use_sql_comments=false*

*hibernate.generate_statistics=true*

*hibernate.dialect= br.com.centralit.framework.util.PostgreSQLCustomDialect*

*\# PROPRIEDADES DE ARQUIVO MINIFICADOS*

*arquivoMinJS=false*

*\# PROPRIEDADES LOCAL TEMP DOCUMENTOS GERADO*

*documento.dir.output=/opt/wildfly/reports*

*documento.dir.duracao.dia=1*

*cron.expression.file.clean=0 0/1 \* 1/1 \* ? \**

*ecm.dir.privateKeyFile=/opt/wildfly/assets/private.der*

*ecm.dir.encryptedKeyFile=/opt/wildfly/assets/key.encrypt*

PARÂMETROS CITSmart GRP
-----------------------

!!! warning "ATENÇÃO"

>   Todos os parâmetros devem ser configurados antes do start completo da
>   solução.

*DataSource do standalone-full.xml*

*\<connection-url\>jdbc:postgresql://IP_DB:PORT_DB/CITGRP_NAME_DB\</connection-url\>*

*\<user-name\>USER_DB\</user-name\>*

*\<password\>PASSWD_DB\</password\>*

*IP_DB: configuração de rede do servidor de banco de dados PostgreSQL.*

*PORT_DB: Padrão 5432(PostgreSQL).*

*CITGRP_NAME_DB: Manual criado como citgrpdb.*

*USER_DB: Usuário de acesso a base. Manual criado com citsmart.*

*PASSWD_DB: Senha de acesso do usuário de banco. Manual criado com
yourpassword.*

GERAÇÃO DE CERTIFICADO AUTO ASSINADO SSL
----------------------------------------

!!! info "IMPORTANTE"

>   Para o Wildfly será gerado um certificado auto assinado. Caso você possua um
>   certificado é importante utiliza-lo.

Conecte no servidor do Wildfly.

*Deletando alias antigos.*

*\# keytool -keystore /opt/jdk1.8.0_131/jre/lib/security/cacerts -delete -alias
GRPv1*

*Criando alias novo com DNS (exemplo sub.example.com):*

*\# keytool -genkey -alias GRPv1 -keyalg RSA -keystore
/opt/wildfly/standalone/configuration/GRPv1.keystore -ext
san=dns:sub.example.com -validity 3650 -storepass 123456*

*Criando alias com IP do serviodor do Jboss (exemplo 10.2.1.82):*

*\# /keytool -genkey -alias GRPv1 -keyalg RSA -keystore
/opt/wildfly/standalone/configuration/GRPv1.keystore -ext
san=ip:10.2.1.82 -validity 3650 -storepass 123456*

*Exportando certificado para extensão .cer:*

*\# keytool -export -alias GRPv1 -keystore
/opt/wildfly/standalone/configuration/GRPv1.keystore -validity 3650 -file
/opt/wildfly/standalone/configuration/GRPv1.cer*

*Adicionando certificado no cacerts do Java:*

*\# keytool -keystore /opt/jdk1.8.0_131/jre/lib/security/cacerts -importcert
-alias GRPv1 -file /opt/wildfly/standalone/configuration/GRPv1.cer*

Após a geração do certificado, atualize as informações referente ao ssl
no **/opt/wildfly/standalone/configuration/standalone-full.xml** do Wildfly.

INICIANDO AS SOLUÇÕES SEGUINDO DEPENDÊNCIAS
-------------------------------------------

Podem ser criadas as daemons conforme padrão de sua empresa ou iniciar as
soluções no terminal.

**SERVIDOR DE BANCO DE DADOS PostgreSQL**

*\# systemctl postgresql start*

**SERVIDOR DE APLICAÇÃO Wildfly**

*\<security-realms\>*

*\<security-realm name="ManagementRealm"\>*

*\<authentication\>*

*\<local default-user="\$local" skip-group-loading="true"/\>*

*\<properties path="mgmt-users.properties"
relative-to="jboss.server.config.dir"/\>*

*\</authentication\>*

*\<authorization map-groups-to-roles="false"\>*

*\<properties path="mgmt-groups.properties"
relative-to="jboss.server.config.dir"/\>*

*\</authorization\>*

*\</security-realm\>*

*\<security-realm name="ApplicationRealm"\>*

*\<server-identities\>*

*\<ssl\>*

*\<keystore path="GRPv1.keystore" relative-to="jboss.server.config.dir"
keystore-password="123456" alias="GRPv1" key-password="123456"
generate-self-signed-certificate-host=" 10.2.1.82"/\>*

*\</ssl\>*

*\</server-identities\>*

*\<authentication\>*

*\<local default-user="\$local" allowed-users="\*" skip-group-loading="true"/\>*

*\<properties path="application-users.properties"
relative-to="jboss.server.config.dir"/\>*

*\</authentication\>*

*\<authorization\>*

*\<properties path="application-roles.properties"
relative-to="jboss.server.config.dir"/\>*

*\</authorization\>*

*\</security-realm\>*

*\</security-realms\>*

*\# /opt/wildfly/bin/standalone.sh -Djboss.bind.address=0.0.0.0*

DOWNLOAD DOS DEPLOYS DO CITSmart GRP
------------------------------------

Os deploys devem ser baixados conforme sua subscrição e login
em [http://files.citsmart.com/](http://files.citsmart.com/deploys).

Com os deploys em mãos, mova-os para o diretório deployments do Wildfly, na
seguinte ordem:

*\# cp cas.war /opt/wildfly/standalone/deployments/*

*\# cp cit-portal.war /opt/ wildfly/standalone/deployments/*

*\<continue conforme os deploys disponíveis para sua subscrição\>*

ACESSO AO CITSmart GRP
----------------------

Para acessar o CITSmart Enterprise, devemos acessar o IP ou DNS seguido da porta
e contexto.

!!! example "EXEMPLO"

>   Exemplo de URL: <https://10.2.1.82:8443/cit-portal-web>

O IP é o endereçamento da máquina onde o Wildfly está em execução. Ao invés do
IP pode-se utilizar um endereço DNS. O IP 10.2.1.82 é um exemplo de ip utilizado
para a criação desse ambiente.

O contexto cit-portal-web é o padrão do CITSmart GRP.

PRIMEIRO ACESSO
---------------

Digite a URL <https://10.2.1.82:8443/cit-portal-web>.

**Figura N - Tela de login do produto**

LOGIN E CONFIGURAÇÕES BÁSICAS
-----------------------------

Acesse o ambiente com usuário padrão admin e senha admin. No primeiro acesso é
necessário habilitar os módulos do Citsmart GRP.

Para habilitar os módulos vá até MENU, Definições do sistema, Segurança, Perfil
de acesso, selecione o perfil ROLE_ADMIN e edite suas informações, habilitando
os módulos conforme seu perfil de acesso, por exemplo: Dashboards, Definições do
sistema, Corporativo, Administração de Materiais, Contratos, etc.

!!! warning "ATENÇÃO"

>   Após habilitar os módulos salve, faça logout e login novamente.





!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/14/2019 – Anna Martins

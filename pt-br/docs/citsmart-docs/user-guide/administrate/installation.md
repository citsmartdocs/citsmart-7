title: Manual de instalação on-premise (Docs)
Description: Esse guia prático visa demostrar o passo a passo da instalação da
ferramenta CITSmart DOCS, seguindo padrões do servidor de aplicação Wildfly e
PostgreSQL server.

# Manual de instalação on-premise (Docs)

Esse guia prático visa demostrar o passo a passo da instalação da ferramenta
CITSmart DOCS, seguindo padrões do servidor de aplicação Wildfly e PostgreSQL
server.

Premissas
---------

Antes do início da instalação do **CITSmart Enterprise Docs**, é necessário
serem observadas estas principais premissas:

1.  Cabe ao Administrador da solução realizar a configuração de permissão de
    acesso a cada opção do menu principal do sistema para determinados usuários.

2.  O protocolo **https** é obrigatório, porém o Administrador pode optar por um
    certificado autoassinado.

3.  Segue a versão de cada Sistema Gerenciador de Banco de Dados compatível com
    a solução:,

    -   PostGreSQL (9.4+ 64bits)

    -   Microsoft SQL Server (2008+)

    -   ORACLE (10g+)

4.  Segue a versão de cada navegador compatível com a solução:

    -   Mozilla Firefox (50+)

    -   Google Chrome (50+)

5.  Segue a versão de cada software básico compatível com a solução:

    -   JBoss AS (7.1+)

    -   Solr (5.4.0)

    -   Java (1.7.0.71+)

    -   Activemq

    -   CAS (4.1)

6.  Segue a lista de cada componente da solução que devem estar disponíveis após
    devidamente instalados:

    -   cit-esi-web

    -   cit-portal-web

    -   cit-esi-listener-web

    -   cit-ecm-web

Requisitos mínimos
------------------

O ambiente de execução do **servidor de aplicação** Jboss deve possuir como
requisitos mínimos:


|             Máquina            |                     1 x GNU/Linux RedHat ou Debian (incluindo derivados)                     |
|:------------------------------:|:--------------------------------------------------------------------------------------------:|
|             Memória            |                                           8 GB RAM                                           |
|              Disco             | Disco: 50GB livre para a aplicação Disco: 1 TB livre para guarda de documentos (File System) |
|          Processadores         |                                           4 (vCPU)                                           |
| Leitura/Escrita em disco (I/O) |                                          > 150 MB/s                                          |
|              Rede              |                                          > 100 Mbps                                          |

O ambiente de execução do servidor Solr deve possuir como requisitos mínimos:

|             Máquina            | 1 x GNU/Linux RedHat ou Debian (incluindo derivados) |
|:------------------------------:|:----------------------------------------------------:|
|             Memória            |                       2 GB RAM                       |
|              Disco             |          Disco: 50GB livre para a aplicação          |
|          Processadores         |                       1 (vCPU)                       |
| Leitura/Escrita em disco (I/O) |                      > 150 MB/s                      |
|              Rede              |                      > 100 Mbps                      |

O ambiente de execução do servidor ActiveMQ deve possuir como requisitos mínimos:

|             Máquina            | 1 x GNU/Linux RedHat ou Debian (incluindo derivados) |
|:------------------------------:|:----------------------------------------------------:|
|             Memória            |                       2 GB RAM                       |
|              Disco             |          Disco: 50GB livre para a aplicação          |
|          Processadores         |                       1 (vCPU)                       |
| Leitura/Escrita em disco (I/O) |                      > 150 MB/s                      |
|              Rede              |                      > 100 Mbps                      |


Download
--------

!!! info "IMPORTANTE"

    Recomendamos Red Hat, CentOS, Debian ou Ubuntu

Para execução do CITSmart DOCS, baixaremos os pacotes necessários conforme o
procedimento relativo ao produto.

Servidor de aplicação wildfly
-----------------------------

!!! tip "DICA"

    Utilizaremos PostgreSQL, mas pode ser baixado pacote para Oracle ou MSSQL e
    fazer as alterações igualmente descritas para PostgreSQL

Download do pacote conforme seu banco de dados (no manual utilizaremos o pacote
com PostgreSQL):

-   Wildfly 10.1.2 (PostgreSQL): wildfly-10.1.0_postgres.tar.gz

-   Wildfly 10.1.2 (Oracle): wildfly-10.1.0_oracle.tar.gz

-   Wildfly 10.1.2 (MSSQL): wildfly-10.1.0_mssql.tar.gz

-   Java JDK (qualquer banco): jdk1.8.0_131_x64.tar.gz

-   Java JDK 7 para Solr jdk1.7.0_80_x64.tar.gz

!!! note "NOTA"

    Todos os nossos arquivos citados neste documento podem ser baixados na área
    de download da CITSmart Corporation a partir do
    link: [http://files.citsmart.com/](http://files.citsmart.com/wildfly-10.1.0_postgres.tar.gz).

Servidor de JMS Apache Activemq
-------------------------------

Apache ActiveMQ 5.14.5: apache-activemq-5.14.5.tar.gz

Servidor de banco de dados Postgresql/Oracle/MSSQL
--------------------------------------------------

Recomenda-se que instalações de Oracle ou MSSQL sejam efetuados conforme
informações e melhores práticas de cada fabricante:

-   Oracle*:* <https://docs.oracle.com/cd/E11882_01/server.112/e10897/toc.htm>

-   MSSQL*:* <https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server>.

Servidor de Indexação Apache Solr

-   Solr: solr-5.4.0.zip

-   Configurações para as collections do docs: collections-docs.tar.gz

!!! note "NOTA"

    Utilizaremos o diretório /opt para instalação de todos os pacotes para o
    CITSmart GRP, /etc/cas/config para a configuração do cas e /opt/arquivos para as
    indexações do solr.

Configuração dos pacotes
------------------------

!!! warning "ATENÇÃO"

    O GNU/Linux com instalação mínima deve estar configurado nas 3 máquinas. Nesse
    exemplo utilizaremos Ubuntu Server LTS 16.04. Caso deseje utilizar outra
    distribuição altere os comandos conforme o gerenciamento de pacotes.

Com os downloads finalizados podemos dar início a instalação da solução
propriamente dita.

Servidor de aplicação Wildfly
-----------------------------

```sh
# tar -xvzf jdk1.8.0_131-linux_x64.tar.gz -C /opt/
# ln -s /opt/jdk1.8.0_131/bin/java /usr/bin
# ln -s /opt/ jdk1.8.0_131/bin/keytool /usr/bin
# java -version
java version "1.8.0_131"
Java(TM) SE Runtime Environment (build 1.8.0_131-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)
```

Devemos descompactar o pacote JAVA JDK no diretório /opt e criar dois links
simbólicos para o /usr/bin. Recomendamos que seu ambiente não possua nenhum JAVA
instalado. Execute java –version e confira a versão do java.

Extraia o Wildfly para o diretório /opt.

```sh
# tar -xvzf wildfly-10.1.0_postgres.tar.gz -C /opt/
# mkdir /opt/arquivos
```

No exemplo abaixo utilizamos o Wildfly com o PostgreSQL configurado.

Agora devemos configurar o arquivo standalone-full.xml.

Algumas configurações só serão possíveis após a instalação de todos os
componentes da solução.

Para o banco de dados precisaremos de uma base, chamada de CITGRP_NAME_DB.

```sh
<!-- SET YOUR DATABASE INFORMATION - CHANGE IP_DB, PORT_DB, CITSMART_NAME_DB, CITGRP_NAME_DB, USER_DB, PASSWD_DB -->
<connection-url>jdbc:postgresql://IP_DB:PORT_DB/CITGRP_NAME_DB</connection-url>
<driver>postgres</driver>
<pool>
<min-pool-size>10</min-pool-size>
<max-pool-size>1000</max-pool-size>
<flush-strategy>IdleConnections</flush-strategy>
</pool>
<security>
<user-name>USER_DB</user-name>
<password>PASSWD_DB</password>
```

Existem **9 entradas** de datasource para o **CITGRP_NAME_DB**.

Servidor de banco de dados PostgreSQL/Oracle/MSSQL
--------------------------------------------------

O PostgreSQL podemos instalar diretamente do repositório da distribuição caso
seja igual ou superior a versão 9.2.

```sh
# apt-get update
# apt-get install postgresql-9.5
```

No manual estamos utilizando o Ubuntu Server LTS 16.0.4 que possuí a versão 9.5
no repositório.

```sh
# systemctl start postgresql
# su – postgres
$ psql
<mensagem CREATE DATABASE>
postgres=# create user citsmart with password 'yourpassword';
<mensagem CREATE ROLE>
postgres=# create database citgrpdb with owner citsmart encoding 'UTF8' tablespace pg_default;
<mensagem CREATE DATABASE>
postgres=# alter role citsmart superuser;
<mensagem ALTER ROLE>
postgres=#exit
```

Após instalar o PostgreSQL precisamos criar a base de dados, usuário e senha.

Observe o retorno dos comandos analisando a correta execução.

```sh
Padrão:
host all all 127.0.0.1/32 md5
Alterado:
host CITGRP_NAME_DB USER_DB IP_ Wildfly /32 md5
```

Agora iremos configurar o **/etc/postgresql/9.5/main/pg_hba.conf** para permitir
a conexão do Jboss para a database e usuário do citsmart. No final do arquivo
altere as linhas:

```sh
Padrão está comentado:
#listen_addresses = 'localhost'
Alterado:
listen_addresses = ‘0.0.0.0'
```

Hora de abrir o listening no arquivo **/etc/postgresql/9.5/main/postgresql.conf
.**

```sh
# systemctl restart postgresql
```

Após as configurações, de um restart no postgresql.

Servidor de JMS Apache Activemq
-------------------------------

```sh
# tar -xvzf apache-activemq-5.14.5.tar.gz -C /opt/
```

Descomprima o ActiveMQ no diretório /opt.

Configuração do CAS
-------------------

```sh
# mkdir –p /etc/cas/config
# tar xzvf cas-config.tar.gz –C /etc/cas/config
```

Faça o download dos arquivos de configuração em cas-config.tar.gz e descompacte
em /etc/cas/config.

Agora iremos configurar o **cas **para autenticação via banco de dados
PostgreSQL.

```sh
*\# vim /etc/cas/config/cas.properties cas.authn.jdbc.search[0].fieldUser=username cas.authn.jdbc.search[0].tableUsers=seguranca_usuario 
cas.authn.jdbc.search[0].fieldPassword=password 
cas.authn.jdbc.search[0].healthQuery=SELECT 1 
cas.authn.jdbc.search[0].isolateInternalQueries=false 
cas.authn.jdbc.search[0].url=jdbc:postgresql://IP_DB:PORT_DB/CITGRP_NAME_DB 
cas.authn.jdbc.search[0].failFast=true cas.authn.jdbc.search[0].isolationLevelName=ISOLATION_READ_COMMITTED cas.authn.jdbc.search[0].dialect=org.hibernate.dialect.PostgreSQL94Dialect 
cas.authn.jdbc.search[0].leakThreshold=10 
cas.authn.jdbc.search[0].propagationBehaviorName=PROPAGATION_REQUIRED 
cas.authn.jdbc.search[0].batchSize=1 cas.authn.jdbc.search[0].user= USER_DB 
cas.authn.jdbc.search[0].ddlAuto=validate cas.authn.jdbc.search[0].maxAgeDays=180 
cas.authn.jdbc.search[0].password= PASSWD_DB 
cas.authn.jdbc.search[0].autocommit=false 
cas.authn.jdbc.search[0].driverClass=org.postgresql.Driver 
cas.authn.jdbc.search[0].idleTimeout=5000 
cas.authn.jdbc.search[0].passwordEncoder.type=BCRYPT
#cas.authn.jdbc.search[0].passwordEncoder.type=DEFAULT 
cas.authn.jdbc.search[0].passwordEncoder.secret= 
cas.authn.jdbc.search[0].passwordEncoder.characterEncoding=UTF-8 
cas.authn.jdbc.search[0].passwordEncoder.strength=10 
cas.authn.jdbc.search[0].passwordEncoder.encodingAlgorithm=MD5
```

Abra o arquivo **/etc/cas/config/cas.properties** e altere as informações de
conexão com o banco de dados.

Servidor de indexação Apache Solr
---------------------------------

Instale o pacote unzip conforme sua distribuição.

```sh
# apt-get install unzip
# unzip -x solr-5.4.0.zip -d /opt/
# tar -xvzf jdk-1.7.0_80-linux-x64.tar.gz -C /opt/
# ln -s /opt/jdk-1.7.0_80/bin/java /usr/bin/
# java -version
java version "1.7.0_80"
Java(TM) SE Runtime Environment (build 1.7.0_80-b15)
Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode)
```

Descomprima o JAVA e Solr para /opt/.

Crie um usuário para execução do Solr com shell falso e dê permissão no
diretório do Solr para ele e inicie.

```sh
# tar xzvf collections-docs.tar.gz -C /opt/solr-5.4.0/server/solr
# useradd -s /bin/false solr
# chown -R solr. /opt/solr-5.4.0/
# sudo -u solr /opt/solr-5.4.0/bin/solr start
```

Descomprima o arquivo para configurações da collection.

Configuração dos arquivos ecm-key no servidor Wildfly
-------------------------------------------------

```sh
# tar xzvf ecm-key.tar.gz -C /opt/
```

Faça o download dos arquivos em ecm-key.tar.gz

Configuração do cit-app.properties
---------------------------------

```sh
# 1 - Quando for autenticacao via banco de dados direto o arquivo spring-security
# 2 - Quando for autenticacao via jasig-cas o arquivo spring-security-cas
metodo.autenticacao=2
metodo.autenticacao.ldap=false
cas.return.url=https://10.2.1.82:8443
authentication.method=spring-security-cas.xml
authentication.url=https://10.2.1.82:8443
server.port=8443
# PROPRIEDADES DE AMBIENTE DE EXECUÇÃO
environment=prod
# PROPRIEDADES DE PERSISTENCIA
hibernate.show.sql=false
hibernate.format.sql=true
hibernate.generate.ddl=true
hibernate.hbm2ddl.auto=validate
hibernate.use_sql_comments=false
hibernate.generate_statistics=true
hibernate.dialect= br.com.centralit.framework.util.PostgreSQLCustomDialect
```

Agora iremos configurar o arquivo cit-app.properties
em **/opt/wildfly/modules/system/layers/base/br/com/citsmart-grp/main/cit-app.properties **e
atualizar as informações conforme necessidade.

```sh
broker.url=tcp://IP_ACTIVEMQ:61616
esi.input.queue=esi.input.queue
esi.output.queue=esi.output.queue
esi.service.users=esi_service_users
esi.service.groups=esi_service_groups
esi.service.notification=esi_service_notification
esi.show.objects=false
esi.url=https://10.2.1.82:8443/cit-esi-listener-web/
## Configuracao URL PortalECM
portalecm.url=https://10.2.1.82:8443/cit-ecm-web/index
ecm.signature.privateKeyDocs=/opt/ecm-key/signature/citdocs.pfx
ecm.signature.publicKeyDocs=/opt/ecm-key/signature/citdocs.jks
ecm.user.integracao = integracao
docs.fluxo.padrao=ProcessoPadraodocs
ecm.solr.server=http://IP_SOLR:8983/solr/docs
ecm.dir.output=/opt/arquivos/
ecm.dir.encryptedKeyFile=/opt/ecm-key/key.encrypt
ecm.dir.privateKeyFile=/opt/ecm-key/private.der
ecm.doc.key.decrypted.document=FE7F13CDB20E794A
#ASSINATURA DIGITAL
ecm.signature.privateKeyFile=/opt/ecm-key/signature/private_key.der
ecm.signature.publicKeyFile=/opt/ecm-key/signature/public_key.der
# PROPRIEDADES DE ARQUIVO MINIFICADOS
arquivoMinJS=false
portalecm.recaptcha.key = 6LftgSITAAAAAFwEjCnZEpxkggBD_mDaEd4j19m0
## Configuracao URL PortalECM
portalecm.url=https://10.2.1.82:8443/cit-ecm-web/index
docs.fluxo.padrao=ProcessoPadraodocs
# PROPRIEDADES LOCAL TEMP DOCUMENTOS GERADO
documento.dir.output=/opt/wildfly/reports
documento.dir.duracao.dia=1
cron.expression.file.clean=0 0/1 * 1/1 * ? *
ecm.dir.privateKeyFile=/opt/wildfly/assets/private.der
ecm.dir.encryptedKeyFile=/opt/wildfly/assets/key.encrypt
```

Todos os parâmetros devem ser configurados antes do start completo da solução.

Parâmetros CITSmart DOCS
------------------------

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

Geração de certificados auto assinado SSL
-----------------------------------------

!!! info "IMPORTANTE"

    Para o Wildfly será gerado um certificado auto assinado. Caso você possua
    um certificado é importante utilizá-lo.

```sh
Deletando alias antigos.
# keytool -keystore /opt/ jdk1.8.0_131/jre/lib/security/cacerts -delete -alias GRPv1
Criando alias novo com DNS (exemplo sub.example.com):
# keytool -genkey -alias GRPv1 -keyalg RSA -keystore /opt/wildfly/standalone/configuration/GRPv1.keystore -ext san=dns:sub.example.com -validity 3650 -storepass 123456
Criando alias com IP do serviodor do Jboss (exemplo 10.2.1.82):
# /keytool -genkey -alias GRPv1 -keyalg RSA -keystore /opt/wildfly/standalone/configuration/GRPv1.keystore -ext san=ip:10.2.1.82 -validity 3650 -storepass 123456
Exportando certificado para extensão .cer:
# keytool -export -alias GRPv1 -keystore /opt/wildfly/standalone/configuration/GRPv1.keystore -validity 3650 -file /opt/wildfly/standalone/configuration/GRPv1.cer
Adicionando certificado no cacerts do Java:
# keytool -keystore /opt/jdk1.8.0_131/jre/lib/security/cacerts -importcert -alias GRPv1 -file /opt/wildfly/standalone/configuration/GRPv1.cer
```


Conecte no servidor do Wildfly.

```sh
<security-realms>
<security-realm name="ManagementRealm">
<authentication>
<local default-user="$local" skip-group-loading="true"/>
<properties path="mgmt-users.properties" relative-to="jboss.server.config.dir"/>
</authentication>
<authorization map-groups-to-roles="false">
<properties path="mgmt-groups.properties" relative-to="jboss.server.config.dir"/>
</authorization>
</security-realm>
<security-realm name="ApplicationRealm">
<server-identities>
<ssl>
<keystore path="GRPv1.keystore" relative-to="jboss.server.config.dir" keystore-password="123456" alias="GRPv1" key-password="123456" generate-self-signed-certificate-host=" 10.2.1.82"/>
</ssl>
</server-identities>
<authentication>
<local default-user="$local" allowed-users="*" skip-group-loading="true"/>
<properties path="application-users.properties" relative-to="jboss.server.config.dir"/>
</authentication>
<authorization>
<properties path="application-roles.properties" relative-to="jboss.server.config.dir"/>
</authorization>
</security-realm>
</security-realms>
```

Após a geração do certificado, atualize as informações referente ao ssl
no **/opt/wildfly/standalone/configuration/standalone-full.xml** do Wildfly.

Iniciando as soluções seguindo dependências
-------------------------------------------

Você pode criar as daemons conforme padrão de sua empresa ou iniciar as soluções
no terminal.

Servidor de banco de dados PostgreSQL:
--------------------------------------

```sh
# systemctl postgresql start
```


Servidor de aplicação Wildfly
-----------------------------

```sh
*\# /opt/wildfly/bin/standalone.sh -Djboss.bind.address=0.0.0.0*
```sh

Servidor de jms Apache ActiveMQ
-------------------------------

```sh
*\# /opt/apache-activemq-5.14.5/bin/activemq start*
```

Download dos deploys do CITSmart DOCS
-------------------------------------

```sh
# cp cas.war /opt/wildfly/standalone/deployments/
# cp cit-portal-web.war /opt/ wildfly/standalone/deployments/
# cp cit-esi-web.war /opt/ wildfly/standalone/deployments/
# cp cit-ecm-web.war /opt/ wildfly/standalone/deployments/
```

Com os deploys em mãos, mova-os para o diretório deployments do Wildfly.

Acesso ao CITSmart DOCS
-----------------------

Para acessar o CITSmart DOCS, devemos acessar o IP ou DNS seguido da porta e
contexto.

*Exemplo de URL: https://10.2.1.82:8443/cit-portal-web*

O IP é o endereçamento da máquina onde o Wildfly está em execução. Ao invés do
IP pode-se utilizar um endereço DNS. O IP 10.2.1.82 é um exemplo de ip utilizado
para a criação desse ambiente.

O contexto cit-portal-web é o padrão do CITSmart DOCS.

Primeiro acesso
---------------

Digite a URL https://127.0.0.1:8483/cit-portal-web.


![figura][images/install-1.png]

**Figura 1 - Tela inicial**

Login e configurações básicas
-----------------------------

Acesse o ambiente com usuário padrão admin e senha admin.   
No primeiro acesso é necessário habilitar os módulos do Citsmart Docs.  
Para habilitar os módulos vá até MENU, Definições do sistema, Segurança, Perfil
de acesso, selecione o perfil ROLE_ADMIN e edite suas informações, habilitando
os módulos conforme seu perfil de acesso. Ex: Dashboards, Definições do sistema,
Corporativo, Docs, Auditoria, Workflow/ESI, Builder.  
Após habilitar os módulos salve, faça logout e login novamente.

Recomendações para a atualização de versão deste produto
--------------------------------------------------------

### Pré-condições

Para realizar o processo de atualização do Citsmart Docs deve realizar os
procedimentos de segurança que são:

-   Backup da Aplicação;

-   Backup do Servidor;

-   Backup de Integrações

Backup da aplicação
-------------------

Realize o backup da aplicação conforme os passos descritos abaixo:

```sh
# cp cas.war /diretório de backup/
# cp cit-portal-web.war /diretório de backup/
# cp cit-esi-web.war /diretório de backup/
# cp cit-ecm-web.war /diretório de backup/
```

Backup do servidor
------------------

É recomendado realizar o backup da base de dados do Citsmart Docs e utilizar a
prática de snapshot da máquina virtual para acelerar o processo de rollback,
pois é uma prática segura e disponível em todas as plataformas de virtualização
disponíveis no mercado.

Caso tenha alguma dúvida para realizar o backup da base de dados, entre em
contato com a equipe de suporte do Citsmart.

Backup de integrações
---------------------

É recomendado verificar integração e realizar backup da base. Consultar
orientações de backup diretamente do proprietário do serviço.

Integração:

-   Solr;

Para realização da atualização da versão, proceder conforme as rotinas descritas
abaixo:

1. Realize o download dos arquivos:

-   *cit-portal-web.war*

-   *cit-ecm-web.war*

-   *cit-esi-web.war*

2. Acesse o site, realize o login e clique na aba “Downloads”;

-   Será exibida uma página contendo os links para download dos arquivos
    necessários para atualização do Software Citsmart que são:

    -   Documentação da versão;

    -   Versão do Citsmart Docs atualizado.

3. Efetue o download de todos os arquivos citados acima;

-   Será exibida uma janela para realização do download do arquivo. A
    documentação no formato.pdf e o arquivo de atualização (.zip);

4. Realize o download dos arquivos;

-   Os arquivos serão salvos no local de download padrão no computador;

5. Após conclusão do download, abra a pasta na qual os arquivos estão
armazenados e descompacte os mesmos.

6. Pare o Wildfly (Esta rotina é necessária devido às várias rotinas feitas no
momento em que o Wildfly é iniciado);

7. Na pasta deployments do Wildfly (*/opt/ wildfly/standalone/deployments/*),
copie os arquivos abaixo para um diretório de backup, caso seja necessário
voltar à versão, estes arquivos serão necessários;

```sh
# cp cas.war /diretório de backup/
# cp cit-portal-web.war /diretório de backup/
# cp cit-esi-web.war /diretório de backup/
# cp cit-ecm-web.war /diretório de backup/
```

8. Copie os arquivos abaixo, o qual foi feito download e descompactados para a
pasta deployments do Wildfly:

```sh
# cp cas.war /opt/wildfly/standalone/deployments/
# cp cit-portal-web.war /opt/ wildfly/standalone/deployments/
# cp cit-esi-web.war /opt/ wildfly/standalone/deployments/
# cp cit-ecm-web.war /opt/ wildfly/standalone/deployments/
```

9. Delete as pastas “tmp/” do diretório (*/opt/wildfly/standalone/*);

10. Feito isso, inicie o Wildfly ;

11.Realize a validação da atualização conforme tópico seguinte.

!!! warning "ATENÇÃO"

    Siga corretamente está validação, pois o sistema ficará bloqueado aos
    usuários até este passo tenha sido realizado.

Validação da atualização
------------------------

É necessário que o Administrador realize a validação da atualização para que o
sistema opere de forma correta.

Após realizar o Login no sistema, será exibida uma tela para validação da
atualização, caso ocorra erro de script;

Caso ocorra alguma inconsistência durante a execução de scripts automática no
sistema, será exibida uma tela, onde serão indicados os scripts com
inconsistência, conforme abaixo:

   ![figura][images/install-2.png]

  **Figura 2 - Tela de atualização do modelo de dados**

Clique no botão **Visualizar scripts não executados** para visualizar os scripts
no sistema:

  ![figura][images/install-3.png]
  
  **Figura 3 - Tela de visualização dos scripts com erros**

Para realizar as tratativas dos scripts com inconsistência, clique no botão
download, e será baixado um arquivo no formato csv contendo os scripts que não
foram executados com sucesso:

  ![figura][images/install-4.png]
  
  **Figura 4 - Arquivo csv com os scripts que serão executados**

Copie os scripts indicados e rode no banco de dados;

Após rodar os scripts no banco de dados, clique no botão **Confirmar atualização
do sistema** para que a atualização do sistema seja validada. Caso não tenha
efetuado a validação da atualização, o sistema ficará bloqueado para os usuários
até que o mesmo seja validado;

Feito isso, a atualização do sistema será validada com sucesso e poderá ser
utilizado normalmente.

!!! warning "ATENÇÃO"

    Caso os scripts não sejam rodados antes da confirmação da atualização do
    sistema, problemas pedem ocorrer na execução do sistema.

Ocr imagens
-----------

Para que o procedimento de Ocr em imagens possa ser executado deve-se instalar o
pacote **build-essential** e a lib **leptonica 1.72.**

Para instalar os pacotes descritos acima, proceder conforme as rotinas descritas
abaixo: *obs. Todos os comandos devem ser executados com o usuário root.*

1. Atualizar e baixar as informações de todos os repositórios disponíveis:

-   **apt-get update**

2. Instalar o pacote **build-essential:**

-   **apt-get install build-essential**

3. Fazer o download da lib **leptonica 1.72:**

-   **wget http://www.leptonica.com/source/leptonica-1.72.tar.gz**

-   Descompacte o arquivo baixado com o comando: **tar -xvf leptonica-1.72.tar**

-   Após o arquivo ser descompactado será criado um diretório com o
    nome **leptonica-1.72**, entre nesse diretório com o comando: **cd
    leptonica-1.72**

-   Dentro do diretório **leptonica-1.72** conceda permissão de execução para o
    arquivo **configure** com o comando: **chmod 777 configure**

-   Concedida permissão de execução para o arquivo **configure** execute o arquivo
    com o comando: **./configure**

-   Faça o build da lib com o comando: **make**

-   Por fim instale a lib com o comando: **make install**

Configurar tamanho máximo de arquivo para upload
------------------------------------------------

Para configurar o tamanho máximo de arquivos para upload deve-se editar o
arquivo **standalone-full.xml** que se encontra no
caminho: **/opt/wildfly-10.1.0.Final/standalone/configuration/**

Dentro do arquivo **standalone-full.xml** procurar as tags:

-   **\<http-listener name="default" socket-binding="http" max-post-size="52428800" max-header-size="52428800" redirect-              socket="https"enable-http2="true"/\>**

-   **\<https-listener name="https" socket-binding="https" max-post-size="52428800" max-header-size="52428800"
    security-realm="ApplicationRealm" enable-http2="true"/\>**

Alterar os valores dos atributos *max-post-size* e *max-header-size* para o
valor desejado, por exemplo: *52428800 *significa que a aplicação aceita upload
de arquivos com tamanho de no máximo 50 mega bytes.


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/14/2019 – Anna Martins


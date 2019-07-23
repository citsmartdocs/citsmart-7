title: Manual de instalação on-premise (ITSM)
Description: Esse guia prático visa demostrar o passo a passo da instalação e
atualização da ferramenta CITSmart Enterprise.

# Manual de instalação on-premise (ITSM)

Esse guia prático visa demostrar o passo a passo da instalação e atualização da
ferramenta CITSmart Enterprise.

Pré-condições
------------

1.  O protocolo **https** é obrigatório, porém o Administrador pode optar por um
    certificado auto assinado.

2.  Segue a versão de cada Sistema Gerenciador de Banco de Dados compatível com
    a solução:

    -   PostGreSQL (9.2+)

    -   Microsoft SQL Server (2008+)

    -   ORACLE (10g+)

    -   MongoDB (3.4.5)

3.  Segue a versão de cada navegador compatível com a solução:

    -   Internet Explorer (10+)

    -   Mozilla Firefox (50+)

    -   Google Chrome (50+)

4.  Segue a versão de cada software básico compatível com a solução:

    -   Sistema operacional GNU / Linux com um kernel de 3.10+

    -   JBoss (7.1.2)

    -   Apache Solr (6.4.2)

    -   Java (1.7.0.80+)

    -   JMS Apache ActiceMQ (5.14.5+)

5.  A instalação do CITSmart é um processo automatizado e sua principal premissa
    é que a integridade do resultado só pode ser garantida se a instalação
    estiver completa e bem sucedida, desde o início até o fim. Em caso de falha,
    desligamento ou falha no ambiente operacional durante o processo de
    instalação, quando esta instalação for disparada novamente, uma mensagem
    será exibida para a equipe responsável pela instalação **("AVISO IMPORTANTE:
    Identificamos que algum tipo de problema ocorreu em uma execução anterior
    desse mesmo processo de instalação do Citsmart, que pode ter causado danos
    ao banco de dados. Portanto, como precaução, o arquivo de banco de dados
    atual não pode mais ser usado. Recomendamos que, manualmente, a equipe
    responsável por esta instalação substitua esse banco de dados por um novo e
    reinicia o processo de instalação")**. As etapas mais detalhadas são estas:

    -   Termine este processo de instalação;

    -   Exclua (manualmente) o arquivo de banco de dados;

    -   Crie o arquivo de banco de dados novamente;

    -   Reinicie o processo de instalação.

Requisitos mínimos
-----------------

-   O ambiente de execução do **servidor de aplicação** Jboss e o servidor de
    JMS Apache ActiceMQ deve possuir como requisitos mínimos:

|                            Máquina                            | 1 x GNU/Linux RedHat ou Debian (incluindo derivados) |
|---------------------------------------------------------------|------------------------------------------------------|
|                            Memória                            |                       16 GB RAM                      |
|                             Disco                             |                        120 GB                        |
|                         Processadores                         |                       4 (vCPU)                       |
|                 Leitura/Escrita em disco (I/O)                |                      > 150 MB/s                      |
|                              Rede                             |                      > 100 Mbps                      |
| Saltos para soluções (Bancos, EVM, INV, MongoDB, Coletor WMI) |                Mesma rede, sem saltos                |


**Tabela 1 - Requisitos Mínimos**

-   O ambiente de execução do **servidor de banco de dados** deve possuir como
    requisitos mínimos:

|                           Máquina                           | 1 x GNU/Linux RedHat ou Debian (incluindo derivados) |
|:-----------------------------------------------------------:|:----------------------------------------------------:|
|                           Memória                           |                         4 GB                         |
|                            Disco                            |                        120 GB                        |
|                        Processadores                        |                       2 (vCPU)                       |
|                Leitura/Escrita em disco (I/O)               |                      > 150 MB/s                      |
|                             Rede                            |                      > 100 Mbps                      |
| Saltos para soluções (ISTM, EVM, INV, MongoDB, Coletor WMI) |                Mesma rede, sem saltos                |


**Tabela 2 - Requisitos Mínimos**

   O ambiente de execução do **servidor de banco de dados
   não-relacional** MongoDB deve possuir como requisitos mínimos:

|                           Máquina                          | 1 x GNU/Linux RedHat ou Debian (incluindo derivados) |
|:----------------------------------------------------------:|:----------------------------------------------------:|
|                           Memória                          |                         4 GB                         |
|                            Disco                           |                        120 GB                        |
|                        Processadores                       |                       2 (vCPU)                       |
|               Leitura/Escrita em disco (I/O)               |                      > 150 MB/s                      |
|                            Rede                            |                      > 100 Mbps                      |
| Saltos para soluções (Bancos, EVM, INV, ITSM, Coletor WMI) |                Mesma rede, sem saltos                |


**Tabela 3 - Requisitos Mínimos**

-   O ambiente de execução do **servidor de indexação** Apache Solr deve
    possuir como requisitos mínimos:

|                           Máquina                           | 1 x GNU/Linux RedHat ou Debian (incluindo derivados) |
|:-----------------------------------------------------------:|:----------------------------------------------------:|
|                           Memória                           |                         4 GB                         |
|                            Disco                            |                        120 GB                        |
|                        Processadores                        |                       2 (vCPU)                       |
|                Leitura/Escrita em disco (I/O)               |                      > 150 MB/s                      |
|                             Rede                            |                      > 100 Mbps                      |
| Saltos para soluções (ISTM, EVM, INV, MongoDB, Coletor WMI) |                Mesma rede, sem saltos                |

**Tabela 4 - Requisitos Mínimos**

-   O ambiente de execução do **servidor ms-windows para coletas via WMI** deve
    possuir como requisitos mínimos:

|                         Máquina                        |       1 x Windows      |
|                         Memória                        |          8 GB          |
|                          Disco                         |          80 GB         |
|                      Processadores                     |        8 (vCPU)        |
|             Leitura/Escrita em disco (I/O)             |       > 150 MB/s       |
|                          Rede                          |       > 100 Mbps       |
| Saltos para soluções (Bancos, EVM, INV, ITSM, MongoDB) | Mesma rede, sem saltos |

**Tabela 5 - Requisitos Mínimos**

Software e download
------------------

  !!! info "IMPORTANTE"

      Recomendamos Red Hat, CentOS, Debian ou Ubuntu.

  !!! Abstract "SAIBA MAIS"

      Todos os nossos arquivos citados neste documento podem ser baixados
      acessando a área de download da CITSmart Corporation
      ([http://files.citsmart.com](http://files.citsmart.com/))

Para execução do CITSmart, baixaremos os pacotes necessários conforme o
procedimento relativo ao produto.

## Servidor de Aplicação Jboss

Download do pacote conforme seu banco de dados (no manual utilizaremos o pacote
com PostgreSQL):

   -   Jboss (PostgreSQL) : jboss-7.1.2_postgres.tar.gz

   -   Jboss (Oracle): jboss-7.1.2_oracle.tar.gz

   -   Jboss (MSSQL): jboss-7.1.2_mssql.tar.gz

   -   Java JDK (qualquer banco): jdk1.7.0_80_x64.tar.gz

## Servidor de JMS Apache ActiveMQ

   -   Apache ActiveMQ 5.14.5: apache-activemq-5.14.5.tar.gz

   -   Java JDK: jdk1.7.0_80_x64.tar.gz

## Servidor de Banco de Dados MongoDB

   -   Para localizar o download conforme sua
    distribuição: <https://www.mongodb.com/download-center#community>

   -   Para o download do MongoDB para Ubuntu Server LTS
    16.04: <https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-3.4.5.tgz>

## Servidor de Banco de Dados PostgreSQL/Oracle/MSSQL

O CITSmart é compatível com o PostgreSQL ou superior e o download será feito no
momento da configuração dos pacotes.

Recomenda-se que instalações de Oracle ou MSSQL sejam efetuados conforme
informações e melhores práticas de cada fabricante:

-   *Oracle:* <https://docs.oracle.com/cd/E11882_01/server.112/e10897/toc.htm>

-   *MSSQL:* <https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server>.

## Servidor de Indexação Apache Solr

-   Configurações para base de conhecimento:
    http://files.citsmart.com/base_conhecimento_configs.zip

Configuração dos pacotes
-----------------------

!!! note "NOTA"

     Utilizaremos o diretório /opt para instalação de todos os pacotes. O
     GNU/Linux com instalação mínima deve estar configurado nas 4 máquinas. Neste
     exemplo usaremos Unbuntu, caso queira usar outra distribuição altere os
     comandos conforme o gerenciamento de pacotes.

Com os downloads finalizados podemos dar início a instalação da solução
CITSmart.

## Servidor de Aplicação Jboss

1.  Devemos descompactar o pacote JAVA JDK no diretório /opt e criar dois links
    simbólicos para o /usr/bin. Recomendamos que seu ambiente não possua nenhum
    JAVA instalado. Execute java –version e confira a versão do java.

    ```sh
    # tar -xvzf jdk-1.7.0_80-linux-x64.tar.gz -C /opt/
    # ln -s /opt/jdk1.7.0_80/bin/java /usr/bin
    # ln -s /opt/jdk1.7.0_80/bin/keytool /usr/bin
    # java -version
    java version "1.7.0_80"
    **Java(TM) SE Runtime Environment (build 1.7.0_80-b15)**
    **Java HotSpot(TM) 64-Bit Server VM (build 24.80-b11, mixed mode)**
    ```

2.  Extraia o Jboss para o diretório /opt.

3.  No exemplo abaixo utilizamos o Jboss com o PostgreSQL configurado.

   ```sh
   # tar -xvzf jboss-7.1.2_postgres.tar.gz -C /opt/
   ```

4.  Agora devemos configurar o arquivo standalone-full.xml.

**Algumas configurações só serão possíveis após a instalação de todos os
componentes da solução**.

    ```sh
    <!-- SET TRUE TO ENABLE EVM -->
    <property name="citsmart.evm.enable" value="false"/>
    <!-- SET TRUE TO ENABLE INVENTORY -->
    <property name="citsmart.inventory.enable" value="false"/>
    <!-- SET MONGODB IP -->
    <property name="mongodb.host" value="IP_MONGODB"/>
    <!-- SET MONGODB PORT -->
    <property name="mongodb.port" value="PORT_MONGODB"/>
    <!-- SET MONGODB USER -->
    <property name="mongodb.user" value="USER_MONGODB"/>
    <!-- SET MONGODB PASSWORD -->
    <property name="mongodb.password" value="PASSWD_MONGODB"/>
    <!-- SET CITSMART IP -->
    <property name="citsmart.host" value="127.0.0.1"/>
    <!-- SET CITSMART PORT -->
    <property name="citsmart.port" value="8080"/>
    <!-- SET CITSMART CONTEXT -->
    <property name="citsmart.context" value="citsmart"/>
    <!-- SET CITSMART ADMINISTRATOR LOGIN -->
    <property name="citsmart.login" value="consultor"/>
    <!-- SET CITSMART ADMINISTRATOR PASSWORD -->
    <property name="citsmart.password" value="password"/>
    <!-- SET CITSMART INVENTORY ID -->
    <property name="citsmart.inventory.id" value="inventory_local"/>
    <!-- SET CITSMART EVM ID -->
    <property name="citsmart.evm.id" value="evm_local"/>
    ```
    
5.  As seções necessárias de configuração estão demonstradas abaixo e estarão
    explicadas na seção **"Parâmetros CITSmart"**.

6.  Para o banco de dados precisaremos de duas bases, chamadas de
    CITSMART_NAME_DB e CITGRP_NAME_DB.

7.  Existem **4 entradas** de datasource para o **CITSMART_NAME_DB**.

    ```sh
    <!-- SET YOUR DATABASE INFORMATION - CHANGE IP_DB, PORT_DB, CITSMART_NAME_DB, CITGRP_NAME_DB, USER_DB, PASSWD_DB -->
    <connection-url>jdbc:postgresql://IP_DB:PORT_DB/CITSMART_NAME_DB</connection-url>
    <driver>postgres</driver>
    <pool>
    <min-pool-size>10</min-pool-size>
    <max-pool-size>1000</max-pool-size>
    <prefill>true</prefill>
    <flush-strategy>FailingConnectionOnly</flush-strategy>
    </pool>
    <security>
    <user-name>USER_DB</user-name>
    <password>PASSWD_DB</password>
    ```

8.  Existem **9 entradas** de datasource para o **CITGRP_NAME_DB**.

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
    
**Servidor de JMS Apache ActiveMQ**

Descomprima o ActiveMQ e JAVA no diretório /opt e crie o link simbólico do JAVA.

    ```sh
    # tar -xvzf apache-activemq-5.14.5.tar.gz -C /opt/
    # tar -xvzf jdk-1.7.0_80-linux-x64.tar.gz -C /opt/
    # ln -s /opt/jdk1.7.0_80/bin/java /usr/bin
    ```

**Servidor de Banco de Dados MongoDB**

1.  Após baixar o MongoDB para sua correta distribuição, deve-se efetuar a
    descompressão para o diretório /opt.

    ```sh
    # tar -xvzf mongodb-linux-x86_64-ubuntu1604-3.4.5.tgz -C /opt/
    ```

2.  Devemos criar um diretório para a base e iniciar o MongoDB. Repare que ele
    irá subir com permissões irrestritas de acesso.

    ```sh
    # mkdir -p /data/db
    # cd /opt/mongodb-linux-x86_64-ubuntu1604-3.4.5/bin/
    #./mongod
    <mensagens de acesso irrestrito>
    ```

3.  Com o MongoDB iniciado, abra outro terminal, acesse o diretório bin do
    MongoDB e crie a base CITSmart definindo seu usuário e senha.

4.  O retorno “**Successfully added user**” deve ser observado.

5.  Digite exit para sair do console do MongoDB.

    ```sh
    # cd /opt/mongodb-linux-x86_64-ubuntu1604-3.4.5/bin/
    # ./mongo
    <mensagens de acesso irrestrito>
    use admin
    db.createUser({
    user: "admin",
    pwd: "yourpassword",
    roles:[
    { role: "root", db: "admin" },
    { role: "dbOwner", db: "citsmart" }
    ]
    })
    ```

6.  Retorne ao terminal anterior e finalize o processo do mongodb com um CTRL+C.
   
    
    
    

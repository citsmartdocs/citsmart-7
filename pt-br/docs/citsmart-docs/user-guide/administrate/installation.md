title: Manual de instalação on-premise (Docs)

Description: Esse guia prático visa demostrar o passo a passo da instalação da
ferramenta CITSmart DOCS, seguindo padrões do servidor de aplicação Wildfly e
PostgreSQL server.

\# Dicionário do banco de dados (Docs)

Esse guia prático visa demostrar o passo a passo da instalação da ferramenta
CITSmart DOCS, seguindo padrões do servidor de aplicação Wildfly e PostgreSQL
server.

Premissas
---------

Antes do início da instalação do **CITSmart Enterprise Docs**, é necessário
serem observadas estas principais premissas:

1.  Cabe ao Administrador da solução realizar a configuração de permissão de
    acesso a cada opção do menu principal do sistema para determinados usuários.

2.  O protocolo **https **é obrigatório, porém o Administrador pode optar por um
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


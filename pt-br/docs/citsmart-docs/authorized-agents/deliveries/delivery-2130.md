title: Documento de entrega GRP Docs 2.1.3.0 e COR 3.1.5.4
Description: Documento de entrega GRP Docs 2.1.3.0 e COR 3.1.5.4

# Documento de entrega GRP Docs 2.1.3.0 e COR 3.1.5.4

-   **Nome da Solução**: CITSmart Enterprise GRP Docs

-   **Versão**: 2.1.3.0

-   **Documento criado em**: 29/06/2018

-   **Versão entregue em**: 29/06/2018

-   **Última alteração em**: 29/06/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Docs 2.1.3.0**

    -   [FTP](http://kb.citsmartcloud.com/entregas/papelzero/Enterprise/2.1.3.0/)

2.  **CITSmart Corporativo 3.1.5.4**

    -   [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.4/)

3.  **CITSmart ESI 4.0.1.2**

    -   [FTP](http://kb.citsmartcloud.com/entregas/papelzero/Enterprise/2.1.1.0/cit-esi-web-4.0.1.2.war)

**ESCOPO**


|  DEMANDA  |                                        ASSUNTO / MÓDULO                                       | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:---------:|:---------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| RDM#15695 | [CORREÇÃO] Erro ao atualizar os usuários do banco com a rotina de importação de usuários LDAP |           |                        |
| RDM#15056 |          [REVISÃO] Revisão de regra para alteração do campo Localização do Documento          |           |                        |
| RDM#15570 |    [CORREÇÃO] O sistema está permitindo a remoção de processo que contém documento incluído   |           |                        |


**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

1.  Nenhuma.

**SCRIPTS SQL**

-   **PostgreSQL**

    1.  Nenhum

-   **MS-SQLServer**

    1.  Nenhum.

-   **Oracle**

    1.  Nenhum.

**ORIENTAÇÕES ANTERIORES QUE DEVEM SER OBSERVADAS NESTA ENTREGA**

1.  É recomendada uma análise detalhada dos seguintes itens encontrados no
    documento de **Entrega anterior**:

    -   Lista de conhecimentos impactados

    -   Seção de impactos nos manuais de instalação/configuração

    -   Seção de orientações especiais

**PRÁTICAS DE SEGURANÇA AO ATUALIZAR O PRODUTO**

1.  Realizar uma cópia de segurança (*backup*):

    -   da aplicação (war)

    -   do banco de dados

    -   do solr

2.  Executar os scripts conforme orientações contidas neste documento

3.  Salvar o log da execução dos scripts no banco de dados para que eventuais
    imprevistos possam ser devidamente tratados


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/14/2019 – Anna Martins
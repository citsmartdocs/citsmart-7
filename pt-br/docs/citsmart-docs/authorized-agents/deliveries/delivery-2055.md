title: Versão 2.0.5.5 GRP Contratos; 3.1.6.3 Portal; 3.0.8.6 ADM/PATR/ALM; 4.1.0.3 ESI
Description: Versão 2.0.5.5 GRP Contratos; 3.1.6.3 Portal; 3.0.8.6 ADM/PATR/ALM; 4.1.0.3 ESI
# Versão 2.0.5.5 GRP Contratos; 3.1.6.3 Portal; 3.0.8.6 ADM/PATR/ALM; 4.1.0.3 ESI

-   **Nome da Solução**: CITSmart Enterprise GRP Contratos / Administração de
    Materiais / ESI

-   **Versão**: 2.0.5.5

-   **Documento criado em**: 18/10/2018

-   **Versão entregue em**: 18/10/2018

-   **Última alteração em**: 18/10/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Contratos 2.0.5.5**

    -   [FTP](http://kb.citsmartcloud.com/entregas/grpcontratos/2.0.5.5)

2.  **CITSmart Corporativo 3.1.6.3**

    -   [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.6.3)

3.  **CITSmart ESI 4.0.1.3**

    -   [FTP](http://kb.citsmartcloud.com/entregas/neuro/4.0.1.3)

4.  **CITSmart Adminitração de materiais 3.0.8.6**

    -   [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.8.6)

**ESCOPO**

|  DEMANDA  |                                                                                                                              ASSUNTO / MÓDULO                                                                                                                             | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:---------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| ITSM 7721 | Solicito alteração no sistema para que as informações do empenho sejam obtidas a partir de consulta na base de dados do SIAFI , por meio de view, nos menus "Contratos" (passo 3 - Informações do empenho e licitação) e "Acompanhamento -> Registro de nota de empenho". |           |                        |
| ITSM 2946 |              [DNIT] – O cliente solicita que seja possível inserir ‘N’ itens do contrato, que possuam especificação diferentes, sem a necessidade de digitar o item ‘N’ vezes. Solicita também, que seja possível inserir a unidade de medida para cada item              |           |                        |


**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

**SCRIPTS SQL**

-   **PostgreSQL**

    1.  Nenhum.

-   **MS-SQLServer**

    1.  script_migracao_itens_cnt.sql.

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

2.  Salvar o log da execução dos scripts no banco de dados para que eventuais
    imprevistos possam ser devidamente tratados

3.  Executar o script anexado "script_migracao_itens_cnt.sql" após atualizar o
    sistema e realizar o primeiro login


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/20/2019 – Anna Martins

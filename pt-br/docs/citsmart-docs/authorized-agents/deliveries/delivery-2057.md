title: Versão 2.0.5.7 GRP Contratos / 3.1.8.1 Portal / 4.0.0.2 ADM/PATR/ALM

Description: Versão 2.0.5.7 GRP Contratos / 3.1.8.1 Portal / 4.0.0.2
ADM/PATR/ALM

# Versão 2.0.5.7 GRP Contratos / 3.1.8.1 Portal / 4.0.0.2 ADM/PATR/ALM

-   **Nome da Solução**: CITSmart Enterprise GRP Contratos / Corporativo /
    Administração de Materiais

-   **Versão**: 2.0.5.7

-   **Documento criado em**: 12/12/2018

-   **Versão entregue em**: 12/12/2018

-   **Última alteração em**: 12/12/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Contratos 2.0.5.7**

    -   [FTP](http://kb.citsmartcloud.com/entregas/grpcontratos/2.0.5.7)

2.  **CITSmart Corporativo 3.1.8.1**

    -   [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.8.1)

3.  **CITSmart Adminitração de materiais 4.0.0.2**

    -   [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/4.0.0.2)

**ESCOPO**

|  DEMANDA  |                                                                                                                                                                                                                                                                                         ASSUNTO / MÓDULO                                                                                                                                                                                                                                                                                         | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:---------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| ITSM 8582 |                                                                                                                                                                                                                                                               Criação de script para migração de dados para base de dados Postgres                                                                                                                                                                                                                                                               |           |                        |
| ITSM 8583 |                                                                                                                                                                                                                       Estavam faltando vários scripts para base de dados PostGres no módulo Contratos.Necessário criar vários ajustes no GRP para a base de dados PostGres.                                                                                                                                                                                                                      |           |                        |
| ITSM 8507 | Módulo VersãoContratos 2.0.5.4.20180927192200Portal 3.1.6.2.20180927195903Esta versão encontra-se instalada no cliente TJAM, porém, foi cadastrado um contrato (001/2017), em seguida, cadastrei um termo aditivo para este contrato. Ocorre que, o termo aditivo está desaparecendo do sistema.Ja consultamos os logs, e foi verificado que não tem registro gravado.Tentamos atualizar a versão, com a mesma que está no cliente DNIT (mais recente), sem sucesso. A versão do DNIT só funcionou com o banco de dados SQL.Precisamos receber uma versão preparada para a execução no postgres. |           |                        |

**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

**SCRIPTS SQL**

-   **PostgreSQL**

    1.  cnt_migracao_materiais.sql.

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

2.  Salvar o log da execução dos scripts no banco de dados para que eventuais
    imprevistos possam ser devidamente tratados

3.  **Executar o script anexado "cnt_migracao_materiais.sql" após atualizar o
    sistema e realizar o primeiro login**
    
    !!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/20/2019 – Anna Martins



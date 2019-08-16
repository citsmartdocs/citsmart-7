title: Documento de entrega GRP ADM 3.0.6.1
Description: Documento de entrega GRP ADM 3.0.6.1

# Documento de entrega GRP ADM 3.0.6.1

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais

-   **Versão**: 3.0.6.1

-   **Documento criado em**: 03/05/2018

-   **Versão entregue em**: 03/05/2018

-   **Última alteração em**: 03/05/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Administração de Materiais 3.0.6.1**

    -   [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.6.1)

2.  **CITSmart Corporativo 3.1.4.2**

    -   [FTP](https://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.4.2)

**ESCOPO**


|     DEMANDA    |                                                 ASSUNTO / MÓDULO                                                | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:--------------:|:---------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| REDMINE #13783 |              [PAT].[TRANSFERENCIA EXTERNA] - Finalizar definições de detentor dos bens transferidos             |           |                        |
|   ITSM #4906   | Ao tentar trocar o detentor o sistema informa que o bem já está com o detentor escolhido, porem são diferentes. |           |                        |


**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

1.  Essa versão do portal não deve ser utilizada juntamento com o ITSM versão
    7.2.3.7 ou superior.

**SCRIPTS SQL**

-   **PostgreSQL**

    1.  Nenhum.

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

2.  Executar os scripts conforme orientações contidas neste documento

3.  Salvar o log da execução dos scripts no banco de dados para que eventuais
    imprevistos possam ser devidamente tratados

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/16/2019 – Anna Martins

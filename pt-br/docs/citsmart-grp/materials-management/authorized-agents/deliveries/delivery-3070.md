title: Documento de entrega GRP ADM 3.0.7.0 e COR 3.1.5.0

Description: Documento de entrega GRP ADM 3.0.7.0 e COR 3.1.5.0

# Documento de entrega GRP ADM 3.0.7.0 e COR 3.1.5.0

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais

-   **Versão**: 3.0.7.0

-   **Documento criado em**: 13/05/2018

-   **Versão entregue em**: 13/05/2018

-   **Última alteração em**: 13/05/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Administração de Materiais 3.0.7.0**

    -   [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.7.0)

2.  **CITSmart Corporativo 3.1.5.0**

    -   [FTP](https://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.0)


|     DEMANDA    |                                                                                       ASSUNTO / MÓDULO                                                                                      | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:--------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| REDMINE #14372 |                                              [PAT].[DEFINICAO DE DETENTOR] - Permitir duas definições de detentor diferentes para o mesmo dia.                                              |           |                        |
|   ITSM #4971   |                                   No menu bem patrimonial, ao gerar o relatório analítico ou a ficha individual, não esta saindo o digito nos relatórios.                                   |           |                        |
|   ITSM #4936   |                                         Na transferência externa no campo bem patrimonial ao tentar selecionar uma sequência o sistema não encontra.                                        |           |                        |
|   ITSM #4804   | Foi realizada algumas transferências entre contas porem os valores ainda constam nas contas antiga no RMA,Identificamos o problema inicialmente nas UGS do Rio grande do Norte e na AHIPAR. |           |                        |
|                |                                                                                                                                                                                             |           |                        |

**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

**SCRIPTS SQL**

-   **PostgreSQL**

    1.  Nenhum.

-   **MS-SQLServer**

    1.  Executar script TCC_ENTRE_CONTAS_CONSUMO.SQL e
        TCC_ENTRE_CONTAS_PERMANENTE.SQL no cliente DNIT.

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

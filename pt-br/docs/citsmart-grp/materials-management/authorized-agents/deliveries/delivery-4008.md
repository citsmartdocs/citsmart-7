title: Documento de entrega ADM Materiais 4.0.0.8

Description: Documento de entrega ADM Materiais 4.0.0.8

# Documento de entrega ADM Materiais 4.0.0.8

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais

-   **Versão**: 4.0.0.8

-   **Documento criado em**: 13/03/2019

-   **Versão entregue em**: 13/03/2019

-   **Última alteração em**: 13/03/2019

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

ATENÇÃO, esta versão tem dependência do módulo [Corporativo
3.1.8.5]()

**DOWNLOADS**

>   **CITSmart Enterprise GRP Administração de Materiais 4.0.0.8**

-   [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/4.0.0.8/)

**ESCOPO**


|   DEMANDA  |                                                                                                                DESCRIÇÃO                                                                                                                | CONHECIMENTO IMPACTADO |
|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------:|
| ITSM #8657 |                                                                                           Problema na re-criação das procedures de fechamento                                                                                           |                        |
| ITSM #8984 |                                                                                    Problemas com regra de movimentação contábil na requisição externa                                                                                   |                        |
| ITSM #8853 |                                                                                       Transferência interna não gera mais o termo de transferência                                                                                      |                        |
| ITSM #8909 |                                                                           Sistema fica carregando relatório de posição de estoque do almoxarifado para sempre                                                                           |                        |
| ITSM #8854 |                                                                                       Sistema está criando histórico indevido de bens patrimoniais                                                                                      |                        |
| ITSM #8647 |                                     Estamos com as requisições externas paradas por conta desses problemas, vários chamados reportados pelo DNIT que precisam realizar os ajustes para Fechar o mês.                                    |                        |
| ITSM #8011 |                                                                                                   Problema no cálculo do Almoxarifado                                                                                                   |                        |
| ITSM #8643 |                                                                                              Erros no relatórios de Estoque de Almoxarifado                                                                                             |                        |
| ITSM #9415 | A está tentando atender 3 requisições externas, uma da unidade de AMAPÁ e 02 da unidade da AHIMOC, acontece que mesmo após atender ele não some da lista de atendidas e consequentemente as unidades não conseguem fazer o recebimento. |                        |


**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

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

2.  MUITO IMPORTANTE, limpar o cache do navegador ao utilizar a versão nova.

**PRÁTICAS DE SEGURANÇA AO ATUALIZAR O PRODUTO**

1.  ATENÇÃO, Realizar uma cópia de segurança (*backup*):

    -   da aplicação (war)

    -   do banco de dados

2.  Executar os scripts conforme orientações contidas neste documento

3.  Salvar o log da execução dos scripts no banco de dados para que eventuais
    imprevistos possam ser devidamente tratados


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/16/2019 – Anna Martins

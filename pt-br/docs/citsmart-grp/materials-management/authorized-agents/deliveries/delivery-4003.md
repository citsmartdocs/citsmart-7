title: Documento de entrega ADM Materiais 4.0.0.3
Description: Documento de entrega ADM Materiais 4.0.0.3

# Documento de entrega ADM Materiais 4.0.0.3

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais e
    Corporativo

-   **Versão**: 4.0.0.3 e 3.1.8.2

-   **Documento criado em**: 26/12/2018

-   **Versão entregue em**: 26/12/2018

-   **Última alteração em**: 26/12/2018

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Administração de Materiais 4.0.0.3**

-   [One
    Drive](https://citsmart-my.sharepoint.com/personal/paulo_santos_citsmart_com/_layouts/15/guestaccess.aspx?docid=04f37197b9b154657a14ebbb191e7cf4b&authkey=ARc4l7-eA_ZQO-ZXT8G-VRk&expiration=2019-01-25T02%3A00%3A00.000Z&e=7lRiGu)

1.  **CITSmart Enterprise GRP Corporativo 3.1.8.2**

-   [One
    Drive](https://citsmart-my.sharepoint.com/personal/paulo_santos_citsmart_com/_layouts/15/guestaccess.aspx?docid=04d3c159aa31c4dafa58cdaeac3d35ae9&authkey=ASz44bXFj9D-kVdIaixcB5w&expiration=2019-01-25T02%3A00%3A00.000Z&e=8DlY7a)

**ESCOPO**


|   DEMANDA  |                          ASSUNTO / MÓDULO                         |                                                                                                              DESCRIÇÃO                                                                                                             | CONHECIMENTO IMPACTADO |
|:----------:|:-----------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------:|
| ITSM #8586 | Correção de atualização de Status de Bem na Transferência interna | Correção de erro na atualização de Status de Bens no processo de Transferência Interna. Os status de depreciação dos bens que estão armazenados no almoxarifado, não estavam sendo atualizados ao realizar seu processo de aceite. |                        |
| ITSM #8307 |       Correção de erro na apresentação da data de Referência      |                                                                                 Correção na apresentação do mês de referência no WorkSpace do GRP.                                                                                 |                        |
| ITSM #8618 |  Correção no resumo contábil do relatório de Reavaliação de Bens  |                Correção no somatório de redução e somatório de reavaliação, os valores não estavam sendo carregados corretamente, foi necessário fazer uma correção para o valor total da conta no resumo contábil.                |                        |
| ITSM #8562 |   Correção na tratativa de inventário por Transferência Interna   |                                                        Correção na tratativa de inventário utilizando Transferência Interna, o sistema estava apresentando falha inesperada.                                                       |                        |
| ITSM #8650 |            Alteração no relatório de Baixas no período            |                                            Alteração no relatório de Baixas no período no sentido de inverter as colunas de somatório de depreciação e valor líquido no resumo contábil.                                           |                        |
| ITSM #8009 |        Correções no processo de cadastro Reavaliação do GRP       |                             Correções nos cálculos dos valores de reavaliação e redução, Correção na atualização dos status, Correção na geração dos movimentos conforme regras solicitados no ticket.                             |                        |


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

2.  Foi identificado um bug no processo de inventário de Materiais, porém,
    devido a urgência do ticket 8562 foi acordado com a Central IT na pessoa da
    Priscila esta entrega está sendo antecipada sem a correção do bug citado.

**PRÁTICAS DE SEGURANÇA AO ATUALIZAR O PRODUTO**

1.  Realizar uma cópia de segurança (*backup*):

    -   da aplicação (war)

    -   do banco de dados

2.  Executar os scripts conforme orientações contidas neste documento

Salvar o log da execução dos scripts no banco de dados para que eventuais
imprevistos possam ser devidamente tratados


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/16/2019 – Anna Martins

title: Documento de entrega ADM Materiais 4.0.0.5, Corporativo 3.1.8.3 e
Contratos 2.0.5.9

Description: Documento de entrega ADM Materiais 4.0.0.5, Corporativo 3.1.8.3 e
Contratos 2.0.5.9

\#Documento de entrega ADM Materiais 4.0.0.5, Corporativo 3.1.8.3 e Contratos
2.0.5.9

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de
    Materiais,Corporativo e Contratos.

-   **Versão**: 4.0.0.5 e 3.1.8.3 e 2.0.5.9 respectivamente.

-   **Documento criado em**: 11/01/2018

-   **Versão entregue em**: 14/01/2018

-   **Última alteração em**: 14/01/2018

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Administração de Materiais 4.0.0.5**

-   [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/4.0.0.5/)

1.  **CITSmart Enterprise GRP Corporativo 3.1.8.3**

-   [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.8.3/)

1.  **CITSmart Enterprise GRP Contratos 2.0.5.9**

-   [FTP](http://kb.citsmartcloud.com/entregas/grpcontratos/2.0.5.9/)

**ESCOPO**


|   DEMANDA  |                                              DESCRIÇÃO                                              |                                                                                      CONHECIMENTO IMPACTADO                                                                                     |
|:----------:|:---------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| ITSM #8690 |                          Ajustes na procedure de fechamento do almoxarifado                         | Foram feitas duas correções nas procedures de fechamento conforme conforme solicitado pelo DBA Ramonn, a primeira a inclusão de um filtro, a segunda a inclusão da condição de exclusão lógica. |
| ITSM #8637 |                         Alteração no valor original do empenho do Contrato.                         |                                    Correção no módulo de contratos sobre o processo de inclusão de nota de empenho, foi feita a correção conforme solicitada.                                   |
| ITSM #8696 |                             Migração da versão do Builder (App Frotas).                             |                                                  A versão das funcionalidade do módulo de Frotas foram migradas para a última versão do Builder                                                 |
| ITSM #8116 |                              Correção no processo de Saída Temporária.                              |              Correção no processo de saída temporária, especificamente na função de saída de cessão, foi feita a correção do movimento e ajuste de regras de edição dos registros.              |
| ITSM #7909 | Problema no menu de adm. de materiais. (Foi verificado junto a Mayra que não foi possível simular). |                                  Analisamos novamente a funcionalidade e entramos em contato com a Mayra que nos confirmou que o problema já estava corrigido.                                  |
| ITSM #8454 |                                  Impacto na requisição de materiais                                 |                            Correção no processo de requisição de materiais, resolvendo o impacto de regra de escolha de materiais causado pela versão 3.0.0.9 (CLDF)                            |
| ITSM #8574 |                    Ajuste na criação de inventário anual de materiais de consumo.                   |                                                           Correção no processo de criação do inventário anual de materiais de consumo.                                                          |
| ITSM #8657 |                   Verificar problema no drop e create das procedures de fechamento                  |                                                     Correção no script de geração das procedures de fechamento de Almoxarifado e Patrimônio.                                                    |
| ITSM #8011 |                            Ajustes em regras de requisição de Materiais.                            |                                          Correção das regras de atualização de preço médio e resto médio, conforme as regras passadas pelo DBA Ramonn.                                          |
| ITSM #8574 |             Erro em cadastrar um inventário, sistema carrega mais itens do que deveria.             |                             Criação de filtro na consulta dos materiais para trazer apenas os materiais de entrada, conforme regra alinhada com a analista Priscila.                            |
| ITSM #8658 |         Correção no ListView do GRP (Telas do GRP eram chamadas 2 vezes e causavam demora).         |                                                             Correção realizada no GRP para melhorar o uso de recursos pelo sistema.                                                             |


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

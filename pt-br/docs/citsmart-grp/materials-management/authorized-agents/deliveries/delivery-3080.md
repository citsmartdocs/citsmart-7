title: Documento de entrega GRP ADM 3.0.8.0 e COR 3.1.5.4

Description: Documento de entrega GRP ADM 3.0.8.0 e COR 3.1.5.4

\#Documento de entrega GRP ADM 3.0.8.0 e COR 3.1.5.4

-   **Nome da Solução**: CITSmart Enterprise GRP Contratos

-   **Versão**: 3.0.8.0

-   **Documento criado em**: 26/06/2018

-   **Versão entregue em**: 28/06/2018

-   **Última alteração em**: 28/06/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Administração de Materiais 3.0.8.0**

    -   [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.8.0)

2.  **CITSmart Corporativo 3.1.5.4**

    -   [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.4)

**ESCOPO**


|    DEMANDA    |                                                                                                                                                                                                                   ASSUNTO / MÓDULO                                                                                                                                                                                                                   |        DESCRIÇÃO        | CONHECIMENTO IMPACTADO |
|:-------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------:|:----------------------:|
| Redmine 15555 |                                                                                                                                                                                [PAT].[Requisição Externa] - Permissão para cadastrar requisição externa para outra UG                                                                                                                                                                                |        ITSM 3202        |                        |
|   ITSM 4635   |                                                                                                                               Ao atender a requisição 2018000214, e outras com mais de 15 materiais, o sistema demorou mais de 1 minuto para mostrar quantidade em estoque e quantidade fornecida na última requisição.                                                                                                                              |                         |                        |
|   ITSM 6221   |                                                                                                                                                                     Sistema não está retirando bens excluídos da Transferência externa quando cria a entrada de bens no destino.                                                                                                                                                                     |                         |                        |
|   ITSM 2898   |                 No Relatório Bens NÃO Encontrados ao marcar a opção â€œNenhumâ€ o sistema apresenta mensagem â€œInforme uma ou mais unidades do inventário para gerar o relatório.â€ o usuário precisa da relação do bens não encontrados de todo inventário, porém o sistema obriga a informar a unidade o que não faz sentido já que o botão nenhum foi marcado. O sistema deve buscar em todas as estruturas de ULs inventariadas.                | Corrigido na Enterprise |                        |
|   ITSM 3613   | Ao pesquisar as ULs no inventário, selecionar a UL pesquisada, gravar o inventário, clicar no botão "Confirmar Inventário", o sistema acusa que não há estruturas selecionadas para o inventário. O erro acontece somente quando é realizada a pesquisa da UL. Informo que esse erro já foi reportado para versão Enterprise chamado 2911 atendido e para versão commurnity 3321 em andamento, porém o erro voltou a acontecer na versão Enterprise. | Corrigido na Enterprise |                        |
|   ITSM 4871   |                                                                                             No relatório de SELEÇÃO DE BENS por algum motivo apresente na descrição do bem dados que não são do bem ex: livro 00502355/ 00502356 automóvel 01335487/ 01334930. Ao consultar os bens essas características não aparecem. verificar e corrigir o relatório.                                                                                            |                         |                        |
|   ITSM 6052   |                                                                                                                                                         Alteração no relatório de transferência externa em trânsito pois o saldo não estava correto de acordo com o relatório de depreciação.                                                                                                                                                        |                         |                        |


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


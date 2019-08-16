title: Documento de entrega GRP ADM 3.0.5.3 e corporativo 3.1.4.0
Description: Documento de entrega GRP ADM 3.0.5.3 e corporativo 3.1.4.0

# Documento de entrega GRP ADM 3.0.5.3 e corporativo 3.1.4.0

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais

-   **Versão**: 3.0.5.3

-   **Documento criado em**: 17/04/2018

-   **Versão entregue em**: 17/04/2018

-   **Última alteração em**: 17/04/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Administração de Materiais 3.0.5.3**

    -   [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.5.3)

2.  **CITSmart Corporativo 3.1.4.0**

    -   [FTP](https://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.4.0)

**ESCOPO**


|   DEMANDA  |                                                                                                                                                                                                                                                                      ASSUNTO / MÓDULO                                                                                                                                                                                                                                                                     | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| ITSM #4633 |                                                                                                                                                                                  Foi realizado o recebimento dos bens enviados da SEDE DF para a SER/CE que gerou a entrada 2018000254.Acontece que ao emitir o relatório muitos bens no relatório estão sem patrimônio.                                                                                                                                                                                  |           |                        |
| ITSM #4637 |                                                                                                                                  O cliente escolheu em definições gerais a opção digito verificador, porem quando vou em busca avançada no menu bem patrimonial aparece as opções sufixo e prefixo, ficando a tela em questão demasiadamente poluída.Solicito que apareça somente a opção escolhida em definições gerais.                                                                                                                                 |           |                        |
| ITSM #4638 |                                                                                                                                                                                    Ao emitir o relatório de transferência entre UGs no período do mês de março notamos que a transferência 2017000087 que apareceu no relatório também aparece no período de fevereiro.                                                                                                                                                                                   |           |                        |
| ITSM #1503 |                                                                                                                                                                                                                            Ao emitir o relatório Entradas por período, um campo é apresentado suprimido: "Quantidade total de".                                                                                                                                                                                                                           |           |                        |
|    2969    | Adm de materiais: 3.0.3.1 Portal: 3.1.1.6 [DNIT] - Ao tentar emitir o relatório Analítico no contexto de Menu > Patrimônio > Bem Patrimonial, o sistema informa que o relatório foi gerado, porém, ao solicitar o download foi apresentada a mensagem de erro (conforme anexo). Obs: No ambiente de Produção do cliente não apresenta a mensagem de erro ""Status 404"". Porém, não emite o relatório nem retorna com nenhuma mensagem. Utilizei com exemplo: UG: DNIT - SEDE; Busca avançada; Itens ativos; Selecionar todos; Gerar Relatório Analítico. |           |                        |


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


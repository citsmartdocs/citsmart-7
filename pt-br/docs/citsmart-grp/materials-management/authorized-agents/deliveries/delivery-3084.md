title: Documento de entrega GRP ADM 3.0.8.4
Description: Documento de entrega GRP ADM 3.0.8.4

# Documento de entrega GRP ADM 3.0.8.4

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais.

-   **Versão**: 3.0.8.4

-   **Documento criado em**: 14/09/2018

-   **Versão entregue em**: 14/09/2018

-   **Última alteração em**: 14/09/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Administração de Materiais 3.0.8.4**

    -   [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.8.4)

2.  **CITSmart Enterprise GRP Corporativo 3.1.6.1**

    -   [FTP](https://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.6.1)

**ESCOPO**


|  DEMANDA  |                                                                                                                                                                                                                                                          ASSUNTO / MÓDULO                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                              DESCRIÇÃO                                                                                                                                                                                                                                                                                                             |                                                                                                                                                              CONHECIMENTO IMPACTADO                                                                                                                                                              |
|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| ITSM 7073 |                                                          No Relatório de Inventário Geral Por Patrimônio o digito verificador (último número do sequencial do patrimônio) não aparece no relatório.Obs: o número de patrimônio deve aparece de forma completa em todos os relatórios de inventário.passo 1: Menu > Administração de materiais > Inventário > Relatórios diversospasso 2: Relatório Termo de Inventário Geral > seleciona o inventário > Gerar relatório.                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                  |
| ITSM 6052 | O cliente da UG SEDE-DF informar que o relatório de depreciação está com várias diferenças, ao analisar notamos que os valores de da coluna (L) e (M) que são os valores referente as transferências entre UGs não estou de acordo com o relatório de transferência entre UGs, ou seja, os valores estão divergentes.Todo o exemplo está baseado na UG SEDE DF e na conta 0102, porém, o problema ocorre em outras UG e outras CONTAS.Estou encaminhando abaixo dois prints que mostram as divergências, solicito ajuste urgente. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                  |
| ITSM 3379 |                                                                                                                                           Ao emitir o RMB, notamos que falar o saldo na conta 123119951 - BENS MOVEIS A RECEBER, pois o saldo entrou no mês de outubro de 2017, porém não sai nos meses de novembro 2017, dezembro 2017 e janeiro de 2018.Assim solicito ajuste urgente.                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                  |
| ITSM 7103 |  Ao concluir o inventário finalizar todas as tratativas, clicar no botão FECHAR INVENTÁRIO o sistema emite mensagens “Só é possível fechar o inventário, se todos os bens forem inventariados!”, porém todos os bens foram tratados não restando bens na condição de “não informado”. Realizada consulta na base (imagem anexo/ passo 3), pegando o inventário 2018000006 como exemplo, observamos que as ULs foram duplicadas podendo ser esse o motivo para a mensagem que não permite finalizar o inventario, como também o motivo das duplicações dos patrimônios que ocorrem nos relatórios (chamados: 7075, 7077, 7078, 7085). passo 1: Menu > Administração de materiais > Inventário > Inventário de bens > consulta inventário 2018000006 > consta 5 ULs.passo 2: Clica no botão Fechar Inventário > o sistema apresenta mensagem “Só é possível fechar o inventário, se todos os bens forem inventariados!”passo 3: Imagem da base de dados referente ao inventário criado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |  |  |
| ITSM 7427 |                                                                                                                                                                            UG MG, ao tentar cadastrar uma requisição, escolho a UR 1439 e quando vou informar os materiais o mesmo não aparece quando digito somente o código.Solicito ajuste urgente.                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                  |
| ITSM 6830 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                  |
| ITSM 7401 |                                                                                                                                                                                              Adicionar validações para não permitir alterar uma unidade localizadora para o tipo Almoxarifado quando existem bens vinculados a mesma.                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                  |
| ITSM 7465 |                                                                                                                                                  O sistema está emitindo mensagem de erro em anexo ao tentar cadastrar um Órgão.Passos para reprodução do erro:1) Acessar o menu Corporativo >> Estrutura organizacional >> Órgão2) Preencher os campos obrigatórios e confirmar.                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                  |


**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

**Nenhuma**

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

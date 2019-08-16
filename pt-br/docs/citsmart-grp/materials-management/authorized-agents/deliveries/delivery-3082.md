title: Documento de entrega GRP ADM 3.0.8.2 e GRP COR 3.1.5.6
Description: Documento de entrega GRP ADM 3.0.8.2 e GRP COR 3.1.5.6

# Documento de entrega GRP ADM 3.0.8.2 e GRP COR 3.1.5.6

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais.

-   **Versão**: 3.0.8.2

-   **Documento criado em**: 14/08/2018

-   **Versão entregue em**: 14/08/2018

-   **Última alteração em**: 14/08/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Corporativo 3.1.5.6**

    -   [FTP](https://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.6)

2.  **CITSmart Enterprise GRP Administração de Materiais 3.0.8.2**

    -   [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.8.2)

**ESCOPO**


|  DEMANDA  |                                                                                                                                                                                                                                                                       ASSUNTO / MÓDULO                                                                                                                                                                                                                                                                       |                                                                                                       DESCRIÇÃO                                                                                                       | CONHECIMENTO IMPACTADO |
|:---------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------:|
| ITSM 6802 |                                                                                                                                                                                                             Em RELATÓRIOS DIVERSOS ao emitir o relatório CONSUMO DE UNIDADES REQUISITANTES POR CONTA CONTÁBIL, o mesmo não apresenta os valores.                                                                                                                                                                                                             |                                                                                                                                                                                                                       |                        |
| ITSM 6758 |                                                                                                                                                                                                                                                  Problema com anexos também foi corrigido no ADM Materiais.                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                       |                        |
| ITSM 7007 |                                                                                                                                                                                     É possível editar uma baixa almoxarifado com data fora da referência vigente.Abrir uma baixa com a opção "Visualizar" e usar a opção "Editar" no registro que está sendo visualizado.                                                                                                                                                                                    |                                                                                                                                                                                                                       |                        |
| ITSM 6630 |                                                                                                                                                                                                  Ao cadastrar um ressuprimento no momento de informar o material o sistema apresenta mensagem de "falha inesperada" não permitindo configurar a notificação.                                                                                                                                                                                                 |                                                                                                                                                                                                                       |                        |
| ITSM 7055 | na UG DF na conta final 0107 - verificar os seguintes lançamentos que os valores estão diferentes entre o relatório de transferencia entre UGs e o relatório de depreciação são elas:no mês de outubro 2017 valor no relatório de transferencia 525,92 no depreciação 210,32no mês de janeiro 2018 valor no relatório de transferencia 631,,08 no depreciação 552,18no mês de março 2018 valor no relatório de transferencia 2.629,60 no depreciação 2.366,60ajustando esses valores as contas vão bater com o SIAFI,veja porque os valores estão diferentes | DOC explicando como conferir anexado ao chamado.Excel com todas as organizações, contas, e valores que serão impactados no mês 201808 em anexo no chamado.Executar os scripts de acordo com a ordem no nome do mesmo. |                        |
| ITSM 6826 |                                                                                                                                                                                                               Ao gerar o relatório Termo de Responsabilidade do Inventário por Unidade o sistema apresenta mensagem "Erro ao gerar relatório!"                                                                                                                                                                                                               |                                                                               Script específico deve ser executado para o cliente MCTI.                                                                               |                        |
| ITSM 6827 |                                                                                      Ao gerar o relatório Termo de Responsabilidade do Inventário por Unidade, selecionar as unidades, marcar a opção NENHUM o sistema apresenta mensagem "Informe uma ou mais unidades do inventário para gerar o relatório". Ao marcar a opção NENHUM quer disser que não desejo escolher as unidade e sim gerar o relatório de todas ao mesmo tempo. Por favor corrigir o problema.                                                                                       |                                                                                                                                                                                                                       |                        |
| ITSM 7010 |                                                                                                                                                                                                                                                   Contador da diretiva de bens patrimoniais está incorreto.                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                       |                        |
| ITSM 7060 |                   A transferência externa 2018000001 do almoxarifado impacta nos relatórios das UG's DF e MG.Conforme resultado da consulta 2, observa-se que houve saída e entrada na conta 91 (MATERIAIS DE SINALIZACAO) na UG 27 (DF) e saída da conta 106 (EM TRANSITO). O mesmo ocorre para MG, mudando apenas a conta 106 para 107 (BENS A RECEBER).Contudo, ao meu ver, o correto seria:UG 27 (DF): sair da conta 91, entrar na conta 106, sair da conta 106.UG 18 (MG): entrar na conta 107, sair da conta 107, entrar na conta 91                   |                                                                               Script específico para o cliente DNIT deve ser executado.                                                                               |       específico       |
| ITSM 6980 |                                                                                                                                                                                                                Ao realizar a emissão do relatório de Reavaliação de Bens Detalhado o sistema apresenta mensagem de "Erro ao gerar relatório!".                                                                                                                                                                                                               |                                                                                                                                                                                                                       |                        |


**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

**Scripts estão na pasta scripts no mesmo link dos deploys do ADM.**

**O script é referente ao ITSM 6826 deve ser executado apenas no cliente MCTI.**

**Executar os scripts ITSM_7055 de acordo com a ordem no nome dos mesmos,
somente para o cliente DNIT.**

**O script referente ao ITSM 7060 deve ser executado somente no cliente DNIT.**

**SCRIPTS SQL**

-   **PostgreSQL**

    1.  Nenhum.

-   **MS-SQLServer**

    1.  ITSM_6826.sql (SOMENTE MCTI)

    2.  01-ITSM_7055.sql (SOMENTE DNIT)

    3.  02-ITSM_7055.sql (SOMENTE DNIT)

    4.  ITSM_7060.sql (SOMENTE DNIT)

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


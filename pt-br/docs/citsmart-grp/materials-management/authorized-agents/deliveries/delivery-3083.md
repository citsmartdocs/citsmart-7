title: Documento de entrega GRP ADM 3.0.8.3
Description: Documento de entrega GRP ADM 3.0.8.3

# Documento de entrega GRP ADM 3.0.8.3

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais.

-   **Versão**: 3.0.8.3

-   **Documento criado em**: 31/08/2018

-   **Versão entregue em**: 31/08/2018

-   **Última alteração em**: 31/08/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Corporativo 3.1.5.7**

    -   [FTP](https://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.7)

2.  **CITSmart Enterprise GRP Administração de Materiais 3.0.8.3**

    -   [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.8.3/)

**ESCOPO**



|  DEMANDA  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ASSUNTO / MÓDULO                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| ITSM 7381 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Alterar o cadastro de estruturaOrganizacional para validar "Uma unidade definida como almoxarifado só pode ter essa definição removida se não possuir bens associados."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |           |                        |
| ITSM 7104 |                                                                                                                                                                                                                                                                                                                                 Módulo: Inventário: Versão: 3.0.8.2.20180814210224 Cliente: DNIT   O campo de pesquisa por número patrimonial não comporta o último digito, após a inclusão do digito verificador que foi inserido para o cliente DNIT, esse campo não foi alterado dentro do modulo de inventário. Inserir mais um digito aos campos: Nº sequencial do patrimônio Inicial Nº sequencial do patrimônio final. passo 1: Menu > Administração de materiais > Inventário > Inventário de bens > consulta inventário > clica na UL > Informa um número de Patrimônio > clica em filtrar > observada a falta de espaço no campo Nº sequencial do patrimônio Inicial e Nº sequencial do patrimônio final.                                                                                                                                                                                                                                                                                                                                 |           |                        |
| ITSM 7151 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                        DNIT Na tela de atendimento de requisição ao realizar o atendimento, esta apresentando uma coluna "QUANTIDADE ATENDIDA" acontece que esta coluna não aparecia nas versões anteriores, e também não faz sentido aparecer uma vez que nem atendida foi, estou ainda fazendo o atendimento. Acontece que todas as UGs estão reclamando, solicito que so apareça a coluna após o atendimento. Vide anexo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |           |                        |
| ITSM 7374 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Ao excluir uma transferência interna com bens patrimoniais que vieram provenientes de uma transferência externa o sistema está mudando o status da depreciação para "Armazenado no Almoxarifado", sendo que quando for nesse tipo de caso o mesmo deve manter o status da depreciação do jeito que veio da origem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |           |                        |
| ITSM 3025 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    DNIT   Solicito que seja incluída um flag, para mostrar somente as contas com saldo no RMA. Não precisa fazer nenhuma alteração no relatório.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |           |                        |
| ITSM 6815 | Clientes: MCTIC/ DNIT  Ao realizar o inventário de alguns bens clicar no botão SALVAR  o sistema apaga todos os bens das ULs constantes no inventário, ocorrendo perda dos dados levantados. O botão SALVAR está com a regra de excluir e não salvar.  Obs1: Ao realizar as tratativas o sistema salva automaticamente creio que esse botão não tenha necessidade também não me recordo dele em versões mais antigas.  Obs2: A perda desses dados traz grandes prejuízos para o cliente já que é preciso realizar todo levantamento físico e refazer todas as tratativas dos bens levantados, dependendo da quantidade de uls levantadas não é possível refazer o trabalho, como ocorre no inventário anual em que são levantados todos os bens do órgão (trabalho esse que demora meses para ser realizado).  Passo 1: Menu > Administração de materiais > Inventário > Inventário de bens > seleciona o inventario ex: 2018000004 > clica no botão: Inventariar bens.  Passo 2: Consultar as ULs inventariadas > consta 45 bens na ul 2361.  Passo 3: clicar no botão SALVAR > o sistema retorna para a tela de pesquisa e apresenta mensagem "Operação realizada com sucesso!"  Passo 4: Ao retornar no inventário os bens levantados das ULs foram apagados essa ação só acontece quando é clicado no botão SALVAR , ele excluir os bens da UL. |           |                        |
| ITSM 3024 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    DNIT   Solicito que seja incluída um flag, para mostrar somente as contas com saldo no RMB. Não precisa fazer nenhuma alteração no relatório.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |           |                        |
| ITSM 7093 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Ao editar itens de uma baixa patrimonial e executar o salvar, uma falha inesperada é lançada.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |           |                        |
| ITSM 7018 |                                                                                                                                                                                                                                                                                                                                                                                                                                                               Ao realizar uma transferência externa e edita-la antes de recebe-la na U.G. de destino o sistema duplica todos os bens patrimoniais que foram vinculados naquela transferência externa. Obs: Só é possível ver a duplicação consultando as tabelas do banco de dados que tramitam a transferência externa. Tal operação está causando uma duplicação nos movimentos contábeis quando é realizado uma entrada no sistema.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |           |                        |
| ITSM 6980 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Módulo: Patrimônio: Versão: 3.0.8.1.20180801203909 Cliente: DNIT Ao realizar a emissão do relatório de Reavaliação de Bens Detalhado o sistema apresenta mensagem de "Erro ao gerar relatório!". Menu > Administração de materiais > Patrimônio > Relatórios diversos.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |           |                        |



**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

**A versão do Portal continua a 3.1.5.4.**

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


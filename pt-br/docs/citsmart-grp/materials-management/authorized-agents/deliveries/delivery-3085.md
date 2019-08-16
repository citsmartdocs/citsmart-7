title: Documento de entrega GRP ADM 3.0.8.5 e GRP COR 3.1.6.2
Description: Documento de entrega GRP ADM 3.0.8.5 e GRP COR 3.1.6.2

# Documento de entrega GRP ADM 3.0.8.5 e GRP COR 3.1.6.2

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais.

-   **Versão**: 3.0.8.5

-   **Documento criado em**: 27/09/2018

-   **Versão entregue em**: 27/09/2018

-   **Última alteração em**: 27/09/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Corporativo 3.1.6.2**

    -   [FTP](https://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.6.2)

2.  **CITSmart Enterprise GRP Administração de Materiais 3.0.8.5**

    -   [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.8.5)

**ESCOPO**


| DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| ITSM 7077 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Ao finalizar o inventário depois de tratadas as ULs o sistema apresenta no mostrador da quantidade de itens um uma quantidade que não equivale a real.  Ex: a UL 004114 carregou 12 itens ao fechar e consultar o inventário o sistema apresenta a quantidade 23 itens, porém ao passar as páginas só existe 12 itens.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |           |                        |
| ITSM 7085 | Observado na base que ao inventariar um bem com status do levantamento NÃO HÁ INCONSISTÊNCIA o sistema cria uma marcação de inconsistência que não é a correta. Para os casos de “não há inconsistência” significa que o bem foi inventariado no local de origem não sendo necessário qualquer tratativa para esse caso.  Ex: UL 4430 – PATRIMÔNIO 005328870  O bem foi marcado na ul de origem como inventariado, status “Não há inconsistência”, porém, ao verificar na base ocorre três marcações para o bem:  5328870 - Inconsistência: Bem patrimonial não encontrado - Tratamento: Bem retornou ao seu local de origem antes do inventário     5328870 – Inconsistência: NULL – NULL  5328870 - Inconsistência: Bem patrimonial não encontrado - Tratamento: Encontrado em outra UL     Porém o bem não foi marcado com a inconsistência “Bem patrimonial não encontrado” e não sofreu nenhuma das tratativas de “ Bem retornou ao seu local de origem antes do inventário” ou “Encontrado em outra UL”. Essa dupla tratativa não tem sentido o que também causa duplicidade na numeração do patrimônio saído na emissão do termo.  Obs: os bens com status “não há inconsistência” estão tendo esse comportamento o patrimônio 005328870 foi citado como exemplo. passo 1: Menu > Administração de materiais > Inventário > Inventário de bens > consulta o inventário > trata o bem na UL de origem > marca o bem > clica no botão Inventariar > clica no botão SALVAR > bem marcado “não há inconsistência.  passo 2: Consulta o bem > marca > clica no botão visualizar > observa que não foi marcada qualquer inconsistência para o bem. |           |                        |
| ITSM 7007 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                É possível editar uma baixa almoxarifado com data fora da referência vigente. Abrir uma baixa com |           |                        |
| ITSM 6828 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Ao salvar o cadastro de uma conta contábil TIPO DO MATERIAL: Serviço o sistema apresenta mensagem "Falha inesperada Desculpe, ocorreu um erro interno. Contate o suporte."   Passo 1: menu: Menu > Administração de materiais > Financeiro > Conta contábil > informa código > informa Descrição > seleciona o TIPO DO MATERIAL: Serviço > clica em Salvar.  Passo 2: o sistema apresenta mensagem "Falha inesperada Desculpe, ocorreu um erro interno. Contate o suporte."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |           |                        |
| ITSM 7553 |                                                                                                                                                                                                                                                                                                                                                            UG: DNIT RN Na conta de depreciação 123110121, pois o saldo final referente ao mês de Novembro e o saldo inicial do mês de dezembro de 2017, pois existe uma diferença de 0,01 nos saldos, ocasionando uma diferença na depreciação da superintendência do Rio Grande do Norte- UG 393021.  Segundo o Ramonn que verificou à meu pedido, o problema esta no relatório devido ao arredondamento dos valores no relatórios, pois os valores na base estão corretos.  Solicito ajuste.  Obs.: Baixar os anexos de Novembro e Dezembro, ir na conta 123110121.  No anexo de novembro, ir na coluna 16 (Saldo >> Depreciação acumulada) observar que tem o valor R$ 105,18 para essa conta. No anexo de dezembro, ir na coluna 3 (Saldo anterior >> Depreciação acumulada) observar que tem o valor R$ 105,19 para essa conta. Os valores têm que ser os mesmos, conforme outras contas presentes no relatório. Realizar correção.                                                                                                                                                                                                                                                                                                                                                            |           |                        |
| ITSM 7572 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Patrimônio V. 3.0.8.4.20180914171037 - Cliente DNIT Menu > Administração de materiais > Patrimônio > Definir detentor Ao emitir termo por detentor o texto apresentado ao final do termo estar incompleto falta a continuação da frase "de minha parte". Declaro ter recebido o(s) bem(ns) relacionados no presente termo, no estado de conservação indicado, pelo(s) qual(is) assumo total responsabilidade pela guarda e conservação comprometendo-me, inclusive, a informar à Seção de Patrimônio sobre todas as ocorrências relativas ao(s) bem(ns) e, ainda, ressarcir o Órgão por perdas e danos, caso comprovada a omissão de responsabilidade de minha parte.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |           |                        |




**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

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

title: Documento de entrega GRP ADM 3.0.8.5
Description: Documento de entrega GRP ADM 3.0.8.5

# Documento de entrega GRP ADM 3.0.8.5

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

|  DEMANDA  |                                                                                                                                                                                                                                                                                                                          ASSUNTO / MÓDULO                                                                                                                                                                                                                                                                                                                          | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:---------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| ITSM 7077 |                                                                                                                                                                        Ao finalizar o inventário depois de tratadas as ULs o sistema apresenta no mostrador da quantidade de itens um uma quantidade que não equivale a real.Ex: a UL 004114 carregou 12 itens ao fechar e consultar o inventário o sistema apresenta a quantidade 23 itens, porém ao passar as páginas só existe 12 itens.                                                                                                                                                                        |           |                        |
| ITSM 7085 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |           |                        |
| ITSM 7007 |                                                                                                                                                                                                                                        É possível editar uma baixa almoxarifado com data fora da referência vigente. Abrir uma baixa com a opção "Visualizar" e usar a opção "Editar" no registro que está sendo visualizado.                                                                                                                                                                                                                                       |           |                        |
| ITSM 6828 |                                                                                               Ao salvar o cadastro de uma conta contábil TIPO DO MATERIAL: Serviço o sistema apresenta mensagem "Falha inesperada Desculpe, ocorreu um erro interno. Contate o suporte."Passo 1: menu: Menu > Administração de materiais > Financeiro > Conta contábil > informa código > informa Descrição > seleciona o TIPO DO MATERIAL: Serviço > clica em Salvar.Passo 2: o sistema apresenta mensagem "Falha inesperada Desculpe, ocorreu um erro interno. Contate o suporte."                                                                                               |           |                        |
| ITSM 7553 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |           |                        |
| ITSM 7572 | Patrimônio V. 3.0.8.4.20180914171037 - Cliente DNITMenu > Administração de materiais > Patrimônio > Definir detentorAo emitir termo por detentor o texto apresentado ao final do termo estar incompleto falta a continuação da frase "de minha parte".Declaro ter recebido o(s) bem(ns) relacionados no presente termo, no estado de conservação indicado, pelo(s) qual(is) assumo total responsabilidade pela guarda e conservação comprometendo-me, inclusive, a informar à Seção de Patrimônio sobre todas as ocorrências relativas ao(s) bem(ns) e, ainda, ressarcir o Órgão por perdas e danos, caso comprovada a omissão de responsabilidade de minha parte. |           |                        |


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

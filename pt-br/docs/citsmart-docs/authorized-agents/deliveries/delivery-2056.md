title: Versão 2.0.5.6 GRP Contratos; 3.1.6.4 Portal; 3.0.8.7 ADM/PATR/ALM; 
Description: Versão 2.0.5.6 GRP Contratos; 3.1.6.4 Portal; 3.0.8.7 ADM/PATR/ALM; 
# Versão 2.0.5.6 GRP Contratos; 3.1.6.4 Portal; 3.0.8.7 ADM/PATR/ALM; 



-   **Nome da Solução**: CITSmart Enterprise GRP Contratos / Administração de
    Materiais

-   **Versão**: 2.0.5.6

-   **Documento criado em**: 26/10/2018

-   **Versão entregue em**: 26/10/2018

-   **Última alteração em**: 26/10/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Contratos 2.0.5.6**

    -   [FTP](http://kb.citsmartcloud.com/entregas/grpcontratos/2.0.5.6)

2.  **CITSmart Corporativo 3.1.6.4**

    -   [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.6.4)

3.  **CITSmart Adminitração de materiais 3.0.8.7**

    -   [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.8.7)

**ESCOPO**

|        DEMANDA        |                                                                                                                                                                                                                                                 ASSUNTO / MÓDULO                                                                                                                                                                                                                                                | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:---------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
|       ITSM 7917       | [DNIT] - O cliente reporta que o sistema está apresentando alguns campos em branco, impossibilitando a edição de registros cadastrados anteriormente, uma vez que o sistema critica a obrigatoriedade do campo e não permite a edição do mesmo. Em testes realizados no ambiente do cliente, foi constatado que o problema ocorre em computadores que estão com a versão 70.0.3538.67 (64 bits) do navegador Google Chrome. O problema não ocorre em navegadores que estejam na versão 69.0.3497.100 (64 bits). |           |                        |
|       ITSM 7904       |                                                                                                                            Solicito que seja retirada regra de validação do número do empenho para os casos em que tiver habilitado o parâmetro de integração. Quando não tiver habilitada a integração, o sistema deve continuar não permitindo utilizar o mesmo número de empenho.                                                                                                                            |           |                        |
| ITSM 2946 (Devolução) |                                                                                                                                 [DNIT] – O cliente solicita que seja possível inserir ‘N’ itens do contrato, que possuam especificação diferentes, sem a necessidade de digitar o item ‘N’ vezes. Solicita também, que seja possível inserir a unidade de medida para cada item                                                                                                                                 |           |                        |


**IMPACTOS NOS MANUAIS DE INSTALAÇÃO/ATUALIZAÇÃO**

1.  Nenhum.

**ORIENTAÇÕES ESPECIAIS**

**SCRIPTS SQL**

-   **PostgreSQL**

    1.  Nenhum.

-   **MS-SQLServer**

    1.  Nenhum

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

2.  Salvar o log da execução dos scripts no banco de dados para que eventuais
    imprevistos possam ser devidamente tratados


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/20/2019 – Anna Martins

title: Documento de entrega ADM Materiais 4.0.0.10
Description: Documento de entrega ADM Materiais 4.0.0.10

# Documento de entrega ADM Materiais 4.0.0.10

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais

-   **Versão**: 4.0.0.10

-   **Documento criado em**: 30/04/2019

-   **Versão entregue em**: 02/05/2019

-   **Última alteração em**: 30/04/2019

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

**CITSmart Enterprise GRP Administração de Materiais 4.0.0.10**

-   [FTP]()

**ESCOPO**


|   DEMANDA  |                                                                                                                                                                                                                                                                                                                                                              DESCRIÇÃO                                                                                                                                                                                                                                                                                                                                                              | CONHECIMENTO IMPACTADO |
|:----------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------:|
| ITSM #8011 |                                                                                                                                                                                  Favor verificar as seguintes situações nas movimentações no estoque do almoxarifado:1) Atualização do resto médio deve ocorrem em cada requisição e não apenas na última;2) Verificar que as exclusões de atendimento que não refletem na movimentação ocosionando erros na apuração dos saldos; e3) Verificar o cálculo do preço médio na entrada (movimentações)                                                                                                                                                                                 |                        |
| ITSM #8984 | Ao realizar no fechamento do mês e Janeiro 2019, notamos que apareceu um valor de R$42,00 siando da conta 9898 - em transito - e entrando na conta 1156102020144 - MATERIAIS DE SINALIZAÇÃO, ao consultar o movimento constatamos que se tratava de uma requisição externa para a unidade da Bahia.  Porém conforme regra acordada e validada com o cliente quando foi feita alteração por meio do chamado 1321 de 25/09/2017, esse movimento contábil era para ser feito somente no momento do recebimento. E funcionava perfeitamente, depois da última atualização para a versão 4.0.0.5 parou de funcionar. Solicito que seja ajustado urgentemente, pois está causando um desconforto com os setores de contabilidade do DNIT. |                        |
| ITSM #8586 |                                                                                                                                                                                                                                                              Demanda criada por erro encontrado pelo Desenvolvedor Erickson. Os status da depreciação dos bens, que estão armazenados no almoxarifado, não estão sendo atualizados ao realizar seu processo de aceite.                                                                                                                                                                                                                                                              |                        |
| ITSM #7627 |                                                                                                                                           Usuário (a) informa que ao listar todos os bens que eram de 2009 e que estavam com status "Utilizado" encontrou o seguinte problema: Quando é realizada a transferência externa, é gerada uma nova entrada e, consequentemente, uma nova data de contrabilização, com isto o bem passa a ter uma data contábil nova. O bem não pode alterar esta data contábil tendo em vista que ele não e um bem novo.  Realizar correção. Segue email anexo.                                                                                                                                           |                        |



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

2.  MUITO IMPORTANTE, limpar o cache do navegador ao utilizar a versão nova.

**PRÁTICAS DE SEGURANÇA AO ATUALIZAR O PRODUTO**

1.  ATENÇÃO, Realizar uma cópia de segurança (*backup*):

    -   da aplicação (war)

    -   do banco de dados

2.  Executar os scripts conforme orientações contidas neste documento

3.  Salvar o log da execução dos scripts no banco de dados para que eventuais
    imprevistos possam ser devidamente tratados

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/16/2019 – Anna Martins



title:Documento de entrega GRP ADM 3.0.7.2 e COR 3.1.5.3
Description: Documento de entrega GRP ADM 3.0.7.2 e COR 3.1.5.3

# Documento de entrega GRP ADM 3.0.7.2 e COR 3.1.5.3

-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais

-   **Versão**: 3.0.7.2

-   **Documento criado em**: 04/06/2018

-   **Versão entregue em**: 04/06/2018

-   **Última alteração em**: 04/06/2018 (publicação)

-   **Objetivos**:

    1.  antecipar a visão de escopo para que todos os stakeholders possam ter
        conhecimento do que se espera da versão.

    2.  levar ao conhecimento dos Agentes Autorizados (parceiros) as principais
        informações desta entrega, reduzindo o risco de problemas na atualização
        de versão no ambiente dos clientes.

**DOWNLOADS**

1.  **CITSmart Enterprise GRP Administração de Materiais 3.0.7.2**

    -   [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.7.2)

2.  **CITSmart Corporativo 3.1.5.3**

    -   [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.3)

**ESCOPO**


|   DEMANDA  |                                                                                                                                                    ASSUNTO / MÓDULO                                                                                                                                                   | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| ITSM #5812 |                                                                                                                       Falha inesperada ao fechar o mês para o módulo Patrimônio no DNIT DF Sede.                                                                                                                      |           |                        |
| ITSM #5686 |                                                                                       Ao emitir a guia de remessa foi notado que os materiais atendidos estão repetidos solicito ajuste urgente.Número da requisição 2018000315.                                                                                      |           |                        |
| ITSM #5046 |                                   Ao emitir a guia de remessa foi notado vários problemas no termo que gerou um desconforto com o cliente são eles:1º: não aparece o nome ATENDIDA POR2º: retirar as horas que aparece no termo.3º: no resumo contábil as contas aparecem repetidas.                                  |           |                        |
| ITSM #4869 | Ao incluir uma UL no Inventário já Em andamento o sistema apresente mensagem FALHA INESPERADA porém ao sair e voltar no inventário a UL foi incluída com sucesso. Verificar e corrigir essa mensagem que aparece sem necessidade ao inserir uma UL ao inventário. Deve ser apresentada mensagem de SALVO COM SUCESSO. |           |                        |
| ITSM #4867 |                                                    Ao marcar selecionar todos os bens do inventário não informados clicar o botão â€œINVENTARIAR SELECIONADOSâ€ apresenta mensagem de FALHA INESPERADA. Não permite inventariar todos os bens da UL de uma vez só.                                                    |           |                        |



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

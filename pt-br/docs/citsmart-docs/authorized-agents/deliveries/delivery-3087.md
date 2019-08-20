title: Documento de entrega GRP ADM 3.0.8.7 e GRP COR 3.1.6.4 
Description: Documento de entrega GRP ADM 3.0.8.7 e GRP COR 3.1.6.4  
# Documento de entrega GRP ADM 3.0.8.7 e GRP COR 3.1.6.4


-   **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais.

-   **Versão**: 3.0.8.7

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

1.  **CITSmart Enterprise GRP Corporativo 3.1.6.4**

    -   [FTP](https://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.6.4)

2.  **CITSmart Enterprise GRP Administração de Materiais 3.0.8.7**

    -   [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/3.0.8.7)

**ESCOPO**

|  DEMANDA  |                                                                                                                                                                                                                                      ASSUNTO / MÓDULO                                                                                                                                                                                                                                      | DESCRIÇÃO | CONHECIMENTO IMPACTADO |
|:---------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------:|:----------------------:|
| ITSM 1675 |                                            O cliente solicita alterações para o relatório Termo de Baixa.O mesmo alega que o campo "Data de saída" é preenchido embora a baixa não tenha sido autorizada e que não é apresentada a situação da baixa, levando a crer que a mesma fora realizada. Por este motivo, solicita que o campo "Data de saída" seja renomeado para "Data de conclusão" (ou similar) e seja incluída a situação da baixa.                                           |           |                        |
| ITSM 3208 |                                                                                          No menu Baixa de bens, ao informar o patrimônio, o sistema deve verificar o status do bem. Se o status for “Baixado” ou “Em processo de baixa” o sistema deve emitir a mensagem “O bem encontra-se ‘status’”.Em se tratando dos demais status, o sistema deve carrega-lo para a grid “Bens selecionados”.                                                                                         |           |                        |
| ITSM 3207 |                                                                                                 No menu Seleção de bem patrimonial, ao informar o patrimônio, o sistema deve verificar o status do bem. Se o status for “Baixado”, o sistema deve emitir a mensagem “O bem encontra-se baixado”Em se tratando dos demais status, o sistema deve carrega-lo para a grid “Bens selecionados”.                                                                                                |           |                        |
| ITSM 3206 |                       No menu Definir detentor, ao informar o patrimônio, o sistema deve verificar o status do bem. Se o status for: “utilizado”, “disponível”, “bem de terceiro” ou “em cessão”, o sistema deve verificar se o bem possui detentor igual ao informado no campo “Detentor”. Sendo o mesmo detentor, o sistema deve apresentar a mensagem “O bem já está atribuído ao detentor informado”. Caso o detentor seja diferente, o sistema deve carrega-lo.                       |           |                        |
| ITSM 3205 |               Na transferência externa, ao informar o patrimônio, o sistema deve verificar o status do bem. Se o status for: “utilizado”, “disponível”, “bem de terceiro” ou “em cessão”, o sistema deve carrega-lo e permitir a transferência. Em seguida, deve ser feita a verificação da localização atual do bem. Em se tratando dos demais status, o sistema deve emitir a mensagem “O bem encontra-se ‘status’” e não deve carrega-lo para a grid “Bens selecionados”.               |           |                        |
| ITSM 3204 | Na transferência interna, ao informar o patrimônio, o sistema deve verificar o status do bem. Se o status for: “utilizado”, “disponível”, “bem de terceiro” ou “em cessão”, o sistema deve carrega-lo e permitir a transferência. Em seguida, deve ser feita a verificação da localização atual do bem. Caso seja igual ao “local de destino”, o sistema deve emitir a mensagem “O bem já se encontra na unidade destino informada” e não deve carregar o bem na grid “Bens selecionados”. |           |                        |
| ITSM 7945 |                                                                                                        Ao emitir o relatório detectamos que o relatório não está somando correntemente, veja a conta 123110201, veja que a depreciação acumulada anterior (coluna B0 com a soma da depreciações das colunas H e I, não confere com o saldo da depreciação acumulada atual coluna P.                                                                                                        |           |                        |


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
    <b>Updated:</b>08/20/2019 – Anna Martins

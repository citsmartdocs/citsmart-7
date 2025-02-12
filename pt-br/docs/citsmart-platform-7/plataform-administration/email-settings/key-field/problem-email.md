title: Campos-chave de e-mails de problema
Description: Fornecer a relação dos campos chave, disponíveis para o cadastro de modelo de e-mail relacionada a problemas.
# Campos-chave de e-mails de problema

Este documento tem o objetivo de fornecer a relação dos campos chave, disponíveis para o cadastro de modelo de e-mail relacionada 
a problemas.

Relação dos Campos Chave
----------------------------

São relacionados abaixo os campos chave disponíveis para inserção no cadastro de modelo de e-mail relacionado a problemas:

|          CAMPO-CHAVE         |                                                            DESCRIÇÃO                                                           |
|:----------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|       ${ACOESCORRETAS}       |   Ações Realizadas Corretamente.Informa a descrição das ações realizadas corretamente referente à revisão de problema grave.   |
|      ${ACOESINCORRETAS}      | Ações Realizadas Incorretamente.Informa a descrição das ações realizadas incorretamente referente à revisão de problema grave. |
|        ${CAUSARAIZ}          | Causa Raiz do Problema. Informa a descrição da causa raiz do problema.                                                         |
|          ${CONTRATO}         |                             Contrato.Informa o nome do contrato referente ao registro de problema.                             |
|      ${DATAHORACAPTURA}      |              Data e Hora de Início do Registro de Problema.Informa a data e hora em que foi registrado o problema.             |
|        ${DATAHORAFIM}        |                 Data e Hora da Finalização do Problema.Informa a data e hora em que foi finalizado o problema.                 |
|       ${DATAHORALIMITE}      |          Prazo Limite para Atendimento do Problema.Informa o prazo limite (data e hora) para atendimento do problema.          |
|  ${DATAHORALIMITESOLUCIONAR} |         Prazo Limite para Solucionar/Contornar o problema.Informa o prazo limite para solucionar/contornar o problema.         |
|         ${DESCRICAO}         |                                     Descrição do Problema.Informa a descrição do problema.                                     |
|        ${DIAGNOSTICO}        |                             Diagnóstico do Problema.Informa a descrição do diagnóstico do problema.                            |
|        ${EMAILCONTATO}       |                                 E-mail do Contato.Informa o e-mail do solicitante para contato.                                |
|           ${FASE}            | Situação do Problema. Informa a situação (fase) em que problema se encontra.                                                   |
|         ${FECHAMENTO}        |                              Fechamento do Problema.Informa a descrição do fechamento do problema.                             |
|         ${IDPROBLEMA}        |                 Número de Identificação do Problema.Informa o número de identificação do registro de problema.                 |
|          ${IMPACTO}          |                               Impacto do Problema.Informa a identificação do impacto do problema.                              |
|   ${LINKPESQUISASATISFACAO}  |               Link para pesquisa de satisfação.Informa o link para fazer a avaliação do atendimento do problema.               |
|      ${MELHORIASFUTURAS}     |     Possíveis Melhorias Futuras.Informa a descrição das possíveis melhorias futuras referente à revisão de problema grave.     |
|      ${MSGERROASSOCIADA}     |    Mensagem de Erro Associada.Informa a mensagem de erro associada que foi descrito na avaliação e diagnóstico do problema.    |
|        ${NOMECONTATO}        |                                   Nome do Contato.Informa o nome do solicitante para contato.                                  |
|       ${NOMEGRUPOATUAL}      |                                  Grupo Executor.Informa o nome do grupo executor do problema.                                  |
|          ${PRAZOHH}          |                    Prazo (horas) para Atendimento do Problema.Informa o prazo para atendimento do problema.                    |
|         ${PRIORIDADE}        |                                          Prioridade.Informa a prioridade do problema.                                          |
|      ${PROATIVOREATIVO}      |                      Gerenciamento do Problema.Informa o gerenciamento do problema (proativo ou reativo).                      |
|    ${RECORRENCIAPROBLEMA}    |  Recorrência do Problema.Informa a descrição de como prevenir a recorrência do problema referente à revisão de problema grave. |
| ${RESPONSABILIDADETERCEIROS} |    Responsabilidade de Terceiros.Informa a descrição da responsabilidade de terceiros referente à revisão de problema grave.   |
|        ${RESPONSAVEL}        |               Responsável pelo Atendimento do Problema.Informa o responsável atual pelo atendimento do problema.               |
|         ${SEVERIDADE}        |                              Severidade do problema.Informa a descrição da severidade do problema.                             |
|        ${SOLICITANTE}        |                           Nome do Solicitante.Informa o nome do solicitante do registro de problema.                           |
|   ${SOLUCAOCONTORNO}         | Descrição da Solução de Contorno. Informa a descrição da solução de contorno do problema.                                    |
|     ${SOLUCAODEFINITIVA}     |                     Descrição da Solução Definitiva.Informa a descrição da solução definitiva do problema.                     |
|        ${STATUS}             |                               Status do Problema.Informa o status em que o problema se encontra.                               |
|           ${TITULO}          |                               Título do Problema.Informa o título do problema que foi registrado.                              |
|          ${URGENCIA}         |                              Urgência do Problema.Informa a identificação da Urgência do Problema.                             |

**Tabela 1 - Significado dos campos-chave**

Utilização dos campos chave
----------------------------

Segue abaixo os exemplos de utilização dos campos chave disponíveis para inserção no cadastro de modelo de e-mail relacionado a 
problemas.

![Exemplo](Images/key-prob.img1.png)

**Figura 1 - Exemplo de inserção**

![Resultado](Images/key-prob.img2.png)

**Figura 2 - Exemplo do resultado do envio**

Exemplo dos Campos Chave Exibidos no E-mail
---------------------------------------------

![Exemplos](Images/key-prob.img3.png)

**Tabela 2 - Exemplos de campos-chave**

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>07/25/2019 – Larissa Lourenço

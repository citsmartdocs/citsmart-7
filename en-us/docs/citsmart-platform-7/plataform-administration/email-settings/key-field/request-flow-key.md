title:  Request workflow key fields
Description: This document is intended to provide the properties and methods available for use in creating service request streams. 
# Request workflow key fields

This document is intended to provide the properties and methods available for use in creating service request streams.

Why and how to use?
-------------------------

By using these properties and methods it is possible for CITSmart ITSM Enterprise product administrators to dynamically customize 
the behavior of workflows created for service requests, leveraging these flows.

It is important to note that these properties **may be null** and the methods **may return null values**, depending on the state of 
the request or the stage the flow is in.

To use the properties we use the following pattern:

**#{solicitacaoServico.NomeDaPropriedade}**

In the use of methods we use the following pattern:

**#{solicitacaoServico}.Metodo()**

Property list
-----------------------

| Property                   | Data type | Goal                                                             |
|----------------------------|-----------|------------------------------------------------------------------|
| atrasoSLA                  | double    | Boolean for delayed SLA.                                         |
| contrato                   | String    | Request contract name.                                           |
| custoServico               | Double    | Value of service.                                                |
| dataHoraCaptura            | Timestamp | Date the request was last taken.                                 |
| dataHoraFim                | Timestamp | Date of conclusion of the service.                               |
| dataHoraInicio             | Timestamp | Start date of service.                                           |
| dataHoraInicioSLA          | Timestamp | SLA start date.                                                  |
| dataHoraLimite             | Timestamp | SLA deadline and date.                                           |
| dataHoraSuspensao          | Timestamp | Date and time of suspension.                                     |
| descricao                  | String    | Request Description.                                             |
| detalhamentoCausa          | String    | Detail / Cause of request.                                       |
| emailResponsavel           | String    | E-mail of the person in charge.                                  |
| enviaEmailAcoes            | String    | Sets whether to send e-mail during actions on request.           |
| enviaEmailCriacao          | String    | Sets whether to send e-mail during request creation.             |
| enviaEmailFinalizacao      | String    | Sets whether to send e-mail during request completion.           |
| grupoAtual                 | String    | Name of the group to which the request was or will be delegated. |
| grupoNivel1                | String    | Request initial group name.                                      |
| idAcordoNivelServico       | Integer   | Service Level Agreement Identifier.                              |
| idCategoriaServico         | Integer   | Service category identifier.                                     |
| idCategoriaSolucao         | Integer   | Solution category identifier.                                    |
| idCausaIncidente           | Integer   | Incident cause identifier.                                       |
| idContrato                 | Integer   | Contract Identifier.                                             |
| idFluxo                    | Interge   | Flow identification.                                             |
| idGrupo1                   | Integer   | Request Initial Group Identifier.                                |
| idLocalidade               | Integer   | Location identifier.                                             |
| idOrigem                   | Integer   | Contact source identifier                                        |
| idPortfolioServico         | Integer   | Portfolio Identifier.                                            |
| idPrioridade               | Integer   | Priority value identifier.                                       |
| idServicoRelacionado       | Integer   | Identification of the related service.                           |
| idSolicitacaoServico       | Integer   | Service Request Identifier.                                      |
| idSolicitante              | Integer   | Request Applicant Identifier.                                    |
| idStatus                   | Integer   | Current request status.                                          |
| idTipoDemandaServico       | Integer   | Identification of the type of demand.                            |
| idUnidade                  | Integer   | Unit identifier.                                                 |
| justificativaVencimentoSLA | String    | SLA delay justification                                          |
| localidade                 | String    | Request Location Name.                                           |
| nomeServicoRelacionado     | String    | Related service name.                                            |
| nomeSolicitante            | String    | Applicant's name                                                 |
| nomeTipoDemandaServico     | String    | Request Demand Type Name.                                        |
| responsavel                | String    | Name of the person responsible for the request.                  |
| unidadeDes                 | String    | Unit Name.                                                       |

**Table 1 - Properties List**

List of methods
----------------------

| Method                                 | Data Type | Goal                                                 |
|----------------------------------------|-----------|------------------------------------------------------|
| aprovada()                             | boolean   | Returns if request was approved.                     |
| atendida()                             | boolean   | Returns if the request was met.                      |
| cancelada()                            | boolean   | Returns if the request was canceled.                 |
| emAtendimento()                        | boolean   | Returns if the request is already in service.        |
| encerrada()                            | boolean   | Returns whether the request was terminated.          |
| escalada()                             | boolean   | Returns if the request has been escalated.           |
| finalizada()                           | boolean   | Returns whether the request was terminated.          |
| finalizadaENaoCancelada()              | boolean   | Returns if request completed but not canceled.       |
| getAtrasada()                          | boolean   | Returns if request SLA is late.                      |
| getAtrasoSLA()                         | double    | Returns the SLA delay                                |
| getCustoServico()                      | Double    | Search service cost                                  |
| getDataHoraReativacao()                | Timestamp | Returns the request reactivation date and time.      |
| getDescricao()                         | String    | Returns the description of the request               |
| getIdPortfolioServico()                | Integer   | Search Portfolio Identifier.                         |
| getIdStatus()                          | Integer   | Search current request status.                       |
| getLocalidade()                        | String    | Search location of request;                          |
| getQtdeItensConfiguraçãoRelacionados() | Integer   | Returns the number of ICs related to requests.       |
| getSolicitacaoAtrasada()               | String    | Returns whether the SLA situation is delayed or not. |
| getUnidadeDes()                        | String    | Search request unit name;                            |
| suspensa()                             | Boolean   | Returns if the service request is suspended.         |

**Table 2 - List of Methods**

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>09/03/2019 - Larissa Lourenço

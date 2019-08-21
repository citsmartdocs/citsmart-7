title:  Campos-chave dos fluxos de solicitação
Description: tem o objetivo de fornecer as propriedades e métodos disponíveis para utilizar na criação de fluxos de solicitação. 
# Campos-chave dos fluxos de solicitação

Este documento tem o objetivo de fornecer as propriedades e métodos disponíveis para utilizar na criação de fluxos de solicitação de 
serviço.

Por que e como usar?
-------------------------

Através do uso dessas propriedades e métodos é possível para os administradores do produto CITSmart ITSM Enterprise personalizarem
dinamicamente o comportamento dos workflows criados para as solicitações de serviços, potencializando esses fluxos.

É importante ressaltar que essas propriedades **podem se encontrar nulas** e os métodos **podem retornar valores nulos**, dependendo 
do estado da solicitação ou do estágio que o fluxo se encontra.

Para a utilização das propriedades utilizamos o seguinte padrão:

**#{solicitacaoServico.NomeDaPropriedade}**

Já na utilização de métodos utilizamos o seguinte padrão:

**#{solicitacaoServico}.Metodo()**

Lista de propriedades
-----------------------

| Propriedade                | Tipo do Dado | Objetivo                                                       |
|----------------------------|--------------|----------------------------------------------------------------|
| atrasoSLA                  | double       | Booleano para SLA atrasado.                                    |
| contrato                   | String       | Nome do contrato da solicitação.                               |
| custoServico               | Double       | Valor do serviço.                                              |
| dataHoraCaptura            | Timestamp    | Data da última captura da solicitação.                         |
| dataHoraFim                | Timestamp    | Data de conclusão do atendimento.                              |
| dataHoraInicio             | Timestamp    | Data de início do atendimento.                                 |
| dataHoraInicioSLA          | Timestamp    | Data do início do SLA.                                         |
| dataHoraLimite             | Timestamp    | Data e hora limite do SLA.                                     |
| dataHoraSuspensao          | Timestamp    | Data e hora da suspensão.                                      |
| descricao                  | String       | Descrição da solicitação.                                      |
| detalhamentoCausa          | String       | Detalhamento/Causa da solicitação.                             |
| emailResponsavel           | String       | E-mail do responsável.                                         |
| enviaEmailAcoes            | String       | Define se enviará e-mail durante ações na solicitação.         |
| enviaEmailCriacao          | String       | Define se enviará e-mail durante a criação da solicitação.     |
| enviaEmailFinalizacao      | String       | Define se enviará e-mail durante a finalização da solicitação. |
| grupoAtual                 | String       | Nome do grupo para qual a solicitação foi ou será delegada.    |
| grupoNivel1                | String       | Nome do grupo inicial da solicitação.                          |
| idAcordoNivelServico       | Integer      | Identificador do acordo de nível de serviço.                   |
| idCategoriaServico         | Integer      | Identificador da categoria do serviço.                         |
| idCategoriaSolucao         | Integer      | Identificador da categoria de solução.                         |
| idCausaIncidente           | Integer      | Identificador da causa do incidente.                           |
| idContrato                 | Integer      | Identificador do contrato.                                     |
| idFluxo                    | Integer      | Identificação do fluxo.                                        |
| idGrupo1                   | Integer      | Identificador do Grupo inicial da solicitação.                 |
| idLocalidade               | Integer      | Identificador da localidade.                                   |
| idOrigem                   | Integer      | Identificador da origem do contato                             |
| idPortfolioServico         | Integer      | Identificador do portfólio pertencente.                        |
| idPrioridade               | Integer      | Identificador do valor da prioridade.                          |
| idServicoRelacionado       | Integer      | Identificação do serviço relacionado.                          |
| idSolicitacaoServico       | Integer      | Identificador da solicitação de serviço.                       |
| idSolicitante              | Integer      | Identificador do solicitante da solicitação.                   |
| idStatus                   | Integer      | Status atual da solicitação.                                   |
| idTipoDemandaServico       | Integer      | Identificação do tipo de demanda.                              |
| idUnidade                  | Integer      | Identificador da unidade.                                      |
| justificativaVencimentoSLA | String       | Justificativa do atraso de SLA                                 |
| localidade                 | String       | Nome da Localidade da solicitação.                             |
| nomeServicoRelacionado     | String       | Nome do serviço relacionado.                                   |
| nomeSolicitante            | String       | Nome do solicitante.                                           |
| nomeTipoDemandaServico     | String       | Nome do tipo de demanda da solicitação.                        |
| responsavel                | String       | Nome do responsável da solicitação.                            |
| unidadeDes                 | String       | Nome da Unidade.                                               |

**Tabela 1 - Lista de propriedades**

Lista de métodos
----------------------

| Método                                 | Tipo do Dado | Objetivo                                                    |
|----------------------------------------|--------------|-------------------------------------------------------------|
| aprovada()                             | boolean      | Retorna se a solicitação foi aprovada.                      |
| atendida()                             | boolean      | Retorna se a solicitação foi atendida.                      |
| cancelada()                            | boolean      | Retorna se a solicitação foi cancelada.                     |
| emAtendimento()                        | boolean      | Retorna se a solicitação já se encontra em atendimento.     |
| encerrada()                            | boolean      | Retorna se a solicitação foi encerrada.                     |
| escalada()                             | boolean      | Retorna se a solicitação foi escalada.                      |
| finalizada()                           | boolean      | Retorna se a solicitação foi finalizada.                    |
| finalizadaENaoCancelada()              | boolean      | Retorna se a solicitação foi finalizada, mas não cancelada. |
| getAtrasada()                          | boolean      | Retorna se o SLA da solicitação está atrasado.              |
| getAtrasoSLA()                         | double       | Retorna o atraso do SLA                                     |
| getCustoServico()                      | Double       | Busca custo do serviço                                      |
| getDataHoraReativacao()                | Timestamp    | Retorna a data e a hora de reativação da solicitação.       |
| getDescricao()                         | String       | Retorna a descrição da solicitação                          |
| getIdPortfolioServico()                | Integer      | Busca identificador do portfólio pertencente.               |
| getIdStatus()                          | Integer      | Busca status atual da solicitação.                          |
| getLocalidade()                        | String       | Busca localidade da solicitação;                            |
| getQtdeItensConfiguraçãoRelacionados() | Integer      | Retorna a quantidade de IC's relacionados nas solicitações. |
| getSolicitacaoAtrasada()               | String       | Retorna se a situação do SLA está atrasada ou não.          |
| getUnidadeDes()                        | String       | Busca nome da unidade da solicitação;                       |
| suspensa()                             | boolean      | Retorna se a solicitação de serviço está suspensa.          |

**Tabela 2 - Lista de métodos**

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/05/2019 - Larissa Lourenço

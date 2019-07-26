title: Exemplos reais de utilização de webservices para inegração com o
Gerenciamento de Serviços

Description: Exemplos reais de utilização de webservices para inegração com o Gerenciamento de Serviços

# Exemplos reais de utilização de webservices para inegração com o Gerenciamento de Serviços

Pré-condições
------------

1.  Antes de se utilizar qualquer operação REST do CITSmart, é necessário que o
    usuário esteja autenticado.

2.  A autenticação é feita através da operação REST login na
    URL **/services/login**, que recebe um objeto **CtLogin** contendo os
    atributos **userName**, **password** e **platform**.

3.  O atributo **platform** deve conter a identificação do site que está
    solicitando o serviço.

4.  A operação login retorna um valor alfanumérico no atributo **SessionID**.
    Este mesmo **SessionID** deve ser utilizado nas outras chamadas REST. O
    objeto retornado contém o código e descrição do erro em caso de problemas na
    execução da operação login.

5.  O usuário autenticado compõe a chave para sincronização dos dados, quando o
    atributo **synchronize **tiver o valor **true.**

6.  Os serviços de inclusão e atualização de solicitações contam com o
    atributo **synchronize**. Quando este atributo for **true**, o
    cadastro de usuário e o catálogo serviços serão automaticamente criados ou
    atualizados no CITSmart a partir das informações enviadas na solicitação do
    WebService.

!!! note "NOTA"

     Todos os serviços REST criados no CITSmart recebem um objeto de entrada e
     retornam um objeto. Em caso de erro, o objeto de retorno contém o código e a
     descrição do erro. Quando não houver erro, além dos atributos definidos para
     cada serviço, o objeto de retorno contém a data e hora de execução e o id da
     operação. O CITSmart garante que toda solicitação é registrada na sua base
     de dados e um ID da operação é retornado para o solicitante, mesmo em caso
     de erro.

Exemplo: criação de incidente/requisição
---------------------------------------

**URL**: /services/request/create

**Atributos de Entrada**

-   **synchronize**: indica se as informações de usuário e/ou serviço serão
    sincronizadas.

-   **sourceRequest**: informações da solicitação origem da
    classe **CtRequest**, contendo:

    -   **numberOrigin**: número da solicitação no sistema de origem​​​
        (obrigatório. Este atributo é necessário para que o CITSmart mantenha o
        DE-PARA entre sua base de dados e o número original do sistema origem.

    -   **type**: tipo da solicitação (obrigatório). Valores possíveis:
        I=Incidente ou R=Requisição.

    -   **description**: descrição do incidente ou requisição (obrigatório).

    -   **userID**: identificação de usuário do solicitante (obrigatório). Será
        incluído se não existir na base do Citsmart e o
        atributo **synchronize** for igual a true.

    -   **contact**: dados do solicitante. Obrigatório quando o solicitante não
        existir no CITSmart e o atributo** synchronize** for igual a true.

        -   **name**: nome do solicitante (obrigatório).

        -   **phoneNumber**: telefone do solicitante (obrigatório).

        -   **e-mail**: e-mail do solicitante (obrigatório).

    -   **contractID**: número do contrato no CITSmart (opcional). Se não for
        informado, o Citsmart vai incluir a solicitação vinculada ao contrato
        default parametrizado no serviço.

    -   **service**: dados do serviço (opcional). Se não for informado, o
        Citsmart vai incluir a solicitação vinculada ao serviço default
        parametrizado no cadastro de WebService.

        -   **code**: código do serviço. Opcional, se nome do serviço for
            informado).

        -   **name**: nome do serviço. Obrigatório quando o serviço não existir
            no CITSmart e o atributo **synchronize **for igual a true.

        -   **category**: categoria do serviço. Obrigatório quando o serviço não
            existir no CITSmart e o atributo **synchronize** for igual a true.

            -   **code**: código da categoria.

            -   **name**: nome da categoria.

    -   **urgency**: urgência da solicitação (opcional). Valores possíveis:
        H=Alta, M=Média, L=Baixa. Se não for informada, a urgência será
        calculada partir dos parâmetros do catálogo de serviço do CITSmart.

    -   **impact**: impacto da solicitação (opcional). Valores possíveis:
        H=Alto, M=Médio, L=Baixo. Se não for informado, o impacto será calculado
        a partir dos parâmetros do catálogo de serviço do CITSmart.

    -   **groupId**: sigla do grupo executor no CITSmart (opcional). Se não for
        informada, o grupo executor será obtido a partir dos parâmetros do
        catálogo de serviço do CITSmart.

**Atributos de Saída**

Os atributos de saída são compostos de todos os atributos de entrada da
classe **CtRequest**, mais as seguintes informações:

-   **number**: número da solicitação criada no Citsmart ITSM.

-   **startSLA**: data e hora de início do SLA.

-   **endSLA**: data e hora de término do SLA.

-   **status**: situação da solicitação, contendo:

    -   **code**: código da situação.

    -   **name**: nome da situação.

-   **currentTask**: tarefa atual, contendo:

    -   **number**: número da tarefa

    -   **name**: nome da tarefa.

    -   **startDateTime**: data e hora de início

    -   **status**: situação da tarefa, contendo:

        -   **code**: código da situação.

        -   **name**: nome da situação.

    -   **userId**: login do usuário responsável pela tarefa.

    -   **groupId**: sigla do grupo responsável pela tarefa.

**Exemplo de atributos de entrada utilizando JSON**

-   {"synchronize": true,"sourceRequest": {"numberOrigin": "9999", "type": "R",
    "userID": "fulano.de.tal", "contact": { "phoneNumber": "61 84460708",
    "email": "fulano.de.tal\@centralit.com.br", "department": "Departamento do
    Fulano","name": "Fulano de tal"}, "description": "Inclusão de solicitação
    utilizando REST v3","service": {"name": "SERVICO.TESTE.1","category":
    {"name": "Categoria 1"}},"contractID": "1","urgency": "H","impact": "H" }}

Supondo que no atributo **platform** no login foi informado **ENAP** e
considerando o atributo synchronize igual a **true**, o CITSmart irá:

-   Verificar se existe um DE-PARA do contrato 1 para o usuário ENAP;

-   Incluir o solicitante no cadastro de usuários, caso não exista na base;

-   Incluir o serviço no catálogo de serviços do contrato 1, caso não exista na
    base e registrar o DE-PARA de serviços para o cliente ENAP;

-   Incluir a solicitação com número de origem 9999;

-   Registrar o DE-PARA da solicitação de origem 9999 para o cliente ENAP.

Exemplo: alteração de informações do incidente/requisição
------------------------------------------------------

**URL**: /services/request/update

**Atributos de Entrada**

-   **synchronize**: indica se as informações de usuário e/ou serviço serão
    sincronizadas.

-   **request**: informações da solicitação origem da classe **CtRequest**,
    contendo:

    -   quando o atributo **numberOrigin** não for informado.

    -   **numberOrigin**: número da solicitação no sistema de origem.
        Obrigatório quando o atributo **number** não for informado.

    -   **description**: descrição do incidente ou requisição (opcional).

    -   **userID**: identificação de usuário do solicitante (obrigatório). Será
        incluído se não existir na base do CITSmart e o
        atributo**synchronize** for igual a true.

    -   **number**: número da solicitação no CITSmart (obrigatório).

    -   **contact**: dados do solicitante. Obrigatório quando o solicitante não
        existir no CITSmart e o atributo **synchronize**for igual a true.

        -   **name**: nome do solicitante (obrigatório).

        -   **phoneNumber**: telefone do solicitante (obrigatório).

        -   **e-mail**: e-mail do solicitante (obrigatório).

    -   **service**: dados do serviço (opcional).

        -   **code**: código do serviço. Opcional, se nome do serviço for
            informado).

        -   **name**: nome do serviço. Obrigatório quando o serviço não existir
            no CITSmart e o atributo **synchronize **for igual a true.

        -   **category**: categoria do serviço. Obrigatório quando o serviço não
            existir no CITSmart e o atributo **synchronize** for igual a true.

            -   **code**: código da categoria.

            -   **name**: nome da categoria.

    -   **urgency**: urgência da solicitação (opcional). Valores possíveis:
        H=Alta, M=Média, L=Baixa. Se não for informada, a urgência será
        calculada partir dos parâmetros do catálogo de serviço do CITSmart ITSM.

    -   **impact**: impacto da solicitação (opcional). Valores possíveis:
        H=Alto, M=Médio, L=Baixo. Se não for informado, o impacto será calculado
        a partir dos parâmetros do catálogo de serviço do CITSmart ITSM.

**Atributos de Saída**

-   Idem ao anterior.

**Exemplo de atributos de entrada utilizando JSON**

-   {"synchronize": true,"request": {"numberOrigin": "9999", "userID":
    "ciclano.de.tal", "contact": {"phoneNumber": "61 84460709", "email":
    "ciclano.de.tal\@centralit.com.br", "department": "Departamento do
    Ciclano","name": "Ciclano de tal"}, "description": "Inclusão de solicitação
    utilizando REST v3 - Alterada","service": {"name":
    "SERVICO.TESTE.2","category": {"name": "Categoria 2"}}}}

Supondo que no atributo **platform** no login foi informado **ENAP** e
considerando o atributo synchronize igual a **true**, o CITSmart irá:

-   Incluir o solicitante no cadastro de usuários, caso não exista na base;

-   Incluir o serviço no catálogo de serviços do contrato 1, caso não exista na
    base e registrar o DE-PARA de serviços para o cliente ENAP;

-   Alterar o solicitante e serviço da solicitação com número de origem 9999.

Exemplo: alteração da situação de um incidente/requisição
--------------------------------------------------------

**URL**: /services/request/updateStatus

**Atributos de Entrada**

-   ** number**: número da solicitação no Citsmart ITSM. Obrigatório quando o
    atributo **numberOrigin** não for informado.

-   **numberOrigin**: número da solicitação no sistema de origem. Obrigatório
    quando o atributo **number** não for informado.

-   **status**: situação da solicitação, contendo:

    -   **code**: código da situação (obrigatório). Valores possíveis:
        EmAndamento, Suspensa, Cancelada, Resolvida, Reaberta, Fechada.

    -   **Details**: complemento da justificativa para alteração da situação
        (opcional).

**Atributos de Saída**

-   Idem ao anterior

**Exemplo de atributos de entrada utilizando JSON**

-   {"numberOrigin": "9999","status": {"code": "Suspensa","details": "Teste de
    Integração"}}

Exemplo: consulta incidentes e requisições do solicitante
-----------------------------------------------------

**URL**: /services/request/getByUser

**Atributos de Entrada**

-   **userID**: identificação de usuário do solicitante (obrigatório).

-   **description**: descrição do incidente ou requisição (opcional).

-   **startDate**: data de início da solicitação (opcional).

-   **endDate**: data de finalização da solicitação (opcional).

-   **service**: dados do serviço (opcional).

    -   **code**: código do serviço.

    -   **name**: nome do serviço.

-   **contractID**: número do contrato no CITSmart (opcional).

-   **status**: situação da solicitação (opcional), contendo:

    -   **code**: código da situação. Valores possíveis: *Em Andamento*,
        *Suspensa, Cancelada, Resolvida, Reaberta, Fechada, Reclassificada*.

**Atributos de saída**

Coleção de objetos da classe **CtRequest** contendo:

-   **number**: número da solicitação no Citsmart ITSM.

-   **numberOrigin**: número da solicitação no sistema de origem.

-   **type**: Tipo da solicitação. Valores possíveis: I=Incidente ou
    R=Requisição

-   **description**: descrição do incidente ou requisição.

-   **userID**: identificação de usuário do solicitante.

-   **urgency**: urgência da solicitação (opcional). Valores possíveis: H=Alta,
    M=Média, L=Baixa. Se não for informada, a urgência será calculada partir dos
    parâmetros do catálogo de serviço do CITSmart.

-   **impact**: impacto da solicitação (opcional). Valores possíveis: H=Alto,
    M=Médio, L=Baixo. Se não for informado, o impacto será calculado a partir
    dos parâmetros do catálogo de serviço do CITSmart.

-   **groupId**:** **sigla do grupo executor no CITSmart (opcional). Se não for
    informada, o grupo executor será obtido a partir dos parâmetros do catálogo
    de serviço do CITSmart.

-   **startDateTime**: data e hora de início da solicitação.

-   **startSLA**: data e hora de início do SLA.

-   **endSLA**: data e hora de término do SLA.

-   **status**: situação da solicitação, contendo:

    -   **code**: código da situação.

    -   **name**: nome da situação.

**Exemplo de atributos de entrada utilizando JSON**

-   {"userID": "ciclano.de.tal ","startDate":
    "2015-09-16T03:00:00.000Z","endDate": "2015-09-19T03:00:00.000Z"}

Exemplo: detalha incidente/requisição do solicitante
----------------------------------------------------

**URL: **/services/request/getById

**Atributos de entrada**

-   **number**: número da solicitação no Citsmart ITSM. Obrigatório quando o
    atributo **numberOrigin** não for informado.

-   **numberOrigin**: número da solicitação no sistema de origem. Obrigatório
    quando o atributo **number** não for informado.

**Atributos de Saída**

-   Idem ao /services/request/create

**Exemplo de atributos de entrada utilizando JSON**

-   {"numberOrigin":"9999"}

Exemplo: inclui ocorrência na solicitação
----------------------------------------

**URL**: /services/request/createOccurrence

**Atributos de entrada**

-   **requestNumber**: número da solicitação no CITSmart. Obrigatório quando o
    atributo **requestNumberOrigin **não for informado.

-   **requestNumberOrigin**: número da solicitação no sistema de origem.
    Obrigatório quando o atributo **requestNumber** não for informado.

-   **ocurrence**: objeto da classe **CtOccurrence**, contendo:

    -   **numberOrigin**: número da ocorrência no sistema de origem (opcional).

    -   **description**: descrição da ocorrência.

    -   **date**: data de registro da ocorrência.

    -   **hour**: hora de registro da ocorrência no formato HH:MM.

    -   **category**: categoria da ocorrência. Valores possíveis:
        Acompanhamento, Atualização, Diagnostico, Investigação, Memorando,
        Informação, Retorno, Sintoma, Contorno, Agendamento.

    -   **reason**: motivo da ocorrência.

**Atributos de Saída**

Objeto da classe **CtOcurrence** contendo:

-   **number**: número da ocorrência no CITSmart.

-   **numberOrigin**: número da ocorrência no sistema de origem.

-   **description**: descrição da ocorrência.

-   **date**: data de registro da ocorrência.

-   **Hour**: hora de registro da ocorrência no formato HH:MM.

-   **userID**: identificação do usuário responsável pelo registro da
    ocorrência.

-   **origin**: origem da ocorrência. Valores possíveis: EMAIL, FONE_FAX,
    VOICE_MAIL, PESSOALMENTE, OUTROS.

-   **category**: categoria da ocorrência. Valores possíveis: Criacao,
    Acompanhamento, Atualizacao, Diagnostico, Investigacao, Memorando,
    Informacao, Retorno, Sintoma, Contorno, Execucao, MudancaSLA,
    Reclassificacao, Agendamento, Suspensao, Reabertura, Direcionamento,
    Compartilhamento, CancelamentoTarefa, InicioSLA, SuspensaoSLA, Aprovacao,
    ReativacaoSLA

-   **elapsedTime**: tempo decorrido (para categoria do tipo Execucao)

-   **reason**: motivo da ocorrência.

-   **task**: tarefa associada à ocorrência, contendo:

    -   **number**: número da tarefa.

    -   **name**: nome da tarefa.

    -   **startDateTime**: data e hora de início.

    -   **endDateTime**: data e hora de execução.

    -   **status**: situação da tarefa, contendo:

        -   **code**: código da situação.

        -   **name**: nome da situação.

    -   **userId**: login do usuário responsável pela execução da tarefa.

**Exemplo de atributos de entrada utilizando JSON**

-   {"requestNumberOrigin": "9999","occurrence": {"description": "Teste de
    ocorrência","category": {"code": "Contorno"},"date":
    "2015-08-20T03:00:00.000Z","hour": "2219"}}

Exemplo: consulta ocorrências da solicitação
------------------------------------------

**URL: **/services/request/listOccurrences

**Atributos de entrada**

-   **requestNumber**: número da solicitação no CITSmart. Obrigatório quando o
    atributo **requestNumberOrigin **não for informado.

-   **requestNumberOrigin**: número da solicitação no sistema de origem.
    Obrigatório quando o atributo **requestNumber **não for informado.

**Atributos de saída**

-   Coleção de objetos da classe **CtOcurrence**, com os mesmos atributos
    da /services/request/createOccurrence

**Exemplo de atributos de entrada utilizando JSON**

-   {"requestNumberOrigin":"9999"}


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>7/26/2019 – Anna Martins

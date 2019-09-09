title: Real-world examples of using web services to integrate with service management

Description: Real-world examples of using web services to integrate with service management

# Real-world examples of using web services to integrate with service management

Preconditions
------------

1. Before using any REST operation of CITSmart, it is necessary that the user is authenticated.

2. Authentication is done through the REST login operation in the URL **/services/login**, which receives a **CtLogin** object 
containing the **userName, password**, and **platform** attributes.

3. The **platform** attribute must contain the ID of the site that is requesting the service.

4. The login operation returns an alphanumeric value in the **SessionID** attribute. This same **SessionID** must be used in the 
other REST calls. The returned object contains the code and description of the error in case of problems in executing the login 
operation.

5. The authenticated user composes the key for data synchronization, when the **synchronize** attribute is set to **true**.

6. The request inclusion and update services rely on the **synchronize** attribute. When this attribute is true, the user 
registration and catalog services are automatically created or updated in ITSM Citsmart from the information sent in the Web 
Service request.

!!! note "NOTE"

     All REST services created in Citsmart receive an input object and return an object. In case of error, the return object 
     contains the code and description of the error. When there is no error, in addition to the attributes defined for each 
     service, the return object contains the date and time of execution and the id of the operation. Citsmart guarantees that every 
     request is recorded in its database and an operation ID is returned to the requester, even in case of an error.

Example: incident/request creation
---------------------------------------

**URL**: /services/request/create

**Input Attributes**

-   **synchronize**: indicates whether the user and / or service information will be synchronized.

-   **sourceRequest**: request information from the **CtRequest** class, containing:

    -   **numberOrigin**: the request number in the source system (mandatory. This attribute is required for CITSmart to keep DE-
    PARA between its database and the original source system number.

    -   **type**: request type (required). Possible values: I = Incident or R = Request.

    -   **description**: description of the incident or request (required).

    -   **userID**: applicant's user ID (required). It will be included if it does not exist in the Citsmart database and the 
    synchronize attribute is equal to true.

    -   **contact**: data of the applicant. Required when the requestor does not exist in CITSmart and the synchronize attribute is 
    equal to true).

        -   **name**: applicant name (required).

        -   **phoneNumber**: applicant's phone number (required).

        -   **e-mail**: applicant's e-mail (required).

    -   **contractID**: contract number in CITSmart (optional). If not informed, Citsmart will include the request linked to the 
    default contract parameterized in the service.

    -   **service**: service data (optional). If not informed, Citsmart will include the request linked to the default service 
    parameterized in the WebService registry.

        -   **code**: service code. Optional, if service name is given).

        -   **name**: service Name. Required when the service does not exist in CITSmart and the synchronize attribute is true.

        -   **category**: category of service. Required when the service does not exist in CITSmart and the synchronize attribute 
        is true.

            -   **code**: category code.

            -   **name**: category name.

    -   **urgency**: urgency of the request (optional). Possible values: H = High, M = Average, L = Low. If not informed, the 
    urgency will be calculated from the CITSmart service catalog parameters.

    -   **impact of request (optional)**: Possible values: H = High, M = Medium, L = Low. If not informed, the impact will be 
    calculated from the CITSmart service catalog parameters.

    -   **groupId**: execution group acronym in CITSmart (optional). If not informed, the executor group will be obtained from the 
    CITSmart service catalog parameters.

**Output Attributes**

Output Attributes are composed of all Input Attributes of the **CtRequest** class plus the following information:

- **number**: number of the request created in CITSmart.

- **startSLA**: SLA start date and time.

- **endSLA**: SLA end date and time.

- **status**: status of the request, containing:

    - **code**: code of the situation.

    - **name**: name of the situation.

- **currentTask**: current task, containing:

    - **number**: task number

    - **name**: name of the task.

    - **startDateTime**: start date and time

    - **status**: task status, containing:

        - **code**: code of the situation.

        - **name**: name of the situation.

    - **userId**: login of the user responsible for the task.

    - **groupId**: acronym of the group responsible for the task.

**Input Attributes Example Using JSON**

- {"Synchronize": true, "sourceRequest": {"numberOrigin": "9999", "type": "R", "userID": " 61 84460708 "," email ":" 
fulano.de.tal@centralit.com.br "," department ":" Department of the So-and-so "," name ":" So-and-so "}," description ":" REST v3 
"," service ": {" name ":" SERVICO.TESTE.1 "," category ": {" name ":" Category 1 "}}," contractID ":" 1 "," urgency " : "H", 
"impact": "H"}}

Assuming that the **platform** attribute in the login was informed by **ENAP** and considering the synchronize attribute equal to 
true, the CITSmart will:

- Check if there is an DE-PARA of contract 1 for the ENAP user;

- Include the applicant in the user registry, if it does not exist in the database;

- Include the service in the service catalog of contract 1, if it does not exist in the database and register the service DE-PARA 
for the ENAP client;

- Include request with source number 9999;

- Register the DEPUT from the 9999 source request to the ENAP client.

Example: change incident/request information
------------------------------------------------------

**URL**: /services/request/update

**Input Attributes**

- **synchronize**: indicates whether the user and / or service information will be synchronized.

- **request**: request information from the **CtRequest** class, containing:

    - when the **numberOrigin** attribute is not informed.

    - **numberOrigin**: the request number on the source system. Required when the **number** attribute is not entered.

    - **description**: description of the incident or request (optional).

    - **userID**: applicant's user ID (required). It will be included if it does not exist in the Citsmart database and the 
    synchronize attribute is equal to true.

    - **number**: request number in CITSmart (required).

    - **contact**: data of the applicant. Required when the requestor does not exist in CITSmart and the synchronize attribute is 
    equal to true).

        - **name**: applicant name (required).

        - **phoneNumber**: applicant's phone number (required).

        - **e-mail**: applicant's e-mail (required)).

    - **service**: service data (optional).

        - **code**: service code. Optional, if service name is given).

        - **name**: service Name. Required when the service does not exist in CITSmart and the synchronize attribute is true.

        - **category**: category of service. Required when the service does not exist in CITSmart and the synchronize attribute is 
        true.

            - **code**: category code.

            - **name**: category name.

    - **urgency**: urgency of the request (optional). Possible values: H = High, M = Average, L = Low. If not informed, the urgency 
    will be calculated from the CITSmart service catalog parameters.

    - **impact**: impact of request (optional). Possible values: H = High, M = Medium, L = Low. If not informed, the impact will be 
    calculated from the CITSmart service catalog parameters.

**Output Attributes**

- Same as above

**Input Attributes Example Using JSON**

- {"Synchronize": true, "request": {"numberOrigin": "9999", "userID": "ciclano.de.tal", "contact": {"phoneNumber": "61 84460709", 
"email" "Cyclone", "name": "Cyclone of such"}, "description": "Inclusion of request using REST v3 - Changed", 
"cyclano.de.tal@centralit.com.br", "department" "Service": {"name": "SERVICO.TESTE.2", "category": {"name": "Category 2"}}}}

Assuming that the **platform** attribute in the login was informed by **ENAP** and considering the synchronize attribute equal to 
true, the CITSmart will:

- Include the applicant in the user registry, if it does not exist in the database;

- Include the service in the service catalog of contract 1, if it does not exist in the database and register the service DE-PARA 
for the ENAP client;

- Change the requestor and service from the request with source number 9999.

Example: changing the status of an incident/request
--------------------------------------------------------

**URL**: /services/request/updateStatus

**Input Attributes**

- **number**: request number in CITSmart. Required when the **numberOrigin** attribute is not informed.

- **numberOrigin**: the request number on the source system. Required when the **number** attribute is not entered.

- **status**: status of the request, containing:

    - **code**: situation code (required). Possible values: On End, Suspended, Canceled, Resolved, Reopened, Closed.

    - **Details**: complement of justification to change the situation (optional).

**Output Attributes**

- Same as above

**Input Attributes Example Using JSON**

- {"numberOrigin": "9999","status": {"code": "Suspended","details": "Integration Testing"}}

Example: inquire the applicant's incidents and requests
---------------------------------------------------------

**URL**: /services/request/getByUser

**Input Attributes**

- **userID**: applicant's user ID (required).

- **description**: description of the incident or request (optional).

- **startDate**: start date of the request (optional).

- **endDate**: end date of the request (optional).

- **service**: service data (optional).

    - **code**: service code.

    - **name**: name of the service.

- **contractID**: contract number in CITSmart (optional).

- **status**:  request status (optional), containing:

    - **code**: location code. Possible values: **Ending, Suspended, Canceled, Resolved, Reopened, Closed, Reclassified**.

**Output Attributes**

Collection of objects of class **CtRequest** containing:

- **number**: request number in CITSmart.

- **numberOrigin**: the request number on the source system.

- **type**: type of request. Possible values: I = Incident or R = Request

- **description**: description of the incident or request.

- **userID**: user ID of the requester.

- **urgency**:  urgency of the request (optional). Possible values: H = High, M = Average, L = Low. If not informed, the urgency 
will be calculated from the CITSmart service catalog parameters.

- **impact**: impact of request (optional). Possible values: H = High, M = Medium, L = Low. If not informed, the impact will be 
calculated from the CITSmart service catalog parameters.

- **groupId**: execution group acronym in CITSmart (optional). If not informed, the executor group will be obtained from the 
CITSmart service catalog parameters.

- **startDateTime**: the start date and time of the request.

-  **startSLA**: SLA start date and time.

- **endSLA**: end date and time of the SLA.

- **status**: status of the request, containing:

    - **code**: code of the situation.

    - **name**: name of the situation.

**Exemplo de atributos de entrada utilizando JSON**

- {"userID": "ciclano.de.tal ","startDate":
    "2015-09-16T03:00:00.000Z","endDate": "2015-09-19T03:00:00.000Z"}

Exemplo: detalha incidente/requisição do solicitante
----------------------------------------------------

**URL**: /services/request/getById

**Atributos de entrada**

- **number**: número da solicitação no Citsmart ITSM. Obrigatório quando o
    atributo **numberOrigin** não for informado.

- **numberOrigin**: número da solicitação no sistema de origem. Obrigatório
    quando o atributo **number** não for informado.

**Atributos de Saída**

- Idem ao /services/request/create

**Exemplo de atributos de entrada utilizando JSON**

- {"numberOrigin":"9999"}

Exemplo: inclui ocorrência na solicitação
----------------------------------------

**URL**: /services/request/createOccurrence

**Atributos de entrada**

- **requestNumber**: número da solicitação no CITSmart. Obrigatório quando o
    atributo **requestNumberOrigin** não for informado.

- **requestNumberOrigin**: número da solicitação no sistema de origem.
    Obrigatório quando o atributo **requestNumber** não for informado.

- **ocurrence**: objeto da classe **CtOccurrence**, contendo:

    - **numberOrigin**: número da ocorrência no sistema de origem (opcional).

    - **description**: descrição da ocorrência.

    - **date**: data de registro da ocorrência.

    - **hour**: hora de registro da ocorrência no formato HH:MM.

    - **category**: categoria da ocorrência. Valores possíveis:
        Acompanhamento, Atualização, Diagnostico, Investigação, Memorando,
        Informação, Retorno, Sintoma, Contorno, Agendamento.

    - **reason**: motivo da ocorrência.

**Atributos de Saída**

Objeto da classe **CtOcurrence** contendo:

- **number**: número da ocorrência no CITSmart.

- **numberOrigin**: número da ocorrência no sistema de origem.

- **description**: descrição da ocorrência.

- **date**: data de registro da ocorrência.

- **Hour**: hora de registro da ocorrência no formato HH:MM.

- **userID**: identificação do usuário responsável pelo registro da
    ocorrência.

- **origin**: origem da ocorrência. Valores possíveis: EMAIL, FONE_FAX,
    VOICE_MAIL, PESSOALMENTE, OUTROS.

- **category**: categoria da ocorrência. Valores possíveis: Criacao,
    Acompanhamento, Atualizacao, Diagnostico, Investigacao, Memorando,
    Informacao, Retorno, Sintoma, Contorno, Execucao, MudancaSLA,
    Reclassificacao, Agendamento, Suspensao, Reabertura, Direcionamento,
    Compartilhamento, CancelamentoTarefa, InicioSLA, SuspensaoSLA, Aprovacao,
    ReativacaoSLA

- **elapsedTime**: tempo decorrido (para categoria do tipo Execucao)

- **reason**: motivo da ocorrência.

- **task**: tarefa associada à ocorrência, contendo:

    - **number**: número da tarefa.

    - **name**: nome da tarefa.

    - **startDateTime**: data e hora de início.

    - **endDateTime**: data e hora de execução.

    - **status**: situação da tarefa, contendo:

        - **code**: código da situação.

        - **name**: nome da situação.

    - **userId**: login do usuário responsável pela execução da tarefa.

**Exemplo de atributos de entrada utilizando JSON**

- {"requestNumberOrigin": "9999","occurrence": {"description": "Teste de
    ocorrência","category": {"code": "Contorno"},"date":
    "2015-08-20T03:00:00.000Z","hour": "2219"}}

Exemplo: consulta ocorrências da solicitação
------------------------------------------

**URL**: /services/request/listOccurrences

**Atributos de entrada**

- **requestNumber**: número da solicitação no CITSmart. Obrigatório quando o
    atributo **requestNumberOrigin** não for informado.

- **requestNumberOrigin**: número da solicitação no sistema de origem.
    Obrigatório quando o atributo **requestNumber** não for informado.

**Atributos de saída**

- Coleção de objetos da classe **CtOcurrence**, com os mesmos atributos
    da /services/request/createOccurrence

**Exemplo de atributos de entrada utilizando JSON**

- {"requestNumberOrigin":"9999"}


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>7/26/2019 – Anna Martins

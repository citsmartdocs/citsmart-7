title: Cadastro de problema
Description: Esta funcionalidade tem por objetivo registrar um problema.

# Cadastro de problema

Esta funcionalidade tem por objetivo registrar um problema.

Como acessar
------------

1.  Acesse a funcionalidade de registro de problema através da navegação no menu
    principal **Processos ITIL > Gerência de Problema > Gerenciamento
    de Problema**. Na guia de Gerenciamento, clique no botão *Novo problema*.

Pré-condições
-------------

1.  Cadastrar contrato (ver conhecimento [Cadastro e pesquisa de
    contrato]();

2.  Cadastrar unidade (ver conhecimento [Cadastro e pesquisa de
    unidade]();

3.  Cadastrar solicitante (colaborador) (ver conhecimento [Cadastro e pesquisa
    de
    colaborador]();

4.  Cadastrar grupo (ver conhecimento [Cadastro e pesquisa de
    grupo]();

5.  Cadastrar categoria de problema, a qual deverá ter o vínculo com o fluxo
    referente ao problema (ver conhecimento [Cadastro e pesquisa de categoria de
    problema]();

6.  Vincular unidade ao contrato para que a unidade seja listada na tela de
    registro de problema (ver conhecimento [Como relacionar unidade ao
    contrato?]();

7.  Definir o fluxo referente ao gerenciamento de problema (ver
    conhecimento [Manutenção de fluxo de
    trabalho]();

8.  Cadastrar o grupo executor;

9.  Criar o template de problema;

10. Vincular o grupo aos contratos, associando os solicitantes (colaboradores)
    já cadastrados a este grupo, para que sejam listados os contratos e os
    solicitantes relacionados na tela de registro de problema. Caso seja preciso
    criar um novo colaborador, é necessário incluí-lo ao grupo de solicitante no
    qual esteja relacionado ao contrato para que o mesmo consiga registrar um
    problema, ou seja, para que o nome dele seja listado na tela de registro de
    problema.(ver conhecimento [Como relacionar grupo ao
    contrato?](https://itsm.citsmartcloud.com/citsmart/pages/knowledgeBasePortal/knowledgeBasePortal.load#/knowledge/349)).

Filtros
-------

1.  Não se aplica.

Listagem de itens
-----------------

1.  Não se aplica.

Preenchimento dos campos cadastrais
-----------------------------------

1.  Será apresentada a respectiva **Tela de Cadastro de Problema**, contendo uma
    série de passos a serem seguidos para realizar o registro:

2.  Registre as informações do contrato, conforme indicadas abaixo:

    ![Criar](images/register-problem-1.png)

    **Figura 1 - Tela de registro de problemas**

    -  **Contrato**: selecione o contrato para qual será feito o registro de
    problema;

    -  **Catálogo**: caso tenha selecionado um contrato do tipo "contrato", será
    exibida neste campo a informação do Catálogo de Serviços de "Negócio" e caso
    tenha selecionado um contrato do tipo "contrato de apoio" ou "acordo de
    nível operacional", será exibida neste campo a informação do Catálogo de
    Serviços "Técnico";

    -  **Categoria do Serviço**: caso opte pela busca de serviços por categoria,
    selecione a categoria de serviço desejada. A categoria do serviço irá
    identificar a natureza do serviço, posicionando-o dentro de grupos
    semelhantes de atuação, situando-o na hierarquia de sua categoria;

    -  **Serviço**: selecione o serviço referente ao catálogo de serviços. Se o
    catálogo de serviços for de "negócio", serão disponibilizados neste campo os
    serviços de negócio para seleção, mas se o catálogo de serviços for
    "técnico", serão disponibilizados neste campo os serviços de apoio/técnico
    para seleção.

1.  Registre as informações do solicitante, conforme indicadas abaixo:

    ![Criar](images/register-problem-2.png)

    **Figura 2 - Tela de registro de problemas**

    -  **Solicitante**: informe o solicitante, ou seja, a pessoa que está
    solicitando a resolução do problema identificado;

    -  **Nome do Contato**: informe o nome do contato;

    -  **E-mail**: informe o endereço de e-mail deste contato;

    -  **Telefone**: informe código de área (DDD) e o número de telefone do
    contato;

    -  **Ramal**: informe o número do ramal do contato, caso o tenha;

    -  **Unidade**: selecione a unidade em que o solicitante está alocado;

    -  **Localidade Física**: Informe a localização da unidade;

    -  **Observação**: descreva os detalhes adicionais sobre o contato, caso seja
    necessário.

1.  Registre as informações da requisição, conforme indicadas abaixo:

    ![Criar](images/register-problem-3.png)

    **Figura 3 - Tela de registro de problemas**

    -  **Título**: defina o título para o problema ocorrido;

    -  **Categoria Problema**: informe a categoria do problema. Essa categoria já
    deve estar previamente cadastrada no sistema para que possa selecioná-la. Se
    a categoria desejada não for encontrada pode-se efetuar o seu registro
    clicando no ícone ![Criar](images/register-problem-4.png)  de categoria problema;

    -  **Origem**: informe a origem, ou seja, a fonte da solicitação de resolução
    do problema;

    -  **Grupo Executor**: informe o grupo responsável pela resolução do problema;

    -  **Severidade**: defina a severidade do problema, ou seja, a complexidade
    para resolução do problema;

    -  **Impacto**: aponte o impacto que o problema causa ao negócio;

    -  **Urgência**: informe a urgência para resolução do problema;

    -  **Solucionar/Contornar até**: defina a data limite para resolução do
    problema;

    -  **Prioridade**: é definida após informar o impacto e a urgência. A
    prioridade é usada para identificar a importância relativa do problema e
    para identificar os tempos requeridos para que ações adequadas sejam
    tomadas. A prioridade vai de 1 a 5, sendo que o 1 é a prioridade mais alta e
    5 é a mais baixa.

    ![Criar](images/register-problem-5.png)

    **Figura 4 - Matriz de impacto e urgência**

1.  A combinação destas informações definirá a prioridade necessária para o
    tratamento do problema.

    -  **Gerenciamento**: informe o tipo do gerenciamento do problema:

        -  **Proativo**: proveniente do Gerenciamento Proativo de Problemas para a
        prevenção da ocorrência de Incidentes. Se preocupa em prevenir que
        incidentes ocorram. Responsável por tratar de assuntos idênticos antes
        que eles aconteçam, garantindo que tais cenários também sejam
        endereçados;

        -  **Reativo**: proveniente do processo de Gerenciamento de Incidentes. Se
        preocupa com a resolução de problemas em resposta a um ou mais
        incidentes. Executa a revisão e a análise de incidentes para identificar
        a quais grupos devem ser endereçados e quais as ações necessárias para
        tratá-los.

    -  **Descrição**: descreve com detalhes o problema ocorrido. Essa descrição
    deve ser objetiva, incluindo toda informação necessária para resolução do
    problema.

Vinculando anexo
----------------

1.  Caso queira anexar um arquivo ao registro de problema, proceda da seguinte
    maneira:

    -  Clique na guia **Anexos**, localizada no canto superior direito da tela,
    conforme indicado na figura abaixo:

    ![Criar](images/register-problem-6.png)

    **Figura 5 - Guia de anexos**

    -  É apresentada a tela de anexo de arquivos, conforme ilustrada na figura
    abaixo:

    ![Criar](images/register-problem-7.png)
    
    **Figura 6 - Tela de anexos**

    -  Clique no botão *Selecionar arquivo* e selecione o arquivo desejado;

    -  Informe a descrição do arquivo e clique no botão *Adicionar*;

    -  Após adição do arquivo, clique no botão *Fechar* para retornar à tela de
    registro de problema.

Vinculando base de conhecimento
-------------------------------

1.  Caso seja necessário acessar a base de conhecimento para verificar o
    conhecimento referente ao problema, proceda da seguintemaneira:

    -   Clique na guia **Base de Conhecimento**, localizada no canto superior
    direito da tela, conforme indicado na figura abaixo:

    ![Criar](images/register-problem-8.png)
 
    **Figura 7 - Guia de base conhecimento**

    -  Será apresentada a tela de consulta à base de conhecimento conforme
    ilustrada na figura abaixo:

    ![Criar](images/register-problem-9.png)

    **Figura 8 - Base de conhecimento**

1.  Após os dados informados, clique no botão *Gravar* para efetuar o registro,
    onde a data, hora e usuário serão gravados automaticamente para uma futura
    auditoria;

2.  Será exibida uma mensagem confirmando o sucesso do registro de problema:

    ![Criar](images/register-problem-10.png)

    **Figura 9 - Confirmação do registro de problema**

Visão geral das funções da tela principal
-----------------------------------------

    ![Criar](images/register-problem-11.png)

    **Figura 10 - Tela de gerenciamento de problemas**

    - ![Criar](images/register-problem-12.png) : amplia a tela de Gerenciamento de Problemas;

    -  **Gerenciamento**: apresentada os registros de problemas para atendimento e
    gerenciamento;

    -  **Gráficos**: apresenta os gráficos de informações dos problemas por
    situação (em andamento, suspensas e atrasadas), por prioridade e por grupo;

    -  **Filtros**: apresenta os filtros para pesquisa de registro de problemas;

    -  **Ações**: permite registrar um novo problema e realizar uma pesquisa
    avançada de problemas;

    -  **Relatórios**: apresenta os relatórios dinâmicos relacionados ao
    gerenciamento de problemas.

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>07/15/2019 – Anna Martins

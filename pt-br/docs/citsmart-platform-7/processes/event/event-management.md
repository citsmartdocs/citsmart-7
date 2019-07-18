title: Gerenciamento de evento
Description: Esta funcionalidade tem como objetivo apresentar algumas funcionalidades para o gerenciamento de eventos.
# Gerenciamento de evento

Esta funcionalidade tem como objetivo apresentar algumas funcionalidades para o gerenciamento de eventos, permitindo visualizar 
gráficos, acompanhar o monitoramento e pesquisar ocorrência de eventos.

- Gráficos;
- Gerenciamento;
- Pesquisa.

Como acessar
-------------

1. Acesse a funcionalidade de **Gerenciamento de Eventos** através da navegação no menu principal. Posicione o mouse na opção 
**Processos ITIL > Gerência de Evento > Gerenciamento de Eventos**.

![Menu](images/ger-eve.img1.png)

**Figura 1 - Tela menu de gerenciamento de eventos**

Pré-condições
---------------

1. Cadastrar Conexão do CITSmart Event Monitor (ver conhecimento Conexão CITSmart Event Monitor);

2. Cadastrar Ferramenta de Monitoração;

3. Ter pelo menos uma Requisição/Incidente cadastrada e vinculada ao IC (Item de Configuração) que gerou o evento, caso queira
"Executar" o serviço usando tela de Eventos (ver conhecimento Gerenciamento de ticket (serviços)).

Filtros
---------

1. Os seguintes filtros possibilitam ao usuário restringir a participação de itens na listagem padrão da funcionalidade, 
facilitando a localização dos itens desejados, conforme ilustrado na figura abaixo:

    - Id da ocorrência;
    - Ferramenta;
    - Classificação;
    - Situação;
    - Host;
    - Gerenciado;
    - Data inicial;
    - Data final.
    
    ![Ocorrência](images/ger-eve.img2.png)
    
    **Figura 2 - Tela de pesquisa de ocorrência de evento**
    
Listagem de itens das ocorrências de eventos
----------------------------------------------

1. Os seguintes campos cadastrais estão disponíveis ao usuário para facilitar a identificação dos itens desejados na listagem 
padrão da funcionalidade: **Classificação, Ferramenta, Data/Hora, Categoria, Host, Gerenciando, Prioridade** e **Situação**.

2. Após acessar a funcionalidade de **Gerenciamento de Eventos** são visualizadas todas as ocorrências registradas no MongoDB 
através da aplicação Citsmart Event Monitor, conforme ilustração abaixo:

    ![Listagem](images/ger-eve.img3.png)
    
    **Figura 3 - Tela de listagem de eventos**
    
3. A guia ![simbolo](images/simb-atuali.png) ![simbolo](images/simb-voltar.png) ![simbolo](images/simb-conf.png), apresenta as 
seguintes funcionalidades para a listagem de eventos:

    - **Atualização automática** ![simbolo](images/simb-atuali.png): possibilita que a opção "atualizar lista" seja executada de 
    tempos em tempos;
    - **Atualizar lista** ![simbolo](images/simb-voltar.png): ao clicar a lista de eventos é atualizada;
    - **Opções** ![simbolo](images/simb-conf.png): possibilita a alteração das colunas da lista de eventos.
    
4. Ao clicar sobre qualquer evento da listagem, a guia ![simbolo](images/simb-dash.png) será mostrada:

    - **Abrir** ![simbolo](images/simb-play.png): é possível acessar os detalhes de cada ocorrência de eventos;
    - **Encerrar ocorrência** ![simbolo](images/simb-v.png): encerra a ocorrência aberta;
    - **Encerrar ocorrência e todas as ações** ![simbolo](images/simb-2v.png): encerra a ocorrência e as ações vinculadas a ela;
    - **Mais opções** ![simbolo](images/simb-3pontos.png): é possível realizar três ações ao clicar nesse ícone (criar solicitação
    de serviço/criar requisição de mudança/criar requisição de problema).
    
Preenchimento dos campos cadastrais
-------------------------------------

1. Não se aplica.

Opção - gerenciamento de eventos
----------------------------------

Essa funcionalidade permite acompanhar em tempo real as ocorrências de todas as ferramentas, sendo atualizada automaticamente
de acordo com o tempo. Esta tela exibirá somente ocorrências que estão iniciadas e aguardando tratamento.

Pesquisa
-----------

1. Todos os eventos das ferramentas de monitoração Nagios, Zabbix e Citsmart Inventory poderão ser filtradas 
através dessa funcionalidade;

2. Clique no ícone ![simbolo](images/simb-abrir.png)  da seção de Pesquisa ![simbolo](images/simb-pesq.png), então será 
apresentada a respectiva tela para pesquisa de ocorrência de evento, conforme ilustração abaixo:

    ![Pesquisa](images/ger-eve.img4.png)
    
    **Figura 4 - Tela de pesquisa de ocorrência de evento**
    
3. Informe os filtros de acordo com sua necessidade para pesquisa de ocorrência de eventos.

4. Clique no botão ![simbolo](images/simb-lupa.png) e a listagem de ocorrências com a aplicação do filtro é mostrada conforme
a **Figura 3**.

5. Passa a ser possível acessar os detalhes de cada ocorrência de eventos, como mostrado na figura abaixo, através do botão
![simbolo](images/simb-play.png) (que surge quando clicar na ocorrência):

![Informações](images/ger-eve.img5.png)

**Figura 5 - Informações do evento**

Menu da tela de detalhamento
------------------------------

1. Ao clicar no ícone ![simbolo](images/simb-menu.png) localizado no canto esquerdo superior, será apresentado a 
seguinte listagem:

![Detalhamento](images/ger-eve.img6.png)

**Figura 6 - Tela de detalhamento**

Ações
-------

1. Ao clicar na opção "Ações" do menu da **Figura 6**, uma tela será mostrada com a relação de todos os incidentes/requisições
vinculados a ocorrência selecionada:

    ![Ações](images/ger-eve.img7.png)
    
    **Figura 7 - Ações**
    
2. Ao clicar no botão "Executar", uma nova tela é apresentada mostrando e disponibilizando a requisição/incidente para
executá-lo normalmente (Encerrar, Capturar, etc.). conforme figura abaixo:

    ![Incidente](images/ger-eve.img8.png)
    
    **Figura 8 - Tela de requisição/incidente**
    
Ocorrências relacionadas
--------------------------

1. Para visualizar ocorrências relacionadas, basta clicar na guia **Ocorrências relacionadas**, conforme exemplo ilustrado 
abaixo:

![Relacionadas](images/ger-eve.img9.png)

**Figura 9 - Ocorrências relacionadas**

Conhecimentos relacionados
---------------------------

1. Para ver o detalhamento da ocorrência, clique na ocorrência que será apresentada a tela detalhes:

    - Para visualizar os conhecimentos já gravados e cadastrar novos conhecimentos na Base de Conhecimento, clique na guia de 
    **Base de Conhecimento**, será apresentado os conhecimentos já relacionados e para a criação de um conhecimento novo, basta
    clicar no botão "Criar Conhecimento". A figura abaixo apresenta essa tela:
    
    ![Conhecimentos](images/ger-eve.img10.png)
    
    **Figura 10 - Conhecimentos relacionados**
    
Opção - gráficos
-----------------

Essa funcionalidade permite visualizar gráficos de comparação por tipos de evento, quantidade de ocorrências por tipos de evento, 
quantidade de ocorrência por ferramentas e quantidade de ocorrências por item de configuração, conforme filtros escolhidos.

Consultando gráficos
----------------------

1. Após acessar a funcionalidade de Gerenciamento de Eventos, no menu Gráficos, será apresentada a tela com as informações de 
ocorrência de eventos, sendo essas demonstradas em gráficos, conforme exemplificados nas imagens abaixo. Nesta tela é possível 
filtrar as ocorrências por data/período (busca realizado pelo campo  no canto superior do lado direito):

    ![Gráfico](images/ger-eve.img11.png)
    
    **Figura 11 - Gráfico quantidade de ocorrências por tipos de evento**
    
    ![Quantidade](images/ger-eve.img12.png)
    
    **Figura 12 - Gráfico quantidade de ocorrências por ferramentas**
    
    ![Item](images/ger-eve.img13.png)
    
    **Figura 13 - Gráfico quantidade de ocorrências por item de configuração**
    
!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>07/18/2019 – Larissa Lourenço

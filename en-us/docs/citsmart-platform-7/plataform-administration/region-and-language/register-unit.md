title: Unit registration and search
Description: The goal of this feature is to register the units where the staff members are located.
# Unit registration and search

The goal of this feature is to register the units where the staff members are located.

How to access
-------------------

1. Access the unit feature navigating through the main menu 
**General Registration > Staff Management > Unit**.

Preconditions
----------------

1. Enter the content below into the parameter (see knowledge [Parameterization rules - system)](/en-us/citsmart-platform-7/plataform-administration/parameters-list/parametrization-system.html)):

    - Parameter 254 : "API Key to use Google services" with the "AIzaSyBuu_v0DeKsL1w-2FY6E-PZHYsw6ghuKJY".
    
2. Perform the country load (see knowledge [Country loading](/en-us/citsmart-platform-7/plataform-administration/region-and-language/load-countries.html)).

Filters
----------

1. OThe following filter enables the user to restrict the participation of items in 
the standard feature listing, making it easier to find the desired items:

    - Name.
    
    ![Search](images/unit.img1.jpg)
    
    **Figure 1 - Unit search screen**
    
2. Conduct a unit search:

    - Informe o nome da unidade que deseja pesquisar e Insert the name of the intended 
    unit and click on the *Search* button. Afterwards, the unit entry will be 
    displayed according to the description provided.
  
    - To list all units, just click directly on the Search button, if needed.
    
Items list
-------------------

1. The following cadastral field is available to the user to facilitate the identification of the desired items in the standard feature listing: **Name**.

    ![Listing](images/unit.img2.jpg)
    
    **Figure 2 - Unit listing screen**
    
2. After searching, select the intended entry. Afterwards, they will be redirected to 
the registry screen displaying the content belonging to the selected entry.

3. To edit a unit entry, just modify the information on the intended fields and click 
on the *Save* button to confirm the changes to the database, at which date, time and 
user will be stored automatically for a future audit.

Filling in the registration fields
------------------------------------

1. The **Register Unit** screen will be displayed, as illustrated on the image below:

    ![Cadastro](images/uni-img3.jpg)
    
    **Figura 3 - Tela de cadastro de unidade**
    
2. Preencha os campos conforme orientações abaixo:

    - **Nome**: informe o nome da unidade de negócio;
    - **Sigla**: informe a sigla a qual se referirá a unidade cadastrada;
    - **Unidade Pai**: selecione uma unidade, caso a unidade que está sendo cadastrada faça parte de outra unidade cadastrada 
    anteriormente;
    - **Aceita Entrega de Produto**: marque este campo, caso a unidade aceitar entrega de produtos (compras);
    - **E-mail**: informe o e-mail da unidade de negócio;
    - **Calendário**: informe o calendário da unidade de negócio;
    - **Grupo**: informe a qual grupo a unidade cadastrada estará vinculada;
    - **Descrição**: descreva os detalhes da unidade de negócio;
    
3. Informe os dados de endereço da unidade de negócio:

    - **País**: selecione o país da unidade;
    - **UFs**: informe a unidade da federação, ou seja, o estado em que a unidade que está sendo cadastrada se encontra;
    - **Cidades**: informe a cidade da unidade;
    - **Logradouro** informe o logradouro, ex.: nome da rua, avenida;
    - **CEP**: informe o CEP;
    
    !!! note "NOTA"
    
        Os campos Latitude e Longitude serão buscados apenas quando o campo CEP já estiver preenchido.
        
    - **Número**: informe o número da unidade;
    - **Complemento**: informe o complemento do endereço da unidade;
    - **Latitude**: o sistema preencherá o campo com as coordenadas após escolha de cidade;
    - **Longitude**:o sistema preencherá o campo com as coordenadas após escolha de cidade;
    
4. Após informar preencher os campos acima, clique no botão "Obter Coordenadas" para exibição das coordenadas geográficas
(Latitude e Longitude) e do mapa.

    - **Acesso aos contratos**: selecione os contratos em que a unidade que está sendo cadastrada terá acesso. Lembrando que, 
    este campo é exibido caso o parâmetro **"61 - Vincula contratos a unidade"** esteja habilitado, ou seja, configurado com o
    valor "S" (ver conhecimento Regras de parametrização - ticket);
    - O botão "Serviço" é disponibilizado caso o parâmetro **"40 - Faz o controle de acessos do catálogo de serviço por unidade"**
    esteja habilitado, ou seja, configurado com o valor "S". Esse botão serve para adição de serviços à unidade (ver
    conhecimento Regras de parametrização - ticket);
    - **Localidade**: adicione a localidade à unidade de negócio. Clique no ícone ![simbolo](images/simb-mais.green.jpg) para 
    adição da localidade à unidade. Caso não encontre a localidade desejada, é possível realizar um cadastro rápido a partir 
    desta tela, basta clicar no ícone ![simbolo](images/simb-paper.jpg). Lembrando que, este campo é disponibilizado se o 
    parâmetro **"115 - Tirar vínculo de localidade física com unidade"** estiver desabilitado, ou seja, configurado com o valor
    "N"(ver conhecimento Regras de parametrização - ticket).
    
5. Clique no botão "Gravar" para efetuar o registro, onde a data, hora e usuário serão gravados automaticamente para uma futura 
auditoria.

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>07/24/2019 - Larissa Lourenço

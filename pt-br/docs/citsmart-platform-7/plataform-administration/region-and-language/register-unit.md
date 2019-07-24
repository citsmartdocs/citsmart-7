title: Cadastro e pesquisa de unidade
Description: Tem por objetivo registrar as unidades onde os colaboradores estão alocados. 
# Cadastro e pesquisa de unidade

Esta funcionalidade tem por objetivo registrar as unidades onde os colaboradores estão alocados.

Como acessar
--------------

1. Acesse a funcionalidade de unidade através da navegação no menu principal **Cadastros Gerais > Gerência de Pessoal > Unidade**.

Pré-condições
----------------

1. Informe o conteúdo abaixo no parâmetro (ver conhecimento Regras de parametrização - Sistema):

    - Parâmetro 254: "AIzaSyBuu_v0DeKsL1w-2FY6E-PZHYsw6ghuKJY".
    
2. Realizar a carga de países (ver conhecimento Carga de países).

Filtros
----------

1. O seguinte filtro possibilita ao usuário restringir a participação de itens na listagem padrão da funcionalidade, facilitando a 
localização dos itens desejados:

    - Nome.
    
    ![Pesquisa](images/uni-img1.jpg)
    
    **Figura 1 - Tela de pesquisa de unidade**
    
2. Realize a pesquisa de unidade:

    - Informe o nome da unidade que deseja pesquisar e clique no botão "Pesquisar". Após isso, será exibido o registro de unidade
    conforme a descrição informada;
    
    - Caso deseje listar todos os registros de unidade, basta clicar diretamente no botão "Pesquisar".
    
Listagem de itens
-------------------

1. O seguinte campo cadastral está disponível ao usuário para facilitar a identificação dos itens desejados na listagem padrão da
funcionalidade: **Nome**.

    ![Listagem](images/uni-img2.jpg)
    
    **Figura 2 - Tela de listagem de unidade**
    
2. Após a pesquisa, selecione o registro desejado. Feito isso, será direcionado para a tela de cadastro exibindo o conteúdo
referente ao registro selecionado;

3. Para alterar os dados do registro de unidade, basta modificar as informações dos campos desejados e clicar no botão "Gravar" 
para que seja gravada a alteração realizada no registro, onde a data, hora e usuário serão gravados automaticamente para uma 
futura auditoria.

Preenchimento dos campos cadastrais
------------------------------------

1. Será apresentada a tela de **Cadastro de Unidade**, conforme ilustrada na figura abaixo:

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

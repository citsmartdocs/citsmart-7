title:  Módulo Definições do Sistema
Description: Permite efetuar configurações relacionadas a configurações gerais. 
# Módulo Definições do Sistema

O **Menu Definições** do Sistema, permite efetuar configurações relacionadas a configurações gerais, segurança (usuários e
grupos), domínios e configurações de conteúdo.

Para acessá-lo basta clicar em **Menu** e logo após em “**Definições do Sistema**”, conforme abaixo:

![Opções](images/sistemas.img1.jpg)

**Figura 1 - Opções do Menu Definições do Sistema**

Geral
--------

Esta funcionalidade envolve a configuração de informações, como: **Definições Gerais** e **Notificação**.

Exibe as definições de comportamentos dentro do sistema.

Ao clicar em “**Definições Gerais**” do submenu “**Geral**”, o sistema apresentará a seguinte tela:

![Definir](images/Figura 2 - Definindo Configurações Gerais)

**Figura 2 - Definindo Configurações Gerais**

- A aba “**Página Login**” permite alterar o logotipo que aparece na página inicial e na barra de ferramentas superior do
sistema.
- A aba “**E-mail**” permite configurar o serviço para envio de mensagens (e-mails) automáticas do sistema para envio de
alertas e notificações.
- A aba “**Módulos**” permite configurar o modo execução de cada módulo (por scripts, por carga inicial, por 
internacionalização).
- A aba “**Relatórios**” permite configurar/alterar o cabeçalho e do logotipo que aparecem em todos os documentos gerados no
sistema (termos e relatórios).
- A aba “**Geral**” permite definir a padronização (máscara) da numeração automática utilizada em termos, formulários e outros.
- A aba “**Unidade Principal**” permite definir as permissões de acesso ao sistema, de acordo com a unidade do órgão.

As alterações realizadas em “**Definições Gerais**” poderão ser salvas clicando no botão “**Salvar Configuração**”.

Noificação
-------------

Esta funcionalidade exibe as notificações para que o sistema envie ao usuário, de acordo com as definições configuradas.

Ao selecionar a opção “**Notificação**” no submenu “**Geral**”, a seguinte tela será mostrada:

![Visualizando](images/sistemas.img3.jpg)

**Figura 3 - Visualizando Notificações Configuradas**

Na tela de pesquisa é possível, **Visualizar** as informações de uma Notificação cadastrado, **Remover**
uma Notificação e ainda criar **Filtros** específicos de busca de informações das Notificações.

Segurança
-----------

Exibe as definições de segurança dentro do sistema.

!!! warning "ATENÇÃO"

    Para realizar as configurações referentes a “Usuário”, há necessidade de ser administrador do sistema, bem como só é 
    possível realizar essas configurações quando não há integração com o sistema de autenticação/autorização da 
    instituição/órgão, pois neste caso, as regras de acesso seguem aos padrões e políticas de segurança definidos à rede 
    corporativa.
    
Uusário
-----------

Esta funcionalidade é utilizada para cadastrar usuários do sistema, além de visualizar os usuários já cadastrados, editar e 
remover cadastros.

Ao clicar em Usuário, a tela de pesquisa será exibida permitindo visualizar os cadastros realizados.

![Usuários](images/sistemas.img4.jpg)

**Figura 4 - Pesquisando Usuários**

As opções de botões apresentadas na tela permitem: **cadastrar** um novo usuário, **visualizar** o cadastro de um usuário
selecionado, **editar** informações de um cadastro, **remover** um usuário e criar **filtros** de visualização.

Ao clicar em “**Cadastrar**”, e a tela abaixo será aberta para realizar o cadastro de um novo usuário.

![Usuário](images/sistemas.img5.jpg)

**Figura 5 - Cadastrando Usuário**

Nesta tela de cadastro, as seguintes informações deverão ser preenchidas:

- **Nome**: nome completo do usuário a ser cadastrado.
- **E-mail**: endereço de correio eletrônico do usuário.
- **Senha**: senha de acesso ao sistema.
- **Confirma senha**: repetir a senha do campo anterior.
- **Dica de senha**: dica para relembrar a senha.
- **Senha mobile**: senha de acesso mobile.
- **Confirma senha**: repetir a senha do campo anterior.
- **Dica de senha**: dica para relembrar a senha.
- **Permissões**: selecione a(s) permissão(ões) de usuário.
- **Grupos**: selecione o(s) grupo(s) de acesso que o usuário fará parte. Para tanto, as permissões e grupos deverão estar
previamente cadastrados e configurados.
- **Órgão**: digite, por exemplo, a primeira letra do nome do órgão e tecle ENTER, o sistema incluirá automaticamente o órgão 
na tabela.

Após preencher todos os campos, clique em “**Salvar**”, para que o sistema armazene as informações no banco de dados.

Nesta tela as seguintes ações também poderão ser realizadas:

- **Limpar**: limpa todos os campos preenchidos.
- **Remover**: remove o registro.
- **Pesquisar**: retorna à tela de pesquisa.

Ao selecionar um usuário e clicar em “**Visualizar**”, as informações cadastradas são exibidas.

![Visualizar](images/sistemas.img6.jpg)

**Figura 6 - Visualizando um Cadastro**

A tela de visualização permite também editar as informações e retornar à tela de pesquisa.

Ao selecionar um usuário e clicar em “**Editar**”, a tela do cadastro selecionado é exibida, permitindo a edição das 
informações.

Ao selecionar um usuário e clicar em “**Remover**”, o sistema excluirá o completamente o cadastro.

O botão “**Filtros**” permite criar filtros específicos para visualização na tela de pesquisa.

Grupo
-------

Esta funcionalidade é utilizada para cadastrar grupos de usuários do sistema, além de visualizar grupos, editar e remover 
cadastros de grupos.

Ao clicar em Grupo, a tela de pesquisa será exibida permitindo visualizar os cadastros realizados.

![Pesquisando](images/sistemas.img7.jpg)

**Figura 7 - Pesquisando Grupos de Usuários**

As opções de botões apresentadas na tela permitem:

- **Cadastrar**: permite realizar o cadastro de um grupo no sistema.
- **Visualizar**: permite visualizar as informações do cadastro do grupo selecionado.
- **Editar**: permite editar as informações do grupo selecionado.
- **Remover**: permite remover o cadastro do grupo selecionado.
- **Filtros**: permite configurar filtros específicos de visualização.

Ao clicar em “Cadastrar”, e a tela abaixo será aberta para realizar o cadastro de um novo grupo.

![Grupo](images/sistemas.img8.jpg)

**Figura 8 - Cadastrando Grupo de Usuários**

A tela de cadastro apresentará alguns campos para preenchimento, conforme abaixo:

- **Nome**: nome do novo grupo.
- **Sigla**: sigla para o grupo.
- **E-mail**: endereço de correio eletrônico do grupo.
- **Permissões**: tipos de permissão do grupo.
- **Usuários**: listagem de usuários cadastrados no sistema.
- **Usuários selecionados**: listagem de usuários selecionados para serem integrantes do grupo.

Após preencher todos os campos, clique em “**Salvar**”, para que o sistema armazene as informações no banco de dados.

Nesta tela as seguintes ações também poderão ser realizadas:

- **Limpar**: limpa todos os campos preenchidos.
- **Remover**: remove o registro.
- **Pesquisar**: retorna à tela de pesquisa.

Ao selecionar um grupo e clicar em “**Visualizar**”, as informações cadastradas serão exibidas.

A tela de visualização permite também editar as informações e retornar à tela de pesquisa.

Ao selecionar um grupo e clicar em “**Editar**”, a tela do cadastro selecionado é exibida, permitindo a edição das 
informações.

Ao selecionar um grupo e clicar em “**Remover**”, o sistema excluirá o completamente o cadastro.

O botão “**Filtros**” permite criar filtros específicos para visualização na tela de pesquisa.

Um grupo de usuário poderá ser bloqueado, impedindo atividades dentro do sistema, clicando no botão “**Bloquear**”. Esta ação 
é exibida dentro do cadastro do grupo inserindo a data de início do bloqueio do grupo. O desbloqueio do grupo não será 
automático, devendo ser feito manualmente.

![Bloquear](images/sistemas.img9.jpg)

**Figura 9 - Bloqueando Grupo**

Menu conteúdo
---------------

Esta funcionalidade serve para configuração do Menu, dos módulos existentes na plataforma, arquivos e internacionalização.

![Menu](images/sistemas.img10.jpg)

**Figura 10 - Menu Conteúdo**

Menu
------

Esta funcionalidade é utilizada para configurar as informações apresentadas no menu, cadastrar novos módulos e configurar a
internacionalização.

Para configurar o Menu, clique sobre a funcionalidade para alterar a ordem dos módulos, ícones e cores, como mostrado na 
imagem abaixo:

![Configurar](images/sistemas.img11.jpg)

**Figura 11 - Configurando o Menu**

Ao clicar no ícone ![simbolo](images/simb.seta.jpg), as opções da funcionalidade serão mostradas à frente, conforme abaixo.

![Exibir](images/sistemas.img12.jpg)

**Figura 12- Exibindo Configurações do Menu**

Ao clicar no ícone ![simbolo](images/simb-plus.jpg) (Adicionar), a seguinte tela será exibida para adicionar um novo menu 
principal

![Adicionar](images/sistemas.img13.jpg)

**Figura 13 - Adicionando Opções Dentro do Menu**

- **Nome**: Nome do novo menu.
- **Chave Única**: Nome do menu separado por hífen.
- **Ícone**: Selecione um ícone para identificar o menu.
- **Cor**: Selecione uma cor para identificar o menu principal.
- **Opacidade da cor do menu**: Insira um número para identificar a opacidade da cor.
- **Permissões**: Selecione o tipo de permissão a esta funcionalidade.
- **Grupos**: Selecione um grupo para permitir acesso à funcionalidade ou menu.
- **Ativo**: Defina “**Sim**” ou “**Não**” para ativar ou desativar a funcionalidade ou menu.

Após realizar as alterações desejadas, clique em “**Salvar**” para que o sistema armazene as informações no banco de dados.

Ao clicar no ícone ![simbolo](images/simb.folha.jpg) (Arquivos do Menu), a seguinte tela será exibida para inserir novos 
arquivos no menu.

![Adicinando](images/sistemas.img14.jpg)

**Figura 14 - Adicionando um Arquivos do Menu**

Após informar o Caminho, selecionar o Tipo e marcar Ativo, clique em “**Adicionar novo item**” para que o sistema armazene as 
novas configurações.

Ao clicar no ícone ![simbolo](images/simb,lapis.jpg) (Editar menu), a tela do menu escolhido será exibida para edição.

Para remover um menu, basta clicar no ícone ![simbolo](images/simb.lixo.jpg) (Remover menu), à frente do menu escolhido.

Módulos
--------

Esta funcionalidade é utilizada para cadastrar novos módulos dentro da plataforma e configurar informações relacionadas a eles.

Ao clicar em “Módulos”, o sistema exibirá a seguinte tela:

![Exibir](images/sistemas.img15.jpg)

Nesta tela o usuário, terá disponível as seguintes opções:

- Cadastrar;
- Editar;
- Remover;
- Filtros;

Ao clicar em “**Cadastrar**”, o sistema irá apresentar ao usuário a seguinte tela:

![Módulo](images/sistemas.img16.jpg)

**Figura 16 - Cadastrando Módulo**

Nesta tela o usuário deverá preencher os seguintes campos:

- **Nome**: nome do módulo novo.
- **Caminho**: nome do caminho de acesso ao módulo.
- **URL**: nome da url de acesso ao módulo.
- **Retangular**: nome retangular.
- **Ativo**: opção para deixar o módulo ativo (Sim/Não).

Após inserir todas as informações necessárias, o usuário deverá clicar em “**Salvar**”, para que o sistema armazene as 
configurações.

Caso deseje limpar todos os campos, basta clicar em “**Limpar**”.

Para retornar a tela anterior, basta clicar em “**Pesquisar**”.

Para editar informações de um módulo, clique em “**Editar**”, e o sistema exibirá a seguinte tela:

![Editar](images/sistemas.img17.jpg)

**Figura 17 - Editando Informações do Módulo**

Após editar os campos desejados, clique em “Salvar”, para que o sistema armazene as configurações, ou clique em “Remover”, 
para excluir o módulo.

Arquivos padrão
------------------

Esta funcionalidade serve para adicionar arquivos de formatação .css ou arquivos .js que são utilizados pela ferramenta para
execução dos módulos.

![Padrão](images/sistemas.img18.jpg)

**Figura 18 - Adicionando Arquivos Padrão**

Internacionalização
---------------------

Ao selecionar a opção “Internacionalização” no submenu “Conteúdo”, será apresentada ao usuário a seguinte tela:

![Internacionalização](images/sistemas.img19.jpg)

**Figura 19 - Internacionalização**

Menu tarefas de domínio
-------------------------

Esta funcionalidade serve para apresentar as diversas tabelas de domínios utilizadas dentro da plataforma CITSmart.

Cadastro de domínios
------------------------

Ao clicar em “Cadastro de Domínios”, a seguinte tela será apresentada para visualizar as tabelas de domínios cadastradas:

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/16/2019 - Larissa Lourenço





























































































































































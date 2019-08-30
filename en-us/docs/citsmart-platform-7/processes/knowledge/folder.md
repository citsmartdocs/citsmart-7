title: Folder registration and search
Description: This functionality aims to create and maintain folders that will be used for storing and organizing the knowledge 
# Folder registration and search

This functionality aims to create and maintain folders that will be used for storing and organizing the knowledge recorded in the 
database.

How to access
---------------

1.  Access the folder functionality through navigation in the main menu **ITIL Processes > Knowledge Management > Folder**.

Preconditions
-------------

1.  Have at least one registered profile, a registered group or both scenarios (see knowledge 
[Access profile registration and search][1], [Group registration and search][2].

Filters
------------

1.  The following filter enables the user to restrict the participation of items in the standard feature listing, making it easier 
to find the desired items:

    -   Folder;

    -   Higher folder.

![Criar](images/folder-1.png)

**Figura 1 - Tela de pesquisa pasta**

Listagem de itens
----------------

1.  Os seguintes campos cadastrais estão disponíveis ao usuário para facilitar a
    identificação dos itens desejados na listagem padrão da
    funcionalidade: ID, Pasta e Pasta Superior.

2.  Existem botões de ação disponíveis ao usuário em relação a cada item da
    listagem, são eles: *Editar* e *Excluir*.

![Criar](images/folder-2.png)

**Figura 2 - Tela de listagem de pasta**

Preenchimento dos campos cadastrais
---------------------------------

1.  Ao se clicar no botão Novo, a seguinte tela será apresentada:

    ![Criar](images/folder-3.png)

    **Figura 3 - Tela de cadastro de pasta**

1.  Preencha os campos:

    -  **Nome**: define o título usado nas listas de pastas em outras
    funcionalidades

    -  **Pasta Superior**: define a pasta que agrupa esta pasta e outras, quando
    não preenchido significa que não há nenhum nível superior de pastas

    -  **Perfil de Acesso**: permite selecionar os perfis que terão acesso à pasta,
    permitindo configurar:

       -  **Permissão**: define se o perfil pode fazer Leitura ou Leitura/
        Gravação

       -  **Pode publicar**: define se o usuário pode ou não publicar

    -  **Grupo**: seleciona os grupos que terão a pasta, clicando no botão
    Adicionar. Permite a reunião de mais de um perfil/grupo em um só:

       -  **Permissão**: define se o perfil pode fazer Leitura ou Leitura/
        Gravação

       -  **Pode publicar**: define se o usuário pode ou não publicar

!!! info "IMPORTANTE"

     Quando definir o perfil de acesso das pastas por grupo e perfil de acesso,
     prevalecerá aquele com maiores permissões (campos: Permissão e Pode
     Publicar).


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>07/17/2019 – Anna Martins
    
[1]:/pt-br/citsmart-platform-7/initial-settings/access-settings/profile/user-profile.html
[2]:/pt-br/citsmart-platform-7/initial-settings/access-settings/user/group.html

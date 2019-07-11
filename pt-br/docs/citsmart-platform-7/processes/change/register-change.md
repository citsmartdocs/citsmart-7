title: Cadastro de requisição de mudança
Description: Esta funcionalidade tem por objetivo registrar requisição de mudança.
# Cadastro de requisição de mudança

Esta funcionalidade tem por objetivo registrar requisição de mudança.

Antes de começar
--------------------

1. Acesse a funcionalidade de registro de requisição de mudança através da navegação no menu principal 
**Processos ITIL > Gerência de Mudança > Gerência de Mudança**. Na guia de Gerenciamento, clique no botão
"Cadastrar nova mudança".

Pré-condições
---------------

1. Ter o contrato cadastrado (ver conhecimento Cadastro e pesquisa de contrato)

2. Ter a unidade cadastrada (ver conhecimento Cadastro e pesquisa de unidade)

3. Ter solicitante cadastrado (ver conhecimento Cadastro e pesquisa de colaborador)

4. Ter o “Comitê Consultivo de Mudanças” cadastrado (ver conhecimento Cadastro e pesquisa de grupo)

5. Ter o tipo de mudança cadastrado, o qual deverá ter o vínculo com o fluxo referente a requisição de mudança
(ver conhecimento Cadastro e pesquisa de tipo de mudança)

6. Configurar os parâmetros abaixo (Regras de parametrização - mudança):

    - Parâmetro 47;
    - Parâmetro 279;
    - Parâmetro 280.
   
7. Ter o grupo vinculado ao contrato, associando os Solicitantes (colaboradores) já cadastrados a este grupo. 
Caso seja preciso criar um novo colaborador, é necessário incluí-lo ao Grupo de Solicitante no qual esteja 
relacionado ao contrato (ver conhecimento Como relacionar grupo ao contrato?);

8. Ter a unidade vinculada ao contrato (ver conhecimento Como relacionar unidade ao contrato?)

9. Ter a mudança cadastrada

10. Ter o questionário cadastrado (ver conhecimento Cadastro e pesquisa de questionários)

Filtros
----------

1. Não se aplica.

Listagem de itens
-------------------

1. Não se aplica.

Preenchimento de campos cadastrais
------------------------------------

1. Para ter uma melhor visão das opções da funcionalidade, segue imagem:

![Gerenciamento de mudança](images/cad-mud.img1.png)

**Figura 1 - Tela de gerenciamento de mudança**

![num](images/num1.png) ![amplia](images/sim-aum.png) : amplia a tela de Gerenciamento de Mudanças;

![num](images/num2.png) **Gerenciamento**: apresentada os registros de requisições de mudança para atendimento e gerenciamento;

![num](images/num3.png) **Gráficos**: apresenta os gráficos de informações das requisições de mudanças por situação 
(em andamento, suspensas e atrasadas), por prioridade e por grupo;

![num](images/num4.png) **Requisições para votação**: apresentada os registros de requisições de mudança para aprovação;

![num](images/num5.png) **Filtros**: apresenta os filtros para pesquisa de requisições de mudança;

![num](images/num6.png) **Ações**: permite registrar novas requisições de mudança e realizar uma pesquisa rápida de
requisição de mudança;

![num](images/num7.png) **Relatórios**: apresenta os relatórios dinâmicos referentes ao gerenciamento de mudança.

2. Após o acesso a funcionalidade, será apresentada a respectiva tela de "Cadastrar nova mudança", contendo uma série de passos a 
serem seguidos para realizar o registro:

    - Registre as informações do solicitante, conforme indicadas abaixo:
    
    ![Cadastro](images/cad-mud.img2.png)
    
    **Figura 2 - Tela de cadastro de nova mudança**
    
    - **Contrato**: informe o contrato referente a requisição de mudança;
    - **Solicitante**: informe o solicitante, ou seja, a pessoa que está solicitando a mudança;
        - Clique no campo solicitante. Após isso, será exibida uma tela para pesquisa de solicitante, realize a pesquisa e selecione o solicitante;
        - Caso não encontre o registro do solicitante, é possível realizar um cadastro rápido clicando no 
        ícone ![simbolo](images/simb-mais.png).
    - **Nome do Contato**: informe o nome do contato;
    - **E-mail**: informe o e-mail do solicitante para contato;
    - **Telefone**: informe código de área (DDD) e o número de telefone do solicitante, para contato;
    - **Ramal**: informe o número do ramal do solicitante para contato;
    - **Unidade**: selecione a unidade do solicitante;
    - **Localidade Física**: informe a localização física do solicitante;
    - **Observação**: descreva as observações sobre o contato, caso seja necessário.
    
    - Registre as informações da requisição, conforme indicadas abaixo:
    
    ![Cadastro](images/cad-mud.img3.png)
    
    **Figura 3 - Tela de cadastro de nova mudança**
    
    - **Título**: informe o título da requisição de mudança;
    - **Tipo**: informe o tipo de mudança que está sendo solicitada;
       - **Mudança Padrão**: é uma mudança que é previamente pré-aprovada pelo Gerenciamento de Mudança e já possui procedimentos aceitos e estabelecidos;
       - **Mudança Normal**: é uma mudança que segue um fluxo normal de avaliação, aprovação e autorização;
       - **Mudança Emergencial**: é uma mudança em um serviço que pretende reparar emergencialmente um erro no serviço de TI.
       
       !!! note "NOTA"
       
           Mudança Padrão e Mudança Emergencial não requer informações da categoria e comitê consultivo de mudança, pois as mesmas não participam do Votação da Requisição de Mudança.
           
    - Se o tipo de requisição de mudança informado for "Normal", informe a **Categoria**;
    - **Impacto**: informe o impacto da mudança;
    - **Urgência**: informe a urgência da mudança;
    - **Prioridade**: a prioridade será estabelecida pelo sistema, após informar o impacto e urgência;
    - **Descrição**: informe a descrição da mudança que está sendo solicitada. A descrição deve ser objetiva, incluindo toda informação necessária para realização da mudança;
    - **Grupo Executor**: informe o grupo executor, o qual será responsável pelo atendimento da requisição de mudança. Caso não seja informado o grupo, o mesmo será estabelecido conforme definido no cadastro de Tipo de Mudança de acordo com o fluxo;
    - **Comitê Consultivo de Mudanças**: informe o Comitê Consultivo de Mudanças, grupo responsável por avaliar, executar análise de risco e garantir o envolvimento de todas as áreas relacionadas às mudanças, aprovando ou não sua execução;
   
3. Clique no botão "Gravar" para efetuar o registro da requisição de mudança, onde a data, hora e usuário serão gravados automaticamente para uma futura auditoria;

4. Será exibida uma mensagem confirmando o sucesso do registro da requisição de mudança.

![Confirmação](images/cad-mud.img4.png)

**Figura 4 - Confirmação do registro da requisição de mudança**

Vinculando IC's da mudança
----------------------------

1. Informe os itens de configuração (IC's) referente à mudança:

    - Ao lado direito da tela de requisição de mudança, clique em **IC's da Mudança**;
    
    ![Seleção](images/cad-mud.img5.png)
    
    **Figura 5 - Seleção de IC’s da mudança**
    
    - Será apresentada a tela de adição de item de configuração. Clique no ícone ![simbolo](images/simb-lupa.png) para adicionar os itens de configuração.
    - Será apresentada a janela para pesquisa de itens de configuração. Realize a pesquisa, selecione o item de 
    configuração referente à mudança;
    - Será exibida a mensagem "Deseja vincular o IC?", clique em "OK";
    - Será exibida a mensagem "Deseja informar o que será alterado?". Se desejar realizar alguma alteração no IC, clique
    no botão "Sim" e será direcionado para a tela contendo informações gerais, características e itens relacionados ao 
    IC selecionado. Realize as alterações necessárias e clique em "Gravar". Se não desejar realizar nenhuma alteração
    no IC selecionado, clique no botão "Não";
    - Será apresentada a mensagem de que o item de configuração foi gravado com sucesso, clique em "OK" para efetuar 
    a operação. Feito isso, será relacionado o item de configuração à requisição de mudança;

    ![Relacionamento](images/cad-mud.img6.png)
    
    **Figura 6 - Relacionamento de Item de Configuração à Requisição de Mudança**
    
    - Para editar as informações do item de configuração, basta clicar no ícone ![simbolo](images/simb-lapis.png) do
    mesmo;
    - Para visualizar as informações do item de configuração, basta clicar no ícone ![simbolo](images/simb-prancheta.png)
    do mesmo;
    - Caso queira remover um item de configuração que foi relacionado à requisição de mudança, basta clicar no ícone
    ![simbolo](images/simb-menos.png) do mesmo.
    
    !!! note "NOTA"
    
        os itens de configuração relacionados à mudança serão automaticamente relacionados e apresentados na Análise de Impacto e Risco por Alvos.
        

    

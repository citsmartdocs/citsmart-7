title:  Dicas sobre como realizar pesquisas no Portal do Conhecimento e Guia do Usuário
Description: Melhores maneiras de se realizar buscas dentro do Portal do Conhecimento e no Guia do Usuário.
# Dicas sobre como realizar pesquisas no Portal do Conhecimento e Guia do Usuário

Este conhecimento tem por objetivo orientar e sugerir as melhores maneiras de se realizar buscas dentro do Portal do Conhecimento e
no Guia do Usuário.

Dicas de pesquisa
-------------------

1. Pesquise com exclusões:

    - é possível refinar (reduzir) o resultado incluindo palavras a serem retiradas da lista resultante, exemplo:
        - pesquise pela palavra **requisição** sem aspas;
        - vão aparecer mais de 160 conhecimentos;
        - acrescentar após a palavra usada a expressão **-incidente**;
        - vão aparecer menos de 65 conhecimentos;
        - isso porque qualquer palavra precedida por um sinal de negativo “-“ significa para o sistema que ela é indesejada no 
        resultado da busca, um tipo de refinamento para evitar lixo;
        - é possível excluir mais de uma palavra assim: **requisito -incidente -problema -evento**
        - os resultados serão reduzidos para 50 conhecimentos.
        
2. Variando a forma de escrever a palavra, exemplo:
    - Requisição
    - Requisições
    - Requisitar
    - Requisitou
    - Requisitado
    - Requisitada
    - É possível pesquisar por uma "parte" da palavra: **Requisi**
    
3. Pesquisar por frase exata:

    - colocar a frase desejada entre "aspas duplas", exemplo 1:
        - pesquisar por "suspensão da solicitação";
        - vão aparecer **3** conhecimentos;
        - se fizer a mesma pesquisa sem aspas alguma, vão aparecer mais de 500. Este excesso é porque o sistema procura por qualquer
        conhecimento que tenha pelo menos uma das palavras.
        
    - exemplo 2:
        - pesquise por "itsm";
        - vão aparecer mais de 170 conhecimentos;
        - se fizer a mesma pesquisa sem aspas alguma, vão aparecer mais de 300;
        - este excesso é porque o sistema procura por qualquer conhecimento que tenha ITSM como "palavra" e também como "parte de 
        uma palavra", ex.: C**ITSM**ART ;
        
4. Pesquisar priorizando uma palavra:

    - é possível realizar busca com mais de uma palavra priorizando uma delas no resultado. Acrescente o sinal positivo "+" na
    frente da palavra que será priorizada, exemplo:
        - requisito +ticket;
        - +requisito ticket.
        
5. Navegue pelas *pastas* e clique na pasta do assunto desejado:

    - a documentação do produto é estruturada em pastas e está orientada ao uso e menu do sistema;
    - desta forma vai evitar de visualizar outros assuntos no resultado;
    - a busca traz tudo que estiver na pasta clicada e também em todas as suas subpastas, são os sub-assuntos;
    - ao selecionar uma pasta nas guias do lado esquerdo superior pelo ícone ![simbolo](images/pastas-img1.jpg), é possível 
    realizar outra pesquisa dentro desta pasta. Após essa nova pesquisa o sistema trará à esquerda os campos: 
        - **Pasta Selecionada** : descreve o nome da pasta selecionada anteriormente é possível retornar à raiz da pasta clicando
        sobre a descrição da pasta, nesse caso, o sistema retornará ao comportamento inicial da busca;
        - **Tipo** : refere-se ao tipo de documento identificado nessa pasta, a pasta pode conter vários tipos de documentos.
        Tendo mais de um tipo de documento o sistema permite a pesquisa por tipos.
        
Veja também
--------------

- [Portal do conhecimento](/pt-br/citsmart-platform-7/processes/knowledge/knowledge-portal.html).

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>07/26/2019 - Larissa Lourenço


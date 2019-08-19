title: Checklist de usabilidade 
Description: Checklist de usabilidade

# Checklist de usabilidade

1.  O layout da tela fica legível e usual quando a resolução é 1024x768?

2.  O título da funcionalidade está igual ao nome da aba?

3.  O caminho mostrado nos BreadCrumbs está correto?

4.  Todos os inputs estão com limitação de digitação de caractere conforme
    capacidade do campo no banco de dados?

5.  As diretivas existentes estão sendo usadas na página no lugar dos
    componentes padrão (O uso de diretivas é altamente recomendado pois qualquer
    mudança em uma diretiva é refletida no sistema inteiro com esforço em um só
    lugar)?

6.  Sempre que o usuário está posicionado sobre um item ou grupo de itens numa
    grid, árvore, menu, o foco está sendo usado?

7.  Os campos em que os valores são predefinidos e são formatados por máscaras
    estão com as máscaras? Ex: Data, Valor, CPF e etc.

8.  Caso o dado referente ao campo possua um formato particular, esse formato
    encontra-se descrito na tela junto com o label (Ex: CPF (999.999.999-999))?

9.  Caso o dado referente ao campo possua valores aceitáveis esses valores
    encontram-se descritos na tela (Ex: Porcentagem de Erro (0..100)%)?

10. Existe uma tabela com mais de 10 registros? Se sim existe paginação?

11. Todos os campos que apresentarem erros quando o formulário for submetido
    contém um ícone com informações adicionais do erro? 

12. As mensagens de ajuda em caso de erro são suficientes para o usuário
    identificar o erro e a solução?

13. Os dados relacionados entre si de forma lógica estão agrupados de forma que
    o usuário perceba, usando Seções, Sub Seções conforme padrão? Ex: Dados
    Pessoais, Dados de Endereço etc.

14. Os botões estão na interface conforme definição do padrão? Ações Terminais
    primeiro alinhadas a esquerda, depois demais ações da funcionalidade logo
    após ações terminais à esquerda, e ações genéricas a direita na barra de
    ações. 
    
15. Os botões de caixas de diálogo ou modais estão seguindo a mesma lógica
    proposta na questão acima?

16. Nos AutoCompletes, Selects ou Grids, as opções estão organizadas segundo
    alguma ordem lógica? Exemplo: Alfabética, Data de Inserção, Agrupado etc.

17. Os Campos obrigatórios possuem diferenciação dos demais? No padrão?

18. Os campos que não podem ser alterados após o uso possuem diferenciação? No
    padrão?

19. As mensagens de erro e aviso estão conforme padrão definido para Erro,
    Informação e Atenção?

20. O sistema está fornecendo feedback para ações do usuário? Ex: “O usuário foi
    cadastrado com sucesso!” ou “Você não pode excluir esse registro porque ele
    não foi processado na referência vigente!”

21. Quando é previsto que uma operação demore o sistema está apresentando tela
    de loading?

22. As informações estão dispostas na interface em ordem de importância? As mais
    importantes primeiro e acima e as menos importantes abaixo? Exemplo:
    Observações e documentos na maioria dos casos não são obrigatórios, portanto
    consideramos menos importantes que as outras informações.

23. Os campos estão ordenados corretamente de forma que o usuário consiga
    navegar pelo teclado usando TAB?

24. Nas caixas de mensagem, quando é uma ação perigosa como excluir a opção
    default é sempre não?

25. Ao fechar uma aba no momento de edição ou inclusão não confirmada através do
    salvar, o sistema emite mensagem para o usuário informando que ele perderá o
    que estava fazendo? E pede a confirmação do usuário para completar a
    operação?

26. Na aba de consulta a Pesquisa está sendo feita por todos os campos
    disponíveis e independente de case sensitive?

27. Todos os botões e links dentro da funcionalidade estão com tooltips
    informativas do que acontecerá caso o usuário clique no botão \\ link?

28. Na aba consulta, o título é igual a Consulta + Nome da aba?

29. Nas Grids, os campos texto estão alinhados a esquerda, valores à direita e
    datas Centralizados?

30. O padrão de botões sempre na barra de ações (do crud ou grid) foi seguido
    (salvo casos onde não há jeito, ou o fato de seguir o padrão é prejudicial à
    usabilidade)?

31. Todos os AutoCompletes que são cadastros do GRP tem o ícone + após o label
    que leva ao cadastro mais rapidamente?


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/14/2019 – Anna Martins

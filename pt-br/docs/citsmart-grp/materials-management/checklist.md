title: Checklist de programação
Description: Checklist de programação

# Checklist de programação

1.  Os arquivos envolvidos no Caso de Uso foram criados no mesmo módulo?
    Exemplo: Modelo, Dao, DaoImpl, Service, ServiceImpl, Validator,
    Controller.java, Controller.js, Repository.js e html.

2.  Métodos específicos de uma determinada entidade foram implementados nas
    camadas referente a mesma entidade? Exemplo: Todas as classes referentes ao
    Menu só deve conhecer de menu, MenuDaoHibernate só deve conter consultas de
    menu, não usar menuDAO para trazer módulos.

3.  Foi implementado a classe View específica para o modelo correspondente para
    um CRUD com a estrutura: ModeloListView extends GenericView, ModeloEditView
    extends ModeloListView.

4.  Importou os arquivos java-cleanup, java-code-templates e java-formatter?
    Passou o java-cleanup no código de cada classe comitada antes de realizar o
    commit?

5.  Passou o find bugs nas funcionalidades? E caso encontrou alguma
    inconsistência realizou a correção?

6.  Comentou todos os métodos e classes? Os comentários JavaDocs estão com
    Scapes html? Exemplo: comentários de classes, interfaces e métodos.

7.  Os comentários de linha estão sem caracteres especiais?

8.  Os valores atribuídos para Strings estão como Scapes Unicode? Caso o valor
    atribuído contém caracteres especiais.

9.  Implementou a validação dos campos e regra de negócio no ServiceImpl e para
    os campos obrigatório utilizou o Validator da arquitetura?

10. Os arquivos JavaScript estão implementados no padrão de injeção de
    dependência do AngularJS?

11. Internacionalizou todos os labels do html?

12. Verificou se não criou a chave de internacionalização repetida no
    portal.json? E no caso da existência da chave não alterou a mesma?

13. Verificou a necessidade de alterar o modelo/estrutura do banco ou de
    inserir/atualizar dados para a ​funcionalidade?​


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>08/14/2019 – Anna Martins

title: Assuntos da arquitetura de software (GRP)

Description: Assuntos da arquitetura de software (GRP)

\# Assuntos da arquitetura de software (GRP)

Pré-condições
-------------

1.  Para trabalhar com esta arquitetura, o desenvolvedor deve cuidar de preparar
    ou obter seu ambiente ideal (ver conhecimento [Ambiente do
    Desenvolvedor](https://itsm.citsmartcloud.com/citsmart/pages/knowledgeBasePortal/knowledgeBasePortal.load#/knowledge/4740)).

2.  Para realizar os testes/homologações um ambiente de execução deve estar
    configurado (ver conhecimento [Ambiente de
    Execução](https://itsm.citsmartcloud.com/citsmart/pages/knowledgeBasePortal/knowledgeBasePortal.load#/knowledge/4741))

Boas práticas
-------------

Após aplicadas todas estas recomendações o desenvolvedor ainda tem
um [checklist ](https://itsm.citsmartcloud.com/citsmart/pages/knowledgeBasePortal/knowledgeBasePortal.load#/knowledge/4744)de
programação à disposição e
um [checklist ](https://itsm.citsmartcloud.com/citsmart/pages/knowledgeBasePortal/knowledgeBasePortal.load#/knowledge/4745)de
usabilidade.

**Scripts**

Com restruturação dos repositórios os scripts passam a ser mantidos também por
módulos, conforme abaixo:  
  
<seu-modulo\>-api\\src\\main\\resources\\scripts-bd\\\<versão\>\\nn-mm-vv-bb.sql

Onde:  
  
nn :: ordem de execução  
mm :: nome do módulo  
vv :: versão  
bb :: banco (dialeto)  
  
Exemplo:  
..\\cit-adm-materiais-api\\src\\main\\resources\\scripts-bd\\v1.8.0\\01-cit-adm-materiais-v1.8.0-postgres.sql  
..\\cit-adm-materiais-api\\src\\main\\resources\\scripts-bd\\v1.8.0\\01-cit-adm-materiais-v1.8.0-sqlserver.sql  
..\\cit-adm-materiais-api\\src\\main\\resources\\scripts-bd\\v1.8.0\\01-cit-adm-materiais-v1.8.0-mysql.sql  
..\\cit-adm-materiais-api\\src\\main\\resources\\scripts-bd\\v1.8.0\\01-cit-adm-materiais-v1.8.0-oracle.sql  
  
  
**Repositórios**  
  
  
Com a atual reestruturação do GRP, os repositórios também foram modificados.  
Todos os módulos foram separados em repositórios independentes, como listado
abaixo.

Repositórios comuns a todos os projetos  
  
cit-grp-corporativo  
cit-grp-modules  
cit-grp-tabelas-corp  
  
Repositórios dos módulos  
  
cit-grp-adm-materiais  
cit-grp-alcada  
cit-grp-almoxarifado  
cit-grp-contratos  
cit-grp-ecm  
cit-grp-esi  
cit-grp-esi-listener  
cit-grp-monitor-es  
cit-grp-patrimonio  
  
Exemplo de clone: git
clone <http://gabriel.damasceno@ferramentasgo.centralit.com.br:8080/scm/git/cit-grp-corporativo>  
  
**Checkout**  
  
Assim, cada equipe precisa fazer o git clone (checkout​​) apenas do módulo onde
irá trabalhar e dos módulos em comum como mostrado abaixo:  
  
Administração de Materiais  
  
cit-grp-corporativo  
cit-grp-modules  
cit-grp-tabelas-corp  
cit-grp-adm-materiais  
cit-grp-almoxarifado  
cit-grp-patrimonio  
  
Contratos  
  
cit-grp-corporativo  
  
cit-grp-modules  
cit-grp-tabelas-corp  
cit-grp-contratos  
  
ECM  
  
cit-grp-corporativo  
cit-grp-modules  
cit-grp-tabelas-corp  
cit-grp-ecm  
  
ESI  
  
cit-grp-corporativo  
cit-grp-modules  
cit-grp-tabelas-corp  
cit-grp-esi  
cit-grp-esi-listener  
  
Monitor  
  
cit-grp-corporativo  
cit-grp-modules  
cit-grp-tabelas-corp  
cit-grp-monitor-es  
  
Alçada  
  
cit-grp-corporativo  
cit-grp-modules  
cit-grp-tabelas-corp  
cit-grp-alcada

**Build do projeto**  
  
Pra executar o build de um projeto GRP, basta abrir o prompt de comando dentro
da pasta cit-grp-modules e passar o comando referente ao produto em questão.  
Para cada produto, o comando de build segue um perfil como mostrado abaixo:  
  
O clean install está embutido no comando  
  
Administração de Materiais  
mvn -P adm  
  
Contratos  
mvn -P ctr  
  
ECM  
mvn -P ecm  
  
ESI  
mvn -P esi  
  
Monitor  
mvn -P monitor  
  
Alçada  
mvn -P alcada  
  
Corporativo  
mvn clean install dentro da pasta cit-grp-parent​
(\\cit-grp-corporativo\\cit-grp-parent)

Componentes smart - filtro
--------------------------

Foi criado uma diretiva de "Filtro", que permite ao desenvolvedor adicioná-la
nas páginas de consulta com filtros, que permite que o usuário adicione e
gerêncie os filtros personalizados de cada página.

Uma vez adicionada a diretiva à página, cabe ao usuário escolher se a aba será
favorita ou não.

|   ARQUIVO ORIGEM   |                                   LOCALIZAÇÃO                                  |                               INCLUDE HTML                              |                                                                                                                                                             PARÂMETROS                                                                                                                                                            |
|:------------------:|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| FiltroDirective.js | /cit-portal-web/src/main/webapp/assets/js-angular/directive/FiltroDirective.js | <filtros ng-filter="filterCriteria" ng-workspace="workspace"></filtros> | Criar esse objeto json no seu ListController.js para este ser passado como parâmetro para diretiva.$scope.filterCriteria = {start : 1,dir : 'asc',sort : 'id',limit : 10,fields: ['id', 'username', 'email'],filters : [{type: 'string', field: 'username'}]};workspace > variável já está no $scope na repetição dos workspaces. |

**Tabela 1**

Componentes smart - diretiva favorito
-------------------------------------

Foi criada uma diretiva de "Favorito", que permite ao desenvolvedor adicioná-la
em qualquer página.

Uma vez adicionada a diretiva à página, cabe ao usuário escolher se a ​dashboard
será favorita ou não.

O controle de páginas favoritas é feita por usuário, e poderá ser gerenciado
pelo menu superior no canto direito com estrela de "Favorito". Nele é possível
acessar o "Favorito" específico pelo nome ou "Ver todos os favoritos" através da
página do perfil do usuário.

A cada dashboard aberta, é chamada a função no *AppController.js
"isWorkspaceFavorito(workspace)"* para validar se a mesma é favorita.

A cada clique na estrela (Favorito) da dashboard aberta, é chamada a função
no *AppController.js "addFavorito"* que faz o papel de favoritar/desfavoritar.

|     NOME ARQUIVO     |                                    LOCALIZAÇÃO                                   | INCLUDE HTML |                                                                                                        EXEMPLO                                                                                                       |
|:--------------------:|:--------------------------------------------------------------------------------:|:------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| FavoritoDirective.js | /cit-portal-web/src/main/webapp/assets/js-angular/directive/FavoritoDirective.js | <favorito /> | <div id="breadcrumbs" class="breadcrumbs"><ul class="breadcrumb"><li><i class="ace-icon fa fa-home home-icon"></i><a href="#">Home</a></li><li class="active"><favorito /> </li></ul></div><!-- #breadcrumbs -->.... |

**Tabela 2**

Componentes smart - diretiva label input
----------------------------------------

Foi criada uma diretiva de "Label Input", que permite ao desenvolvedor
adicioná-la em qualquer página.

Uma vez adicionada a diretiva à página, ela criará uma estrutura da seguinte
forma:

"\<div class='form-group'\>  
\<label \> \<span\>\*\</span\> \</label\>  
\<input /\>  
\<p\>\*\</p\>  
\</div\>"

A diretiva poderá validar campo obrigatório, tamanho, tipo e-mail, aplicar
máscara.

|      NOME ARQUIVO      |                                     LOCALIZAÇÃO                                    |   INCLUDE HTML  |                                                                                           EXEMPLO                                                                                           |                                                                                                        DIRETIVA                                                                                                        |
|:----------------------:|:----------------------------------------------------------------------------------:|:---------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| LabelInputDirective.js | /cit-portal-web/src/main/webapp/assets/js-angular/directive/LabelInputDirective.js | <label-input /> | ...<label-input ng-id="exemplo.nome" ng-type="text" ng-obrigatorio='true' ng-label="LABEL.PORTADOR" ng-model="exemplo.nome" ng-disabled="false" ng-maxlength="10" form="formPortador"/>.... | require: ['^ngModel'],scope : {id : "@ngId",label : "@ngLabel",obrigatorio : "=ngObrigatorio",disabled : "=ngDisabled",model : "=ngModel",mask : "=ngMask",maxlength : "=ngMaxlength",form : "=form",type : "@ngType"} |

**Tabela 3**

Componentes smart - diretiva label input money
----------------------------------------------

Foi criada uma diretiva de "Label Input Money", que permite ao desenvolvedor
adicioná-la em qualquer página.

Uma vez adicionada a diretiva à página, ela criará uma estrutura da seguinte
forma:

"\<div class='form-group'\>  
\<label \> \<span\>\*\</span\> \</label\>  
\<input /\>  
\<p\>\*\</p\>  
\</div\>"

A diretiva é utilizada apenas do tipo money.


|         NOME ARQUIVO        |                                       LOCALIZAÇÃO                                       |      INCLUDE HTML     |                                                                                        EXEMPLO                                                                                       |                                                                                        DIRETIVA                                                                                       |
|:---------------------------:|:---------------------------------------------------------------------------------------:|:---------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| LabelInputMoneyDirective.js | /cit-portal-web/src/main/webapp/assets/js-angular/directive/LabelInputMoneyDirective.js | <label-input-money /> | ...<label-input-money ng-id="exemplo.valor" ng-obrigatorio='true' ng-label="LABEL.PORTADOR" ng-model="exemplo.valor" ng-disabled="false" ng-maxlength="15" form="formPortador"/>.... | require: ['^ngModel'],scope : {id : "@ngId",label : "@ngLabel",obrigatorio : "=ngObrigatorio",disabled : "=ngDisabled",model : "=ngModel",maxlength : "=ngMaxlength",form : "=form",} |


**Tabela 4**

Componentes smart - diretiva label input radio
----------------------------------------------

Foi criada uma diretiva de "Label Input Radio", que permite ao desenvolvedor
adicioná-la em qualquer página.

Uma vez adicionada a diretiva à página, ela criará uma estrutura da seguinte
forma:

"\<div\>  
\<div\>  
\<label \>  
\<input /\>  
\</label\>  
\<div\>  
  
\</div\>"

A diretiva é utilizada para criar lista de input do tipo radio.


|         NOME ARQUIVO        |                                       LOCALIZAÇÃO                                       |      INCLUDE HTML     |                                                                                               EXEMPLO                                                                                               |                                                                                           DIRETIVA                                                                                           |
|:---------------------------:|:---------------------------------------------------------------------------------------:|:---------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| LabelInputRadioDirective.js | /cit-portal-web/src/main/webapp/assets/js-angular/directive/LabelInputRadioDirective.js | <label-input-radio /> | ...<label-input-radio ng-label="LABEL.PORTADOR" ng-model="exemplo.lista" ng-model-destino="modelExemplo" ng-disabled="false" form="formPortador" ng-class="radio-inline" ng-name="tipoPessoa"/>.... | require: ['^ngModel'],scope : {classe : '@ngClass',name : '@ngName',disabled : "=ngDisabled",model : "=ngModel",modeldestino : "=ngModelDestino",maxlength : "=ngMaxlength",form : "=form"}, |

**Tabela 5**

Rotina de execução automática de scripts
----------------------------------------

**O que é?**

Execução automática dos scripts de manutenção do banco de dados no momento da
inicialização da aplicação.

**Módulos relacionados**

Esta funcionalidade está disponível nos seguintes módulos e versões:

-   cit-grp-corporativo v. 3.0.11

-   cit-grp-adm-materiais v. 2.0.10

-   cit-grp-almoxarifado v. 2.0.10

-   cit-grp-patrimonio v. 2.0.10

-   cit-grp-contratos v. 1.4.0

-   cit-grp-ecm v. 1.0.1-alfa3

-   cit-grp-esi v. 2.0.2

**Como funciona**

Os arquivos utilizados na rotina estão no diretório
"**\<modulo\>-web/src/main/resources/scripts**" de cada módulo.

Neste diretório, existe um arquivo chamado **"historicoVersoes-\<chave do
modulo\>.xml"**, ele tem o seguinte layout

Nele está o histórico das versões do banco de dados e deve ser alimentado a cada
nova versão, adicionando uma linha abaixo da última versão, utilizando a mesma
tag **\<versao\>x.y.z\</versao\>**.

Os arquivos de script são separados por banco.

A cada nova versão devem ser criados os arquivos de script para cada banco.

O nome dos arquivos seguem o seguinte padrão: **"deploy_versao-\<chave do
modulo\>-\<versão\>-\<banco\>.sql"**

Os scripts devem ser terminados com os caracteres "\~\~" ao invés do
tradicional **ponto-e-virgula ";"**, este é o delimitador, responsável por
separar os scripts. Por exemplo:

Sobre o arquivo **base_minima_inicial-\<banco\>** ...

-   Só deve ser utilizado para instalações novas, com o banco limpo.

-   Só deve ser utilizado caso o usuário do banco utilizado pela aplicação não
    tenha permissão suficiente para executar scripts DDL.

-   Quando necessário, deve ser executado manualmente, antes de iniciar a
    aplicação.

Os módulos listados acima, que foram afetados por esta implementação, deixarão
de considerar a propriedade "**hibernate.hbm2ddl.auto**", encontrada no
arquivo **citapp.properties**, e vão considerar esta propriedade com o
valor **"none"**.

Ao iniciar a aplicação os scripts serão executados automaticamente. Caso algum
script não seja executado com sucesso por algum motivo, os usuários não
conseguirão entrar na aplicação. Ao fazer login serão direcionados para a
seguinte pagina:

Nesta página estarão disponíveis para consulta e download os scripts que não
foram executados, estes scripts devem ser executados manualmente.

**Após executar os scripts manualmente, deve-se confirmar, clicando no botão
"Confirmar atualização do sistema". Ao clicar neste botão, o usuário logado está
afirmando que já foram executados os scripts e será armazenado como responsável
destes scripts.​**

### Checklist de implementação**​**

1.  ​​​Os arquivos envolvidos no Caso de Uso foram criados no mesmo módulo?
    Exemplo: Modelo, Dao, DaoImpl, Service, ServiceImpl, Validator,
    Controller.java, Controller.js, Repository.js e html.

2.  Métodos específicos de uma determinada entidade foram implementados nas
    camadas referente a mesma entidade? Exemplo: Todas as classes referentes ao
    Menu só deve conhecer de menu, MenuDaoHibernate só deve conter consultas de
    menu, não usar menuDAO para trazer módulos

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

Bibliotecas utilizadas





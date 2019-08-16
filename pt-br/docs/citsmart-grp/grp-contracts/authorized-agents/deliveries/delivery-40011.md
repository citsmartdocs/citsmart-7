title:  Documento de entrega ADM Materiais 4.0.0.11
Description: CITSmart Enterprise GRP Administração de Materiais. 
# Documento de entrega ADM Materiais 4.0.0.11

- **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais
- **Versão**: 4.0.0.10
- **Documento criado em**: 21/06/2019
- **Última alteração em**: 21/06/2019
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de problemas na atualização de versão no ambiente dos clientes.

Downloads
-----------

**CITSmart Enterprise GRP Administração de Materiais 4.0.0.11**

- [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/4.0.0.11/)

Escopo
--------

| Demanda      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Conhecimento impactado |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| Simple #4114 | Para este item, o ideal seria criar o mecanismo de importação de arquivo xml ou txt, no momento da entrada.No passo 3 da entrada, escolher o item da entrada que, por sua vez, apresentará todos os números patrimoniais. A sugestão é: criar uma coluna “Nº de Série” e um botão chamado “Importar .xml/txt”. Ao selecionar o arquivo xml, o mesmo casará, na sequência, o número de série com o bem patrimonial.Caso exista mais de um material, na mesma entrada, com sequencial de número de série específico, o sistema deverá permitir importar um sequencial de número de série para cada material. |                        |
| Simple #4093 | Trata-se da funcionalidade de anexar imagem ao material, no momento do cadastro do material. Função já existe, porém, quando é feito o upload da imagem não é possível visualizar nem fazer o download. Com a adequação desta demanda, a imagem anexada ao registro passará a ser visualizada a qualquer momento, o item do edital será validado.                                                                                                                                                                                                                                                          |                        |
| Simple #4097 | 2.43.3 Ao executar a operação de reavaliação, o sistema deverá requerer do usuário o preenchimento das variáveis necessárias ao cálculo do preço de reavaliação com base nos critérios inseridos, sendo calculado um novo valor para o bem, podendo ser arbitra                                                                                                                                                                                                                                                                                                                                            |                        |
| Simple #4098 | 1.35 Emitir alerta quando uma unidade requisitante exceder na sua requisição comparada com o histórico médio mensal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                        |
| Simple #4194 | Erro na devolução material consumo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                        |
| Simple #4181 | Permitir inclusão de imagens na reavaliação de itens                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                        |
| Simple #4191 | Ajuste relatório de termo de transferência interna                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                        |
| Simple #4186 | Duplicação no histórico do bem ao realizar inventário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                        |
| Simple #4164 | org.springframework.web.util.NestedServletException: Handler processing failed; nested exception is java.lang.NoClassDefFoundError: net/sourceforge/barbecue/BarcodeException                                                                                                                                                                                                                                                                                                                                                                                                                              |                        |
| Simple #4113 | 2.47.13 Os bens inventariados deverão apresentar em sua consulta individual informações sobre os inventários aos quais participou demonstrando o status do bem no inventário demonstrando se houve ou não irregularidade e em caso positivo qual ajuste foi realizado.                                                                                                                                                                                                                                                                                                                                     |                        |
| Simple #4099 | 1.34 Estabelecer um nível de autorização entre o requisitante e o responsável pela unidade.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                        |
| Simple #4096 | 2.47.14.7 Aviar campo para inserir a fotografia dos bens patrimoniais.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                        |
| Simple #4049 | 2.43.9 Oportunizar um campo para a inserção de foto atual individual de cada material.   Simple #4100 Permitir que alguns dos principais relatórios sejam gerados nos formatos xls, PDF e CSV (txt). Patrimônio:  Menu > Bem Patrimonial: Relatório Analítico Menu > Relatórios Diversos: Relatório de Entradas por Período Menu > Relatórios Diversos: Relatório de Baixas por Período                                                                                                                                                                                                                    |                        |
| Simple #4100 | Almoxarifado: Menu > Relatórios Diversos: Posição do Estoque Analítico - Por Conta Menu > Relatórios Diversos: Relação de Entradas no Período - Por Material - Almoxarifado Menu > Relatórios Diversos: Relatório de Material - Serviço Almoxarifado Inicialmente, faremos por amostragem, alguns relatórios. Depois, faremos uma análise mais abrangente, contemplando outros relatórios gerenciais.                                                                                                                                                                                                      |                        |

Impacto nos manuais de instalação/atualização
------------------------------------------------

1. Nenhum.

Orientações especiais
------------------------

*Scripts SQL*

- **PostgreSQL**

1. Nenhum.

- **MS-SQLServer**

1. Nenhum.

- **Oracle**

1. Nenhum.

Orientações anteriores que devem ser observadas nesta entrega
---------------------------------------------------------------

1. É recomendada uma análise detalhada dos seguintes itens encontrados no documento de Entrega anterior:

    - Lista de conhecimentos impactados
    - Seção de impactos nos manuais de instalação/configuração
    - Seção de orientações especiais
    
2. MUITO IMPORTANTE, limpar o cache do navegador ao utilizar a versão nova.

Práticas de segurança ao atualizar o produto
-----------------------------------------------

1. ATENÇÃO, Realizar uma cópia de segurança (*backup*):

    - da aplicação (war)
    - do banco de dados

2. Executar os scripts conforme orientações contidas neste documento

3. Salvar o log da execução dos scripts no banco de dados para que eventuais imprevistos possam ser devidamente tratados

<< Entrega anterior —————————— Entrega seguinte >>

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/16/2019 - Larissa Lourenço















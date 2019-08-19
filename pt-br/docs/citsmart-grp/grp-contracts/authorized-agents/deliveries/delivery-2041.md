title:  Versão 2.0.4.1 GRP Contratos
Description: CITSmart Enterprise GRP Contratos. 
# Versão 2.0.4.1 GRP Contratos

- **Nome da Solução**: CITSmart Enterprise GRP Contratos
- **Versão**: 2.0.4.1
- **Documento criado em**: 29/05/2018
- **Versão entregue em**: 29/05/2018
- **Última alteração em**: 29/05/2018 (publicação)
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de 
problemas na atualização de versão no ambiente dos clientes.

Downloads
-----------

1. **CITSmart Enterprise GRP Contratos 2.0.4.1**

- [FTP](https://kb.citsmartcloud.com/entregas/grpcontratos/2.0.4.1/)

Escopo
-----------

| Demanda   | Assunto/Módulo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Descrição | Conhecimento impactado |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|------------------------|
| ITSM 4995 | [DNIT] “ Ao tentar selecionar uma sanção ou penalidade, o sistema seleciona o registro diferente daquele que o usuário deseja selecionar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |           |                        |
| ITSM 3444 | [DNIT]  O campo "Descrição da solução" está apresentando a informação registrada no campo "Justificativa da solução escolhida", do Estudo Técnico, quando deveria trazer a informação do campo "Descrição da solução", também do Estudo Técnico, ou o campo deveria ser de livre texto. Vide anexo.                                                                                                                                                                                                                                                                                                                          |           |                        |
| ITSM 4861 | [DNIT] O cliente solicita que seja inserido campo possível filtrar os objetivos, necessidades e ação pelo PDTI informado nos Requisitos de negócio do Estudo técnico. Ou seja, após o usuário informar a referência do PDTI, o sistema deve apresentar apenas os objetivos, necessidades elencadas e ações vinculadas a ele, no menu Alinhamento estratégico. A criação do campo "Ano Referência PDTI" foi solicitada no chamado 4860. Vide anexo.                                                                                                                                                                           |           |                        |
| ITSM 2955 | [DNIT] O cliente solicita que o campo "NÂº do estudo técnico" seja de edição, mantidas a máscara e a quantidade de caracteres. Vide anexo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |           |                        |
| ITSM 3598 | [DNIT] O sistema não está permitindo gravar alteração de status. O sistema emite mensagem de crítica Campo obrigatório não preenchido. Verifique o campo em destaque, porém, todos os campos estão preenchidos.                                                                                                                                                                                                                                                                                                                                                                                                              |           |                        |
| ITSM 3904 | [DNIT] O cliente solicita que os campos abaixo tenham a capacidade de caracteres aumentada:Etapa 1 - Planejamento da Contratação - Campo "Solução": 3.000 caracteres;Etapa 1 - Planejamento da Contratação - Campo "Justificativa da Contratação": 5.500 caracteres;Etapa 2 “ Definições de Requisitos" Campo "Requisitos Técnicos": 3.000 caracteres;Etapa 2 “ Definições de Requisitos" “ Campo Requisitos de Capacitação": 3.000 caracteres;Etapa 3 “ Levantamento das Alternativa" “ Campo Justificativa da solução escolhida": 4.000 caracteres;Etapa 3 “ Levantamento das Alternativa" “ Campo ROI": 1.000 caracteres. |           |                        |
| ITSM 3601 | Relatório com conteúdo duplicado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |           |                        |
| ITSM 4862 | [DNIT] “ O cliente solicita que seja inserida a coluna "Ano referência PDTI" na tela inicial do Alinhamento estratégico.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |           |                        |
| ITSM 2948 | [DNIT] O cliente solicita que seja possível realizar mais de um tipo de alteração contratual no mesmo aditivo. Atualmente, o sistema só permite selecionar uma das opções. Vide anexo.                                                                                                                                                                                                                                                                                                                                                                                                                                       |           |                        |

Impacto nos manuais de instalação/atualização
------------------------------------------------

1. Nenhum.

Orientações especiais
------------------------

Portal compatível com a versão é o 3.1.5.2.

Scripts SQL
-------------

- **PostgreSQL**

1. Nenhum.

- **MS-SQLServer**

1. Nenhum.

- **Oracle**

1. Nenhum.

Orientações anteriores que devem ser observadas nesta entrega
---------------------------------------------------------------

1. É recomendada uma análise detalhada dos seguintes itens encontrados no documento de **Entrega anterior**:

- Lista de conhecimentos impactados
- Seção de impactos nos manuais de instalação/configuração
- Seção de orientações especiais

Práticas de segurança ao atualizar o produto
-----------------------------------------------

1. Realizar uma cópia de segurança (*backup*):

    - da aplicação (war)
    - do banco de dados
    
2. Executar os scripts conforme orientações contidas neste documento

3. Salvar o log da execução dos scripts no banco de dados para que eventuais imprevistos possam ser devidamente tratados.

<< Entrega anterior —————————— Entrega seguinte >>

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 - Larissa Lourenço














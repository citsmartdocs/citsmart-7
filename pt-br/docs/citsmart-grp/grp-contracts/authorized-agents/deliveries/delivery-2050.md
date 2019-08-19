title:  Versão 2.0.5.0 GRP Contratos e 3.1.5.4 Portal
Description: CITSmart Enterprise GRP Contratos. 
# Versão 2.0.5.0 GRP Contratos e 3.1.5.4 Portal

- **Nome da Solução**: CITSmart Enterprise GRP Contratos
- **Versão**: 2.0.5.
- **Documento criado em**: 26/06/2018
- **Versão entregue em**: 28/06/2018
- **Última alteração em**: 28/06/2018 (publicação)
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de 
problemas na atualização de versão no ambiente dos clientes.

Downloads
-----------

1. **CITSmart Enterprise GRP Contratos 2.0.5.0**

    - [FTP](http://kb.citsmartcloud.com/entregas/grpcontratos/2.0.5.0/)
    
2. **CITSmart Corporativo 3.1.5.4**

    - [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.4/)
    
Escopo
---------

| Demanda       | Assunto/Módulo                                                                                                                                                                                                                                                                                                      | Descrição                    | Conhecimento impactado |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|------------------------|
| Redmine 15579 | [PAT].[Requisição Externa] - Permissão para cadastrar requisição externa para outra UG                                                                                                                                                                                                                              | ITSM 4863                    |                        |
| Redmine 15578 | [CNT].[TERMO DE REFERÊNCIA] - Pequenas melhorias                                                                                                                                                                                                                                                                    | ITSMs 2793, 3600, 3602, 3606 |                        |
| Redmine 15576 | [CNT].[Estudo Técnico] - Pequenas melhorias estudo técnico                                                                                                                                                                                                                                                          | ITSMs: 2793, 3600, 3602      |                        |
| Redmine 15575 | [CNT].[CONTRATO] - Alteração nas Sanções e Penalidades                                                                                                                                                                                                                                                              | ITSMs: 4405, 2952            |                        |
| Redmine 15574 | [CNT].[Contratos] - Pequenas alterações Contratos                                                                                                                                                                                                                                                                   | ITSMs: 4864, 3827            |                        |
| Redmine 15580 | [CNT].[LIBERAÇÃO DE PAGAMENTO] - Permitir que a liberação de pagamento aconteça pelo valor e quantidade.                                                                                                                                                                                                            | ITSM 4002.                   |                        |
| ITSM 5805     | A capacidade dos campos não é a mesma nos menus Estudo Técnico e Termo de Referência. Visto que no menu Termo de Referência os campos são importados do menu Estudo Técnico, e o cliente solicitou que os campos tivessem essa capacidade, deve ser mantida a capacidade dos campos conforme está no Estudo Técnico |                              |                        |
| ITSM 5806     | A capacidade dos campos não é a mesma nos menus Termo de Referência e Definições.Visto que no menu Termo de Referência os campos são importados do Definições deve ser mantida a capacidade dos campos conforme está no menu Definições                                                                             |                              |                        |

Impacto nos manuais de instalação/atualização
-------------------------------------------------

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
-----------------------------------------------------------------

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

3. Salvar o log da execução dos scripts no banco de dados para que eventuais imprevistos possam ser devidamente tratados

<< Entrega anterior —————————— Entrega seguinte >>

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 - Larissa Lourenço

















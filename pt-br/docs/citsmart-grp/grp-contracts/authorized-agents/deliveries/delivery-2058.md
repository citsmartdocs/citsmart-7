title:  Versão 2.0.5.8 GRP Contratos
Description: Disponibiliza ações diversas, tais como, incluir, alterar e excluir calendários (escalas) de jornadas de trabalho. 
# Versão 2.0.5.8 GRP Contratos

- **Nome da Solução**: CITSmart Enterprise GRP Contratos
- **Versão**: 2.0.5.8
- **Documento criado em**: 27/12/2018
- **Versão entregue em**: 27/12/2018
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de 
problemas na atualização de versão no ambiente dos clientes.

Downloads
------------

1. **CITSmart Enterprise GRP Contratos 2.0.5.8**

- One Drive

Escopo
---------

| Demanda   | Assunto/Módulo                                                        | Descrição                                                                                                                                                                                   | Conhecimento impactado |
|-----------|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| ITSM 8576 | Inclusão de casas decimais no campo de Quantidade de Ordem de Serviço | Conforme solicitação foi feita inclusão de casas decimais no campo de quantidade de itens em Ordem de serviço no módulo de Contratos.                                                       |                        |
| ITSM 8607 | Correção de erro na parte de aditivos do módulo Contratos             | Foi efetuada uma correção na parte de criação de termo de aditivo no módulo contratos. O sistema perdia a referência do aditivo após qualquer atualização feita no Contrato, foi corrigido. |                        |

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

1. É recomendada uma análise detalhada dos seguintes itens encontrados no documento de **Entrega anterior**:

    - Lista de conhecimentos impactados
    - Seção de impactos nos manuais de instalação/configuração
    - Seção de orientações especiais
    
2. Importante observar que este módulo tem dependência do módulos de almoxarifado, adm de materiais, patrimônio e corporativo,
respectivamente versões 4.0.0.3 e 3.1.8.2 (Corp)

Práticas de segurança ao atualizar o produto
------------------------------------------------

1. Realizar uma cópia de segurança (*backup*):

    - da aplicação (war)
    - do banco de dados
    
2. Salvar o log da execução dos scripts no banco de dados para que eventuais imprevistos possam ser devidamente tratados

<< Entrega anterior —————————— Entrega seguinte >>

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 - Larissa Lourenço















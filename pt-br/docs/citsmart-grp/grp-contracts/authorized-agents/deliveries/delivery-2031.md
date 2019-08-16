title:  Documento de Entrega GRP CONTRATOS 2.0.3.1
Description: CITSmart Enterprise GRP Contratos. 
# Documento de Entrega GRP CONTRATOS 2.0.3.1

- **Nome da Solução**: CITSmart Enterprise GRP Contratos
- **Versão**: 2.0.3.1
- **Documento criado em**: 10/05/2018
- **Versão entregue em**: 10/05/2018
- **Última alteração em**: 10/05/2018 (publicação)
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de
problemas na atualização de versão no ambiente dos clientes.

Downloads
------------

1. **CITSmart Enterprise GRP Contratos 2.0.3.1**

    - [FTP](https://kb.citsmartcloud.com/entregas/grpcontratos/2.0.3.1/)
    
Escopo
-------

| Demanda        | Assunto/Módulo                                                                                                                                            | Descrição | Conhecimento impactado |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|------------------------|
| ITSM #4878     | O sistema apresenta o valor do contrato diferente da soma dos itens                                                                                       |           |                        |
| ITSM #2793     | O cliente solicita que ao gerar o relatório Estudo técnico, os campos que não tenham sido preenchidos em tela não sejam impressos.                        |           |                        |
| ITSM #2817     | O cliente solicita que todos os campos de livre texto do módulo de Contratos apresentem a quantidade de caracteres suportadas e a quantidade já digitada. |           |                        |
| ITSM #2951     | O cliente solicita que seja possível ordenar as sanções e as penalidades do contrato, para efeitos de agrupamento.                                        |           |                        |
| ITSM #2953     | O cliente solicita que seja inserida a coluna última modificação na grid de contratos já cadastrados.                                                     |           |                        |
| REDMINE #13495 | Vinculação da TR/Estudo técnico à Análise de riscos.                                                                                                      |           |                        |

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

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/16/2019 - Larissa Lourenço













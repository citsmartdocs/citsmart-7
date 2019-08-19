title:  Versão 2.0.4.0 GRP Contratos e 3.0.5.2 Portal
Description: CITSmart Enterprise GRP Contratos. 
# Versão 2.0.4.0 GRP Contratos e 3.0.5.2 Portal

- **Nome da Solução**: CITSmart Enterprise GRP Contratos
- **Versão**: 2.0.4.0
- **Documento criado em**: 25/05/2018
- **Versão entregue em**: 27/05/2018
- **Última alteração em**: 27/05/2018 (publicação)
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de 
problemas na atualização de versão no ambiente dos clientes.

Downloads
------------

1. **CITSmart Enterprise GRP Contratos 2.0.4.0**

    - [FTP](http://kb.citsmartcloud.com/entregas/grpcontratos/2.0.4.0/)
    
2. **CITSmart Corporativo 3.1.5.2**

    - [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.2/)
    
Escopo
---------

| Demanda       | Assunto/Módulo                                                                                                                                                                                                                             | Descrição | Conhecimento impactado                                                                       |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------------------------------------------------|
| ITSM 4878     | Valor do contrato diferente da soma dos itens                                                                                                                                                                                              |           |                                                                                              |
| Redmine 15304 | Cadastro de PDTI                                                                                                                                                                                                                           |           |                                                                                              |
| Redmine 15305 | [Alinhamento estratégico] - Vinculação ao PDTI                                                                                                                                                                                             |           |                                                                                              |
| Redmine 15306 | [Estudo técnico] - Mudanças para o cadastro de Estudo técnico                                                                                                                                                                              |           |                                                                                              |
| Redmine 15307 | [Termo de referência] - Melhorias no cadastro                                                                                                                                                                                              |           |                                                                                              |
| Redmine 15308 | [Aditivo] - Cadastramento de aditivos de valor e quantidade                                                                                                                                                                                |           |                                                                                              |
| Redmine 15311 | [Ordem de fornecimento] - Melhorias para o cadastro                                                                                                                                                                                        |           |                                                                                              |
| Redmine 15316 | Alterações nas informações dos valores do contrato, de 2 para 4 casas decimais                                                                                                                                                             |           |                                                                                              |
| Redmine 15317 | [Cronograma de execução] - Aumentar capacidade de quantidade de itens                                                                                                                                                                      |           |                                                                                              |
| Redmine 15318 | [Análise de riscos e Contratos] - Melhorias (Aumento de capacidade)                                                                                                                                                                        |           |                                                                                              |
| ITSM 3598     | Erro ao alterar o status do contrato                                                                                                                                                                                                       |           |                                                                                              |
| ITSM 3601     | Relatório com conteúdo duplicado                                                                                                                                                                                                           |           |                                                                                              |
| ITSM 3825     | Erro ao excluir empenho                                                                                                                                                                                                                    |           |                                                                                              |
| ITSM 4404     | Erro ao salvar Análise de riscos com anexos                                                                                                                                                                                                |           |                                                                                              |
| ITSM 3609     | Relatório nota de empenho não gera                                                                                                                                                                                                         |           |                                                                                              |
| ITSM 1105     | Visualização da guia Rebimento do objeto na Liberação para pagamento                                                                                                                                                                       |           |                                                                                              |
| ITSM 2930     | Campo "Exercício" do contrato apresentado em formato incorreto                                                                                                                                                                             |           |                                                                                              |
| ITSM 3603     | Relatório com quebra de página                                                                                                                                                                                                             |           |                                                                                              |
| ITSM 3604     | Relatório com quebra de página                                                                                                                                                                                                             |           |                                                                                              |
| ITSM 3608     | Relatório de recebimento de objeto não gera                                                                                                                                                                                                |           |                                                                                              |
| ITSM 4988     | [DNIT] Ao excluir todos os itens do contrato, o sistema emite mensagem de que o preenchimento de itens é obrigatório, não apresenta mensagem de operação concluída, porém, salva o contrato sem itens e deixa o contrato com valor R$ 0,00 |           |                                                                                              |
| ITSM 5040     | Quando clica em busca avançada, na aba características tem que ter a opção de pesquisar as características. Porem nenhuma aparece.Solicito correção.                                                                                       |           | Instruções de como configurar estão na base de conhecimento no link: Definir características |

Impacto nos manuais de instalação/atualização
-------------------------------------------------

1. Nenhum.

Orientações especiais
------------------------

*Scripts SQL*

**PostgreSQL**

1. Nenhum.

**MS-SQLServer**

1. Nenhum.

**Oracle**

1. Nenhum.

Orientações anteriores que devem ser observadas nesta entrega
------------------------------------------------------------------

1. É recomendada uma análise detalhada dos seguintes itens encontrados no documento de **Entrega anterior**:

- Lista de conhecimentos impactados
- Seção de impactos nos manuais de instalação/configuração
- Seção de orientações especiais

Práticas de segurança ao atualizar o produto
------------------------------------------------

1. Realizar uma cópia de segurança (backup):

    - da aplicação (war)
    - do banco de dados
    
2. Executar os scripts conforme orientações contidas neste documento

3. Salvar o log da execução dos scripts no banco de dados para que eventuais imprevistos possam ser devidamente tratados

<< Entrega anterior —————————— Entrega seguinte >>

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 - Larissa Lourenço

















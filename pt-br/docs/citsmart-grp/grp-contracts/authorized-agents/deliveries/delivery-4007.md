title:  Documento de entrega ADM Materiais 4.0.0.7
Description:  CITSmart Enterprise GRP Administração de Materiais. 
# Documento de entrega ADM Materiais 4.0.0.7

- **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais
- **Versão**: 4.0.0.7
- **Documento criado em**: 18/02/2019
- **Versão entregue em**: 18/02/2019
- **Última alteração em**: 18/02/2019
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de problemas na atualização de versão no ambiente dos clientes.

ATENÇÃO, esta versão tem dependência do módulo Corporativo 3.1.8.5

Downloads
---------------

1. **CITSmart Enterprise GRP Administração de Materiais 4.0.0.7**

- [FTP](https://kb.citsmartcloud.com/entregas/grpadm/Enterprise/4.0.0.7/)

Escopo
--------

| Demanda    | Descrição                                                                                   | Conhecimento impactado |
|------------|---------------------------------------------------------------------------------------------|------------------------|
| ITSM #8802 | Erro na transferência interna, aceite eletrônico influenciando na exclusão da transf.       |                        |
| ITSM #8936 | Problemas ao excluir Transferência Interna sem aceite eletrônico.                           |                        |
| ITSM #8657 | Problema na re-criação das procedures de fechamento                                         |                        |
| ITSM #8914 | Adicionar código da conta contábil no auto-complete do material no cadastro de entrada      |                        |
| ITSM #8908 | Falha inesperada ao cadastrar orgão                                                         |                        |
| ITSM #8907 | Erro ao gerar relatório "relação de bens por detentor" em relatórios diversos de patrimonio |                        |
| ITSM #8906 | Erro ao gerar relatório de pendências/nada consta por orgão                                 |                        |
| ITSM #8905 | Erro ao gerar relatório "posição de estoque almoxarifado"                                   |                        |
| ITSM #8855 | Auto-complete de detentor na busca avançada no processo de definir detentor não busca       |                        |
| ITSM #8662 | Está sendo possível inventariar bens já transferidos da UG                                  |                        |
| ITSM #8606 | Mensagem não procedente ao cadastrar um material na parte de endereço de estoque            |                        |
| ITSM #8563 | ALTERACAO, retirar a tratativa de baixa do inventário de bem patrimonial                    |                        |
| ITSM #8081 | Falha inesperada na integração com SIAFI ao cadastrar contrato, mesmo com param desligado   |                        |
| ITSM #8802 | Problemas na Transferência Interna.                                                         |                        |

Impacto nos manuais de instalação/atualização
--------------------------------------------------

1. Nenhum.

Orientações especiais
-----------------------

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

2. MUITO IMPORTANTE, limpar o cache do navegador ao utilizar a versão nova.

Práticas de segurança ao atualizar o produto
----------------------------------------------

1. ATENÇÃO, Realizar uma cópia de segurança (*backup*):

    - da aplicação (war)
    - do banco de dados
    
2. Executar os scripts conforme orientações contidas neste documento

3. Salvar o log da execução dos scripts no banco de dados para que eventuais imprevistos possam ser devidamente tratados

<< Entrega anterior —————————— Entrega seguinte >>

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/16/2019 - Larissa Lourenço














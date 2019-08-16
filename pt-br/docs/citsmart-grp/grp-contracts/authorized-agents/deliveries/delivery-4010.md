title:  Documento de entrega ADM Materiais 4.0.1.0
Description: CITSmart Enterprise GRP Administração de Materiais. 
# Documento de entrega ADM Materiais 4.0.1.0

- **Nome da Solução**: CITSmart Enterprise GRP Administração de Materiais
- **Versão**: 4.0.1.0
- **Documento criado em**: 05/08/2019
- **Versão entregue em**: 05/08/2019
- **Última alteração em**: 05/08/2019
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de 
problemas na atualização de versão no ambiente dos clientes.

Downloads
-----------

**CITSmart Enterprise GRP Administração de Materiais 4.0.1.0**

- [FTP](http://kb.citsmartcloud.com/entregas/grpadm/Enterprise/4.0.1.0/)

Escopo
-----------

| Demanda      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Conhecimento impactado |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| Simple #4832 | Adicionar filtro nas buscas de bens patrimoniais pelo número antigo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                        |
| Simple #4985 | Criar serviço de troca de bens patrimoniais.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                        |
| Simple #4681 | Emitir termo de responsabilidade sem a necessidade de tratar todas as inconsistências.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                        |
| Simple #4833 | Criar funcionalidade de trocar número patrimonial (adicionar no histórico do bem, histórico de números patrimoniais, verificar se o número já não está sendo utilizado, trocar o número para todos os bens patrimoniais inclusive os que foram transferidos).                                                                                                                                                                                                                                                                                                                                                                        |                        |
| Simple #4677 | Selecionar o tipo de inventário como inicial com o objetivo de levantamento retirar a obrigatoriedade de selecionar a comissão e as datas de início e fim.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                        |
| Ticket #595  | Otimizar na entrada de grande quantidade de bens eletrônicos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                        |
| Ticket #594  | 1 - Criar parâmetro de letra que vai ser concatenada no novo número patrimonial 2 - Criar menu separado do que já tem no mobile  3 - Listar os inventários do tipo inicial nesse menu 4 - Possibilitar trocar número patrimonial do bem da estrutura que está no inventário 5 - Adicionar essa nova funcionalidade (novo número) no envio das informações para o inventário web via internet 6 - Adicionar essa nova funcionalidade (novo número) no arquivo que é realizado upload no inventário web 7 - Ver recebimento da informação no inventário Web, e caso ainda não foi implementado para receber um novo número, implemento |                        |
| Simple #4832 | Em caso de entradas extra orçamentárias colocar um campo texto para indicar de qual órgão aquele bem veio (deixar isso gravado no bem).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                        |

Impacto nos manuais de instalação/atualização
-----------------------------------------------

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
----------------------------------------------------------------

1. É recomendada uma análise detalhada dos seguintes itens encontrados no documento de **Entrega anterior**:

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



















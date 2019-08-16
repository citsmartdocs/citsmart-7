title:  Documento de Entrega GRP CNT 2.0.3.0
Description: CITSmart Enterprise GRP CNT. 
# Documento de Entrega GRP CNT 2.0.3.0

- **Nome da Solução**: CITSmart Enterprise GRP CNT
- **Versão**: 2.0.3.0
- **Documento criado em**: 20/04/2018
- **Versão entregue em**: 20/04/2018
- **Última alteração em**: 20/04/2018 (publicação)
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de 
problemas na atualização de versão no ambiente dos clientes.

Downloads
-----------

1. **CITSmart Enterprise GRP CNT 2.0.3.0**

- FTP

Escopo
---------

| Demanda        | Assunto/Módulo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Descrição | Conhecimento impactado |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|------------------------|
| REDMINE #14916 | [CNT].[Cadastro Contrato] - Forma de Pagamento (Mudar forma de pagamento do contrato para os itens)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |           |                        |
| REDMINE #14912 | [CNT].[Acompanhamento] - Aditivo Contratual (Permitir que usuário realize todos os tipos de aditivos em um único termo)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |           |                        |
| REDMINE #13945 | [CNT].[Analise de riscos] - Vinculação da TR/Estudo técnico à Análise de riscos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |           |                        |
| REDMINE #14910 | [CNT].[Acompanhamento] - Ações do menu para contratos rescindidos e suspensos (Alterar as ações previstas para contratos suspensos e rescindidos)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |           |                        |
| ITSM #4645     | [DNIT] â€“ O cliente relata problemas ao anexar arquivos ao contrato. Em alguns casos, o arquivo anexado não é apresentado e, em outros casos, o arquivo é apresentado corretamente, ao realizar a visualização ou edição do contrato.Em testes internos, foi constatado que o sistema também está permitindo anexar mais de um arquivo como anexo, para um único tipo de documento. Essa situação precisa ser corrigida visto que, se ao invés de arrastar os arquivos, o usuário utilizar o sistema para localizar os arquivos do computador, o sistema só permite o carregamento de um único arquivo.Favor verificar se o fato de permitir inserir mais de um arquivo tem relação com o fato relatado pelo cliente. |           |                        |

Impactos nos manuais de instalação/atualização
-------------------------------------------------

1. Nenhum.

Orientações especiais
-------------------------

1. A versão do Portal compatível com essa versão do Contratos é a 3.1.4.1.

Scripts SQL
--------------

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
    <b>Updated:</b>08/16/2019 - Larissa Lourenç












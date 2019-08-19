title:  Versão 2.0.5.2 GRP Contratos e 3.1.5.5 Portal
Description: CITSmart Enterprise GRP Contratos. 
# Versão 2.0.5.2 GRP Contratos e 3.1.5.5 Portal

- **Nome da Solução**: CITSmart Enterprise GRP Contratos
- **Versão**: 2.0.5.2
- **Documento criado em**: 03/08/2018
- **Versão entregue em**: 03/08/2018
- **Última alteração em**: 03/08/2018 (publicação)
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de 
problemas na atualização de versão no ambiente dos clientes.

Downloads
------------

1. **CITSmart Enterprise GRP Contratos 2.0.5.2**

    - [FTP](http://kb.citsmartcloud.com/entregas/grpcontratos/2.0.5.2/)
    
2. **CITSmart Corporativo 3.1.5.5

    - [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.5/)
    
Escopo
----------

| Demanda   | Assunto/Módulo                                                                                                                                                                                                                                                                                                                                                                 | Descrição | Conhecimento Impacto |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------------------|
| ITSM 6625 | O relatório de estudo técnico está suprimindo texto. Para reproduzir, basta verificar o texto do campo “Ação de contingência” e comparar o que está em tela com o que está no relatório.                                                                                                                                                                                       |           |                      |
| ITSM 4645 | [DNIT] O cliente relata problemas ao anexar arquivos ao contrato. Em alguns casos, o arquivo anexado não é apresentado e, em outros casos, o arquivo é apresentado corretamente, ao realizar a visualização ou edição do contrato...                                                                                                                                           |           |                      |
| ITSM 6758 | Foi inserido no Contrato na etapa dos Anexos e observações alguns documentos em PDF, mas no dia seguinte ao consultar os arquivos eles sumiram...                                                                                                                                                                                                                              |           |                      |
| ITSM 6624 | O ordenador do campo “Contrato” não está funcionando. Para reproduzir, basta clicar na seta de ordenação de contratos, na tela inicial do menu “Contratos” ou “Fornecimento”, no caso do DNIT.                                                                                                                                                                                 |           |                      |
| ITSM 6760 | Ao editar uma análise de risco inserir mais de 30 riscos e salvar o sistema informa que foi salvo com sucesso! Ao consultar novamente os riscos sumiram ocorrendo perda dos dados digitados.                                                                                                                                                                                   |           |                      |
| ITSM 6752 | Ao editar um risco clicar em salvar o sistema apresenta mensagem de “fala inesperada”. Foi observado também outro comportamento, quando não apresenta mensagem de “fala inesperada” o sistema informa que a alteração foi salva com sucesso, porém ao consultar a informação não foi salva.                                                                                    |           |                      |
| ITSM 6753 | Ao cadastrar um risco preencher todos os campos obrigatórios o sistema informa a mensagem “Os seguintes campos são obrigatórios:Data” , porém o campo data está preenchido após várias tentativas apagando e preenchendo a data novamente o cadastro é gravado com sucesso. Outro problema que o sistema só permite colocara data do dia que estar sendo realizado o cadastro. |           |                      |
| ITSM 6627 | O sistema apresenta mensagem de falha inesperada ao tentar excluir o programa orçamentário. Para reproduzir, basta tentar excluir um programa orçamentário. Atentar que o sistema possui regra que não permite exclusão de programas já utilizados em outros menus.                                                                                                            |           |                      |
| ITSM 6626 | O sistema apresenta mensagem de falha inesperada ao tentar excluir a ação do programa orçamentário. Para reproduzir, basta editar um programa orçamentário que possua mais de uma ação e tentar excluir uma.                                                                                                                                                                   |           |                      |
| ITSM 6628 | O sistema apresenta mensagem de falha inesperada ao tentar excluir um grupo de necessidades do objetivo estratégico.                                                                                                                                                                                                                                                           |           |                      |
| ITSM 6629 | O objetivo estratégico excluído na tentativa de excluir apenas sua necessidade é apresentado no menu Estudo Técnico.                                                                                                                                                                                                                                                           |           |                      |

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

Práticas de segurança ao atualizar o produto
------------------------------------------------

1. Realizar uma cópia de segurança (*backup*):

    - da aplicação (war)
    - do banco de dados
    
2. Executar os scripts conforme orientações contidas neste documento

3. Salvar o log da execução dos scripts no banco de dados para que eventuais imprevistos possam ser devidamente tratados

<< Entrega anterior —————————— Entrega seguinte >>

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 - Larissa Lourenço



















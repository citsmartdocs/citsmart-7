title:  Versão 2.0.5.3 GRP Contratos e 3.1.5.7 Portal
Description: CITSmart Enterprise GRP Contratos. 
# Versão 2.0.5.3 GRP Contratos e 3.1.5.7 Portal

- **Nome da Solução**: CITSmart Enterprise GRP Contratos
- **Versão**: 2.0.5.3
- **Documento criado em**: 30/08/2018
- **Versão entregue em**: 30/08/2018
- **Última alteração em**: 30/08/2018 (publicação)
- **Objetivos**:

1. antecipar a visão de escopo para que todos os stakeholders possam ter conhecimento do que se espera da versão.

2. levar ao conhecimento dos Agentes Autorizados (parceiros) as principais informações desta entrega, reduzindo o risco de 
problemas na atualização de versão no ambiente dos clientes.

Downloads
------------

1. **CITSmart Enterprise GRP Contratos 2.0.5.3**

    - [FTP](http://kb.citsmartcloud.com/entregas/grpcontratos/2.0.5.3/)
    
2. **CITSmart Corporativo 3.1.5.7**

    - [FTP](http://kb.citsmartcloud.com/entregas/corporativo/Enterprise/3.1.5.7/)
    
Escopo
--------

| Demanda   | Assunto/Módulo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Descrição                                                                                                                                                                                                                                                                                                                          | Conhecimento impactado |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------|
| ITSM 6929 | [DNIT] – O sistema está permitindo que sejam realizados pagamentos acima do valor do contrato. Além disso (ou por este motivo), o “saldo do item” é apresentado incorretamente, após o pagamento ser realmente efetivado (menu Liberação pagamento – ateste). Conforme consta no ITSM 4002, o sistema deve permitir o pagamento de serviços até o valor total do contrato.                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                    |                        |
| ITSM 7256 | [DNIT] - O cliente relata que alguns arquivos anexados são perdidos do sistema. O problema já havia sido relatado no ITSM 6758, onde alguns bugs foram corrigidos.E testes internos, foi verificado que o sistema emite mensagem de sucesso, porém, o arquivo não é anexado efetivamente, por ter o tamanho superior ao permitido. Nesse sentido, o sistema deveria emitir mensagem informando que o arquivo não foi anexado OU não permitir que o usuário selecione arquivo com tamanho superior ao permitido.                                                                                               |                                                                                                                                                                                                                                                                                                                                    |                        |
| ITSM 6919 | Por vezes, ao acessar qualquer funcionalidade do menu Acompanhamento (Alteração contratual, Liberação para pagamento, etc) o sistema apresenta a mensagem de erro em anexo.Não foi percebido um padrão para a ocorrência do erro ou mesmo uma sequência de ações que levem ao erro. Além disso, algumas vezes, ao acessar as funcionalidades, o erro não ocorre.Esse erro foi percebido em versões anteriores também. Atualmente, estamos com os seguintes módulos em um único servidor:                                                                                                                      |                                                                                                                                                                                                                                                                                                                                    |                        |
| ITSM 6920 | [DNIT] – O sistema não está permitindo registrar a “Conformidade” e o “Pago” da liberação de pagamento – ateste, se os mesmos não forem realizados no mesmo momento que o “Ateste (área técnica). Após registrar apenas o ateste e salvar a operação, os demais campos ficam bloqueados, impossibilitando seguir no fluxo.Ressalto que esses registros são realizados em momentos distintos no dia a dia de um contrato, pois se tratam de etapas que, via de regra, são realizadas por pessoas distintas.Em versões anteriores o menu funcionava corretamente, permitindo salvar os registros separadamente. |                                                                                                                                                                                                                                                                                                                                    |                        |
| ITSM 7110 | [DNIT] – O sistema apresenta 2 problemas em relação ao empenho, quando o usuário tenta editar as informações do empenho:1º Se o valor do empenho for igual ao valor do contrato: Qualquer que seja o campo alterado, o sistema apresenta a mensagem “O valor total empenhado é superior ao valor contratado”.2º Se o valor do empenho for menor que o valor do contrato: O sistema altera o valor do empenho                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                    |                        |
| ITSM 6626 | O sistema apresenta mensagem de falha inesperada ao tentar excluir a ação do programa orçamentário. Para reproduzir, basta editar um programa orçamentário que possua mais de uma ação e tentar excluir uma.                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                    |                        |
| ITSM 6760 | Ao editar uma análise de risco inserir mais de 30 riscos e salvar o sistema informa que foi salvo com sucesso! Ao consultar novamente os riscos sumiram ocorrendo perda dos dados digitados.OBS: isso ocorre quando é inserido vários riscos seguidos.Passo 1:Menu > Contratos > Planejamento da contratação > Análise de riscos > escolhe um risco para edição > inseri os riscos seguidos ex: mais de 30 risco inseridos.Passo 2: Clica no botão salvar > mensagem "Análise de risco salva com sucesso".Passo 3: Ao retornar no risco editado para consulta os dados não foram salvos.                      | Passo 1:Menu > Contratos > Planejamento da contratação > Análise de riscos > escolhe um risco para edição > inseri os riscos seguidos ex: mais de 30 risco inseridos.Passo 2: Clica no botão salvar > mensagem "Análise de risco salva com sucesso".Passo 3: Ao retornar no risco editado para consulta os dados não foram salvos. |                        |

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
    
2. Salvar o log da execução dos scripts no banco de dados para que eventuais imprevistos possam ser devidamente tratados

<< Entrega anterior —————————— Entrega seguinte >>

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>08/19/2019 - Larissa Lourenço
















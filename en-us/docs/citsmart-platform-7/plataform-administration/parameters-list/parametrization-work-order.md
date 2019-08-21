title: Regras de parametrização - Ordem de Serviço (OS)
Description: Permite definir a fórmula de cálculo da glosa de ordem de serviço, habilitar assinaturas personalizadas no relatório.
# Regras de parametrização - Ordem de Serviço (OS)

Siga as instruções abaixo:

1. Acesse a funcionalidade através da navegação no menu principal;

2. Posicione o mouse na opção **Parametrização**;

3. Clique na opção **Ordem de Serviço (OS)**;

4. É apresentado uma lista de parâmetros para serem configurados, defina os valores dos parâmetros (atributos);

5. Clique no botão "Gravar" para efetuar a operação, onde a data, hora e usuário serão gravados automaticamente para uma futura
auditoria. 

| #   | Nome                                                                                     | Valores possíveis   | Finalidade                                                                                                                                                                                                                                                                                                                                                                                 | Orientações complementares                                                                                                                       |
|-----|------------------------------------------------------------------------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 51  | FORMULA GLOSA OS - Código Padrão                                                         |                     | Definir a fórmula de Cálculo da Glosa de Ordem de Serviço. Por padrão a fórmula já está definida na ferramenta.                                                                                                                                                                                                                                                                            | Não se aplica                                                                                                                                    |
| 130 | Permitir a listagem de Ordem de Serviços com data retroativa (Ex: S ou N - Default: 'N') | S ou N (Default: N) | Definir se será permitida a listagem de Ordem de Serviços com data retroativa.                                                                                                                                                                                                                                                                                                             | Caso não informe o valor do parâmetro, será utilizado o valor padrão do sistema: “N” (Não).                                                      |
| 229 | Reconfigurar Fórmulas das Atividades (S ou N - Default: 'S')                             | S ou N (Default: S) | Modificar a estrutura da fórmula das atividades já cadastradas para a nova estrutura que é configurável de na tela de Fórmula OS. Ao informar o valor padrão “S”, o sistema irá executar a rotina de reconfiguração da fórmula das atividades no momento que o JBoss for reiniciado numa atualização do sistema CITSmart e atribuir “N” para este parâmetro no momento de sua finalização. | Uma vez informado o valor “S”, a fórmula das atividades do contrato, ainda não configurada, ficará de acordo com a nova estrutura de Fórmula OS. |
| 243 | Ativar assinaturas personalizadas no relatório de Ordens de Serviço                      |                     | Habilitar assinaturas para serem utilizadas na impressão dos relatórios de Ordem de Serviço. Quando o parâmetro estiver ativado (valor = S) o sistema exibirá um campo na tela de cadastro de Ordem de Serviço e o usuário poderá escolher qual configuração dos quadros de assinaturas será usada na impressão de seus relatórios.                                                        | Quando habilitado o parâmetro, obriga o usuário definir e configurar mais um campo antes de gravar uma Ordem de Serviço.                         |

**Tabela 1 - Lista de parâmetros**

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>07/23/2019 – Larissa Lourenço

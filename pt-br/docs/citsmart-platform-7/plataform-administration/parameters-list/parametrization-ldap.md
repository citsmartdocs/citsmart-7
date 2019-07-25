title: Regras de parametrização - LDAP
Description: Esta configuração de parâmetros ligados à integração com o LDAP ocorre de uma forma implícita usando a funcionalidade.
# Regras de parametrização - LDAP

Ao contrário dos demais parâmetros do produto, esta configuração de parâmetros ligados à integração com o LDAP ocorre de uma forma
implícita usando a funcionalidade **Configuração LDAP** ou de forma explícita usando a funcionalidade **Parâmetros do CITSmart** 
(ambas dentro da opção **Parametrização**):

|  #  |                                               Nome                                              | Valores possíveis |                                                   Finalidade                                                   |                                                                                                                                             Orientações complementares                                                                                                                                            |
|:---:|:-----------------------------------------------------------------------------------------------:|:-----------------:|:--------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 22  |                MÉTODO DE AUTENTICAÇÃO (1 - Próprio, 2 - LDAP) (Ex: 1)                           |       Ex: 1       |               Definir qual método de autenticação será utilizado no sistema: 1 (Próprio) ou 2 (LDAP).          | Se o método de autenticação de LDAP for alterado de 1 (Próprio) para LDAP, então, deverá existir um sincronismo entre LDAP e Citsmart, nesse momento é comum haver duplicação de empregados e usuários na base dados podendo causar problemas de autenticação e perfil de acesso.                                 |
|  39 | Id do perfil de acesso que será setado automaticamente caso o usuário não possua nenhum.        |       Ex: 2       |               Informar o número de identificação (ID) do Perfil de Acesso padrão para o usuário.               | Ao cadastrar um usuário e caso não seja informado o perfil de acesso, quando o mesmo realizar login na aplicação, será estabelecido o perfil de acesso (definido no valor do parâmetro). Essa regra vale para os usuários importados do AD. Esse ID do Perfil de Acesso é definido na tela de “Perfil de Acesso”. |
|  45 |                                      LDAP - ID Grupo Padrão                                     |                   |       Informar o número de identificação (ID) do grupo padrão, ao qual os usuários do AD serão associados      |                                                                                                                            Esse ID do grupo é definido na tela de "Cadastro de Grupo".                                                                                                                            |
| 68  |                  Inativo                                                                        |        Inativo    |                                           Inativo                                                              |                                                                                                                          Inativo                                                                                                                                                                                  |

**Tabela 1 - Lista de parâmetros**

Veja também
-------------

- Cadastro e pesquisa de conexões LDAP.

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>07/23/2019 - Larissa Lourenço

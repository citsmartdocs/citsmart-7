title: Regras de parametrização - VoIP
Description: Permitem definir a senha para comunicação com o servidor, informar o ramal de comunicação padrão para ligação VoIP.
# Regras de parametrização - VoIP

1. Acesse a funcionalidade através da navegação no menu principal;

2. Posicione o mouse na opção **Parametrização**;

3. Clique na opção VoIP;

4. É apresentado uma lista de parâmetros para serem configurados, defina os valores dos parâmetros (atributos);

5. Clique no botão Gravar para efetuar a operação, onde a data, hora e usuário serão gravados automaticamente para uma futura auditoria.

| #   | Nome                                                                                                                                            | Valores possíveis                                                                                                                                                                                                                                                            | Finalidade                                                                                                  | Qual é o impacto no sistema?                                                                                                                                                                |
|-----|-------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 323 | VoIP - Ativar VoIP (Valores: "S" ou "N" Default: "N")                                                                                           | S ou N (Default: N)                                                                                                                                                                                                                                                          | Ativar o recurso VoIP.                                                                                      | Assim que ativo um ícone (como este ![simbolo](images/simb-head.para.jpg) ficará disponível no rodapé da tela Portal de Serviços (Smart Portal) para que o usuário possa entrar em contato com o HelpDesk via telefone (VoIP). |
| 324 | VoIP - Servidor (ex.: https://127.0.0.1:8089/janus)                                                                                             | Ex: https://127.0.0.1:8089/janus                                                                                                                                                                                                                                             | Endereço SIP do servidor (SIP = Protocolo de Iniciação e Sessão) para uso do VoIP                           | Não se aplica                                                                                                                                                                               |
| 325 | VoIP - Domínio (ex.: 127.0.0.1)                                                                                                                 | Ex: 127.0.0.1                                                                                                                                                                                                                                                                | ​VoIP - Domínio (ex.: 127.0.0.1)                                                                             | Não se aplica                                                                                                                                                                               |
| 326 | VoIP - Porta (ex.: 5061)                                                                                                                        | Ex: 5061                                                                                                                                                                                                                                                                     | Informar a porta por onde trafega a informação de voz                                                       | Não se aplica                                                                                                                                                                               |
| 327 | VoIP - Usuário (ex.: goofy, substitui o Identificador SIP quando informado)                                                                     | Ex: goofy, substitui o Identificador SIP quando informado                                                                                                                                                                                                                    | Identificação para comunicação com o servidor                                                               | Não se aplica                                                                                                                                                                               |
| 328 | VoIP - Senha                                                                                                                                    | Valores Possíveis – Não se aplica                                                                                                                                                                                                                                            | Senha para comunicação com o servidor                                                                       | Não se aplica                                                                                                                                                                               |
| 329 | VoIP - Ramal (ex.: 0800)                                                                                                                        | Ex:: 0800                                                                                                                                                                                                                                                                    | Informar o ramal de comunicação padrão para ligação VoIP                                                    | Não se aplica                                                                                                                                                                               |
| 330 | VoIP - Abordagem de Registro (Ex: 1. Registrar usando senha simples; 2. Registrar usando a senha HA1; 3. Registre como um convidado (sem senha) | Se o usuário configurar:1 - Significa que o sistema irá usar a senha definida no parâmetro 328;2 - Significa que o sistema irá usar uma senha criptografada;3 - Significa que não terá senha, e mesmo que definido o parâmetro 328, o sistema irá desconsiderar o parâmetro. | Abordagem de registro para que ocorra a comunicação, seja uma abordagem de registro utilizando senha ou não | Não se aplica                                                                                                                                                                               |

**Tabela 1 - Lista de parâmetros**

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>07/23/2019 – Larissa Lourenço
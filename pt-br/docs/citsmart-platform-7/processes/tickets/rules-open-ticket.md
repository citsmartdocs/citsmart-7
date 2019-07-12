title: Regras sobre a abertura automática de solicitação de serviço via e-mail
Description: Regras sobre a abertura automática de solicitação de serviço via
e-mail

# Regras sobre a abertura automática de solicitação de serviço via e-mail

[RN] Segue algumas das principais regras relacionadas com a abertura automática
de solicitação de serviço via e-mail:

1.  Os e-mails que estiverem na caixa de entrada sem marcação de leitura serão
    lidos e deles serão abertas solicitações de serviços.

2.  O sistema marca o e-mail como lido para que não haja duplicação de cadastro.

3.  O sistema compara o e-mail do remetente com os cadastros internos para
    verificar se é usuário.

4.  Caso o remetente seja usuário do sistema: a solicitação é criada com ele
    como solicitante.

5.  Caso o remetente não seja usuário do sistema: a solicitação é criada com o
    solicitante indicado na tela de configuração de abertura automática.

6.  Os anexos constantes do e-mail serão anexados à solicitação de serviço
    criadas, observadas:

  -  O parâmetro 318: Lista de extensões de arquivos que não poderão ser anexados
    (Para mais de uma extensão separar por ponto e vírgula);

  -  O parâmetro 278 : Tamanho máximo de arquivo, em bytes, para upload.
    Default[1073741824] = 1GB


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>07/12/2019 – Anna Martins

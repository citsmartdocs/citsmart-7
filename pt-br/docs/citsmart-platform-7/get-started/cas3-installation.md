title: Manual de instalação do Central Authentication Service (CAS) - versão 3.0 (ITSM)
Description: Trata-se de um pacote de software que implementa um protocolo de autenticação única para a web, para permitir que um usuário acesse múltiplas aplicações depois de fornecer suas credenciais (como usuário e senha) apenas uma vez.

# Manual de instalação do Central Authentication Service (CAS) - versão 3.0 (ITSM)

Trata-se de um pacote de software que implementa um protocolo de autenticação
única para a web, para permitir que um usuário acesse múltiplas aplicações
depois de fornecer suas credenciais (como usuário e senha) apenas uma vez.

!!! info "IMPORTANTE"

    Esta versão (3.0) é aplicável exclusivamente para o produto ITSM, já a
    linha GRP deve usar a [versão 5.0](1)

Download
-------

Deve ser usada a versão customizada pela CITSmart Corporation, pois é a adequada
para uso em nossas soluções: [http://files.citsmart.com](http://files.citsmart.com/)

!!! info "IMPORTANTE"

    Este acesso exigirá login e senha controlados pela CITSmart Corporation.

Banco de dados
-------------

Para realizar autenticação no banco de dados:

1.  Adicionar os parâmetros a seguir no arquivo de configuração do
    cas.properties:

    -   cas.database.jdbc.driver=org.postgresql.Driver

    -   cas.database.jdbc.url=jdbc:postgresql://localhost:5432/citgrp

    -   cas.database.jdbc.user=postgres

    -   cas.database.jdbc.password=postgres

2.  Pronto, agora é apenas realizar as demais configurações típicas do CAS.

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>07/26/2019 – Anna Martins


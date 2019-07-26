title: Central Authetication Service (CAS) installation guide – version 5.0
(GRP)

Description: Trata-se de um pacote de software que implementa um protocolo de autenticação única para a web, para permitir que um usuário acesse múltiplas
aplicações depois de fornecer suas credenciais (como usuário e senha) apenas uma vez.

# Central Authetication Service (CAS) installation guide – version 5.0 (GRP)

Trata-se de um pacote de software que implementa um protocolo de autenticação
única para a web, para permitir que um usuário acesse múltiplas aplicações
depois de fornecer suas credenciais (como usuário e senha) apenas uma vez.

!!! info "IMPORTANTE"

    Esta versão (5.0) é aplicável exclusivamente para os produtos GRP, já o
    ITSM deve usar a [versão 3.0](1).

Download
---------

Deve ser usada a versão customizada pela CITSmart Corporation, pois é a adequada
para uso em nossas soluções: [http://files.citsmart.com](http://files.citsmart.com/)

   !!! info "IMPORTANTE"

       Este acesso exigirá login e senha controlados pela CITSmart Corporation.

Ldap
----

Para realizar autenticação no LDAP:

1.  **Adicionar** os parâmetros a seguir no arquivo de configuração do
    cas.properties:

    -   cas.authn.ldap[0].type=AUTHENTICATED

    -   cas.authn.ldap[0].ldapUrl=ldap://auth01.citsmartcloud.com

    -   cas.authn.ldap[0].useSsl=false

    -   cas.authn.ldap[0].connectTimeout=5000

    -   cas.authn.ldap[0].baseDn=dc=citsmart,dc=com

    -   cas.authn.ldap[0].userFilter=uid={user}

    -   cas.authn.ldap[0].subtreeSearch=true

    -   cas.authn.ldap[0].bindDn=CN=citsmartco,OU=services,O=citsmartco,DC=citsmart,DC=com

    -   cas.authn.ldap[0].bindCredential=IxTMc4l92F

    -   cas.authn.ldap[0].dnFormat=uid=%s,ou=people,o=citsmartco,dc=citsmart,dc=com

    -   cas.authn.ldap[0].principalAttributeId=uid

    -   cas.authn.ldap[0].principalAttributeList=sn,cn,givenName

    -   cas.authn.ldap[0].minPoolSize=3

    -   cas.authn.ldap[0].maxPoolSize=10

    -   cas.authn.ldap[0].validateOnCheckout=true

    -   cas.authn.ldap[0].validatePeriodically=true

    -   cas.authn.ldap[0].validatePeriod=600

    -   cas.authn.ldap[0].failFast=true

    -   cas.authn.ldap[0].idleTime=5000

    -   cas.authn.ldap[0].prunePeriod=5000

    -   cas.authn.ldap[0].blockWaitTime=5000

2.  Pronto, agora é apenas realizar as demais configurações típicas do CAS.

Banco de dados
-------------

Para realizar autenticação no banco de dados:

1.  **Adicionar** os parâmetros a seguir no arquivo de configuração do
    cas.properties:

    -   cas.authn.jdbc.search[0].fieldUser=username

    -   cas.authn.jdbc.search[0].tableUsers=seguranca_usuario

    -   cas.authn.jdbc.search[0].fieldPassword=password

    -   cas.authn.jdbc.search[0].healthQuery=SELECT 1 FROM seguranca_usuario

    -   cas.authn.jdbc.search[0].isolateInternalQueries=false

    -   cas.authn.jdbc.search[0].url=jdbc:postgresql://localhost:5432/citgrp

    -   cas.authn.jdbc.search[0].failFast=true

    -   cas.authn.jdbc.search[0].isolationLevelName=ISOLATION_READ_COMMITTED

    -   cas.authn.jdbc.search[0].dialect=org.hibernate.dialect.PostgresqlDialect

    -   cas.authn.jdbc.search[0].leakThreshold=10

    -   cas.authn.jdbc.search[0].propagationBehaviorName=PROPAGATION_REQUIRED

    -   cas.authn.jdbc.search[0].batchSize=1

    -   cas.authn.jdbc.search[0].user=postgres

    -   cas.authn.jdbc.search[0].ddlAuto=validate

    -   cas.authn.jdbc.search[0].maxAgeDays=180

    -   cas.authn.jdbc.search[0].password=1

    -   cas.authn.jdbc.search[0].autocommit=false

    -   cas.authn.jdbc.search[0].driverClass=org.postgresql.Driver

    -   cas.authn.jdbc.search[0].idleTimeout=5000

    -   cas.authn.jdbc.search[0].passwordEncoder.type=BCRYPT

    -   cas.authn.jdbc.search[0].passwordEncoder.secret=

    -   cas.authn.jdbc.search[0].passwordEncoder.characterEncoding=UTF-8

    -   cas.authn.jdbc.search[0].passwordEncoder.strength=10

2.  Pronto, agora é apenas realizar as demais configurações típicas do CAS.


[1]:/pt-br/citsmart-platform-7/get-started/cas3-installation.html



!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>07/26/2019 – Anna Martins

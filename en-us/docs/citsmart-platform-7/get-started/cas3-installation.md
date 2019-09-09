title: Central Authentication Service (CAS) installation guide - version 3.0 (ITSM)
Description: This is a software package that implements a single authentication protocol for the web.

# Central Authentication Service (CAS) installation guide - version 3.0 (ITSM)

This is a software package that implements a single authentication protocol for the web, to allow a user to access multiple 
applications after providing their credentials (such as username and password) only once.

!!! info "IMPORTANT"

    This version (3.0) is only applicable for ITSM solution, since GRP solutions must use [version 5.0](1).

Download
-------

The version customized by CITSmart Corporarion must be used as it is suitable for use in our 
solutions: [http://files.citsmart.com](http://files.citsmart.com/)

!!! info "IMPORTANT"

    This access will require login and password controlled by CITSmart Corporation.

Database
-------------

To perform authentication on the database:

1.  **Add** the following parameters to the cas.properties configuration file:

    -   cas.database.jdbc.driver=org.postgresql.Driver

    -   cas.database.jdbc.url=jdbc:postgresql://localhost:5432/citgrp

    -   cas.database.jdbc.user=postgres

    -   cas.database.jdbc.password=postgres

2.  All you have to do now is to perform the other typical CAS configurations.


[1]:/en-us/citsmart-platform-7/get-started/cas5-installation.html


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>09/06/2019 – Larissa Lourenço


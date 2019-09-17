Title: FAQ
Description: Aqui você tem as respostas das pergundas mais comuns quando se fala da ferramenta CITSmart.

# Perguntas Frequentes - FAQ

!!! Question "Error: digital certificate not signed by the authority (CA)"

    Export SSL Certificates from the target application, import it into the Stash JVM TrustStore server, and then restart Stash so that Stash relies on the target application.
   
    a. Resolution of a self-signed certificate or a certificate not signed by a CA authority
   
    Default password: The Java TrutstStore password is: changeit.
   
    b. Export the Application Certificate (JIRA, Crowd, Bamboo, etc.) you want to connect to:
   
    The command syntax:

    keytool-exportação-alias <existing_alias_in_keystore>-file

    <any_filename_here>-keystore <path/to/keystore>

    For example:
   
    - Windows:
    % JAVA_HOME% \ bin \ keytool-export-apelido jira_tomcat-file jira_cert.cerkeystore C: \ Users \ jira_user \ jira.keystore
   
    - Linux:

    $ JAVA_HOME / bin / keytool-export-apelido jira_tomcat-file jira_cert.cerkeystore / home / jira_user / jira.keystore
   
    *Import the application certificate to the TrustStore server Stash*:

    The default TrustStore file (cacerts) is located in the Java home directory in this folder:
   
    <Java directory> home / jre / lib / security
   
    The command syntax:
   
    keytool-import-alias <new_unique_alias>-file
   
    <any_filename_here_from_above>-keystore <path/to/truststore>
   
    For example:
   
    - Windows:
    % JAVA_HOME% \ bin \ keytool-import-alias do jira_tomcat-file jira_cert.cer-keystore% JAVA_HOME% \ jre \ lib \ security \ 
    cacerts

    - Linux:
    $ JAVA_HOME / bin / keytool-import-alias do jira_tomcat-file jira_cert.cerkeystore $ JAVA_HOME / jre / lib / security / 
    cacerts
  
    (OPTIONAL) If you changed the default TrustStore location be sure to set the JAVA_OPTS environment variable before restarting:
  
    - Windows:
    set JAVA_OPTS =% JAVA_OPTS%-Djavax.net.ssl.trustStore = "c: \ my \ caminho \ \ aqui cacerts"-Djavax.net.ssl.trustStorePassword = "changeit"
   
    - Linux:
   
    JAVA_OPTS exportação = "$ JAVA_OPTS-Djavax.net.ssl.trustStore = / meu / path / here / cacerts-Djavax.net.ssl.trustStorePassword = changeit"
    
    Restart Stash
   
!!! Question "[Environment] Error: search does not find a document even after the base has been reindexed by system"
    
    After structural changes in the collections of the SolR, it is not enough to update SolR by the application ITSM, it is necessary to update the configsset of the SolR.
    
    Here are the steps to update:
    
    1. Remove any existing collection in configset “base_conhecimento_configs”
    2. Stop the Solr server with the command: solr stop –all
    3. Access the root folder of the $PATH_SOLR/server/solr/configsets/
    4. Delete the "base_config_configs" folder"
    5. Copy the new config that is attached to this folder
    6. Upload the Solr server with the command: solr start -noprompt
    7. Run the command to create the collection: solr create -c base_conhecimento -d base_conhecimento_configs
    8. Access the Citsmart system on the way: System > Settings > Knowledge Management (Indexing) (see knowledge [Knowledge indexing](/en-us/citsmart-platform-7/plataform-administration/data-indexing/knowledge-indexing.html))
    9. Click the button: Index Knowledge Base

!!! Question "[Environment] Loss of source path"
    
    a. Description
    
    It is not possible to generate the native report "Execution Report Request".
    
    b. Solution / Answer

    Assign ("setar") via the command line on the server the correct path of the fonts.
       
!!! Question "How do I access the service request from the e-mail notification?"
    
    To access the service request from the e-mail notification, proceed as follows:

    1. Make sure you are logged in to the system.
    2. Open the e-mail notification for the service request;
    3. The notification will have the request number with a hyperlink, just click on the number, which will then be redirected to the Service Management screen presenting the request information.
    
    ![Download](images/neuro (1).jpg)

!!! Question "How to configure Nagios authentication via LDAP?"
    
    The Nagios authentication configuration via LDAP is:
    
    1. Change the thruk.conf file as follows:
 
    - vim /etc/apache2/conf-available/thruk.conf
    
    - <Location /thruk/>
      Options ExecCGI FollowSymLinks
      AuthName "LDAP Authentication"
      AuthType Basic
      AuthBasicProvider ldap
      AuthLDAPURL ldap://auth01.citsmartcloud.com/dc=citsmart,dc=com?uid?sub?(objectClass=*)
      Require ldap-group ou=people,o=citsmartco,dc=citsmart,dc=com
      Require valid-user
      </Location>
      
    2. Run:
    
    - /etc/init.d/apache2 restart
    
    - /etc/init.d/apache2 restart
    
    - /etc/init.d/nagios reload
      
!!! Question "How to configure the automatic satisfaction survey response?"

    The automatic response mechanism, which will answer automatically all service request satisfaction surveys, kicks in when the satisfaction survey is not filled out by the user within the deadline determined by the systems manager.

    To configure the automatic responses, proceed as instructed below:
    
    1. Configure the following system parameters which determine the behavior of the automatic response mechanism (see knowledge [Parameterization rules - Provisioning and Logistics](/en-us/citsmart-platform-7/plataform-administration/parameters-list/parametrization-provisioning.html)):
    
        - Parameter 139: Determines a deadline, in days, the user has to fill out the satisfaction survey, before it is automatically filled out by the system;
        - Parameter 152: Default rating which will be attributed to surveys that have been automatically filled out. Options: EXCELLENT, GOOD, REGULAR, POOR;
        - Parameter 151: Activates or deactivates system automatic responses. Y to activate and N to deactivate.
        
     2. Access the Batch Processing feature (System → Batch Processing).
     
     3.The batch processing entry screen will be displayed, fill out the fields:
    
        - Description: insert the description which will identify the processing. For example: "Automatic satisfaction survey response";
        - Situation: the situation determines if this processing will be active or inactive. When it is inactive the requests will not be answered;
        - Type: select the “Java Class” type;
        - Schedule: determines when the activity will be executed, it is up to the administrator to determine the best time and recurrence ;
        - Content: insert the text: br.com.centralit.citcorpore.quartz.job.AvaliarSolicitacoesNaoRespondidas;
        
    4. Click on the Save button to confirm the entry.
    
    !!! info "IMPORTANT"
    
        From the moment of the entry, at the scheduled time and date, the unanswered requests (beyond the deadline defined on parameter 139) will automatically be answered (according to the value determined on parameter 152), in case parameter 151 has an "Y" value.
        
!!! Question "Como configurar as notificações de e-mail de solicitação de serviços?"

    When registering a service request, perform determined activities and its execution, the petitioner will be notified.

    In order for the notification be sent it is necessary to perform the following procedures :
    
    1. Access the Contract Services related to the business service Portfolio Management > Services Portfolio > Business Service > Contract > Services and technical service Portfolio Management > Service Portfolio > Business Service > Support/Technical Service > Contract > Services e and insert the e-mail template in the fields:
        - "Incident/Request Opening E-mail Template"
        - "Incident/Requistion Execution E-mail Template"
        - "Incident/Request Ongoing Activities E-mail Template"
        
    !!! info "IMPORTANT"
    
        If e-mail templates are not inserted, the notification will not be sent.
        
    2. Access the Group Register feature General Registration > Staff Management > Group.

    3. The Group Register screen will be displayed. If the group has already been registered in the system, search for it;
    
    4. Select it;

    5. The intended group entry screen will be displayed, determine if the e-mail notifications (opening, in progress and execution) related to the requests will be mandatory.
    
    !!! warning "ATTENTION"
    
         If it is determined that notifications will be mandatory, when registering a service request, on the Incident/Request Service entry screen, these options will be selected already, not allowing any changes. But if it has been determined that notifications will not be mandatory, when registering a service request, these options will be available to be determined by the petitioner.
        
    6. On the Incident/Request Service Request screen, when registering a service request the rules related to the e-mail notifications will be established, determined in the group entry.
    
    !!! note "NOTE"
    
        When registering a service request, the notification will only be sent to the performer group, which is responsible for attending to the request. When the activities are in progress and then finished, the notifications will only be sent to the petitioner.
        
!!! Question "How to configure the configuration Items lifecycle phases names?"

    The configuration of the CI lifecycle phases names can be performed through the GCAS Configuration Screen and through the CITSmart parameters screen. To perform this configuration, proceed as instructed below:
    
    **Configuration through the GCAS configuration screen**
    
    1. Access the GCAS Configuration feature navigating through the main menu ITIL Processes > Configuration Management > GCAS Configuration. Afterwards, the service assets and the management parameters (attributes) configuration screen will be displayed;
    
     2. Insert the parameters value (attributes):
     
        - Name of the CIs Group which are in the Development Phase (i.e.: CIs in Development)
        - Name of the CIs Group which are in the Production Phase (i.e.: CIs in Production)
        - Name of the CIs group which are being confirmated (i.e.: CIs Being Confirmated).
        
    3. Click on the Save button to confirm the entry, at which time, date and user will be stored for a future audit.

    4. After configuring the parameters related to the CI lifecycle phases, the CI lifecycle phases' descriptions will be displayed on the Configuration Items Management screen, according to what was specified in the parameter value.
    
    a. Configuration through the GCAS configuration screen
    
    1. Access the Citsmart Parameters feature (Parametrization > Citsmart Parameters).
    
    2. Then, the Citsmart Parameters screen will be displayed, click on the Search tab. The parameter search screen will be displayed;
    
    3. Perform a search for the parameter "92 - Name of The Ci Group is In Development Phase (e.g.: CIs in Development)";
    
    4. Select it. Then, the parameter registry screen featuring the selected entry data will be displayed;
    
    5. On the Value field, insert the name of the CI group in development;
    
    6. Click on the Save button to confirm the entry, at which time, date and user will be stored for a future audit;
    
    7. Search for the parameter "93 - Name of The CIs Group in Production Phase (e.g.: ICs em Produção)";
    
    8. Select it. Then, the parameter registry screen featuring the selected entry data will be displayed;
    
    9. On the Value field, insert the name of the CI group in production phase;
    
    10. Click on the Save button to confirm the entry, at which time, date and user will be stored for a future audit;
    
    11. Search for the parameter "93 - Name of The CIs Group in Confirmation Phase (e.g.: ICs em Produção)";
    
    12. On the Value field, insert the name of the CI group in confirmation phase;
    
    13. Click on the Save button to confirm the entry, at which time, date and user will be stored for a future audit.
    
!!! Question "How to define the obligatoriness of the linking change with IC?"

    The requirement of the change link to the CI is determined on the CITSmart Parameter screen. To determine this requirement, proceed as instructed below:
    
    1. Access the CITSmart Parameter feature navigating through the main menu;
    
    2. The CITSmart Parameter screen will be displayed, click on the Search tab.
    
    3. The parameter search screen will be displayed. Search for the parameter "85 - Verification of change link related to the configuration item (Default: Y)"

    4. Select it.

    5. Then, the parameter registry screen featuring the selected entry data will be displayed, on the value field, insert the "Y" value.

    6. Click on the Save button to confirm the entry, at which time, date and user will be stored for a future audit.

    7. After configuring the parameter, when registering a Configuration Item, the change link will be mandatory
    
!!! Question "How do I set a default group for the first level service request?"

    To set the default group for 1st level attendance, proceed as follows:
    
    1. Access the Group Registration feature by navigating in the main menu Access and Permission → Group. The group registration screen will be displayed, displaying the contracts;
    
    2. Make the registration of the group of 1st level, if not registered, and proceed with the completion of the fields;
    
    3. If the 1st level group is already registered in the system, carry out the group search and obtain their identification number (ID);
    
    4. After obtaining the 1st level group ID, access the CITSmart Parameters feature by navigating through the main menu. Parameterization > Parameters CITSmart;
    
    5. The CITSmart Parameters screen appears, click the CITSmart Parameters Search tab;
    
    6. Perform the search for parameter "9 - Group ID Level 1";
    
    7. Select the same;
    
    8. The parameter registration screen with the contents of the selected record will be displayed, in the value field, enter the identification number (ID) of the 1st level group;
    
    9. Click the Record button to perform the operation, in which case the date, time and user will be automatically stored for a future audit.
    
    !!! note "NOTE"
    
        After setting the parameter, when registering a Service Request/Incident, if you have not informed the group to service the service, the group will be scaled, which was defined in the parameter For 1st level service.
        
!!! Question "How do I design the assets that make up my service?"

    The design of the assets that make up the service is done using the Service Map Design tool that provides efficient and 
    effective drawings for managing the service during its life cycle, demonstrating the related configuration items.
 
    To carry out this design, proceed as follows (see knowledge Service attributes configuration][2])
    
    1. Access the Service Map Design feature for the Business Service **Portfolio and Catalog Management** > Portfolio and Catalog Management > Support Menu > Advanced Portfolio > Service Catalog > Next Service > Service Map**;
    
    2. The screen for designing the assets that make up the business service will be presented;
    
    3. Perform the design;
    
    4. Access the Service Asset Map Design functionality for the Support/Technical Service **Portfolio and Catalog Management > 
    Portfolio and Catalog Management > Support Menu > Advanced Portfolio > Service Catalog > Next Service > Service Map**.

    5. The screen for designing the assets that make up the support / technical service will be presented;

    6. Perform the design.

!!! Question "How to enable the satisfaction survey?"

    The satisfaction survey is the evaluation of the request fulfillment performed through the e-mail notification.

    To enable the satisfaction survey, proceed as instructed below:
    
    1. Create an e-mail template (the e-mail template must contain the following keyword: ${LINKPESQUISASATISFACAO})
    
    2. Access the CITSmart Parameters feature navigating through the main menu Parametrization > CITSmart Parameters.
    
    3. The CITSmart Parameters screen will be displayed, click on the CITSmart Parameters Search tab;
    
    4. Search for the parameter 31 "Send e-mail when running requests/incidents flows";
    
    5. Select it.;
    
    6. The parameter registry screen will be displayed according to the selected entry, on the Value field, insert the "Y" value to enact sending e-mails related to the service requests.
    
    7. Click on the Save button to confirm the procedure.
    
    8. Access the request, incident and contract services for the business service Portfolio and Catalog Management > Portfolio and Catalog Management > Support Menu > Advanced Portfolio > Service Catalog →> Next Service and technical service Portfolio Management and Catalog > Portfolio and Catalog Management > Support Menu > Advanced Portfolio > Service Catalog > Next Service and verify if the e-mail template that has been created is entered in the field "E-mail Template at Completion of Requests/Incidents"
    
    9. When an e-mail notification is received warning the service request has been executed, a link to the satisfaction survey will be displayed. Clicking on the link opens a screen to evaluate the attendance.
    
!!! Question "How to enable the service requests escalation rule?"

    The service request scheduling rule is enabled on the CITSmart Parameter screen. To enable this rule, proceed as follows:
    
    1. In the citsmart.cfg file put the routine START_MONITORA_INCIDENTES=TRUE
    
    2. Access the CITSmart Parameters feature by navigating in the main menu System > CITSmart Parameters;
    
    3. The CITSmart Parameters screen will appear, click the CITSmart Parameters Search tab;
    
    4. Search and change the parameter 190 - Turns on the operation of the scheduling rules (Eg: Y or N - Default: 'N') informing the value "Y" to activate service request scheduling;
    
    5. Search and change the parameter 31 - Sends e-mail in the execution of request/incident flows (Eg: Y or N), informing the value "Y"
    
    6. Search and change the parameter 297 - Disable sending system e-mails (Values:" Y "or" N "Default:" N ") informing the value "N";
    
    7. Also make the necessary changes in the following parameters, according to the need and scenario of the installation:
    
        - 195: E-mail template id for sending deadline request notification (Eg: 1);
        - 197: User login that will receive e-mail regarding service request scheduling rules that are expiring (eg Consultant);
        - 113: E-mail Template ID for Auto Escalation;
        - 10: SMTP SEND - E-mail origin of service request notifications;
        - 33: System access URL.
        
    8. Click the Save button to perform the operation, in which case the date, time and user will be automatically stored for a future audit.
    
!!! Question "How to enable the change module escalation rule?"

    The changes escalating rule is enacted on the CITSmart Parameter screen.

    To enable this rule, proceed as follows:
    
    1. Access the CITSmart Parameters feature navigating through the main menu Parametrization > CITSmart Parameters;
    
    2. The CITSmart Parameters screen will be displayed, click on the CITSmart Parameters Search tab;
    
    3. The CITSmart Parameters search screen will be displayed, search for the parameter "193 - Enable Change Escalation Rules (e.g. : Y or N - Default ´N´)";
    
    4. The parameter registry screen will be displayed according to the selected entry, on the Value field, insert the "Y" value to enact the change escalation;
    
    5. Click on the Save button to confirm the procedure, at which date, time and user will automatically be stored for a future audit.
    
!!! Question "How to enable the scheduling rule of the problems module?"

    The problem scaling rule is enabled on the Citsmart Parameter screen. To enable this rule, proceed as follows:
      
    1. Access the Citsmart Parameters feature by navigating in the main menu Parameterization → Citsmart Parameters.
    
    2. The Citsmart Parameters screen will appear, click the Citsmart Parameters Search tab.
    
    3. It will display the screen for parameter search, perform the parameter search "194 - Enable the problem escalation defined in the scheduling rules (Ex: Y or N - Default 'N')" and select the same.
    
    4. The parameter registration screen with the contents of the selected record will be displayed, in the value field, enter the value "Y" to enable problem escalation;
    
    5. Click the Record button to perform the operation, in which case the date, time and user will be automatically stored for a future audit.
    
!!! Question "How to enable automatic e-mail reading routine?"

    When sending an e-mail to CITSmart support, the automatic e-mail will be read, if the e-mail refers to a request, the title of the e-mail will be verified, if it contains the word 'Request' and the Number of the request, if it contains, the e-mail will be stored as an occurrence in the relevant request.

    For this e-mail reading routine to work perfectly, the following procedures must be followed:
    
    1. Install the java 7 version, if it has lower version the routine will not work;
    
    2. Access the Citsmart Parameters feature by navigating in the main menu Parameterization > Citsmart Parameters;
    
    3. The Citsmart Parameters screen will appear, click the Citsmart Parameters Search tab;
    
    4. It will display the screen for parameter search, search the parameter "23-SMTP READ - Service Desk mail entry server" and select it;
    
    5. The parameter registration screen with the contents of the selected record will be displayed, in the value field, inform the e-mail entry server (eg orion.egrupo.com.br);
    
    6. Click the Record button to perform the operation, in which case the date, time and user will be automatically stored for a future audit.
    
    7. Perform the search for the parameter "24 - SMTP READY - Service Desk mail inbox" and select the same;
    
    8. The parameter registration screen with the contents of the selected record will be displayed in the value field, inform the e-mail or login of the e-mail account (eg support.citsmart);
    
    9. Click the Record button to perform the operation, in which case the date, time and user will be automatically stored for a future audit;
    
    10. Perform the parameter search "25 - SMTP READY - Service Desk E-Mailbox Password" and select the same;
    
    11. The parameter registration screen with the contents of the selected record will be displayed, in the value field, the password of the e-mail account;
    
    12. Click on the Save button to perform the operation, in this case the date, time and user will be stored automatically for a future audit;
    
    13. Perform the search of the parameter "26 - SMTP READY - Service Desk e-mail server provider (imaps, pops, imap, pop, etc)" and select it:
    
    14. The parameter registration screen with the contents of the selected record will be displayed in the value field, inform the protocol that will be used to read e-mails (eg imap or pop) and click the Save button to perform the operation, In this case the date, time and user will be stored automatically for a future audit;
    
    15. Perform the search for the parameter "27 - SMTP READY - Service Desk mail server port" and select the same;
    
    16. The parameter registration screen with the contents of the selected record will be displayed, in the value field, enter the port that will be used to access the mail server (587 for pop server or 995 for imap server);
    
    17. Click the Record button to perform the operation, in which case the date, time and user will be automatically stored for a future audit;
    
    18. Perform the search for the parameter "28 - SMTP READY - Service Desk E-Mailbox Folder" and select it;
    
    19. The parameter registration screen with the contents of the selected record will be displayed, in the value field, inform the folder of the e-mail account's inbox;
    
    20. Click the Record button to perform the operation, in which case the date, time and user will be automatically stored for a future audit;
    
    21. Perform the search for the parameter "200 - Enable routine for reading new e-mails automatically (ex: Y or N - Default 'N')" and select the same one;
    
    22. The parameter registration screen with the contents of the selected record will be displayed, in the value field, enter the "Y" value to activate the automatic reading routine;
    
    23. Click the Record button to perform the operation, in which case the date, time and user will be automatically stored for a future audit.
    
!!! Question "How to enable the portal?"

    In order for users to have access to the Portal or Smart Portal, you must enable it as follows:
    
    1. Access the Citsmart Parameters feature by navigating in the main menu Parameterization > Citsmart Parameters. The Citsmart Parameters screen will appear, click the Citsmart Parameters Search tab. Once this is done, it will display the screen for parameter search;
    
    2. Perform the parameter search "46 - Enable Portal as Citsmart home screen?" And select the same. After that, the parameter registration screen with the contents of the selected registry will be displayed, as shown in the figure below:
    
    ![figure](images/para.img1.jpg)
    
    **Figure 1 - Citsmart parameter search screen**
    
    3. In the Value field, enter the value "Y" to enable the portal as the home screen. Once this is done, click on the Save button to perform the operation, in which case the date, time and user will be stored automatically for a future audit.

    4. After setting the parameter, when logging into the system, the Portal will be displayed as the home screen.
    
!!! Question "How to integrate the client company AD into CITSmart Enterprise ITSM that is in the cloud offered by CITSmart Corporation?"

    Regarding the LDAP compliance of CITSmart Enterprise ITSM, there are two scenarios:

    1. On-demand environments: Administrator must connect to the client's directory server.
 
    2. Cloud environment (offered by CITSmart Corporation): Administrator must enable the connection to the client directory server.
    
!!! Question "How to improve the performance of CITSmart Enterprise ITSM?"

    System performance is defined as the time the software takes to perform a given task, since this performance is a strong quality attribute perceived by software users.

    There is the capability of the system to work with more than one instance. For this, it is necessary to use the configuration file (citsmart.cfg), where you can activate or inactivate routines.

    To use this capability, the citsmart.cfg file must exist in the directory:
    
    - \jboss\standalone\configuration\ (quando o Jboss sobe como uma única instância)
    - \jboss\domain\configuration\ (quando é utilizado cluster, tem domains e hosts)
    
    Here are the guidelines you need to complete the configuration:
    
    !!! note "NOTE"
    
        Where ${value} is replaced by the corresponding values.
        
    1. **START_MODE_RULES=${value}** (This parameter defines whether to process scheduling rules. Enter the value TRUE to activate or FALSE to disable).
    
    2. **START_MODE_ITSM=${value}** (This parameter defines whether to display the ITSM interface.) Enter the value TRUE or FALSE, if it is set to FALSE, it will not allow you to open the ITSM (Incident, etc.) functionality.
    
    3. **START_MONITORING_ASSETS= ${value}** (This parameter sets whether asset tracking is enabled. Enter the value TRUE to activate or FALSE to disable).
    
    4. **QUANTITY_BACKUPLOGDADOS = ${value}** (This parameter defines the number of items in the table that are to be backed up. Enter the number of items, eg 1000).
    
    5. The parameters below when not enabled causes the system to go up with threads disabled to improve system performance. It is necessary to configure these parameters before starting Jboss for their operation.
    
    6. **START_MONITORA_INCIDENTES= $ {value}** (This parameter sets whether to disable incident tracking. Enter the value TRUE on or FALSE on).
    
    7. **START_VERIFY_EVENTS = ${value}** (This parameter sets whether to disable event checking. Enter the value TRUE on or FALSE on).
    
    8. Use of the parameters below is optional. They separate the main connection pool with the flow, inventory, and report execution pool.
    
        - **JDBC_ALIAS_BPM = java: / jdbc / $ {value}** (This parameter defines the name of the datasource of the stream. Enter the name of the datasource, eg java: / jdbc / citsmartFlux).
        - **JDBC_ALIAS_INVENTORY = java: / jdbc / $ {value}** (This parameter defines the name of the datasource of the inventory. Enter the name of the datasource, eg java: / jdbc / citsmart_inventory).
        - **JDBC_ALIAS_REPORTS = java: / jdbc / $ {value}** (This parameter defines the name of the datasource of the reports. Enter the name of the datasource, eg java: / jdbc / citsmart_reports).
        
    9. The following parameter separates the processing of the BPM event routine into a separate thread pool from the main system thread pool, to ease the use of database and server resources.
        
        - JDBC_ALIAS_BPM_EVENTOS = java: / jdbc / $ {value} (This parameter defines the name of the BPM event datasource. Enter the name of the datasource, eg java: / jdbc / citsmartBpmEvents).
        
!!! Question "How to navegate the screens using the CITSmart Enterprise ITSM controls?"

    [Navegation](/en-us/citsmart-platform-7/get-started/navigate.html)
    
!!! Question "How can Event Management become a business monitoring tool?"

    a. Webservice scheme for legacy systems (business monitoring)
    
    You can connect the EVM component to any software, even one other than the one the Event Management module normally integrates (Nagios, Zabbix and Inventory) as long as the data sent via webservice follows a pre-set standard.

    Once the data is sent to the CITSmart Event Monitor, rules can be created (for example, with the Esper EPL) so that certain events are triggered according to some condition observed in the data.

    Example "Payroll":
    
    - Let's say it's the rule that one company does not hire more than 5 employees per industry.

    - The payroll program could send the minimum data of each hiring by department (defined in the company's budget plan), so that whenever the contraction number per department exceeds the pre-established limit, an event of "excess hiring "Could be fired.

        
!!! Question "How to relate group to contract?"

    [Relate](/en-us/citsmart-platform-7/processes/tickets/relate-group.html)
    
!!! Question "How to relate unit to contract?"

    [Relate](/en-us/citsmart-platform-7/processes/tickets/relate-unit.html)
    
!!! Question "How are documents ranked at the time of SOLR knowledge base search?"

    To rank the documents at the time of the search, Solr generates a score for each document.

    Thus, the document that has the highest score, is presented first and the others, with lower scores, in sequence.

    To calculate the document score Solr uses a standard algorithm, where the frequency of the searched term is checked. But, it is possible to change the punctuation with the use of the boosts.

    Solr's boosters can be used in two moments at the time of indexing or query, and their use in search is more common.

    Some boosters that may change the calculation of the score at the time of the survey are:
    
    - term^num: where "num" is the importance of the search term, example: incident^2;
    - And the field boosters and dismax and edismax functions can also be used to boost search.
        
    At ITSM, no booster is used, so far, only Solr's standard score calculation is used, and at the end of the search the ranking is done by the score and by the number of times the knowledge was voted / liked.
    
    Boosters are open for use, but to use them requires a better analysis of the importance of fields and documents added to Solr, by the knowledge base.
    
!!! Question "Como vincular colaboradores (usuários) a um grupo?"

    Há duas formas de vincular os colaboradores (usuários) aos grupos, sendo:
    
    a. A partir do cadastro de grupo
    
    1. Acesse a funcionalidade de Cadastro de Grupo através da navegação no menu principal. Posicione o mouse na opção Acesso e 
    Permissão e clique na opção Grupo (ver conhecimento [Cadastro e pesquisa de grupo](/pt-br/citsmart-platform-7/initial-settings/access-settings/user/group.html));
    
    2. Será apresentada a tela de Cadastro de Grupo. Caso o grupo já esteja registrado no sistema, realize a pesquisa do grupo e 
    selecione o mesmo. Feito isso, será exibida a tela de registro do determinado grupo;
    
    3. Clique no ícone de adicionar do campo Colaboradores, será exibida a tela para pesquisa de colaboradores;
    
    4. Realize a pesquisa do colaborador que deseja vincular ao grupo e selecione o mesmo. Após isso, o colaborador será 
    vinculado ao grupo conforme indicado no exemplo ilustrado na figura abaixo:
    
        ![Colaboradores](images/cola.img1.jpg)
        
        **Figura 1 - Tela de Colaboradores**
        
    5. Após o vínculo, clique no botão "Gravar" para efetuar a operação, neste caso a data, hora e usuário serão armazenados 
    automaticamente para uma futura auditoria.
    
!!! Question "[Eventos] Erro: "Falha ao tentar conectar à ferramenta de monitoração" para Zabixx"

    Verifique o contexto zabbix:
    
    Exemplo:
    
    O Evm procura o zabbix.
    
    O Zabbix precisa apontar para o contexto /zabbix.
    
    Veja também:
    
    - [Cadastro e pesquisa das ferramentas de monitoração de eventos](/pt-br/citsmart-platform-7/processes/event/event-monitoring-tools.html)
    
!!! Question "O arquivo de backup será sobrescrito ou terá um arquivo para cada dia?"

    Se a sua rotina for um backup por dia, vai ser criado um arquivo por dia, contendo no nome a data do respectivo arquivo.
    
!!! Question "O que é preciso para configurar um IC que está fisicamente na rede da empresa do cliente para ser inventariado pelo CITSmart Enterprise ITSM que está na cloud ofertada pela CITSmart Corporation?"

    [Original] Na cloud, o mongodb e evm/inv ficam na estrutura do cliente, devido não ser possível se conectar em um range 
    interno com origem da cloud.
    
    [Para validação] Neste cenário específico, os componentes MongoDB, CITSmart EVM e CITSmart Inventory devem ser instalados e 
    configurados dentro da estrutura de rede do cliente, pois não é possível ao CITSmart Enterprise ITSM (Cloud) se conectar a um 
    range interno de um cliente.
    
!!! Question "Para qual destinatário será feito envio de notificações de ICs?"

    As notificações de ICs serão enviadas para o destinatário definido na tela de Parâmetro do Citsmart.
    
    Para definir o destinatário, proceda conforme orientações abaixo:
    
    1. Acesse a funcionalidade de Parâmetros do Citsmart através da navegação no menu principal Parametrização > Parâmetros 
    Citsmart;
    
    2. Será apresentada a tela de Parâmetros do Citsmart, clique na aba Pesquisa de Parâmetros do Citsmart;
    
    3. Será apresenta a tela para pesquisa de parâmetros;
    
    4. Realize a pesquisa do parâmetro "90 - Envio de e-mails de Notificação de ICs (1-Grupo, 2-Proprietário, 3-Todos)";
    
    5. Selecione o mesmo;
    
    6. Será apresentada a tela de registro do parâmetro com o conteúdo referente ao registro selecionado, no campo valor, informe 
    o número de identificação do destinatário (1 - Grupo, 2 - Proprietário ou 3 - Todos);
    
    7. Clique no botão "Gravar" para efetuar a operação, neste caso a data, hora e usuário serão armazenados automaticamente para 
    uma futura auditoria;
    
    8. Após configuração do parâmetro, será realizado o envio de e-mails de notificações de ICs para o destinatário (grupo, 
    proprietário ou todos), conforme especificado no valor do parâmetro.
    
!!! Question "Por que a numeração de solicitação de serviço nem sempre seguirá uma ordem sequencial rigorosa/perfeita na tela de solicitação de serviços ou em alguns relatórios?"

    Tanto a tela de Solicitação de Serviços quanto em alguns relatórios (tais como "Qualidade de Atendimento - SLA"), a ordenação 
    do número das solicitações segue uma ordem sequencial crescente, exceto quando:
    
    1. Os relatórios agrupam os dados por algum critério especial (ex.: pelo prazo de SLA, que é o que acontece no caso do 
    relatório "Qualidade de Atendimento - SLA")
    
    2. Quando o recurso denominado Sequence Block é impactado por um fator externo, isso ocorre se:
    
    - Há uma parada da aplicação para atualização de versão, ou manutenção de ambiente e posterior retorno.
    - O ambiente é clusterizado.
    
!!! Question "Por que em alguns relatórios a mesma solicitação aparece mais de uma vez?"

    Em alguns relatórios como por exemplo o "Relatório Incidentes / Solicitações de Serviços - Detalhado", tanto no formato pdf 
    como no xls, pode existir sim a mesma solicitação mais de uma vez, contudo são detalhamentos distintos porque trata de cada 
    etapa da solicitação, então cada vez que ela "repete" é porque muda-se a tarefa, ou o responsável, ou a fase, ou a situação, 
    ou o grupo solucionador ou a data hora final de atendimento.
    
    Já em outros relatórios, tais como o "Relatório Incidentes / Solicitações de Serviços" não há detalhamento da solicitação de 
    acordo com as atividades e por isso não é mostrada a solicitação mais de uma vez.
    
!!! Question "Por que o resultado é "Relatório Vazio" ao gerar o relatorioControlePercentualQuantitativoSla selecionando no filtro a situação "em Andamento" e o "grupo solucionador"?"

    Não se trata de um erro, o campo de grupo solucionador é preenchido somente quando a solicitação é encerrada, isso faz com 
    que só traga resultados para as situações do tipo "Fechada", incompatível com o que se está pedindo/informando nos filtros.
    
!!! Question "Por que os horários criados pela ferramenta estão diferentes da hora atual?"

    *Cenário*
    
    1. Ao criar um chamado, a hora fica diferente da hora real, alternando entre 1 (uma) à 3 (três) horas de atraso ou 
    adiantamento.
    
    *O que verificar*
    
    1. Arquivo de configuração do Banco Postgresql:
    
        - Postgresql.conf
        - timezone = 'BRAZIL/EAST'
        
    2. No container cloud:
    
        - Configuração de timezone no sistema operacional.
        
    3. Configuração do TimeZone no JRE:
    
        - https://docs.oracle.com/javase/9/troubleshoot/time-zone-settings-jre.htm#JSTGD362
        
!!! Question "Quais as permissões necessárias na pasta de destino do backup da tabela Logdados?"

    A permissões na pasta devem ser de leitura e gravação para o usuário que o JBoss utiliza.
    
!!! Question "Quais o significado de cada status do inventário de ICs?"

    - **Inventariado**: o inventário conseguiu ler as informações do IC e se encerrou com sucesso;
    - **Ignorado**: na tela de citsmart/pages/evmInventoryConfiguracao/evmInventoryConfiguracao.load temos uma opção para ignorar 
    as máquinas já inventariadas, essa marcação aparece quando isso ocorre;
    - **Inacessível**: quando o servidor encontra o IC, mas não consegue trazer as informações;
    - **Não inventariado: quando nem encontra o IC na rede, mas tem conhecimento de que ele já existiu;
    - **Em execução**: durante a leitura do inventário, o IC fica nesse status.
    
!!! Question "Qual é o conjunto de scripts indicado para a exclusão completa de um portfólio?"

    Supondo que o número do Portfólio seja 1 apenas para exemplificar.
    
    DELETE FROM ocorrenciaservicocontrato osc WHERE osc.ID IN(
    SELECT osc.id from ocorrenciaservicocontrato osc
    INNER JOIN ocorrenciaservico os ON os.IDOCORRENCIASERVICO = osc.IDOCORRENCIASERVICO
    INNER JOIN servico s on s.idservico = os.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM ocorrenciaservicodetalhes osd WHERE osd.ID in (
    SELECT osd.ID FROM ocorrenciaservicodetalhes osd
    INNER JOIN ocorrenciaservico os ON os.IDOCORRENCIASERVICO = osd.IDOCORRENCIASERVICO
    INNER JOIN servico s on s.idservico = os.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM ocorrenciaservicorelacionado oscr WHERE oscr.ID IN( 
    SELECT oscr.ID FROM ocorrenciaservicorelacionado oscr
    INNER JOIN ocorrenciaservico os ON os.IDOCORRENCIASERVICO = oscr.IDOCORRENCIASERVICO
    INNER JOIN servico s on s.idservico = os.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM ocorrenciaservico os WHERE os.IDOCORRENCIASERVICO IN (
    SELECT os.IDOCORRENCIASERVICO FROM ocorrenciaservico os
    INNER JOIN servico s on s.idservico = os.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM avaliacaoservico avs WHERE avs.IDAVALIACAOSERVICO IN (
    SELECT avs.IDAVALIACAOSERVICO FROM avaliacaoservico avs
    INNER JOIN servico s on s.idservico = avs.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM acordoservicocontrato acsc WHERE acsc.IDACORDOSERVICOCONTRATO IN(
    SELECT acsc.IDACORDOSERVICOCONTRATO FROM acordoservicocontrato acsc
    INNER JOIN servicocontrato sc ON sc.IDSERVICOCONTRATO = acsc.IDSERVICOCONTRATO
    INNER JOIN servico s on s.idservico = sc.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM fluxoservico fs WHERE fs.idfluxoservico IN(
    SELECT fs.idfluxoservico FROM fluxoservico fs
    INNER JOIN servicocontrato sc ON sc.IDSERVICOCONTRATO = fs.IDSERVICOCONTRATO
    INNER JOIN servico s on s.idservico = sc.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM servicocontrato sc WHERE sc.IDSERVICOCONTRATO IN(
    SELECT sc.IDSERVICOCONTRATO FROM servicocontrato sc
    INNER JOIN servico s on s.idservico = sc.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM servicoautorelacionamento servauto WHERE servauto.IDSERVICOAUTORELACIONAMENTO IN(
    SELECT servauto.IDSERVICOAUTORELACIONAMENTO FROM servicoautorelacionamento servauto
    INNER JOIN servico s on s.idservico = servauto.idservico 
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM servico s WHERE s.idservico IN(
    SELECT s.idservico FROM servico s
    INNER JOIN portfolioservico p on p.idportfolioservico = s.idportfolioservico
    WHERE p.idportfolioservico = 2);
    
    DELETE FROM portfolioservico p WHERE p.idportfolioservico = 2;
    
!!! Question  "Qual é o conjunto de scripts indicado para limpar todos os dados de inventário e de itens de configuração?"

    1. update evm_gerente set iditemconfiguracaopai = null;
    2. update parametrocorpore set valor = 'NAME' where idparametrocorpore = 4;
    3. update recurso set iditemconfiguracao = null where iditemconfiguracao is not null;
    4. update evm_gerente set iditemconfiguracaopai = null
    5. delete from empregadoitemconfiguracao;
    6. delete from eventoitemconfiguracao;
    7. delete from historicotentativa;
    8. delete from justificacaofalha;
    9. delete from usuarioitemconfiguracao;
    10. delete from requisicaomudancaitemconfiguracao;
    11. delete from requisicaoliberacaoitemconfiguracao;
    12. delete from problemaitemconfiguracao;
    13. delete from conhecimentoic;
    14. delete from softwareslistanegraencontrados;
    15. delete from itemconfiguracaoevento;
    16. delete from itemcfgsolicitacaoserv;
    17. delete from imagemitemconfiguracao;
    18. delete from auditoriaitemconfig;
    19. delete from historicovalor;
    20. delete from historicoic;
    21. delete from valor;
    22. delete from caracteristica;
    23. delete from tipoitemcfgcaracteristica;
    24. delete from tipoitemconfiguracao;
    25. delete from itemconfiguracao;
    
!!! Question "Qual o limite de tamanho de arquivo para upload nas funcionalidades com este recurso?"

    O upload dos anexos especifica o tamanho limite de 15 Mbytes para cada arquivo carregado no sistema. Porém, na tela do Portal 
    continua com o limite de 5 Mbytes para o tamanho do arquivo.
    
!!! Question "Qual o significado de cada privacidade que um conhecimento pode ter na base de conhecimento?"

    - **Público**: todos os usuários com acesso no Portal do Conhecimento possuem acesso, independente se têm acesso à pasta do 
    conhecimento;
    - **Confidencial**: somente o autor e o aprovador podem visualizar o conhecimento;
    - **Interno**: somente pessoas com permissão na pasta do conhecimento podem visualizar.
    
!!! Question "Quando ocorre a limpeza dos dados da tabela Logdados?"

    A rotina de backup da tabela LogDados retira os dados da tabela e salva em arquivo, ou seja, a tabela fica limpa após o 
    processamento.
    
!!! Question "Quando ocorre a sincronização dos dados com o LDAP?"

    O sistema sincroniza os dados das credenciais de seus usuários com o LDAP em três situações distintas:
    
    1. Na ativação da aplicação, geralmente em sequência ao procedimento de atualização de versão do produto;
    
    2. Quando o usuário faz o logon (o acesso ao sistema com seu login e senha), nesse momento o sistema automaticamente verifica 
    a autenticação e permissão do usuário;
    
    3. Na funcionalidade Configuração de LDAP, quando o usuário clica na opção 'Sincronizar'.
    
!!! Question "[Ticket/Tarefa] Erro: horário de cadastro de ticket/tarefa diferente de um servidor"

    *Descrição*:
    
    O cliente informa que o horário da criação de um chamado está com o horário diferente de um servidor.
    
    *Solução/Resposta*:
    
    Para verificar a hora que está no banco de dados, siga os seguintes passos:
    
    1. Acesse a funcionalidade de execução de scripts através da navegação no menu principal Sistema > Banco de Dados > Execução 
    de Scripts.;
    
    2. Será apresentada a tela de Cadastro de Scripts;
    
    3. Inserir no campo SQL Query a seguinte consulta: SELECT CURRENT_TIMESTAMP ;
    
    4. Clique em Executar;
    
    5. O sistema retorna os seguintes resultados:
    
        - Primeiro o resultado da data e hora do banco de dados;
        - Segundo o horário do Servidor.
        
    6. Verifique as horas e se elas não baterem com a hora atual de sua localização abra um chamado com essas evidências à 
    Infraestrutura.
    
!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>07/31/2019 - Larissa Lourenço
    

[2]:/pt-br/citsmart-platform-7/processes/portfolio-and-catalog/configure-service-attribute.html

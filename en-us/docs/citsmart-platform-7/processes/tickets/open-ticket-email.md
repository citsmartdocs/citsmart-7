title: Steps for automatic opening of service request via e-mail
Description: This knowledge aims to guide the automatic opening of service
request via e-mail, speeding up the process of opening Service Requests received
by the user.

# Steps for automatic opening of service request via e-mail

This knowledge aims to guide the automatic opening of service request via
e-mail, speeding up the process of opening Service Requests received by the
user.

![figure](images/open-ticket.png)

**Figure 1 - SOP diagram for automatic opening of service request via e-mail**

Preconditions
-------------

1.  The service must have a Time Type SLA assigned to it.

Details of activities
---------------------

### Automatic actions - Incidents/requests/procedures actions

1.  Automatic Actions - Incidents/Requests/Procedures Template registration
    because it will be used as a template for the opening of the service request
    (see knowledge [Automatic actions registration and search][1]).

### Perform e-mail settings

1.  Perform e-mail settings, this register will be used to link the registered
    template (see knowledge [Automatic Actions via E-mail setup guide][2]).

### Configure the bacth processing

1.  Realize the Batch processing configuration (see knowledge [Batch
    processing registration and search][3]);

2.  This register informs every time the system will read the e-mails.

!!! note "NOTE"

    It is necessary to put in the Content field the following information
    'br.com.centralit.citcorpore.quartz.job.JobConfiguracaoAberturaAutomaticaViaE-mail'
    (without quotes). This is the command that executes the desired Job for the
    Automatic Opening action via E-mail.

Additional information
----------------------

1.  After the configuration is completed, the system will fire the Job at the
    desired time;

2.  The e-mails that are in the box without a reading mark will be read, and
    from them will be opened Service Requests;

3.  The system automatically marks the e-mail as read so there is no duplication
    of registration (see knowledge [Rules for automatic opening of service
    request via e-mail][4]);

4.  If the system identifies that the employee is a system user, through the
    sender's e-mail and the user is in a group linked to the same contract that
    the template was created Automatic Actions - Incidents/Requests/Procedures),
    then the service request will be created with the requestor of the e-mail;

5.  If the system does not identify the requestor, then the system will assign
    the service request to the user entered in the Incident/Request/Procedure
    Automatic Action register.


[1]:/en-us/citsmart-platform-7/plataform-administration/configuring-automatic-actions/automatic-actions.html
[2]:/en-us/citsmart-platform-7/plataform-administration/configuring-automatic-actions/automatic-action-email.html
[3]:/en-us/citsmart-platform-7/plataform-administration/configuring-automatic-actions/batch-processing.html
[4]:/en-us/citsmart-platform-7/processes/tickets/rules-open-ticket.html


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>07/12/2019 – Anna Martins

title: Service request template registration and search
Description: This functionality is intended to create a visual presentation of a service request.
# Service request template registration and search

This functionality is intended to create a visual presentation of a service request.

How to access
--------------------

1. Access the Service Request Template functionality by navigating the main menu **System > Service Request Template**.

Filters
---------

1. The following filter enables the user to restrict the participation of items in the 
standard feature listing, making it easier to find the desired items:

    - Identification of Service Template Request;
    - Name of Service Template Request.
    
    
    **Figure 1 - Template search**
    
2. Perform the template search by typing the name or ID of the template desired;

3. The functionality screen in its initial state lists the service request templates 
already registered.

Items list
--------------------

1.The following cadastral fields are available to the user to facilitate the identification of the desired items in the standard feature 
listing: **ID, Identification os Service Template Request** and **Name Service Template Request**.

2. There are action buttons available to the user for each item in the listing, they are: *Edit* and *Delete*.

    
    **Figure 2 - Notification template listing screen**
    
3. To change the service request template record data, simply click the Edit button 
and modify the desired information and click the *Save* button.

Filling in the registration fields
-------------------------------------

1. By clicking on the *New* button (according to the previous figure), the **Service 
Request Template Registration** screen will be displayed, as shown in the figure 
below:

    
    **Figure 3 - Template master screen**
    
2. Fill in the fields as directed below:

    - **Template Type**: inform the service request template type:
        - **JSP**: when selecting this option, new fields of entries must be filled 
        in. They are:
        - **Quiz**: when selecting this option, new registration options can be 
        chosen. They are:
        - **Neuro**: when selecting this option, the Neuro form and Neuro page fields 
        are made available to perform the desired linking. It is also possible to 
        choose the version of the form by clicking the Specific version of the form 
        button;
        
3. Click on the *Save* button to register, in this case the date, time and user will 
be stored automatically for a future audit;

4. To return to the search screen, click *Search*.

JSP type template
---------------------

This feature allows the customization of the services screen with reference, mainly, 
to the purchases and travels management. Within the JSP type there are subtypes 
previously registered. The utility of this type of template is only observed in 
versions previous to 7.2.3.9.

!!! warning "WARNING"

    This template class should be handled by an analyst who has knowledge of JAVA 
    programming.
    
Preconditions
--------------

1. Not applicable.

Filling in the registration fields
-------------------------------------

1. In the **Template Type** field, by selecting the **JSP** option, the following 
screen will be available:

    
    **Figure 4 - JSP type template**
    
2. Fill in the fields as directed below:

    - **Identification of Service Template Request**: inform the service request 
    template identification (identification name does not allow spacing);
    - **Name of Service Template Request**: inform the service request template name 
    (template name allows spacing);
    - **DTO Class Name**: inform the DTO class name;
    - **Action Class Name**: inform the Action class name;
    - **Service Class Name**: inform the Service class name;
    - **URL recovery**: inform the URL recovery;
    - **Approval: check this option when registering service request template that 
    requires approvals from higher instances;
    - **Enables targeting**: enables functionality for targeting a ticket for a 
    specific group;
    - **Enables situation**: enables the choice of the a ticket status in the service 
    request screen (Registered; Solved and Canceled);
    - **Enables configuration item**: enables the functionality of linking a 
    configuration item to the ticket in the service request management screen;
    - **Enables change**: enables the functionality of linking a change to the ticket 
    in the service request management screen;
    - **Enables problem**: enables the functionality of linking a problem to the 
    ticket on the service request management screen;
    - **Enable solution**: enables the solution response field to the resolved service 
    request;
    - **Enables related service request**: enables the functionality of linking a 
    request related to the ticket in the ticket management screen;
    - **Enables record and continue button**: enable the "Save and forward the flow" 
    button  located in the lower right corner of the service request management 
    screen.
    
    !!! info "IMPORTANT"
    
        The "enable" fields are selected by default.
        
3. Click on the *Save* button to register, in this case the date, time and user will 
be stored automatically for a future audit;

4. To return to the search screen, click *Search*.

Quiz type template
-------------------------------

Preconditions
---------------

1. Have at least one registered questionnaire (see knowledge [Questionnaires registration and search](/en-us/citsmart-platform-7/plataform-administration/questionnaires/questionnaires-management/register-questionnaire.html)).

Filling in the registration fields
------------------------------------

1. In the **Template Type** field, by selecting the **Quiz** option, the following 
screen will be available:

    
    **Figure 5 - Questionnaire type template**
    
2. Fill in the fields as directed below:

    - **Identification of Service Template Request**: inform the service request 
    template identification;
    - **Name of Service Template Request**: inform the service request template name;
    - **Questionnaire**: inform the questionnaire to be linked to the service request template;
    
    !!! note "NOTE"
    
        Tthe fields described below are selected by default, with the exception of the 
        approval field.
        
    - **Enable edit questionnaire**: allows the questionnaire to be edited on the 
    ticket registration home screen;
    
    !!! info "IMPORTANT"
    
        Even if the "Enable edit questionnaire" option is disabled, this edition will 
        be possible when the ticket registration occurs.
        
    - **Approval**: check this option when registering service request template that 
    requires approvals from higher instances;
    
    !!! warning "WARNING"
    
        There are two approval functions that can be configured on the service request 
        template or flow maintenance screen. As a rule, for the system only the 
        settings made on the flow screen will be valid.
        
    !!! info "IMPORTANT"
    
        The approval function on the service request template screen is only valid if 
        linked to the registration of a JSP form in the older models of the system.
        
    - **Enables targeting**: enables functionality for targeting a ticket for a 
    specific group;
    - **Enables situation**: enables the choice of the a ticket status in the service 
    request screen (Registered; Solved and Canceled);
    - **Enables configuration item**: enables the functionality of linking a 
    configuration item to the ticket in the service request management screen;
    - **Enables change**: enables the functionality of linking a change to the ticket 
    in the service request management screen;
    - **Enables problem**: enables the functionality of linking a problem to the 
    ticket on the service request management screen;
    - **Enable solution**: enables the solution response field to the resolved service 
    request;
    - **Enables related service request**: enables the functionality of linking a 
    request related to the ticket in the ticket management screen;
    - **Enables record and continue button**: enable the "Save and forward the flow" 
    button  located in the lower right corner of the service request management 
    screen.
    
    !!! note "NOTE"
    
        The fields above, although selected by default, will not be available at the 
        time of ticket creation. This visualization will take place with the 
        registration execution.
        
    !!! note "NOTE"
    
        At the time of the ticket registration that has a standard type form, will be 
        available in the button (located in the upper left corner) only the 
        functionalities: Applicant's CI, Attachments, Calendar, Release, Project, 
        Knowledge and E-mails.
        
    !!! info "IMPORTANT"
    
        All the enabling features that are presented in both the service request 
        template and the flow maintenance screen will only be valid for the configured 
        configurations on the flow screen, since the first one is a complement of the 
        second one.
        
    !!! warning "WARNING"
    
        If the service request template is linked only to portfolio activities the 
        system will assume that the form is standard, therefore, will not meet the 
        template's rules (enabling or not enabling the functionality) .
        
    !!! info "IMPORTANT"
    
        For the reclassification rule where the questionnaire or Neuro type service 
        template has to be presented for the user response, it is necessary that the 
        template or form is linked to the service request template concomitantly with 

Neuro type template
------------------------

Preconditions
---------------

1. Have at least one registered Neuro type form (see knowledges Form and Form page).

Filling in the registration fields
------------------------------------

1. In the **Template Type** field, by selecting the **Neuro** option, the following 
screen will be available:

     
    **Figure 6 - Neuro type template**
    
2. Fill in the fields as directed below:

    - **Identification of Service Template Request**: inform the service request 
    template identification;
    - **Name of Service Template Request**: inform the service request template name;
    - **Neuro form**: inform the form to be linked to the service request template. It 
    is an autocomplete field;
    - **Allows to change data**: enables editing of the neuro form on the ticket 
    management screen. This marking complements the screen modification configuration 
    performed at the flow interface;
    - **Enables targeting**: enables functionality for targeting a ticket for a 
    specific group;
    - **Enables situation**: enables the choice of the a ticket status in the service 
    request screen (Registered; Solved and Canceled);
    - **Enables configuration item**: enables the functionality of linking a 
    configuration item to the ticket in the service request management screen;
    - **Enables change**: enables the functionality of linking a change to the ticket 
    in the service request management screen;
    - **Enables problem**: enables the functionality of linking a problem to the 
    ticket on the service request management screen;
    - **Enable solution**: enables the solution response field to the resolved service 
    request;
    - **Enables related service request**: enables the functionality of linking a 
    request related to the ticket in the ticket management screen;
    - **Enables record and continue button**: enable the "Save and forward the flow" 
    button  located in the lower right corner of the service request management 
    screen.
    
    !!! warning "WARNING"
    
        The template rules of the Questionnaire type are valid for the Neuro type template.
        
See also
--------------

- [Workflow maintenance](/en-us/citsmart-platform-7/workflow/workflow-management.html);

- [Service activity registration](/en-us/citsmart-platform-7/processes/portfolio-and-catalog/activity.html).

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>09/05/2019 – Larissa Lourenço

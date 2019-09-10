title: Daily routes configuration
Description: This functionality is intended to configure the daily schedule of field technicians. After configuration, the technician will have a list of requests that will be answered by him via Mobile.

# Daily routes configuration

This functionality is intended to configure the daily schedule of field
technicians. After configuration, the technician will have a list of requests
that will be answered by him via Mobile.

How to access
-------------

1.  Access the Daily Routes Configuration feature by navigating the main
    menu **Integrated Management > Workforce Management > Daily Routes
    Management**.

Preconditions
-------------

1.  Configure the system connection with the Google APIs (see
    knowledge [CITSmart Enterprise ITSM server configuration manual for use of
    APP (iOS and Android)][1])- sections 5 to 7)

Filters
-------

1.  The following filter enables the user to restrict the participation of items
    in the standard feature listing, making it easier to find the desired items:

-   **Technician**: inform the name of the technician responsible for service
    requests;

-   **Opening Period**: inform the opening period of service requests;

-   **State**: inform the state of the unit of the service request;

-   **City**: inform the city of the unit of the service request;

-   **Contract**: inform the contract of the service request;

-   **Unit**: inform the business unit of the service request contract;

-   **Location**: inform the locality of the unit;

-   **Type**: enter the type of service request you want to check.

![Criar](images/history-1.png)

**Figure 1 - Route search screen**

Items list
----------

1.  No applicable.

Filling in the registration fields
----------------------------------

1.  No applicable.

Route settings
--------------

1.  The **Routes Configuration** screen will be displayed, as shown in the
    following figure. In this screen, it allows to perform the search of
    requests according to the filters informed, that is, according to their
    need, in order to direct the open requests to be answered by the field
    technician:

![Criar](images/history-2.png)

**Figure 2 - Route configuration screen**

2.  Set the filters as you need them:

3.  After the filters are set to search for service requests, click
    the *Search* button. The requests will be presented, which the technician is
    allowed to execute, with the following situation:

-   **Unattended** : request that was directed to a technician attending and is
    available for service.

-   **In Service** : request that is in progress, that is, that is being
    answered by the technician;

-   **Attendance with Pending** : request that is suspended.

![Criar](images/history-3.png)

**Figure 3 - Service requests**

4.  Direct the service request available to the technician to perform the
    service;

-   If you need to view the details of a service request, click on the service
    number;

-   Select the request that will be answered by the technician;

-   Inform the priority of the attendance of the service request;

-   In the **Execution Date** field, enter the expected date of execution of the
    request;

-   After selecting the request, the map marker of the route that the technician
    will follow will be displayed on the map.

![Criar](images/history-5.png)

**Figure 4 - Service requests**

   !!! note "NOTE"

      Clicking the route marker on the map will display the service request
      information.

5.  Click the *Save* button to perform the operation, where the date, time and
    user will be saved automatically for a future audit.

!!! info "IMPORTANT"

    After the recording, a notification will be sent to the technician, where
    the technician can verify the request that will be answered by the CITSmart
    Enterprise ITSM Mobile application.


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>09/10/2019 – Anna Martins

[1]:/pt-br/citsmart-platform-7/additional-features/mobile-and-field-service/configuration/app-android-ios.html

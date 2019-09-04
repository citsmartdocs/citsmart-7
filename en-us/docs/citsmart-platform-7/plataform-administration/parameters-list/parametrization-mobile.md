title: Parameterization rules - mobile
Description: Parameterization rules - mobile
# Parameterization rules - mobile

Follow the instructions below:

1. Access the feature by browsing the main menu;

2. Position the mouse in the **Parameterization**;

3. Click the **Mobile** option;

4. A list of parameters to be configured is displayed, set the parameter values (attributes);

5. Click the Save button to perform the operation, where the date, time and user are automatically saved for a future audit.

| #   | Name                                                                                                                             | Possible Values     | Goal                                                                                                                                                                                                                                                         | Additional Guidance |
|-----|----------------------------------------------------------------------------------------------------------------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| 255 | Attendant Mobile Action/ View Field - (Default: 30)                                                                              |                     | Define the range of action of an attendant, used in APP mobile. Define the maximum radius of attendance for requests that are in the "Unaddressed" situation.                                                                                                | Not applicable      |
| 256 | Interval (in minutes) of time to report to the attendant position - (Default: 10)                                                |                     | Define the interval that the Mobile application should report to the server the geographic positioning of the attendant.                                                                                                                                     | Not applicable      |
| 257 | The page size for REST services return paged (Default: 10)                                                                       |                     | Define the amount of records returned in the list services consumed by Mobile.                                                                                                                                                                               | Not applicable      |
| 258 | Maximum Days Interval to search (Default: 30)                                                                                    |                     | Define maximum query range restriction on the screens, initially used in service force management.                                                                                                                                                           | Not applicable      |
| 267 | Size of page to return in REST V1 mobile services (Default: 200)                                                                 |                     | Set the page size to return in REST services.                                                                                                                                                                                                                | Not applicable      |
| 272 | Define if only the requests without responsible will be notified on CITSmart Mobile. Values: "Y" (Yes) or "N" (No). Default: "N" | Y or N (Default: N) | Define which requests can be notified to the user. If the value of the parameter is "Y", only the notifications of requests without current caller will be displayed. If the value of the parameter is "N", notifications of all requests will be displayed. | Not applicable      |
| 284 | Default contract's ID to new incidents/requests in CITSmart Mobile.                                                              |                     | Enter the identification number (ID) of the contract to perform the opening of service requests via mobile.                                                                                                                                                  | Not applicable      |
| 285 | Default service's ID to service requests and incidents in CITSmart Mobile.                                                       |                     | Enter the service identification number (ID) that will be the default for registration of service requests via mobile.                                                                                                                                       | Not applicable      |
| 286 | Default origin's ID to service requests ans incidents in CITSmart Mobile.                                                        |                     | Enter the identification number (ID) of the default source to open the mobile service request.                                                                                                                                                               | Not applicable      |
| 350 | Enables sending notification for mobile devices                                                                                  |                     | Allows you control whether system notifications will be sent to mobile devices (general).                                                                                                                                                                    | Not applicable      |
| 352 | Enables sending notifications for mobile devices during request creation                                                         |                     | Allows you control whether system notifications will be sent to mobile devices (request creation).                                                                                                                                                           | Not applicable      |
| 353 | Enables sending notifications for mobile devices during updating requests, reporting close attendances                           |                     | Allows you control whether system notifications will be sent to mobile devices (updating requests, reporting close attendances).                                                                                                                             | Not applicable      |

**Table 1 - List of Parameters** 

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>09/04/2019 – Larissa Lourenço
    
    

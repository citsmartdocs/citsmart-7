title: CITSmart Enterprise ITSM server configuration manual for use os app (iOS and Android)
Description: This document is intended to provide guidance for configuring the server for using CITSmart ITSM Enterprise mobile application (iOS and Android plataform).

# CITSmart Enterprise ITSM server configuration manual for use os app (iOS and Android)

This document is intended to provide guidance for configuring the server for
using CITSmart ITSM Enterprise mobile application (iOS and Android plataform).

Valid procedures for iOS and Android
------------------------------------

Preconditions
-------------

1.  Deploy **CITSmart Enterprise Web** in version 7.2.2.0 or higher;

2.  Setup the parameter 257 - for return on paged REST services: set the amount
    of records returned in list services concatenated by Mobile (see
    knowledge [Parameterization rules - Mobile][1]);

3.  Setup the parameter 272 - determines whether to notify only requests
    that are not responsible for CITSmart ITSM Enterprise:

     -  Values: "Y" or "N" Default: "N";

     -  If the value of the parameter is "Y", only notifications of requests without
    a current controller can be shown;

     -  If the value of the parameter is "N", notifications of all the requests can
    be shown;

4.  Setup the parameter 255 - Radius of Action / Display of the attendant in
    Mobile: define the radius of action of an attendant;

5.  Setup the parameter 256 - Interval (in minutes) of Attendant position
    report time:  set the interval that the Mobile application should report
    to the server the geographic positioning of the attendant;

6.  Configure parameter 258 - Maximum Days Interval to search (Default: 30);

7.  Configure parameter 267 - Size of page to return in REST V1 mobile services
    (Default: 200);

8.  Setup the parameter 284 - ID of the default agreement for creating new
    incidents / Requests :  enter the contract ID to initiate service
    requests;

9.  Setup the parameter 285 - default service ID parameter for service
    requests and incidents creation :  Enter the service ID that will be the
    default for service request registration;

10.  Setup the parameter 286 - default Source ID for service requests and
    incidents creation: Enter the default source ID to open service request;

11.  Configure parameter 350 - Enable sending notifications to mobile phones (No
    default).

12.  Setup the parameter 254 - Google Services API Key: inform the key API to
    use Google's MAPS services (see knowledge [Parameterization rules -
    system][2]).

Configuring web services
------------------------

Configure CITSmart Enterprise Web Services to access the functionality of the
CITSmart ITSM Enterprise application.

1.  On CITSmart Enterprise Web, access the Web Services feature for the mobile
    (System > Settings > Citsmart Mobile Web Service);

2.  Click on the "Link Groups" tab and link the activity executing group to the
    CITSmart ITSM Enterprise Web Services.

!!! note "NOTE"

    In the time the group is selected, it will be linked to all CITSmart ITSM
    Enterprise Web Services in an automated way.

Installing Globalsign intermediate certificate
----------------------------------------------

In order to recognize the intermediate certificate of the GlobalSign (Digital
Certification Issuer), it must be installed. Follow the procedures below:

1.  Access address: <https://support.globalsign.com/customer/portal/articles/1464460-domainssl-intermediate-certificates> ;

2.  Download the first certificate, as shown in the figure below:

![Criar](images/android-ios-1.jpg)

**Figure 1 - GlobalSign intermediate certificate**

-  **On mobile**: you will be asked to install the certificate, just enter the
    generic name (suggestion: GlobalSign) and click on forward.

-  **In desktop**: right-click the downloaded certificate (as shown below),
    click on install certificate, and proceed to finish.

![Criar](images/android-ios-2.jpg)

**Figure 2 - Certificate installation on desktop**

3.  Once installed, simply change the application's address to
    “<https://citsmart.centralit.com.br/citsmart>”.

Valid procedures for Android only
---------------------------------

Android app installation
------------------------

1.  Go to Google Play (Play Store) to download the Citsmart Enterprise Mobile
    application;

2.  Search for Citsmart Enterprise and after the search, select the application;

3.  Press the *Install* button to download the application.

Creating key for use and consumption of Google APIs
---------------------------------------------------

In order for the use and consumption of the Google APIs to be possible, a Key
API must be created. For this, the following steps must be followed:

!!! warning "ATTENTION"

    To peform these procedures, you must be logged in with a Google account.

1.  Go to the Google Developer
    Console [https://console.developers.google.com](https://console.developers.google.com/);

2.  Click *Create project*, as shown in the figure below:

![Criar](images/android-ios-3.jpg)

**Figure 3 - Google developer console**

3.  A window will appear, as shown in the figure below, to inform the data of
    the new project;

![Criar](images/android-ios-4.jpg)

**Figure 4 - Project creation screen**

4.  Enter the name of the project and click the Create button to create the
    project.

5.  After creating the project, click APIs and Services. To create the API Key,
    click APIs and Services > Credentials > Create Credentials > API Key, as
    shown in the figure below:

![Criar](images/android-ios-5.jpg)

**Figure 5 - API Key creation screen**

6.  Once this is done, the API key will be displayed:

![Criar](images/android-ios-6.jpg)

**Figure 6 - API Key options screen for creation**

7.  Choose the men option that best suits you. For more information on which key
    will answer you, go
    to [https://developers.google.com/console/help/new/\#generatingdevkeys](http://developers.google.com/console/help/new/#generatingdevkeys)

8.  After the keys are created, the APIs can already be consumed.

### APIs to be used in the solutions

Below are the Google APIs to consider in the solutions:

![Criar](images/android-ios-7.jpg)

**Figure 7 - APIs**

-   **Directions API**: The Google Directions API is consumed through HTTP
    requests. This API calculates directions between two points informed, the
    source and the destination, having several other options.

    -   For more information about using this API,
        access: <https://developers.google.com/maps/documentation/directions>.

-   **Distance Matrix API**: The Google Distance Matrix API allows the retrieval
    of arrays of distances between two points, that is, returns approximate
    result as well. The difference for the Google Directions API is that the
    Distance Matrix does not return such detailed information as the steps to be
    performed.

    -   For more information about using this API,
        access: <https://developers.google.com/maps/documentation/distancematrix>.

-   **Geocoding API**: The Google geocoding API is an API that helps you
    retrieve geographic positions by sending an extended address as an argument.
    The consumption of the API is done by HTTP and the results can be obtained
    in XML or JSON.

    -   For more information about using this API,
        access: <https://developers.google.com/maps/documentation/geocoding>.

-   **Statics Maps API**: The Google Static Maps API will be used in cases where
    interaction will not be required as a map, only view. It is interesting to
    use since it is lighter, since it is not necessary to download JS resource
    and images that will not be used.

    -   For more information about using this API,
        access: <https://developers.google.com/maps/documentation/staticmaps>.

-   **Google Maps JavaScript API**: The use of the API is done through a JS API.
    For your use, simply link to JS on the page that will use the maps.

    -   For more information about using this API,
        access: <https://developers.google.com/maps/documentation/javascript>

Activating an API
-----------------

To enable an API for use, proceed as described below:

1.  After performing the steps described in the section 'Creating key for use
    and consumption of Google APIs';

2.  Click APIs and Services > Enable APIs and Services, as shown in the figure
    below:

![Criar](images/android-ios-8.jpg)

**Figure 8 - Google APIs**

3.  The API library will be displayed. Select the API you want to enable (the
    figure below represents an example of API) and click the Activate API button
    as indicated in the figure below:

![Criar](images/android-ios-9.jpg)

**Figure 9 - Google APIs activation**

4.  Once this is done, the API will be enabled for use.

Using the application
---------------------

-   [CITSmart Enterprise ITSM Mobile Application user guide (Android)][3];

-   [CITSmart Enterprise ITSM Mobile Application user guide (iOS)][4].


[1]:/en-us/citsmart-platform-7/plataform-administration/parameters-list/parametrization-mobile.html
[2]:/en-us/citsmart-platform-7/plataform-administration/parameters-list/parametrization-system.html
[3]:/en-us/citsmart-platform-7/additional-features/mobile-and-field-service/apps/android.html
[4]:/en-us/citsmart-platform-7/additional-features/mobile-and-field-service/apps/ios.html


!!! tip "About"

    <b>Product/Version:</b> CITSmart | 8.00 &nbsp;&nbsp;
    <b>Updated:</b>09/10/2019 – Anna Martins


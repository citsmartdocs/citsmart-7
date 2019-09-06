title: Unit registration and search
Description: The goal of this feature is to register the units where the staff members are located.
# Unit registration and search

The goal of this feature is to register the units where the staff members are located.

How to access
-------------------

1. Access the unit feature navigating through the main menu 
**General Registration > Staff Management > Unit**.

Preconditions
----------------

1. Enter the content below into the parameter (see knowledge [Parameterization rules - system)](/en-us/citsmart-platform-7/plataform-administration/parameters-list/parametrization-system.html)):

    - Parameter 254 : "API Key to use Google services" with the "AIzaSyBuu_v0DeKsL1w-2FY6E-PZHYsw6ghuKJY".
    
2. Perform the country load (see knowledge [Country loading](/en-us/citsmart-platform-7/plataform-administration/region-and-language/load-countries.html)).

Filters
----------

1. OThe following filter enables the user to restrict the participation of items in 
the standard feature listing, making it easier to find the desired items:

    - Name.
    
    ![Search](images/unit.img1.jpg)
    
    **Figure 1 - Unit search screen**
    
2. Conduct a unit search:

    - Informe o nome da unidade que deseja pesquisar e Insert the name of the intended 
    unit and click on the *Search* button. Afterwards, the unit entry will be 
    displayed according to the description provided.
  
    - To list all units, just click directly on the Search button, if needed.
    
Items list
-------------------

1. The following cadastral field is available to the user to facilitate the identification of the desired items in the standard feature listing: **Name**.

    ![Listing](images/unit.img2.jpg)
    
    **Figure 2 - Unit listing screen**
    
2. After searching, select the intended entry. Afterwards, they will be redirected to 
the registry screen displaying the content belonging to the selected entry.

3. To edit a unit entry, just modify the information on the intended fields and click 
on the *Save* button to confirm the changes to the database, at which date, time and 
user will be stored automatically for a future audit.

Filling in the registration fields
------------------------------------

1. The **Register Unit** screen will be displayed, as illustrated on the image below:

    ![Cadastro](images/uni-img3.jpg)
    
    **Figure 3 - Unit entry screen**
    
2. Fill out the fields as instructed below:

    - **Name**: insert the name of the business unit;
    - **Initials**: inform the acronym that will refer to the unit registered;
    - **Unit**: select a unit, if the unit being registered is part of another unit that already has been registered;
    - **Accept Product Delivery**: check this box if the unit accepts product deliveries;
    - **E-mail**: insert the business unit's e-mail;
    - **Calendar**: insert the calendar of the business unit;
    - **Group**: inform to which group the registered unit will be linked;
    - **Description**: describe the details of the business unit;
    
3. Insert the address information of the business unit:

    - **Country**: select the country where the unit is located;
    - **State/Province**: insert the state, that is, the province where the unit being registered is located
    - **City**: insert the city where the unit is located;
    - **Street Address**: insert the address, i.e.: street/avenue names;
    - **Zip Code**: insert the zip code;
    
    !!! note "NOTE"
    
        The Latitude and Longitude fields will be searched only when the Zip Code field is already filled.
        
    - **Number**: insert the number of the address;
    - **Address Complement**: insert the complement of the address;
    - **Latitude**: the system will fill in the field with the coordinates after city choice;
    - **Longitude**: the system will fill in the field with the coordinates after city choice.
    
4. After filling out the fields above, click on the *Get Coordinates* button to view the geographical coordinates (Latitude and 
Longitude) and the map.

    - **Access To The Contracts**: select which contracts the unit being registered will have access to. Remember, this field will 
    only be displayed if the parameter "**61** - Link contract to units (e.g. Y or N)" has been activated, that is, configured with 
    a "Y" value (see know ledge [Parameterization rules - request and incident][1]);
    - The *Service* button is available when the parameter "**40** - Control service catalog access per unit ( e.g. Y or N )" has 
    been activated, that is, configured with a "Y" value. The feature of this button is to add services to the unit (see knowledge 
    [Parameterization rules - request and incident][2]);
    - **Location**: add the location of the business unit. Click on the ![symbol](images/simb-plus.jpg) icon to add the location to 
    the unit. If the intended location cannot be found, it is possible to create a quick entry through the same screnn, just click 
    on the ![symbol](images/simb-sheet.jpg) icon; Remember, this field is only available if the "115 - Remove link Between Unit and 
    Physical Location. (e.g. : Y or N - Default : 'N')" parameter has been disabled, that is, configured with a "N" value (see 
    knowledge [Parameterization rules - request and incident][3]).
    
5. Click on the *Save* the button to confirm the entry, at which date, time and user will automatically be stored for a future 
audit.

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>09/06/2019 - Larissa Lourenço
    
[1]:/en-us/citsmart-platform-7/plataform-administration/parameters-list/parametrizaion-ticket.html

[2]:/en-us/citsmart-platform-7/plataform-administration/parameters-list/parametrizaion-ticket.html

[3]:/en-us/citsmart-platform-7/plataform-administration/parameters-list/parametrizaion-ticket.html

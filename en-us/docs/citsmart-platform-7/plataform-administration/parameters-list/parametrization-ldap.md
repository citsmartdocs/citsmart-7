title: Parameterization rules - LDAP
Description: Unlike other product parameters, this configuration of parameters connected to LDAP integration occurs implicitly using. 
# Parameterization rules - LDAP

Unlike other product parameters, this configuration of parameters connected to LDAP 
integration occurs implicitly using the **LDAP Configuration** menu option or explicitly 
using the **CITSmart's Parameters** menu option (both under **Parameterization** menu 
option):

| #  | Name                                                                             | Possible values | Goal                                                                                        | Additional Guidance                                                                                                                                                                                                                                                                             |
|----|----------------------------------------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 22 | Authentication Method ( 1 - Day 2 - LDAP ) (e.g.: 1)                             | E.g.: 1         | Define which authentication method will be used in the system: 1 (Own) or 2 (LDAP)          | If the LDAP authentication method is changed from 1 (Proper) to LDAP, then there must be a synchronization between LDAP and Citsmart, at that time it is common to have duplication of employees and users in the database, which can cause authentication problems and access profile          |
| 39 | Id access profile that will be set automatically if the user does not have any . | E.g.: 2         | Enter the default Access Profile ID for the user                                            | When registering a user and if the access profile is not informed, when the user logs into the application, the access profile (defined in the parameter value) will be established. This rule applies to users imported from AD. This Access Profile ID is set in the "Access Profile" screen. |
| 45 | Standard Group ID                                                                |                 | Enter the identification number (ID) of the default group to which AD users are associated. | This group ID is set on the "Group Registration" screen.                                                                                                                                                                                                                                        |
| 68 | Inactive                                                                         | Inactive        | Inactive                                                                                    | Inactive                                                                                                                                                                                                                                                                                        |

**Table 1 - List of Parameters**

See also
------------

- [LDAP connections registration and search](/en-us/citsmart-platform-7/plataform-administration/authentication/ldap.html).

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>09/04/2019 - Larissa Lourenço

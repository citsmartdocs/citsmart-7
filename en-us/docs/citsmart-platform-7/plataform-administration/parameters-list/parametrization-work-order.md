title: Parameterization rules - service order (SO)
Description: Parameterization rules - service order (SO)
# Parameterization rules - service order (SO)

Follow the instructions below:

1. Access the feature by browsing the main menu;

2. Position the mouse in the **Parameterization**;

3. CClick the **Service Order (SO)**;

4. A list of parameters to be configured is displayed, set the parameter values (attributes);

5. Click the *Save* button to perform the operation, where the date, time and user are automatically saved for a future audit. 

| #   | Name                                                                        | Possible values     | Goal                                                                                                                                                                                                                                                                                                                                                              | Additional Guidance                                                                                                                              |
|-----|-----------------------------------------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 51  | FORMULA disallowance OS - Standard Code                                     |                     | Define the Order of Service Calculation formula. By default the formula is already defined in the tool.                                                                                                                                                                                                                                                           | Not applicable                                                                                                                                   |
| 130 | Allow Retroactive Service Orders to be listed (e.g. Y or N - Default : 'N') | Y or N (Default: N) | Definir se será permitida a listagem de Ordem de Serviços com data retroativa.                                                                                                                                                                                                                                                                                    | If you do not enter the parameter value, the system default value will be used: "N" (No).                                                        |
| 229 | Activities Formules Reconfiguration (From: Y or N - Default: 'Y')           | Y or N (Default: Y) | Modify the formula structure of the activities already registered for the new structure that is configurable from the SO Formula screen. When reporting the default value "Y", the system will perform the activity formula reset routine at the time JBoss restarts on a CITSmart system update and assigns "N" to this parameter at the time of its completion. | Once the "Y" value has been entered, the contract activity formula, not yet configured, will be in accordance with the new Formula SO structure. |
| 243 | Service Order Signature                                                     |                     | Enable signatures to be used when printing the Work Order reports. When the parameter is enabled (value = Y), the system displays a field in the Work Order form and the user can choose which signature frame configuration to use when printing their reports.                                                                                                  | When the parameter is enabled, it forces the user to define and configure one more field before recording a Service Order.                       |

**Table 1 - List of Parameters**

!!! tip "About"

    <b>Product/Version:</b> CITSmart | 7.00 &nbsp;&nbsp;
    <b>Updated:</b>09/05/2019 – Larissa Lourenço

<div style='text-align: justify;'>

# Inputs/Outputs

As we’ve seen, a process encompasses all the inputs and outputs associated with an operation. Let's look at the setup of an Input/Output table of a process in openLCA.

CHANGE IMAGE

![](../media/inputs_outputs.png)  
_Inputs/outputs tab window with highlighting on the tools to the right top corner_ 

In the top right corner, you will see several icons: "Refresh" (circled arrow), "Add Flows" (green plus), "Delete Flow" (red x), and a "123"/ "fx" icon you can use to switch between displaying the "Amount" as either a value or formula (when mathematical operations have been applied).

>_**Note:**_ A waste can also be designed as an input covering recycling approaches in openLCA. Then it is possible to select "avoid product" to define a supplier. Check ["Waste"](../waste_modelling.md) section for details.

<details>
<summary><b>Flow</b></summary>

Product, elementary, and waste flows can be added as inputs or outputs to the process in several ways. You can drag and drop them from the navigation panel, double-click on an empty flow cell, or click on the green plus icon. A pop-up wizard will appear in which you can manually select the flows from the drop-down list or utilize the filter option to narrow down the choices. The option "instant search" allows you to select/deselect that openLCA runs the search function directly while you type. You can deselect this option if the live search slows down your operating system massively.

![](../media/adding_flows.png)  



Moreover, you can also drag and drop processes into the input/output section. This will automatically add the respective reference flow to the table with the selected process as a provider.

</details>

<details>
<summary><b>Category</b></summary>

The "Category" column displays the child category of the flow, indicating its placement within the folder structure.

</details>

<details>
<summary><b>Amount</b></summary>

You can enter the amount of the flow as values, formulas, and/or parameters. 

- To view the calculated value, click on the "_123_" icon located in the top right corner.
- To see the original formula/parameters, click on the icon again, which will change to the "_fx_" icon.

>**_Note:_**
>- When a formula and/or parameter is typed in the "Amount" field, the software will calculate the value for the amount automatically.
>- Complex formulas must adhere to a specific format (e.g., Tan(a), trunc(c), etc.). Have a look in ['Constants, operators and functions for formulas in openLCA'](../advanced_top/formulas_in_openlca.md) chapter.
>- You can use the formula interpreter, accessible under "Tools" → "Formula Interpreter", to identify errors within your formulas. 

</details>

<details>
<summary><b>Unit</b></summary>

openLCA supports a wide range of measurement unit types to represent different physical quantities. Some common types of units available in openLCA include:

- Mass: Kilograms (kg), grams (g), tons (t), etc.
- Volume: Cubic meters (m³), liters (L), gallons (gal), etc.
- Energy: Joules (J), kilowatt-hours (kWh), megajoules (MJ), etc.
- Length: Meters (m), kilometers (km), miles (mi), etc.
- Time: Seconds (s), minutes (min), hours (h), days (d), etc.
- Money: Currency units such as USD, EUR, GBP, etc.
- Area: Square meters (m²), square kilometers (km²), hectares (ha), etc.
- Pressure: Pascals (Pa), bar, psi, etc.
- Temperature: Celsius (°C), Fahrenheit (°F), Kelvin (K), etc.
- Electric Current: Amperes (A), milliamperes (mA), etc.

Units are assigned to the flows based on the flow property defined in the "[Flow properties tab](../flows/flow_tabs_contents.md)" You have the flexibility to change units by clicking on the unit cell and choosing a different unit from the provided list. If a conversion factor is available, the amount will be automatically converted to the newly selected unit.

>**_Note:_** openLCA allows users to create **custom/new units**. This can also be done in the "[Flow properties tab](../flows/flow_tabs_contents.md)".

![](../media/change_unit_new.png)   
_Changing flow units within a process editor_

</details>

<details>
<summary><b>Cost/Revenue</b></summary>

openLCA has the capability to assign costs and revenues to processes, which enables conducting [Life Cycle Costing](../advanced_top/LCC.md) studies.

To add or modify a cost/revenue value, follow these steps:

- Select a cell in the "Costs/Revenues" column, click on it and select "Edit".
- Specify your desired currency and enter the overall costs or revenues for the corresponding flow in the pop-up window.
- The software automatically calculates the price per unit based on the value in the "Amount" column.
- Revenues are displayed in green, while costs/expenses are shown in violet.

![](../media/price.png)  
![](../media/price_2.png)  
_Adding costs to flows_

![](../media/price_3.png)  
![](../media/price_4.png)  
_Adding revenues to flows_

**_Note:_**: openLCA allows you to create **custom/new currencies**. It can be done in the "Currencies" folder in the "Background data" section of the Navigation panel. 

![](../media/currency_information.png)  
_Creating a new currency_

</details>

<details>
<summary><b>Uncertainty</b></summary>

Users have the option to associate uncertainties to data in their LCA studies. Otherwise, this cell is set to 'none' in a user-created process..

To add uncertainty data to flows, follow these steps:

- Click on the uncertainty cell corresponding to the flow and select "Edit".
- Choose the desired uncertainty distribution, such as logarithmic normal, normal, triangle, or uniform and fill in the required data.

![](../media/editing_uncertainty.png)  
_Adding uncertainty information, step 1_

![](../media/uncertainty.png)  
_Adding uncertainty information, step 2_

>**_Note:_** Uncertainty data can also be defined for parameters and LCIA characterization factors in a similar manner. 

</details>

<details>
<summary><b>Avoided waste</b></summary>

Avoided waste occurs in a situation where the waste from a process becomes a resource for another process. System expansion is a technique used to account for avoided waste. Learn more about the concept of avoided waste in the "[Waste modelling](../flows/waste_modelling.md)" section, and explore the concept of system expansion in the "[Allocation](../allocation.md)" section.

</details>

<details>
<summary><b>Provider</b></summary>

In openLCA, a "provider" refers to the process that supplies a specific flow (the source or origin of a particular input or output flow). Output "providers" are waste treatment processes, taking the waste generated in a process. You see that the name does not perfectly fit here but we did not set up a new name. The provider information helps to establish the relationships and dependencies between different processes and flows within the LCA model, and makes the input / output unique. It can be overwritten in a product system, meaning that you can select a new, different connecting process in a product system.

To choose a provider for a flow, follow these steps:

1. Click on the provider cell corresponding to the flow and choose "Edit".
2. From the drop-down list, select the specific provider for the flow (in cases where multiple providers exist for the same product flow). 

Note that many processes from databases like ecoinvent have predefined default providers. To access detailed information about the provider, simply right-click on a flow and select "Open provider".

>**_Note:_** When creating a product system in openLCA, the software can automatically handle flows with multiple providers. It offers several options for auto-linking processes, which are explained in detail in the ["Creating a new product system/Settings for a product system"](../prod_sys/Creating.md#settings-for-a-product-system) section.

</details>

<details>
<summary><b>Data quality</b></summary>

Check out the ["Data quality"](../advanced_top/data_quality.md) section. 

</details>

<details>
<summary><b>Location</b></summary>

By default, the location of the inputs and outputs are automatically set to match the location of the process. However, you have the option to customize the location for the individual flows.

To modify the location:

- Click on the location cell associated with the flow you want to change and select "Edit."
- A pop-up window will appear, allowing you to choose a location from the available options. You can also apply filters to find the desired location.

Gain more insight into the use of locations in the "[Regionalized LCA](../advanced_top/regionalized.md)" section. 
</details>

<details>
<summary><b>Description</b></summary>

Add a description or additional details about the process.
</details>

</div>
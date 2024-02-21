
# Allocation

<div style='text-align: justify;'>


When a process involves several products, you have to assign how much of the impact each product is responsible for. Typical examples of such processes are co-generation of heat and power (multi-output) or a landfill (multi-input). These allocation problems can be dealt with using two different strategies; partitioning or system expansion. 

### Partitioning

There are three allocation by partitioning methods in openLCA:

-   Physical allocation: partitioning based on the physical relationships between the products in terms of, for example, mass. 

-   Causal allocation: partitioning based on assumptions or former research on the relative impact of different products.

-   Economic allocation: partitioning based on the economic (cost or revenue) relationships between products. Consequently, an economic property in terms of cost/revenue has to be added for this to be applicable. 

Below is an example illustrating how the three different methods are applied in openLCA. In this example, 1 kg of wood and 0.3 kg of bark are produced from 1 kg of saw log (measured as solid wood under bark).

![](./media/allocation_example_inputs_outputs.png)
_Inputs and Outputs for our example, note that economic properties have been added_

The allocation factors for physical, causal and economic allocation can be viewed/altered in the "Allocation" tab of a process. Select the "Calculate factors" button and the software will automatically calculate the values for the three allocation methods. 

![](./media/allocation_example_allocation_tab_calculation_button.png)
_The "Allocation" tab with the "Calculate factors" button_

![](./media/allocation_example_calculation_tab.png)
_Calculate factors_

- The physical allocation factors are calculated based on the ratio between the products (wood and bark) physical unit. Since the output of wood and bark is 1 kg and 0.3 kg respectively, the allocation factors become 0.77 and 0.23.

- For causal allocation an assumed ratio can be inserted. In this example, we assume that the wood is responsible for 60% of the impacts, whereas bark is responsible for 40%. 

- In the case of economic allocation, we assume a revenue of 1$/kg for wood and 0.4$/kg for bark.

![](./media/allocation_example_calculated_factors.png)

_Calculated allocation factors. Causal allocation has to be inserted manually, else it will by default get the physical allocation factors._

_**Note:**_ For allocation to work, the main product and the by-products need to have the same flow property.

_**Note:**_ When a currency is unavailable, a new currency can be created under "Currencies" under the "Background data" in the Navigation plane. A conversion factor can be added according to whatever reference currency is set.

### System Expansion

Applying system expansion means that the process you are modeling is credited with the impact that is avoided by supplying the by-product. For example: if a process produces electricity and has heat as a by-product, it can be credited with the load that would appear if this heat was supplied from elsewhere. In openLCA, this can be performed by checking the box of "Avoided product" for the by-product.

![](./media/avoided_example_check.png)
_Avoided product check box highlighted in the Inputs/Outputs tab_

It is important that a process providing the avoided product flow exists. This provider then occurs in the "[Model graph](./prod_sys/model_graph.md)" when creating the "[Product system](./prod_sys/Creating.md)", but as a supplier of the output side of our example process.

![](./media/avoided_example_model_graph.png)
_The model graph where heat is accounted for as avoided and has a respective provider besides it is an output of the process_

</div>

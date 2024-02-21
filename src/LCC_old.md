# Life Cycle Costing

<div style='text-align: justify;'>

<span style="color:purple; font-size:20px">There are two LCC versions, one as a full study and one as a description</span> 

Information on Life Cycle Costing is already provided in several previous
sections when the topic comes to attention. In this section, a general view of
the topic is presented.

Costs are modelled in the software as associated with products, waste or
elementary flows, which are inputs and outputs of processes. They can be
positive or negative while a negative cost is regarded as an added value. In general, there is no need
for the creation of a method for the LCC calculation.

![](../media/lcc_inputoutput_old.png)

_Specification of costs and revenues for input and output flows in a process_

In the case of multi-output processes, consideration of the costs of by-products
depends on the choice of allocation options when setting the calculation
properties (see "[Allocation](../processes/allocation.md)"). If no option is selected the price of the
by-products is considered as revenue, while if a type of allocation is chosen
the allocation factors are applied to the exchanges and the by-product cost is
not considered. The third possibility is to select the option "as defined in
processes": As before, if a type of allocation is chosen the allocation factors
are applied to the exchanges and the by-product cost is not considered; on the
contrary, if no allocation is selected all costs are calculated excluding those
from the by-products.

![](../media/lcc_calculation_old.png)

_LCC - Choice of allocation method when performing LCC_

Another important issue is the consideration of market variability through
uncertainty models. OpenLCA presents a column to assign an uncertainty to the input
and output flows of a process, but not to the price directly. This can be solved
by making the price a [Parameter](../parameters/parameters.md) and assigning uncertainty
directly to it.

### Available Data

Each database in EcoSpold or ILCD format can be imported into the software (see "[Importing and combining databases](../databases/importing_and_combining_databases.md)"). Ecoinvent database v. 3.3 in openLCA format provides prices for
all products except for waste materials and their disposal. Otherwise, prices
can be inserted manually in the input/output section for each process.

Several currencies are available in the database and for an entire database, one
currency can be selected as a reference for all the others.

The software allows to model different prices for the same material referred to
different processes or countries, as the price per reference unit associated with
the material is open and can be changed in the processes of the product system.
In this way, there is no need for the creation of the same material with a
different name and price associated.

### Results and analysis available

The software displays the costs or added value, together with inventory and
impact assessment results in the "Inventory Results" tab.

![](../media/added_value_old.png)

_Display of costs and added value_

With this, the software offers a good combination of environmental assessment
and cost analysis. Furthermore, LCC can be performed stand-alone by selecting no
method when the impact assessment is run.

![](../media/no_method_old.png)

_Performance of LCC stand-alone, no impact assessment method is selected_

_**Note:**_ The detailed cost/revenue contributions are described in the previous page "[Result and Analysis](./analysis.md)".

</div>

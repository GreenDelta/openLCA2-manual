# Lazy vs Eager calculation

<div style='text-align: justify;'>

When calculating impact results, you can choose between eager and lazy calculation mode: 

- **Eager/all:** This mode will calculate  the entire LCA model including all contributions of flows and processes to the result upfront, regardless of whether the results are immediately needed in the visible editor. While the advantage of this mode is that it provides comprehensive results immediately, it does require more computational resources and time, especially for large and complex models.

- **Lazy/On-demand:** This mode will postpone the calculation of contribution results until they are specifically requested. Lazy calculation has the advantage of reducing computational load and speeding up initial model loading and navigation. It calculates and displays results as needed, more complicated calculations, e.g. in the contribution tree and Sankey diagram, are only done once the Sankey diagram or contribution tree are requested. After an initial calculation, the results are cached until the result is closed. 

**Whether you choose "Eager" or "Lazy", the calculation results will be the same!**


</div>

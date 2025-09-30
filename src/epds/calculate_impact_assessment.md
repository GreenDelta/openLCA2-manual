# Calculate the impact assessment

This section summarises different ways to produce impact assessment results using EPD format. There are three different methods:

- Calculate the results of a product system (EPD Module)
- Calculating the results using lifecycle stages as product systems
- Calculating the results using projects

## Calculate results of a single product system

<div style='text-align: justify;'>

After the product system is created, you can calculate the impact results choosing a LCIA method.

1. To include the results in the EPD, the product systems must be calculated. To do so, go to the "General information" tab of the product systems and right click on "Calculate". This must be performed individually for each product systems that you want to include in your EPD.

    ![](../media/epd_general_information_product_system.png)
    _"General information" tab of product system_

2.	After clicking on "Calculate", you will see the interface depicted below. Here, you must now choose the set of indicators you would like to calculate and select the calculation type "Eager/All". After this, the results will appear automatically.

    ![](../media/epd_selction_iam_product_system.png)
    _Selection of Impact Assessment Methods in the calculation of a product system_

## Calculating the results using lifecycle stages as product systems

In order to view the results of the LCA study for the product of interest in an EPD format per lifecycle stages, you can create a product system for each process as seen below. 

![](../media/epd_lcs1.png)

Then, create a process system with the flow of each lifecycle stage added. After that, create a product system but make sure that you uncheck the “Auto-link Process”. Then, in the model graph tab of the newly created product system, as seen below, you can drag-and-drop the product system for each stage. 

![](../media/epd_lcs2.png)

Then, as demonstrated in the image below, you can move the pointer to the flow of the product system (1) and drag it to the flow of the existing in the “Lifecycle” product system (2).

![](../media/epd_lcs3.png)

Eventually, you will be able to set-up the model graph using product system of each lifecycle stage as seen below. 

![](../media/epd_lcs4.png)

**_Note_**: The picture above represent a simplification. In a real-life scenario you would most likely model the life cycle with items and product flows, therefore the graph would look more like the picture below:

![](../media/epd_extended_graph.png)

Results for the calculated product system of “Lifecycle” can then be viewed in the following format:

![](../media/epd_lcs5.png)

## Calculating the results using projects

Alternatively, you can create a new project with a report and add all the lifecycle stage product systems as seen below.

![](../media/epd_pr1.png)

With this approach, you can view the results all together for all impact categories for each stage, as you can see below. You can be copy the results that are displayed this way and insert them directly into the EPD report.

![](../media/epd_pr2.png)

</div>
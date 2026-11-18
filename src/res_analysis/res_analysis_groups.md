<div style='text-align: justify;'>

# _New!_ Analysis groups

Since openLCA v2.4, you can conveniently categorize your product system's processes into various categories allowing later to group results. This is particularly helpful if you assign groups according to the EN15804+A2 modules as used for EPDs. Moreover, it allows us to analyze life cycle stages without changing the connectivity within the model graph. 

After creating the product system, you can hover over a process in the model graph, right-click, and choose the desired option as seen below:

![](../media/analysis_groups_1.png)

A pop-up window will appear, allowing you to set up a new analysis group by clicking "add analysis group" or selecting "Add EN 15804" from the drop-down menu for predefined group analysis according to the EN15804+A2 lifecycle modules.

![](../media/analysis_groups_2.png)

If you select "add EN 15804 modules", a pop-up window will appear allowing you to assign the selected process under any category. You can delete any group by clicking the "x" sign next to it. 

![](../media/analysis_groups_3.png)

You can also create a new one, by clicking on “Add analysis group” at the end of the list:

![](../media/analysis_groups_4.png)

It is also possible to set colors, by clicking on the color box in front of any group, to categorize the processes in the model graph, as shown below:

![](../media/analysis_groups_5.png)

The chosen colors are then visible in the model graph respective to the group.

![](../media/analysis_groups_6.png)

After saving the work, you can perform the calculation and view the group analysis results in the “analysis groups” tab below the results window. You can also investigate results contribution per flow and impact categories as seen in the lower side of the window. Further, you can click on any impact category and copy-paste the entire table of impact assessment results into Excel. 

![](../media/analysis_groups_7.png)

If you selected the EN15804 module group initially or followed such a structure, it's also possible to directly create an EPD by clicking on the EPD icon at the top right of the window. A pop-up window will appear, where you can click "OK".

![](../media/analysis_groups_8.png)

The EPD and the results per group shall appear in their respective locations, as in the picture below, and they can also be exported as JSON-LD.

![](../media/analysis_groups_9.png)

## Focus: Are group analysis results same as the contribution tree? 

In openLCA, when you're analyzing the environmental impact of a product or process, you can view the results in two different ways: **contribution trees** and **analysis groups**. These help you understand which parts of the supply chain are responsible for which portions of the total impact.

Now, the results from these two views only match exactly when there are no overlapping groups along a supply chain path. If one group contains another (like a group within a group), it can count the same impact more than once, which causes differences in the totals.

**Simple example:**

Imagine a product system with 5 steps, from E (raw material) to A (final product). Each step contributes an equal impact of 1. So the total impact is 5.
We also assign some of these steps to analysis groups:

- B is in group **g1**
- D is in group **g2**

In the contribution tree, the numbers just add up along the path:

![](../media/analysis_groups_10.png)

But for **analysis groups**, we have to be careful not to double-count:

- **g2** (D and everything below) = **2**
- **g1** (B and its upstream) = 4, but since D is already counted in g2, we subtract that: 4 – 2 = **2**
- The **top level** (A) = total – g1 = 5 – 2 - 2 = **1**

![](../media/analysis_groups_11.png)

Still totals to 5, but **we avoided double-counting** by subtracting the already-included impacts.

A practical example: Consider a product system for a concrete plasticiser with two direct inputs: formaldehyde and lorry transport. Each provider process is assigned to an analysis group: the formaldehyde market to the Chemical group (orange) and the lorry transport market to the Transport group (blue).


![](../media/res_analy_example_1.png)

The formaldehyde market also uses lorry transport itself (0.1713 t·km), and that transport is supplied by the same transport process that supplies the case study directly. A process may occur only once in a product system, however many processes could demand it: the model graph shows a single Transport node with two links (highlighted in yellow). Analysis groups are assigned to processes, not to positions in the supply chain, so all demand for this process belongs to the Transport group, including the part used by the formaldehyde market.

![](../media/res_analy_example_2.png)

The contribution tree, by contrast, follows supply-chain paths, so the same transport process appears twice: once under the formaldehyde market (0.02581 kg CO2-eq) and once as a direct input to the case study (0.15070 kg CO2-eq). The tree shows the upstream total of each process along its path, not group values. The formaldehyde market, labelled “Chemical :: …”, therefore shows 0.96333 kg CO2-eq, which includes the transport it uses.

![](../media/res_analy_example_3.png)

In the analysis groups tab, the Transport group receives the full result of the transport process across both uses (1.17130 t·km in total): 0.15070 + 0.02581 = 0.17651 kg CO2-eq. As described for nested groups, this share is subtracted from the Chemical group to avoid double counting: 0.96333 − 0.02581 = 0.93752 kg CO2-eq. Both views give the same total of 1.11403 kg CO2-eq; only the split between the groups differs.

![](../media/res_analy_example_4.png)

> **Note:** Database processes, such as those from ecoinvent, are used in many places in the supply chain and form large loops. To keep the calculation fast, openLCA stops separating the groups at some point inside these loops, so the split between groups can be incomplete. For example, if the same lorry transport process also appears deep inside the formaldehyde supply chain, it may stay counted in the Chemical group instead of moving to the Transport group.

> **Tip:** Assign analysis groups to your own foreground processes, not directly to database processes as in the example above (also for EPDs for modules A to D as shown above) . For example, create a “Transport to plant” process with its own output flow that uses the ecoinvent lorry process, and assign the Transport group to it. Transport used inside the formaldehyde market then stays in the Chemical group.


</div>

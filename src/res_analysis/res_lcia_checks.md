<div style='text-align: justify;'>

# LCIA checks

Identifying and reviewing these uncharacterized flows is an essential step toward ensuring the consistency of the LCA, as emphasized in the ISO 14040 and 14044 standards. openLCA supports this by providing the **'LCIA Checks'** tab to identify potential inconsistencies between the Life Cycle Inventory (LCI) and the Life Cycle Impact Assessment (LCIA) results applied. In detail, it lists all elementary flows from the LCI that are not characterized by the selected LCIA method. 

![](../media/checks.png)  
_LCIA Checks tab_

These unmatched flows may lead to an underestimation of environmental impacts, indicating gaps in the impact assessment coverage and potentially pointing to issues such as mismatched flow mapping or the need to consider a different LCIA method. This is in particular relevant to elementary flows that hold a large share of the inventory. 

However, openLCA allows to display unmatched flows in two formats:
- **Grouped by LCIA category**: Organizes missing flows by impact category, helping to trace gaps more effectively within specific environmental issues (e.g., climate change, toxicity, etc.).
- **Ungrouped**: A flat list showing all excluded flows irrespective of LCIA categories.

</div>

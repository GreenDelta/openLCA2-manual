# Summary

[Table of content](toc.md)
<br>[How to use this manual](how-to-use.md)

---

# WELCOME - Manual openLCA 2

- [Introduction](introduction/README.md)
  - [Why openLCA was started](introduction/openLCA.md)
  - [openLCA now](introduction/openLCA_now.md)
  - [What you can do with openLCA](introduction/openLCA_wycd.md)
  - [GreenDelta GmbH - about the developer](introduction/greendelta.md)
  - [openLCA 2 - new features](introduction/openLCA2_features.md)
- [How to get openLCA running](installation/README.md)
  - [Hardware requirements](installation/requirements.md)
  - [Download and installation](installation/download_installation.md)
  - [Adjust memory](installation/memory.md)
  - [Download fast libraries](installation/fast_libraries.md)
- [Resources](resources/README.md)
  - [openLCA.org](resources/openlca.org.md)
  - [openLCA Nexus](resources/nexus.md)
  - [ask.openlCA](resources/ask_openlca.md)

-----------

# Welcome to openLCA!

- [openLCA key features with an LCA case study](conceptual_guideline.md)

-----------

# Guidance for LCA practitioners to openLCA

- [Model validation in openLCA](validation.md)

-----------


# The basics for openLCA

- [Running openLCA for the first time](running_olca/README.md)

  - [Toolbar: File](running_olca/toolbar_file.md)
  - [Toolbar: Database](running_olca/toolbar_database.md)
  - [Toolbar: Tools](running_olca/toolbar_tools.md)
  - [Toolbar: Help](running_olca/toolbar_help.md)
  - [openLCA search function](running_olca/search_function.md)
  - [Using the editor function](running_olca/editor_function.md)
  - [Working with tabs](running_olca/working_with_tabs.md)

- [Databases](databases/README.md)
  - [Database elements](databases/database_elements.md)
  - [Creating a new database from scratch](databases/create_database.md)
  - [Creating a new database loading it from file](databases/restore_database.md)
  - [Database update](databases/database_update.md)
  - [Importing data and combining databases](databases/importing_and_combining_databases.md)
  - [Using mapping files and validate databases](databases/mapping_validation.md)
  - [Exporting databases](databases/exporting_databases.md)
- [Flows](flows/README.md)
  - [Creating a new flow](flows/creating_new_flow.md)
  - [Flow tabs](flows/flow_tabs_contents.md)
- [Processes](processes/README.md)
  - [Creating a new process](processes/creating_new_process.md)
  - [Process tabs](processes/process_tab_content.md)
    - [General information](processes/tab_general_info.md)
    - [Inputs/Outputs](processes/tab_inputs_outputs.md)
    - [Documentation](processes/tab_documentation.md)
    - [Parameters](processes/tab_parameters.md)
    - [Allocation](processes/tab_allocation.md)
    - [Social aspects](processes/tab_slca.md)
    - [Direct impacts](processes/tab_direct_impacts.md)
- [Product Systems](prod_sys/README.md)
  - [Creating a new product system](prod_sys/Creating.md)
  - [Product system tabs](prod_sys/tabs.md)
  - [Model graph](prod_sys/model_graph.md)
  - [Advanced product systems features](prod_sys/nested.md)
  - [Calculating a product system](prod_sys/calculating.md)
  - [Exporting/saving product systems](prod_sys/exporting.md)
- [LCIA methods and categories](lcia_methods/README.md) - [Importing LCIA methods and categories into openLCA](lcia_methods/importing_lcia_methods.md) - [Creating a new impact assessment method, category and characterization factor](lcia_methods/creating_new_impact_assessment_method.md) - [Methods tabs](lcia_methods/impact_methods_tab_contents.md)
  - [Category tabs](lcia_methods/impact_categories_tab_contents.md)
    - [General information (including impact direction)](lcia_methods/impcat_gen_info.md)
    - [Characterization factors](lcia_methods/impcat_cfs.md)
    - [Parameters](lcia_methods/impcat_parameters.md)
    - [Regionalized calculation](lcia_methods/impcat_regionalized.md)
    - [Similarities](lcia_methods/similarities.md)
  - [Overview impact methods](lcia_methods/impact_methods_overview.md)
- [Calculation and Result Analysis](res_analysis/README.md)
  - [Lazy vs Eager calculation](res_analysis/lazy_eager.md)
  - [Result analysis](res_analysis/analysis.md)
    - [General information](res_analysis/res_general_info.md)
    - [Inventory result](res_analysis/res_inventory_result.md)
    - [Impact analysis](res_analysis/res_impact_analysis.md)
    - [Process results](res_analysis/res_process_results.md)
    - [Contribution tree](res_analysis/res_contribution_tree.md)
    - [Grouping](res_analysis/res_grouping.md)
    - [Locations](res_analysis/res_locations.md)
    - [Sankey diagram](res_analysis/res_sankey.md)
    - [Analysis groups](res_analysis/res_analysis_groups.md)
    - [LCIA checks](res_analysis/res_lcia_checks.md)
  - [Save and export results](res_analysis/save_export.md)
- [Projects](projects/README.md)
  - [Creating a new Project](projects/new_proj.md)
  - [Report template](projects/report_template.md)
  - [Project results](projects/results.md)
  - [Project report](projects/report.md)
- [Waste modelling](waste_modelling.md)
- [Allocation](allocation.md)
- [Parameters](parameters/README.md)
  - [Parameter types](parameters/parameters.md)
  - [Parameter hierarchy](parameters/hierarchy.md)
  - [Parameter sets](parameters/parameter_sets.md)
  - [Parameter analysis](parameters/parameter_analysis.md)
  - [Advanced: Dependent parameters](parameters/dependent_parameter.md)
- [Background data](background.md)

-----------

# The advanced knowledge base

- [Advanced Topics](advanced_top/README.md)
  - [Regionalized LCA](advanced_top/regionalized.md)
  - [Life Cycle Costing](advanced_top/LCC.md)
  - [Social aspects](advanced_top/social_aspects.md)
  - [Data Quality](advanced_top/data_quality.md)
  - [Monte Carlo simulation](advanced_top/monte_carlo.md)
  - [Modelling with time parameter](advanced_top/time.md)
- [Environmental Product Declarations (EPDs)](epds/README.md)
  - [Creating new processes for target products](epds/create_processes_for_target_products.md)
  - [Create product systems from your processes](epds/create_product_systems_from_processess.md)
  - [Calculate the impact assessment](epds/calculate_impact_assessment.md)
  - [Save your results](epds/save_results.md)
  - [Creating EPDs in openLCA](epds/creating_epd_olca.md)
  - [Importing EPD results from various sources](epds/importing_results_3rd_sources.md)
    - [Adding EPDs manually](epds/epds_manually.md)
    - [Using soda4LCA](epds/soda4lca.md)
    - [Import EPDs from openEPD](epds/openepd.md)
    - [Using ILCD import](epds/epds_ilcd.md)
  - [Using results of EPDs in life cycle models](epds/life_cycle_models.md)
  - [Uploading EPDs on SmartEPD](epds/smartepd.md)
- [Libraries](libraries/README.md)
  - [Adding a library to a database](libraries/adding_library_database.md)
  - [Exporting a database as a library](libraries/exporting_database_as_library.md)
  - [Library file system](libraries/file_system.md)
- [Scripting in openLCA](scripting/README.md)
- [Collaboration in Teams](collaboserver.md)
- [openLCA cheat sheet](cheat/README.md)
  - [Usage](cheat/usage.md)
  - [Direct impact calculations in processes](cheat/direct.md)
  - [openLCA and Excel](cheat/import_export.md)
  - [Tags](cheat/tags.md)
  - [Constants, operators and functions for formulas in openLCA](cheat/formulas_in_openlca.md)
  - [Shortcuts in openLCA](cheat/key_short_cuts.md)

-----------

# Updates

- [Latest manual updates](updates.md)
- [Latest software updates](software_updates.md)

---

---

[Contact](./contact.md)


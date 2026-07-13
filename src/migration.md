# Data Migration Tool in openLCA

With version 2.7.0, openLCA provides a powerful data migration tool. Hence, LCA models can be migrated from one database to another, linking them to matching background data in the target database. 
Use cases for such a migration are:

-	updating the background database, e.g. updating to a new ecoinvent version (e.g. 3.11 to 3.12)
-	changing the system model of the background database, e.g. switching from the cutoff to the APOS ecoinvent model
-	switching to a library based or precalculated results background database
-	or just, migrating the model to a fresh version of the background database

In order to use the tool, you first open the database with the models you want to migrate. You can then find the tool under Database > Migrate content: 

![](../media/placeholder.png)  

In the migration tool, you can then select the models (projects and product systems) and LCIA methods you want to migrate. You can also select the option "Copy all foreground processes" here. Then you select a target database and strategies how providers of product outputs and waste inputs (typically processes, but could also be pre-calculated results) will be matched in the models between source and target database. If the tool finds matching providers, the corresponding process links will be updated to link to the new provider of a flow in the target database.

The linking or matching strategies for finding these providers are executed in order, as listed in the dialog. You can change that order or remove specific strategies with the context menu:

![](../media/placeholder.png)  


## Migration strategies

Currently, the following strategies are implemented:

-	"Match by flow and exact provider ID": A provider can be linked, if it has a product output or waste input of the exact same flow (identified by ID) and also the provider ID is exactly the same. This is useful when migrating specific models to the same version of the database or migrating to a library based version of the background database.
-	"Match by flow, provider name and location":  This option has the same flow logic as above but providers are matched by name and locations. In this matching strategy, typical suffixes like "APOS" or "Cutoff" are ignored, thus, this strategy is useful when, for example, changing the system model or updating an ecoinvent database.
-	"Match by flow (take any available provider)": With this strategy, any provider can be linked that has a product output or waste input with exactly the same flow.

Based on the selection, the tool will then create a migration plan and open it:
![](../media/placeholder.png)  

In the plan, you see the models that will be migrated and how providers will be linked. Providers that cannot be linked/matched, are copied to the target database. These are typically the processes of the foreground system. For the matched providers, you see in the table "Provider matches" which provider in the source database will be replaced with which provider in the target database. In the "Status" column, you see which linking / matching strategy was applied and how many options for a possible other provider are in the target database. When there are multiple options for a matching target provider, you can change the provider mapping in the table:

![](../media/placeholder.png)  

>**_Note:_** For the work flow, you can filter the status of the migration per flow. This allows to focus on problematic flows. 

Finally, you can run the migration by pressing the "Run migration" button in the setup:

![](../media/placeholder.png)  

After the migration, you should see this message:

![](../media/placeholder.png)  

>**_Note:_** We allow to import and export flow mapping. Moreover, you can also copy the "Providers matched" to the clipboard to copy it, e.g. to Excel.
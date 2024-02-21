# Importing LCIA methods into openLCA

<div style='text-align: justify;'>

### Download LCIA methods from Nexus

[Nexus](https://nexus.openlca.org) databases do not always include LCIA methods, allowing users to select their preferred method. There is one overall LCIA method pack that we provide to be suited for many different databases (that also includes normalisation and weighting when the method provide them) but there are also other methods specific for specific databases.

![](../media/lcia_methods_import.png) 

The table below provides information about the most commonly used databases available on [Nexsus](http://www.openlca.org/download#methods). You can see if the database is compatible with openLCA method pack and if a proprietary method is available to download (follow the instruction on [openLCA Nexus](../resources/nexus.md) section -"Accessing databases from openLCA Nexus"- to download a database or method pack). 

|              **Database**              | **Compatible with openLCA method pack** | **Proprietary method available** |
|:--------------------------------------:|:---------------------------------------:|:--------------------------------:|
| Ecoinvent                              | ✓                                       | ✓                                |
| Agribalyse v3.1                        | ✓                                       | ✗                                |
| Agri-footprint 6.3                     | ✓                                       | ✗                                |
| ESU World Food (unit and system)       | ✓                                       | ✗                                |
| EuGeos’ 15804_A2-IA  (unit and system) | ✓                                       | ✗                                |
| GaBi                                   | ✗                                       | ✓                                |
| ELCD                                   | ✗                                       | ✓                                |
| IO                                     | ✗                                       | ✓                                |
| ProBas                                 | ✗                                       | ✓                                |
| EN15804                                | ✗                                       | ✓                                |
| Ökobaudat                              | ✗                                       | ✓                                |

After downloading one or more of these method packs, you can import the  file into an active openLCA database. **Do not extract JSON-LD's .zip files before importing!**

**_Note for macOS users:_** If you are using Safari, the browser will automatically unzip your downloaded zip files. However, you need the zipped file for import in openLCA (e.g. when you want to import JSON-LD, methods packages, ILCD...). You can solve this issue in two ways: 

1. Use another browser for downloads, where the zip-files are not automatically unpacked after successful download.

2. Zip the archives again by using a third-party tool, because the build-in archive tool from Apple will add additional resources to the zip-file that can create issues when importing the file in openLCA.

### Importing LCIA methods into openLCA

To import a method pack, click on "Import" &#8594; "Others", then click on **"Linked Data (JSON-LD)"** and "Next". In the next window, browse for the file. The program will ask you if you want to overwrite existing data. You can choose to update existing data sets. Then finally click on "Finish". 

![](../media/lcia_methods_zip.png)  

The import will then start automatically and may take a few minutes. When it is finished, the LCIA methods will be available in the database, under "Indicators and parameters", as shown below.

![](../media/lcia.png)    
_LCIA methods in openLCA_

_**Note:**_ Note that you can later assess the compatibility of LCIA methods with your database in  [LCIA checks](../res_analysis/analysis.md).

In openLCA 2, the impact categories are independent from the LCIA methods, and the LCIA methods are rather an "umbrella" which can contain several impact categories – this allows you to easily create own methods, e.g. for projects, by simply adding existing impact categories to e.g. a self-created LCIA method.

![](../media/impact_categories.png) 
<br>_Individual impact categories_





</div>
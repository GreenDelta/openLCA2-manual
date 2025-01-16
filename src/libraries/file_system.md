# Library file system

<div style='text-align: justify;'>

Libraries allow for fast regionalized calculations of impacts and work with numpy matrices to store information. In general, libraries are saved as zip-files that can be shared and imported into openLCA 2.0 database using the "Import from file …" 
button. 
A library contains the following files:

- **A.npy**: This file stores the square A matrix in a numpy format. 
Each column and row label represents a process-flow pair. 
Along the diagonal (i.e. where the process-flow pair is identical both in the column and the row axis) 
the value will be either 1 (for product flows) or -1 (for waste flows). All other entries within the matrix represent 
the exchanges relative to the base value of 1 or -1 along the diagonal. 
If an exchange does not occur in a certain process, the value in the square matrix will be 0. 
All columns and rows are labeled numerically. These labels act as IDs and link to their respective process-flow 
pairs reference IDs in the file indexA.csv.

    ![](../media/library_a_matrix.PNG)
    <br>_Schematic representation of the A matrix saved in a numpy file in an openLCA library zip file_

- **B.npy**: This file stores the B matrix. This matrix is not square. The columns mirror the rows of the A matrix. 
This means the columns again represent the same process-flow pairs of the rows in the A matrix. 
However, in the B matrix the rows represent a pair of elementary flows and locations. 
If the elementary flows are not regionalized, only the elementary flow will be indicated here. 
If an elementary flow-location pair is not associated with a process-flow pair, the indicated amount in the matrix will be 0. 
All columns and rows are labeled numerically. These labels act as IDs and link to their respective process-flow pairs reference 
IDs (i.e. column labels) in indexA.csv as well as elementary flow-location pairs reference IDs (i.e. row labels) in indexB.csv.

- **C.npy**: This file stores the C matrix. This matrix is not square and is the matrix for the characterization factors. 
The columns of the C matrix mirror the rows of the B matrix. Therefore, the columns represent elementary flow-location pairs. 
The rows in the C matrix represent the impact assessment categories. All columns and rows are labeled numerically. 
These labels act as IDs and link to their respective impact assessment category reference IDs (i.e. row labels) in indexC.csv as 
well as elementary flow-location pairs reference IDs (i.e. column labels) in indexB.csv.

- **INV.npy**: This file stores the inverse of the A matrix (i.e. the row and column axes are flipped).

- **M.npy**: This file stores the M matrix which is the product of the B matrix times the inverted A matrix (INV x B = M).
 
- **A.npz**: This zip-file stores the same A matrix as the one that can be found in A.npy. 
However, this is a version of that file with all zero-value entries removed to save memory.

- **B.npz**: This zip-file stores the same B matrix as the one that can be found in B.npy. 
However, this is a version of that file with all zero-value entries removed to save memory.

- **C.npz**: This zip-file stores the same C matrix as the one that can be found in C.npy. 
However, this is a version of that file with all zero-value entries removed to save memory.

- **indexA.csv**: This file acts as a mapping file for the numeric column and row labels in the A matrix as well as the column labels in the B matrix. 
These mappings associate these matrix labels with the reference IDs of their respective flows and processes in the database. 

- **indexB.csv**: This file acts as a mapping file for the numeric row labels in the B matrix as well as the column labels in the C matrix. 
These mappings associate these matrix labels with the reference IDs of their respective elementary flows and locations in the database.

- **indexC.csv**: This file acts as a mapping file for the numeric row labels in the C matrix. 
These mappings associate these matrix labels with the reference IDs of their respective impact assessment categories in the database.

- **library.json**: This file contains meta data about the library itself. Parameters include the library name and if the library is regionalized or not.  

- **meta.zip**: This file contains a folder system of openLCA types (e.g. Processes, Flows, Impact Assessment Categories etc.). 
Within these folders, you find the respective openLCA type’s JSON-LD files which mirror the entries in the adjoined openLCA 
database from which the library was derived. 
However, it should be noted that these JSON files do not contain any of the relative amounts associated with each object 
(e.g. exchanges or impact fact values), as these are contained within the matrix files. 
Only the process JSON-LD-files contains a reference to the respective 1 values within the A matrix 
(the values that sit long the diagonal line) to allow for an association between matrix system and the JSON-LD files. 

</div>

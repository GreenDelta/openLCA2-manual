<div style="text-align: justify;">

# Latest software updates

## 2.6.0:

- Improved Jython/Python integration: CodeMirror 6 editor with code completion and run keymap
- Allow results as default providers in processes (drag & drop)
- Allow adding multiple impact categories and flows to results at once
- Check-box added for Regionalized calculations in the direct impact tab
- Model Graph/Sankey: country codes displayed before process names (e.g. "CH – Transport...")
- Social aspects: delete entire set of indicators
- System Dynamics simulation and modelling (experimental)
- Hestia import functionality with flow mapping and data preview (experimental)
- GLAD mapping file import support
- Fix: direct impacts now consider results linked as default providers
- Fix: deletion of database repository
- Fix: library signing UI issues
- Fix: analysis groups: add multiple selected processes

## 2.5.0:

- Allow (EPD) results as default providers in processes
- Allow LCC for databases linked to libraries
- Copy/paste shortcuts in the navigator
- Import results of one EPD into a dedicated folder
- Fix: scale activity values in social aspects in library export
- Fix: project calculation fails with systems that have no impact contributions
- Fix: hidden icon within the JSON import
- Fix: incorrect “unlinked” icon for avoided products in model graph

## 2.4.1:

- Remove libraries from database (experimental).
- ILCD export: global parameters are only written to a process, when they are used in formulas of that process.
- Fix: corrected display of the connection state in the connection dialog of the graphical editor.
- Fix: flow editor page with regionalized characterization factors crashed sometimes.
- Fix: reference data no longer shows errors during database validation.
- Fix: copy datasets from the library.

# 2.4.0:

- Fixed allocation factors applied to avoided flows.
- Improved number generation for log-normal distributions.
- Fixed stack overflow in JSON export when providers are included.
- Fixed selection errors in export dialogues.
- Enabled support for longer formulas in dependent parameters.
- Fixed negative results for waste processes in libraries.
- Ensured encrypted libraries can now be used in projects.
- Added support for analysis groups and library fields in the IPC API.
- Introduced analysis groups functionality.
- Updated to Java 21 and Eclipse 4.34.
- Refreshed and updated reference data.

## 2.3.1:

- Bugfix: Corrected conflict identification when merging commits containing changes to datasets that were also changed locally

## 2.3:

- Support for the newest CS version & improvements of the CS repository view in openLCA,
- A new tool: Parameter analysis (e.g. time modelling), to run calculations over specific parameter ranges,
- More EPD meta-data for better compatibility with ILCD+EPD,
- Better SimaPro CSV import,
- Three new graphical editors’ themes (Nord Light, Nord Dark and Poimandres).

## 2.2:

- An updated documentation tab in the process editor, now featuring many more fields for ILCD compatibility, including multiple reviews, compliance declarations, and flow completeness.
- An improved ILCD import (also for EPDs),
- A soda4LCA tool for searching and downloading datasets from soda4LCA online databases (see Tools → soda4LCA andKnown hoststhen for pre-configured database connections),
- Enhanced internationalization of messages, popups, and labels, increasing coverage by 70%. More translations and additional languages will be added soon.
- Bug fixes: the system should no longer crash due to 0-values in product outputs and waste inputs (e.g., in LCA commons). The validation process will now also detect these flows.

## 2.1.1:

- LCA Collaboration Server:
commit empty category,
- bug fixes.

## 2.1:

- added a new way to calculate and show social indicators,
- bug fixes in model graph for big process systems,
- several UI improvements (dark mode, …),
- ILCD export for GaBi improved, selection of a pre-filled ILCD template to meet GaBi folder requirements in the import,
- CS bug fix: rename of folders error is now corrected.

## 2.0.4:

- fix and dark mode design for data quality,
- simplified Chinese translation,
- fix number format preferences,
. faster supply chain deletion in the model graph,
- calculation of regionalized LCIA factors:
    - validation & automatic correction of geometries,
    - testing intersections with locations from the database,
    - merge strategies for calculated factors: replace or keep existing factors,
    - visualization of generated factors per flow,
- database grouping.

## 2.0.3:

- integration of the Intel Math Kernel Library (MKL),
- convert error to warning when opening a Model Graph due to CSS parsing,
- fix text overlapping on the welcome page,
- display the name of the active DB,
- bug fixes.

## 2.0.2:

- handling & support for library links in JSON packages,
- Excel export of results: configuration + upstream results,
- export option with providers for JSON packages,
- advanced export configuration for SimaPro CSV,
- better handling of negative characterization factors when impact direction is set,
- impact analysis of processes: show location codes for regionalized system processes,
- rename global parameters: rename them also in cost-formulas,
- parameter usage: show usage in cost formulas in usage tree,
- ILCD import: internal-ids must start with 1,
- library export without inversion (useful for library based databases in cloud services),
- show out-of-memory error when editor crashes for lazy calculations,
- added a function WeightedMeanProvider.of(ResultProvider) for PSILCA raw-value calculation (script will come soon),
- improved dark mode icons.

## 2.0.1:

- fix on the Sankey diagram (loops),
- fixed a memory leak in the calculation (mainly affects the Monte Carlo simulation),
- “AND” combines words in the search bar,
- remove the process contribution from the report for now as they are available in the project result display,
- fix on the JSON export (multiple global parameters with the same name),
- display direct contributions in the upstream tree,
- updates of the IPC API,
- bug fixes.



</div>

# Scripting in openLCA

openLCA provides powerful scripting capabilities to automate tasks, analyze models, and integrate
life cycle data into external tools or workflows. There are two main approaches for scripting:

- Jython (Python) scripting within the openLCA application itself

- Inter-process communication (IPC) using the openLCA API

Both approaches enable automation and interaction with openLCA models, but they differ significantly
in how and where scripts are executed, their use cases, and their limitations.

## Jython

[Jython](https://www.jython.org/) is a dynamic language that is embedded within the openLCA
application. It allows you to write scripts in Python that can be converted to Java (the language
used by openLCA) and executed within the openLCA application.

It’s ideal for small tasks, data extraction, custom calculations, or batch modifications within the
openLCA GUI. Since Jython runs inside openLCA, you have access to internal variables like the
current database connection and the graphical interface.

📘 We provide a dedicated manual for Jython scripting in openLCA, including real-world examples:
[Jython scripting manual](https://greendelta.github.io/openLCAJython-manual/).

You can also check out some examples on our
[GitHub](https://github.com/GreenDelta/openlca-python-examples/tree/main/Jython).

## Inter-process communication (IPC)

The IPC (Inter-Process Communication) protocol allows you to control openLCA from an external script
or application. This is especially useful for integrating LCA calculations into automated workflows,
external tools, or larger systems. The IPC protocol is language-agnostic and can be used by any
application written in any programming language (e.g. Python, JavaScript/TypeScript, .Net, Go,
etc.).

This protocol is provided by an openLCA server, which can either be a running instance of the
desktop application or a web server with an openLCA back-end. An application can connect to such an
IPC server to call functions in openLCA, perform calculations, or interact with the database
remotely.

📘 To get started, check out the official API documentation:
[openLCA IPC API](https://greendelta.github.io/openLCA-ApiDoc/).

You can also check out some examples on our
[GitHub](https://github.com/GreenDelta/openlca-python-examples/tree/main/Python%20IPC).

## When to use Jython vs. IPC

Both Jython scripting and IPC scripting offer powerful ways to interact with openLCA—but which one
is right for your use case? The decision depends on factors like whether you prefer scripting inside
openLCA or from an external environment, the level of integration needed, and how your workflow is
set up.

To help you decide, we've created a comparison table that highlights the key differences between the
different approaches:

|                                                                            | openLCA          | Jython       | IPC               |
| -------------------------------------------------------------------------- | ---------------- | ------------ | ----------------- |
| Can I use this without writing any code?                                   | ✅ Yes           | ❌ No        | ❌ No             |
| Can I use it directly inside the openLCA desktop application?              | ✅ Obviously     | ✅ Yes       | ⚠️ Only as server |
| Can I automate repetitive tasks inside openLCA?                            | ❌ No            | ✅ Yes       | ✅ Yes            |
| Can I import data from Excel files (e.g. `.xlsx`) programmatically?        | ⚠️ Manual via UI | ✅ Yes       | ✅ Yes            |
| Can I export data or results to Excel automatically?                       | ⚠️ Manual via UI | ✅ Yes       | ✅ Yes            |
| Can I generate custom reports (e.g. Excel summaries, Word reports, etc.)?  | ❌ No            | ✅ Yes       | ✅ Yes            |
| Can I create/modify processes, flows programmatically without persisting?  | ❌ No            | ✅ Yes       | ✅ Yes            |
| Can I run SQL commands directly on the openLCA database?                   | ❌ No            | ✅ Yes       | ❌ No             |
| Can I use modern Python libraries like `NumPy`, `SciPy`, `pandas`?         | ❌ No            | ❌ No        | ✅ Yes            |
| Can I run scripts from outside openLCA (e.g. from VS Code)?                | ❌ No            | ❌ No        | ✅ Yes            |
| Can I integrate openLCA with other tools or workflows (e.g. REST APIs)?    | ❌ No            | ⚠️ Difficult | ✅ Yes            |
| Can I schedule calculations or run them in the cloud?                      | ❌ No            | ❌ No        | ✅ Yes            |
| Can I use it with other languages than Python (e.g. JavaScript, Go, .NET)? | ❌ No            | ❌ No        | ✅ Yes            |
| Does it integrate autocompletion and type annotations?                     | ❌ No            | ❌ No        | ✅ Yes            |

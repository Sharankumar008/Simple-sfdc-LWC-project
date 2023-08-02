# Simple-sfdc-LWC-project

Prerequisites

1.	Salesforce CLI
2.	JDK 8 or JDK 11 (Optional)
3.	Node.js
4.	VS Code
5.	Salesforce account

Step 1:

Install Salesforce CLI from https://developer.salesforce.com/tools/sfdxcli

Run this Command in Command Prompt to Verify Salesforce CLI version:

sfdx--version

Update to current version by entering the following Command:

sfdx update

Step 2: (Optional)

Install JDK 8 from https://www.oracle.com/in/java/technologies/javase/javase8-archive-downloads.html

Install JDK 11 from https://www.oracle.com/in/java/technologies/javase/jdk11-archive-downloads.html

(Note: Need to have Oracle Account to Install JDK Package)

Step 3:

Install Node.js from https://nodejs.org/en

Step 4:

Install VS Code from https://code.visualstudio.com/

In VS Code Install Extensions such as

1.	Salesforce Extension Pack
2.	Salesforce Diff
3.	Salesforce Extension Pack(Extended)


Create a Salesforce DX Project:

We'll use Visual Studio Code to create a project.

1.	Open Visual Studio Code.
2.	Press Command + Shift + P on macOS or Ctrl + Shift + P on Windows or Linux, then type create project. Select SFDX: Create Project, and press Enter.
3.	Leave the default project type selection Standard as is, and press Enter.
4.	Enter your as project name, and press Enter.
5.	Choose a directory on your local machine where the project will be stored. Click Create Project.
6.	You’ve created your first Salesforce DX project for working with Lightning Web Components. Visual Studio Code will automatically open the new project for you.

Authorize Your Dev Hub:

The next step is to authenticate Dev Hub. 

1.	In Visual Studio Code, press Command + Shift + P on macOS or Ctrl + Shift + P on Windows or Linux.
2.	Type sfdx.
3.	Select SFDX: Authorize a Dev Hub.
4.	Log in using your Dev Hub org credentials.
5.	Click Allow.
6.	After you authenticate in the browser, the CLI remembers your Dev Hub credentials. The success message should in the terminal


Create a Scratch Org:

1.	In Visual Studio Code, press Command + Shift + P on macOS or Ctrl + Shift + P on Windows or Linux.
2.	Type sfdx.
3.	Select SFDX: Create a Default Scratch Org....
4.	Press Enter to accept the default Org
5.	Press Enter to accept the default org alias.
6.	Be patient, creating a scratch org can take a minute.


Create a Lightning Web Component:

Creating a Lightning web component is a straightforward process. And Salesforce CLI already created a project structure that helps make getting started even easier.

1.	Right Click on LWC folder, Select create Lightning Web Component
2.	Enter a Name for the Component
3.	Select default Folder and press Enter.

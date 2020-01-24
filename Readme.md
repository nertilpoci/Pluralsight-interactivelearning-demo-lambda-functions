# Pluralsight Interactive Demo



## Short Description

This is a demo project for Pluralsight Projects. For this project, you'll be creating a simple AWS Lambda function and expose it via API Gateway.


## Full Description

### Project Overview

Learn how to create a AWS Lamba Function with this quick introduction, and become comfortable using Git and GitHub — even if you’ve never used them before.

You'll write basic funcion using Node.js, as well as fork a GitHub repository and clone it down locally.


### Applications and Tools You'll Need To Complete This Project

You'll need to have access to the following tools on your local machine to complete this project.

* Git
* GitHub
* Code Editor
* AWS Account

Never used Git and don’t have a code editor? We have a video that walks you through all the steps you’ll need to set this up.

### Prerequisite Knowledge

Completing all of the tasks in this project requires knowledge of Node.js, AWS Lambda Functions and AWS Api Gateway.  You'll also need to have a working knowledge of git to commit local changes and push them up to a GitHub repository.  We'll walk you through that part, so if you haven't used Git before -- don't worry.

### Live Demo

Wondering what this project will look like when you've completed it? [Follow this link](#) to see a live version of it.



## Setting Up The Project

In order to get this working, you'll need to have [Git](https://git-scm.com/) installed on your computer, and have a GitHub account. If this is your first time setting up Git, I'd recommend checking out Pluralsight's video on How to Setup Git for Pluralsight Projects in 5 Minutes to learn what you need to know.

The very first step is to fork this repository to your personal GitHub account and clone it down locally. We'll be editing the `index.js` and `settings.js` file in the root directory for this project.

### Associate Project with Pluralsight

After cloning this repository down, copy the ".projects_config" file from the [AWSLAmbdaProject](#) and save that to this directory. This will allow your status to be reflected on the website while you're working through the project locally!

[//]: # (install: "npm install")
### Installation

Run the following command from root folder of the `AWSLAmbdaProject` to install all dependencies.

```
$ npm install
```

[//]: # (test: "npm test")
[//]: # (test-watch: "npm test-watch")
### Verify Setup

In order to verify that everything is setup correctly, run the following command, which should show you a list of failing tests. This is good! Each of these tests corresponds to something we'll be working on in this project. By the end, all of the tests will pass.

```
$ npm test
```

We recommend also running the following command, which will watch for any changes to your files and then re-run the tests automatically. This makes things easier, since you'll see updates immediately when you save your files! You can run this command once, and then look back at the terminal after you've made changes to the "index.html" file.

```
$ npm test-watch
```



[//]: # (project_id: aws-lambda)
[//]: # (test: node_modules/.bin/mocha test/aws-lambda-test.js)
## AWS Lambda Functions

[//]: # (task_id: @handler)
### Function Logic

Using the code downloaded initial code, modify the index to create a `lambda function` that takes in the payload from an api gateway http request `{gatewayurl}?firstName=Jane&lastName=Doe` and outputs the Full Name `Jane Doe`

[//]: # (task_id: @publish)
### Create Lambda Function

Navigate to the aws console and create a new lambda function with using the author from scratch option. Then upload the code you edited locally.

[//]: # (task_id: @trigger)
### Add API Gateway Trigger

Make your api publicaly accessible via a rest api by adding an API Gateway trigger to your function. 
The api gateway should allow get request types. 


[//]: # (task_id: @settings)
### Add API Gateway to settings

Copy the public url from the API Gateway trigger you created for the function 
and assign it to `apiGateWayUrl` property in `settings.js` to the API Gateway public url.






## Next Steps



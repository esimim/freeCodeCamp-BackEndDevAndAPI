# FreeCodeCamp: Back End Development and APIs

## Table of Contents
- [Accessing the Cluster](#accessing-the-cluster)
- [Ongoing Work](#ongoing-work)
- [Backlog](#backlog)
- [Work Log](#work-log)

## Access the Kubernetes Cluster

```
$ export AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id --profile kops-manager)

$ export AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key --profile kops-manager)

$ export KOPS_STATE_STORE=s3://config.cloudvix.com.br

$ kops export kubeconfig cluster.cloudvix.com.br --admin
```

## Ongoing Work
This section tracks the current tasks that are actively being worked on.

**Managing Packages with NPM**

**Task 0: Organize the workflow for this project**. Done.

- Create the README file, the workflow and break down the tasks.

**Task 1: Create a Service to expose a deployment**

- *Current Status:* Creating the service.

- *Next Steps:*
  - 1 Check the pods to create the service
  - 2 Create the service and reach the pods

**Task 2: Create an Ingress to expose a service**

**Task 3: Access the application from the outside world and finish lesson 1.**

## Backlog
Tasks ordered by execution priority. Once a task in the backlog is moved to active work, copy it to the 'Ongoing Work' section.

- Managing Packages with NPM
- Basic Node and Express
- MongoDB and Mongoose
- Back End Development and APIs Projects

## Work Log
Document daily progress here, marking any errors encountered, possible solutions, or unfinished tasks to remember for the next session.

**[Date - 2024/09/22]**

- **Worked on:** 
  - Task 0: Organizing the workflow for this development
      
        done.
  - Task 1: Create a Service to expose a deployment

- **Current Status:** [Describe where you left off]
  
- **Errors/Challenges:** *[Document any current errors]*

- **Solution:** *[If a solution is known but not implemented, document it here]*

- **Next Steps:** *[Briefly describe the next steps for tomorrow's session]


---


**[Date - 2024/10/05]**

- **Worked on:** 
  - Task 3: Access the application from the outside world and finish lesson 1.

- **Current Status:** Service created but can't access it from outside the cluster.
  
- **Errors/Challenges:** [Document any current errors]

- **Solution:** [If a solution is known but not implemented, document it here]

- **Next Steps:** [Briefly describe the next steps for tomorrow's session]


---


**[Date - 2024/09/22]**

- **Worked on:** [Task]

- **Current Status:** [Describe where you left off]
  
- **Errors/Challenges:** [Document any current errors]

- **Solution:** [If a solution is known but not implemented, document it here]

- **Next Steps:** [Briefly describe the next steps for tomorrow's session]

# Go Fit Anywhere

## BackEnd Repository for  
## GoFitAnywhere3 build week team 

<strong> Contributors: <strong>
Larry Marcum - PL Khoa Tran(Jack), Tyler Miller, Matthew Orth, Amy Barba

<strong> Base URL https://gofitanywhere.herokuapp.com/ <strong> 
 
<strong> Launch URL https://anywherefitness3.netlify.com/ <strong>


![alt text](https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi37tmNg_3mAhW-HzQIHQo-AKkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.shutterstock.com%2Fde%2Fvideo%2Fclip-28708783-black-white-young-woman-doing-yoga-exercises&psig=AOvVaw2LkyYATHU_AZY9ofWRpR0F&ust=1578882832000093 "Go Fit Anywhere Page")

![alt text](https://lh3.googleusercontent.com/eFh2GbCU40sSDVn71ZSPRpYBfZa9eVFY65LXGFnbDz1g7fXGUxAKZAzUb-wfbH-zdUYB=s47)


## ENTRY ENDPOINTS

### REGISTER

https://gofitanywhere.herokuapp.com/api/auth/register

<strong> Expects: <strong>
First name
Last name
Username
Password
Email


| Method  |  Endpoint | Output  | Description
| --- | --- | --- | --- |
| POST     |    /api/auth/register   | token  | Register new user   |

 ### LOGIN

https://gofitanywhere.herokuapp.com/api/auth/login

<strong> Expects: <strong>
Username
Password

| Method  |  Endpoint | Output  | Description
| --- | --- | --- | --- |
| POST     |    /api/auth/login   | token and welcome message | Registered user login   |


## UTILITY ENDPOINTS"

| Method  |  Endpoint | Output  | Description
| --- | --- | --- | --- |
| GET     |  /:id/classes      | Gets classes based on user id |  Gets an array of classes specific to user id |    
| GET     |  /api/classes      | Gets an array of classes      | Listing of classes |    
| DELETE  |  /api/:id/classes  | Delete a class by             | Using id it removes a class |
| PUT     |  /api/:id          | Add a class                   | Adds a class |
| GET     |  /api/users        | Gets array of users           | Registered users  | 



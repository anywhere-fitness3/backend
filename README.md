# Go Fit Anywhere

## BackEnd Repository for  
## GoFitAnywhere3 build week team 

<strong> Contributors: <strong>
Larry Marcum - PL Khoa Tran(Jack), Tyler Miller, Matthew Orth, Amy Barba

<strong> Base URL https://gofitanywhere.herokuapp.com/ <strong> 
<strong> Launch URL https://anywherefitness3.netlify.com/ <strong>


![alt text]( https://photos.google.com/photo/AF1QipP7gXzQLvz8WQFXsDWu0qJKw1BgkaYbqYFP4K4b "Go Fit Anywhere Page")

![alt text](https://photos.app.goo.gl/147SNB7xhtktbQ6m9 "Data Base Designer")


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



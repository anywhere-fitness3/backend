# Go Fit Anywhere


## Client Pitch

These days, fitness classes can be held anywhere - a park, an unfinished basement or a garage - not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your "on-location" fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.


## BackEnd Repository for  

## GoFitAnywhere3 build week team 

<strong> Contributors: <strong>
Larry Marcum - PL Khoa Tran(Jack), Tyler Miller, Matthew Orth, Amy Barba

<strong> Base URL https://gofitanywhere.herokuapp.com/ <strong> 
 
<strong> Launch URL https://anywherefitness3.netlify.com/ <strong>


![alt text](http://bayyoga.com/wp-content/uploads/2017/05/FullSizeRender-1.jpg "Go Fit Anywhere Page")




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


## UTILITY ENDPOINTS

| Method  |  Endpoint | Output  | Description
| --- | --- | --- | --- |
| GET     |  /:id/classes      | Gets classes based on user id |  Gets an array of classes specific to user id |    
| GET     |  /api/classes      | Gets an array of classes      | Listing of classes |    
| DELETE  |  /api/:id/classes  | Delete a class by             | Using id it removes a class |
| PUT     |  /api/:id          | Add a class                   | Adds a class |
| GET     |  /api/users        | Gets array of users           | Registered users  | 



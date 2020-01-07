# backend

Entities

- fitClasses <---- class>
    - id
    - name

- Users
     - id
     - username

- Instructors
    - id
    - username
    
Relationships:

- fitClasses \* --- \* Users  \\ Many fitClasses can belong to Many users
-  fitClasses \* --- \* Instructors \\ Many fitClasses can belong to Many instructors
- Users \* --- \* Instructors \\ Many users can belong to Many Instructors
- Instructors \* --- \* Users \\ Many instructors can belong to many users




//MVP
// 1. User can create/register as a "Client" and login with the 
// registered credentials.(web, mobile)
// 2. User can create/register as an "Instructor" by entering an 
// dditional Auth Code during signup, and can login with the registered 
// credentials.(web, mobile)
// 3. "Client" and "Instructor" are both presented with the appropriate 
// onboarding walkthrough on first signin, with an option to skip 
// it.(UX, mobile)
// 4. Authenticated "Instructor" can create update and delete
// a "Class". At a minimum, each "class" must have the following 
// properties(web, mobile):

// * Name
// * Type
// * Start time
// * Duration
// * "Intensity" level
// * Location
// * Current number of registered attendees
// * Max class size

// 5. Authenticated "Instructor" can create "virtual" punch pass 
// categories for each type of group fitness class they offer 
// (yoga, insanity, RIPPED, HIGH, pilates, etc.)(mobile)
// 6. Authenticated "Client" can search for avaialble classes. 
// At a minimum, they must be able to search by the following 
// criteria(web, mobile):
// * class time
// * class date
// * class duration
// * class type
// * "Intensity level"
// * class location
// 7. Authenticated user can reserve a spot in a class with 
// available seats open, and can reschedule or cancel their 
// current reservation from the mobile app(mobile).//
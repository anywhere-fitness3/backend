# Go Fit Anywhere

![alt text](https://source.unsplash.com/user/victorfreitas/1200x400 "alt-text")

https://source.unsplash.com/user/victorfreitas/1200x400

https://app.dbdesigner.net/designer/schema/295702

ENTRY ENDPOINTS"

REGISTER

https://gofitanywhere.herokuapp.com/api/auth/register

Expects:
First name
Last name
Username
Password
Email


| Method  |  Endpoint | Output  | Description
| --- | --- | --- | --- |
| POST     |    /api/auth/register   | token  | Register new user   |

 LOGIN

https://gofitanywhere.herokuapp.com/api/auth/login

Expects:
Username
Password





[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dd40ae6-UNADJUSTEDNONRAW_thumb_2.jpg",
        "UNADJUSTEDNONRAW_thumb_2.jpg",
        1149,
        684,
        "#ededed"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "ENTRY ENDPOINTS"
}
[/block]

[block:api-header]
{
  "title": "REGISTER"
}
[/block]
https://gofitanywhere.herokuapp.com/api/auth/register

Expects:
First name
Last name
Username
Password
Email
[block:parameters]
{
  "data": {
    "h-0": "Method",
    "h-1": "Endpoint",
    "h-2": "Output",
    "0-0": "POST",
    "0-1": "/api/auth/register",
    "0-2": "token",
    "h-3": "Description",
    "0-3": "Register new user"
  },
  "cols": 4,
  "rows": 1
}
[/block]

[block:api-header]
{
  "title": "LOGIN"
}
[/block]
https://gofitanywhere.herokuapp.com/api/auth/login

Expects:
Username
Password
[block:parameters]
{
  "data": {
    "0-0": "POST",
    "0-1": "/api/auth/login",
    "0-2": "token and welcome message",
    "h-0": "Method",
    "h-1": "Endpoint",
    "h-2": "Output",
    "h-3": "Description",
    "0-3": "Registered user login"
  },
  "cols": 4,
  "rows": 1
}
[/block]

[block:api-header]
{
  "title": "UTILITY ENDPOINTS"
}
[/block]


[block:parameters]
{
  "data": {
    "h-0": "Method",
    "h-1": "Endpoint",
    "h-2": "Output",
    "0-0": "GET",
    "0-1": "/api/users",
    "0-2": "Gets array of users",
    "h-3": "Description",
    "0-3": "Registered Users",
    "1-0": "GET",
    "1-1": "/:id/classes",
    "1-3": "Gets classes based on user id",
    "1-2": "Gets an array of classes specific to user id",
    "2-0": "GET",
    "2-1": "/api/classes",
    "2-2": "Gets an array of classes",
    "2-3": "Listing of classes",
    "3-0": "DELETE",
    "3-1": "/api/:id/classes",
    "3-2": "Delete a class by",
    "3-3": "Using id it removes a class",
    "4-0": "PUT",
    "4-1": "/api/:id",
    "4-2": "Add a class",
    "4-3": "Adds a class"
  },
  "cols": 4,
  "rows": 5
}
[/block]

[block:code]
{
  "codes": [
    {
      "code": "\n",
      "language": "javascript"
    }
  ]
}
[/block]

[block:api-header]
{}
[/block]
Try dragging a block from the right to see how easy it is to add more content!

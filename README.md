# To-do-App
Deployment Link - https://to-do-app-dev.onrender.com
Here is the assignment of competishun . It is the full stack to do app where the user can manage his work / task .

Functionalities provided->

1.User can create a task.

2.User's tasks are displayed on the application on which he/she can mark the task as completed,edit some changes and also can delete the task.

3.Sorting of task is done on basis of timeline.

4.Tasks is associated with the logged-in user.

5.For error handling proper error messages and task updates are provided using toast.

Authentication->

1.SignUp,login,logout facility provided.
  
2.Only authenticated user can access and manage only their corresponding task.

3.Authentication is done using jwt token and password stored is in encrypted format.

4.Protected routes are implemented for accessing certain task.(see middlewares)

Security measures->

1.Password is encrypted and then stored.

Authentication flow->

1.Whenever an user login or signup a json token is created on the server side and is served on client side which is stored in local storage then with only that bearer token user is applicable to access the protected routes of creating and managing tasks if the token verifes during authentication.

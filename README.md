Steps:-
npm init -y

1 install express,dotenv,mongoose
2 dependecncy is the things that helps us to develop the application like they are prebuilt tools library or maybe frame work which helps us in development (we can relate this as lets say we are building a home and instead of building the bricks from scratch rather we purchases the already built bricks as dependency are the things that helps in development)
dev dependency= dev dependecy are the tools that only helps during the development rather than production where as only dependiency helps in both development and productions


Now inside index.js
import express
dotenv
create instance of 
create middleware

//Middleware 
if we have to execute something before route then we use middleware(so route lai chalauna vanda aagi if malai kei execute garna pareo vane middleware use huncha)

MIDDLEWARE SENARIO:-
Lets say some user did request and that request is accept and in that request there is no user details so to execute the route before we want the user detail and only execute the rote for that we use the Middleware where that will get the user data and passed that to route and then only the route executes



//Mongo db(mongo means huge)
as in mysql there used used to be Database then table and rows 
so in mongo db we have Database, collections, documents
collections my be like Employees, foods, Students and documents are the data inside them like Inside the Employee collection there is a employ called E3 then that is document 



Here we use bcrypt so that the password in databse should be in hash form  and simple hs function is there but we use async presave function so that the hasing calculation taks more time by cpu so this wont make server slow
and API for  Admin registration is http://10.13.173.8:8000/auth/Register
API for login for  ADMIN http://10.13.173.8:8000/auth/login
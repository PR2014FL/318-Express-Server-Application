# SBA 318 - Express Server Application

## Objectives of this assignment
- Create a server application with Node and Express.
- Create a RESTful API using Express.
- Create Express middleware.
- Use Express middleware.
- Use a template engine to render views with Express.
- Interact with a self-made API through HTML forms.

## Data Categories

I created 3 data categories: users, userProfilesPics, and userComments. The "/users" route allows for adding users (POST), editing user profiles (PATCH) and deleting users from the list (DELETE). 

## Middleware

As middleware, I'm using body-parser and 2 custom middlewares: one for logging requests and response events, and one for error handling of the users route.  

## Custom Template Engine

I created a custom template engine called "josue" to organize one rendered view, "/info". There is a link to this on the Home page found on https://localhost:3000/ once the express app is running. 


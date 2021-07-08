# HomeCooked

[Live](https://homecooked--app.herokuapp.com/#/)

Have you ever been in this situation? You want Pho, but with the love and care of a personal cook. You can't go to just any restaurant to get that, but you don't have someone you know that can create it either. You know what you do have? HomeCooked. The home food delivery service created for home cooks. Not only are you supporting your local community, but you're getting a great experience as well.

![homecooked home](https://user-images.githubusercontent.com/63718493/124969572-b7d5b500-dfdb-11eb-8168-514bbd4e4023.png)

------------------------------------------------------

## Overview 

HomeCooked will be a website similar to that of other food delivery services.  It will be a service that will allows users to search for scratch-made food around their area.  This will at first be secluded to the San Francisco-Bay Area, but hopefully, with time, be expanded to the national level (perhaps even international?). Users would be able to browse business listings and order food from those businesses.

-  [ ] User authorization: sign up and login 
-  [ ] Search functionality
-  [ ] Interactive web page for ordering meals 
-  [ ] Ability to create Reviews 
-  [ ] Cart integration 

#### Bonus Features 
-  [ ] Cook-side of user auth and profile page 
-  [ ] Extending locations to state, then national.


HomeCooked's core product is a web application, with a back-end build on MongoDB to save user auth, products, and business information. It will be built using the MERN stack (MongoDB, Express, React, and Node). 

## Backend: MongoDB/Express 

We will be using MongoDB for our database and Mongoose as our ODM. We store all information regarding users, products, and businesses in our database.

Express is used for our Node.js application framework.

## Frontend: React/Redux/Node.js 


We are using React to create and manage our UI components.

Redux is used to manage the global state. 

SCSS modules are used to style our components.

## Technical Challenges
* Using mapbox API to incorporate their map feature 
* Fetching the correct data for each cook
* Updating the cart as they add more items
* Implementing an effective search.

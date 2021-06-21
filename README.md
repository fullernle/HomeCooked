# Welcome to the HomeCooked

HomeCooked is an idea manifested from 4 great minds.  Have you ever been in this situation? You want Pho, but with the love and care of a personal cook. You can't go to just any restaurant to get that, but you don't have someone you know that can create it either. You know what you do have? HomeCooked. The home food delivery service created for home cooks. Not only are you supporting your local community, but you're getting a great experience as well.

***

### The Design Documents: 
* [Background and Overview](https://github.com/lefuller/HomeCooked/wiki/Background-and-Overview)
* [Functionality and MVP](https://github.com/lefuller/HomeCooked/wiki/Functionality-and-MVP)
* [Technologies and Technical Challenges](https://github.com/lefuller/HomeCooked/wiki/Technologies-&-Technical-Challenges)
* [Group Members and Work Breakdown](https://github.com/lefuller/HomeCooked/wiki/Group-Members-&-Work-Breakdown)

## Background

HomeCooked was evolved from an idea that's sweeping Instagram.  Everyone knows of DoorDash, GrubHub, UberEats, but what do those all lack in common that HomeCooked specializes in? The ability to bring home cooked meals straight to your door.  There are a lot of cooks at home who are great at what they do, but are unable to financially support their dreams of owning a restaurant, a food truck, etc.  HomeCooked allows these talented cooks to achieve their dream of sharing their cuisine with the world, just without all the startup fees.  

## Overview 

HomeCooked will be a website similar to that of other food delivery services.  It will be a service that will allows users to search for scratch-made food around their area.  This will at first be secluded to the San Francisco-Bay Area, but hopefully, with time, be expanded to the national level (perhaps even international?). Users can find product listings, with specific hours of when they're made, how they're made, and how long it takes the cook to make it.  This allows users to pre-plan their orders. Once you schedule your meal, it will be made for you fresh.  No need in worrying about how long the current line is.  You'll know when they're creating their meals, and how long it'll take. Minus the delivery time, of course.  In future installments, we'd like the expand this idea to cover both sides of the user experience.  One being the current customer, but the other being the actual cooks. 

-  [ ] User authorization: sign up and login 
-  [ ] Search functionality using location, currently only in Bay Area
-  [ ] Interactive web page for ordering meals 
-  [ ] Ability to create Reviews 
-  [ ] Cart integration 

#### Bonus Features 
-  [ ] Cook-side of user auth and profile page 
-  [ ] Extending locations to state, then national.

## Team Roles 
#### Team Lead/Frontend Lead
  * Fuller Le
#### Backend Lead
  * Jonathan Yu
#### Frontend Asst/Flex
  * Dennis Yu
#### Backend Asst/Flex
  * Ibrahim Ali

## Work Breakdown 

#### Day 1
 * Build backend skeleton -> **Jonathan**
 * Build frontend skeleton -> **Fuller**
 * Investigate map API -> **Ibrahim Ali**
 * Assist Jonathan -> **Dennis**

#### Day 2
 * Complete user auth back-end -> **Jonathan**
 * Complete user auth front-end -> **Fuller/Dennis**
 * Start styling front end -> **Fuller/Dennis**
 * Incorporate map API -> **Ibrahim Ali**

#### Day 3
 * Start back-end data for cook's profiles -> **Jonathan**
 * Start front-end for cook profiles -> **Fuller/Dennis**
 * Start implementing search for map API -> **Ibrahim Ali**

#### Day 4
  * Start back-end for cart -> **Jonathan**
  * Start front-end for cart -> **Fuller/Dennis**
  * Start implementing search with map API on front-end -> **Ibrahim Ali**

#### Day 5
  * Make seed/demo data for application -> **Jonathan**
  * Refine search with Mapbox API -> **Dennis/Ibrahim**
  * Clean up implementation of front-end -> **Fuller**
  * Complete Production README.md -> **Fuller**
  * Refine design and CSS -> **Dennis**
  * Finish testing and debugging -> **Everyone**

HomeCooked's core product is a web application, with a back-end build on MongoDB to save user auth and location data. The data will be collected via the Google Location API as its the best candidate for our needs. It will be built using the MERN stack (MongoDB, Express, React, and Node). 

### HomeCooked

#### Backend: MongoDB/Express 

We will be storing user data, cook's data, and using location data to find the nearest cooks.  We will also store user transactions.

#### Frontend: React/Redux/Node.js 

The landing page will prompt the user to enter their location.  It will search for all cooks within a certain range.  The user is able to look at each cook's personal page, where they will display their current dishes and hours they make said dish.  The user will then be able to add any dishes they'd like into the cart so they can checkout 

#### Technical Challenges
* Using mapbox API to incorporate their map feature 
* Learning how the backend works after a day of barely learning it.
* Fetching the correct data for each cook
* Updating the cart as they add more items
* Implementing an effective search.

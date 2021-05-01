# theNunGram

Social Networking app

# Getting Started
- Create .env file inside config
- Place MongoDB connection string value in .env with DB_URI as key name
    - e.g. DB_URI = CONNECTION_STRING 

A Leon Centric social media network. Users can post, upvote/downvote, see their feed of of their favorite leon moments!

ToDO:

    [x]Setup Server
        [x]Install Dependencies
        [x]Initialize Server
        [x]Connect To MongoDB
    []Model Setup
        A. What will we store?
            i. Users (Schema required)
            ii. Posts (Schema required)
            iii. Sessions (Auth route)
            iii. Local or Azure Login? (Auth route)
        B. Mongoose Connection
            [x]Connect MongoDB Atlas
        C. Model/Schema Setup
            []Setup/Create Mongoose models
            []Test Connection To DB
    []Controller Setup
       [] A. Route Assessment
            i. Has Frontend functionality be decided?
            ii. What Functionality?
            iii. What corresponding back-end functionality do we need?
            iiii. Ex: Creating a Post would be POST request to what route?
       [] B. Route Setup
            A) POSTS Path
            [] GET _ROUTE_
            [] POST _ROUTE_
            [] PUT _ROUTE_
            [] DELETE _ROUTE_

            B) USERS Path
            [] GET _ROUTE_
            [] POST _ROUTE_
            [] PUT _ROUTE_
            [] DELETE _ROUTE_

            C) OTHER PATHS (???)
            [] GET _ROUTE_
            [] POST _ROUTE_
            [] PUT _ROUTE_
            [] DELETE _ROUTE_
            [] AUTH _ROUTE_ //revisit when front-end starts
       []C. Keeping in line with Model, View, Controller
            i. How is our project directory setup?
            ii. Are keeping in line with the paradigm set by MVC?
    []Client-Side


    Notes

What packages might we need for social media app?
Express
Mongo
Mongoose  
 ejs
nodemon
dotenv
CSS package
Passport

Wireframe
What do we want to do?
Everything Leon
Handle images, video, and captures from Twitch
Bridget - image resizing for faster processing
Keep videos down to 15 seconds
Up votes and down votes for post
Use happy face - Bob - Leon emote
Use sad face - John - Leon emote
Instead of hearting/favoriting a photo, you get a Nun emote
Pull Leon’s twitter feed
“Its not stalking, it’s networking"
Color scheme
blue
Brown/green
Little splash of white
Log-in
Sign-up
Simple feed
Home - Leons Twitter
Post - Own post
Random post - math.random
Mongoose Schema
Name
Email
Profile Pic
Quick bio

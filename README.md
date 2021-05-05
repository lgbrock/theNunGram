# theNunGram

Social Networking app

A Leon Centric social media network. Users can post, upvote/downvote, see their feed of of their favorite leon moments!

# Getting Started

- NPM INSTALL
- Create .env file inside config and add following as key = value like shown in the example .env file found inside
- Place MongoDB connection string value in .env with DB_URI as key name

  - PORT = 3000
  - DB_STRING = your database URI
  - CLOUD_NAME = your cloudinary cloud name
  - API_KEY = your cloudinary api key
  - API_SECRET = your cloudinary api secret

# Changes

New Route Structure

A) Home/Index
a. Index - Landing Page
b. Profile - Gets A users Profile
c. Feed - A feed of ALL post

B) Post
a. :id - Gets a Post by it's ID
b. addPost - creates a POST
c. Random - gets a post by a random id
c. Delete? - Do we need a delete path?

C)Auth Routes
a. /auth
b. /auth/callback
c. /logout

# TODO

[]Client-Side
[]Expand Back-End
A. Add routes (PUT REQUESTS) To upvote/downvote imgages on singular posts.
i. These would be PUT REQUEST.
ii. May need 2, depending on front-end(like/dislike)

B. allow editing of user bio
[] display on profile, and allow PUT req to edit text
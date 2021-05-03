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

1. Deleted Users Route. This was a useless route and not needed. Was being used to test server and DB connections.

2. Completely Changed project structure.
   a. On Login, youll be taken to each user's own profile page. Here they can see info about the user, and a list of all the post that user has made

b. Can See individual Post Pages. If you click a post's images, that will take you an individual post page

b. The addPost form action is now on the user's profile page. Due to being able to get each post by their own post ID, a GET request to a addPOST Page on the POST route was giving errors

3. New Route Structure

A) Home/Index
a. Index - Landing Page
b. Profile - Gets A users Profile
c. Feed - A feed of ALL post

B) Post
a. :id - Gets a Post by it's ID
b. addPost - creates a POST
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

B. Add a Quotes Route(GET/POST)
i. Simple MVC model Setup for GET/POST requests on a Quote Route
ii. Need to add a POST SCHEMA and POST view/partial/something for users to add quotes
iii. Need to add several quotes to test random fetching
iiii. Functionality also depends on Front-end Client
iiiii. Good Practice for Review on Back

c. Fix Video Hosting!!!!!!!!!!!!!!!
We have an issue that needs fixing when it come to hosting videos on our site. When using Cloudinary to host videos, we can video size errors. This is with a downloaded 30secs twitch clip (mp4). Twitch also allows us to directly src clips into iframes but as you can see they are not working.

      I can think of two fixes:

      1) I need help parsing through cloudinary documentation to see how exactly to resize and reformat videos on upload. Which might be hard becasue the only options i saw to pass were for single upload types not ones that can accept pics and video but i could be wrong.  I parsed through the documentation earlier but to no avail. I need help on this.

      https://cloudinary.com/documentation

      2) We fix the current way we doing that now. I will link the twitch dev documentation but i wasnt able to get it work. I have also left documentation in the code to give you a general idea of what each part is doing.

      If we try going this way, we need a way to fix the storing of the POST schema in the DB. With the way its set up now, a post.body has to go through several middleware(multer, cloudinary) before being created. Problem is, what if the user gives a clip(pastes a URL in) but provides no image. This throws us back an error on POST creation. Look at the Post.create method below:

       const result = await cloudinary.uploader.upload(req.file.path); <--------- No file === no Result
       const post = await req.body;

      await Post.create({
        caption: post.caption,
        image: result.secure_url,
        clip: post.clip,
        cloudinaryId: result.public_id,
        user: req.user.id,
        author: req.user.displayName,
      });

      If there is no file uploaded at time of POST creation, it just throws us back an error. I tried looking into conditional DB schema but the error lays with the way cloudinary works. So we either need to find a way to do some conditional logic or fix cloudinary encoding options.

      I know its alot, but have any questions please ask and will explain furthur. Thanks. J.V

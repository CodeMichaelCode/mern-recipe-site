# RecipeBookmark

I used the full MERN stack to create this app. I currently host the API on Heroku and Frontend on Netlify. RecipeBookmark uses a DB for user validation and JWT for authentication to keep track of users. RecipeBookmark takes advatage of this by assigning post to the correct users and creating a personal recipe section for each user. Having this functionality was especially important because now a user can preview there favorite recipes with a glance. Each recipe card provides more information than a traditional bookmark would. On top of that this app can do all CRUD operations. Allowing users to edit post they previously created.

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![RecipeBookmark  Homepage](https://recipe-bookmarks.s3.amazonaws.com/recipebookmarksnapshot.jpg)

## How It's Made:

**Tech used:** JSX, Style Components, JavaScript, React, Redux, NodeJs, JSON Web Token and MongoDB.

## Optimizations

-Use multer to allow users to upload images to the AWS S3 Bucket I created for this site
-Optimize the edit form to retain information about the post being edited. (Currently flushing this out with the useForm hook)
-Create an alternative method to add post like a chat bot that ask the users questions
-Build on the like a post system
-Create a section to link to the full recipe with directions so If a user decides to make the recipe they can go to the accredited page.

## Lessons Learned:

I learned a lot while creating this project. The most important lessons were optimization and organization. Some struggles I ran into while creating this project were updating the axios request URLs to the new Herkou URL for my API. If I used context or tradtional prop drilling I could have updated the URL in one place. I also learned a lot more about JWT. As much as I enjoyed learning about JWT I would use session id's for my next MERN project.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Tom's Tavern Trove:**
Live Link - https://www.codemichaelcode.com/toms-tavern-trove/  
GitHub Repo - https://github.com/CodeMichaelCode/LocalBrewApiProject  

**Plastic Money Bank:**
Live Link - https://www.codemichaelcode.com/plastic-money-bank/  
GitHub Repo - https://github.com/CodeMichaelCode/Banking-LP  

**Person Portfolio:**
Live Link - https://www.codemichaelcode.com/plastic-money-bank/  
GitHub Repo - https://github.com/CodeMichaelCode/Portofolio2022  

# kwikPals - A social Network API on MongoDB
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## DESCRIPTION

Welcome to kwikPals!  Want a simple and 'kwik' alternative to facebook!?  You've found it!

kwikPals is a social network that allows users to perform the following features:
* add friends
* remove friends
* create thoughts
* modify thoughts
* delete thoughts
* create reactions to thoughts
* remove reactions to thoughts
* change user information
* and many intricacies within the above features, like trim, and formatting date to be user friendly!

Built using Express.js for routing, a MongoDB database, and the Mongoose ODM.  In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, `momentJS` was employed to format timestamps.  Seed data is provided and a walkthrough video that demonstrates functionality of kwikPal is also made available.  A link to the video is added below in the [Walkthrough](#walkthrough) section.

This document provides you with all the information you will need to create your own feature-rich API in no time!


# TABLE OF CONTENTS

1. [Installation](#installation)
2. [Links](#links)
3. [Usage](#usage)
4. [Walkthrough](#walkthrough)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)


# INSTALLATION
Before installing, ensure that:
1. NodeJS is installed
2. MongoDB is installed 

To instal kwikPals:
1. Download the source from the gitHub site (see link to repo in the [LINKS](#links) section).
2. In the root folder, open terminal and run `npm install`
3. Then run `npm ./seed/seed.js`
4. Then run `npm start`

The server will come online and be available on port 3001.


# LINKS
1. The source code is available in the GitHub repository - click [here](https://github.com/vasudevap/kwikPals.git) to go to the repo.
2. The video walkthrough of the application is available in the __Walkthrough__ section of this document below - click [here](#walkthrough) to go there.

# USAGE
To use the api, various routes have been made available.

For users, routes available:
1. GET all users at /users
2. GET one user by id at /users/:id
3. PUT (update) one user by id at /users/:id
5. POST (create) one user at /users
6. DELETE (remove) one user by id at /users/:id

For friends, routes available:
1. PUT user to create one friend at /users/:userId/friends/
2. DELETE user to remove one friend by id at /users/:userId/friends/:friendId

For thoughts, routes available:
1. GET all thoughts at /thoughts
2. GET one thought by id at /thoughts/:id
3. PUT (update) one thought by id at /thought/:id
5. POST (create) one thought at /thought
6. DELETE (remove) one thought by id at /thought/:id

For reactions, routes available:
1. PUT thought to create one reaction at /thoughts/:thoughtId/reactions
2. DELETE thought to remove one reaction by id /thoughts/:thoughtId/reactions/:reactionId
  

# WALKTHROUGH
1. Click [here](https://drive.google.com/file/d/1gE3j2QTVp2Y1t0Pxfhbyi8itdW04Vd78/view?usp=drive_link) for video walkthrough covering application __server__ start.
2. Click [here](https://drive.google.com/file/d/1K032hwES7c8AygGyd4YxuGsbDjFXzi2f/view?usp=drive_link) for __user__ routes video walkthrough covering:
    - GET user
    - GET all users
    - POST a user
    - DELETE a user
3. Click [here](https://drive.google.com/file/d/1B4oB1E1dOnCcpSbKoW0kNKOPs5OqAZx0/view?usp=drive_link) for __user__ route video walkthrough covering PUT to alter user info.
4. Click [here](https://drive.google.com/file/d/1mf0CdJDQ1nv7Vn0HiTAUV-UaY6tyc4p5/view?usp=drive_link) for __thought__ routes video walkthrough covering:
    - GET thought
    - GET all thoughts
    - POST a thought
    - DELETE a thought
5. Click [here](https://drive.google.com/file/d/1gvabim1r-f62uEnMNJecoUPS07CPFHzm/view?usp=drive_link) for __thought__ route video walkthrough covering PUT to alter thought text.
6. Click [here](https://drive.google.com/file/d/1J4-vxouTlGDarzL-uUlY8wDxO19fOKSa/view?usp=drive_link) for __friend__ route video walkthrough covering _adding_ and _removing_ a friend to a user.
7. Click [here](https://drive.google.com/file/d/15IbZPcA1IWPUIjOzRO3lWblrW0c-qXHL/view?usp=drive_link) for __reaction__ route video walkthrough covering _adding_ and _removing_ a reaction to a thought.


# CONTRIBUTING

Welcome, O' enthusiastic one!  You have arrived at your calling - help is much appreciated!  Feel free to contact me at my domicile listed at the end of this document!  Join me in my pursuit to provide the world friends, thoughts, and reactions!


# TESTS
Testing has been conducted using insomnia and further '_jest_' test scripts may be made available.  Please contact me for more.


# LICENSE
[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)
 General Public License is a free, copyleft license for software and other kinds of works.

The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.

To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.

For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.

Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.

Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.


# QUESTIONS
Please reach me at [vasudevap](https://github.com/vasudevap) or at my email at prashant.vasudeva@gmail.com
---


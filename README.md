# hcde438-final-project
Final project for HCDE 438: Web Technologies. Bird quiz!

Created Fall 2024 (November - December). 
HCDE 438 Project Proposal: Bird Photos Quiz

**Overview**
I love birdwatching and traveling to go look for birds, but that also means I need to brush up on my identification skills to make it easier for me out in the field. Sometimes, it’s helpful to be able to quiz myself on regional birds to test my knowledge or see where I’m lacking. While there is currently an abundance of field guides and species information, it’s harder to find bird quizzes, especially those that let you select a region. This website will allow users to input a location to generate a quiz of 10 pictures of different species that have been seen within 30 miles and the last 30 days relative to the location. 

**Detailed description**
Users will be able to enter a location name or coordinates to generate 10 random images of species that have recently been seen in that area. Each question is worth three points (one point for correct order, one for family, and one for species). After the 10 questions are answered, users will see their score out of 30 and have the option to replay using the same parameters or to start over with a new location. 

**Users**
The intended audience is any novice or experienced birdwatcher looking to test their knowledge of bird identification in a given part of the world. It can also serve as a learning and testing tool for anybody trying to learn species taxonomy. 

**Technology**
eBird API: https://documenter.getpostman.com/view/664302/S1ENwy59#4e020bc2-fc67-4fb6-a926-570cedefcc34 
Use coordinates or hotspot name to retrieve list of recently sighted species
Get taxonomy information about species
Macalay library:
Retrieve random images of a species to display
If this doesn’t work, Wikimedia also has images:  https://api.wikimedia.org/wiki/Reusing_free_images_and_media_files_with_Python 
React
React Bootstrap for components 
Firebase
Autocomplete (to let users type and select a species): https://github.com/yury-dymov/react-autocomplete-input 

**Stretch Goals**
Incorporate vocalizations (and let users select “calls only” instead of calls and pictures)
 https://xeno-canto.org/explore/api 
Allow for “year round” sightings
Allow users to adjust radius around location, or pick a region instead of just a point
Allow users to select a location from an interactive map, then see the location of the featured image(s) on the same map
Allow for “species only” (do not include order and family)
Allow users to save their scores to their name and display a leaderboard

**Timeline**
Week 1: Research components and APIs, understand how everything will fit together
Week 2: Build a static version with state variables and props
Week 3: Build the dynamic version and improve UI
Week 4: Stretch goals and debugging


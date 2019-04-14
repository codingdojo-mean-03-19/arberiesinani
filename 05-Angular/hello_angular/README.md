# Coding Dojo Bootcamp Assignment
## MEAN / Angular / Hello Angular

### Assignment details
* Have Angular served by an Express project

Create a new Angular project served by your previously created Restful Task API assignment. The end result of this should be one Express project which is serving the 'dist' folder within its Angular directory. Upon reaching the server's root directory (e.g. `'http://localhost:8000'`) we should be presented with the Angular app's initial welcome page (the default page for a new Angular project).

**Bonus challenge** : Change the initial welcome page message to say "Welcome to MEAN" without directly altering the HTML.

- [x] Navigate inside your Restful Task API assignment
- [x] Use ng new to build an Angular project within the Restful Task API assignment, on the same level as server.js
- [x] Alter server.js so that it finds static files within the dist folder of your Angular project
- [x] Build Angular and run your Node server

========================================================
               MoneyMaid - Budgeting Tool
========================================================

--------------------------------------------------------
                      User Setup
--------------------------------------------------------

As this is a web application there is no setup required
beyond navigating to the hosted URL.

Must use Google Chrome.

--------------------------------------------------------
             Development Environment Setup
--------------------------------------------------------

1. You'll need to install npm:
   http://blog.npmjs.org/post/85484771375/how-to-install-npm
   
2. Unzip the MoneyMaid.zip file into desired directory.

3. In Command Prompt navigate to the `client/` directory
   and run `npm install` to download all of the project
   dependencies.

4. Once that's done, there are two commands avaiable
   for building the project:
   - `npm run dev` will serve the project at "localhost:8080",
     and dynamically update the served site when the source
     files change.
   - `npm run build` will output the static `bundle.js`
     file into the `public/` folder. After building like this,
     the site can be served statically by simply navigating to
     `index.html`.

 ----- If you wish to understand the project -----

  We recommend reading the following source files (in `client/`)
  to get an understanding of the project structure:

  src/index.js                            # Project root.
  src/containers/*Name-of*Container.js    # Root "containers" 
                                          # establish state
                                          # and action associations.
  src/views/dashboard/*Name-of*View.js    # View of any application 
                                          # page.

--------------------------------------------------------
                Application Instructions
--------------------------------------------------------

1. Open up Google Chrome.

2. Navigate to the following url:
   https://www.csh.rit.edu/~nickm/projects/ux/#/
   
3. Upon reaching the MoneyMaid splash page
   click "Get Started".
   
4. Here you can either "Create Account" or "Login"
   We have an example account if you wish to use 
   login rather than create account:
   
   Email:      john@example.com
   Password:   password12345
   
   Note: Both "Login" and "Create Account" will be
   preloaded with two financial plans and pre-exisiting
   transaction data to show the current state of our
   application.
   
5. From here feel free to navigate the site using the
   navbar and click through any of the action buttons
   of the application.
   
--------------------------------------------------------
        How To? - Completing Our Decided Tasks
--------------------------------------------------------

1. Signup - Fill out the "Create Account" form on the
   login and signup page.

2. Login - Fill out the "Login" form on the
   login and signup page.

3. Create a Plan - In the "Financial Plans" dropdown
   click "+ New Plan". The popup is non-functional but
   explains what would occur.

4. Delete a Plan - In the "Financial Plans" dropdown
   click "Remove" on the desired plan. The popup 
   confirmation will not actually delete the plan as
   it is our "dummy data" but functions as you would
   expect.

5. Add a Transaction - On the "Transactions" page click
   the "Add Transaction" button. The form that comes up
   is fully functional and will update your transactions
   list, graphs, and dashboard.

6. Generate Report - On the "Graphs and Reports" page,
   under the graph, click the "Generate a Report" button.
   The popup is non-functional but explains what would
   occur.

7. Add a Collaborator - On the "Collaborators" page,
   click the "Add Collaborator" button. The popup is
   non-functional but explains what would occur.

8. Revoke Collaborator Access - On the "Collaborators"
   page, click the "Revoke Access" button. The
   confirmation popup will not actually remove a 
   collaborator as it is our "dummy data" but functions
   as you would expect.

--------------------------------------------------------
                 Unsupported Features
--------------------------------------------------------
Note: We recognize that this may be more than desirable
      however the scale of the project we have picked
      was much larger than we had anticipated and within
      our time constraints we could only complete so much.

1. Notifications - These were never implemented as they
   did not pertain to our main tasks and it was decided
   as a team it was no longer a pertanent feature.
   
2. General Note on Functionality - The following buttons
   exist, are clickable, and launch a popup to simulate
   the user experience; however, the backend functionality
   is not present to actually do said action as the project
   only required prototyped user interface:

    New Plan
    Delete Plan
    Generate Report
    Add Collaborator
    Revoke Access (For Collaborator)

3. Date Picker on Graphs - Does not function, purely there
   as part of the user experience simulation.
   
4. Dashboard Collaborator Updates - Intended to show the last
   action made by a plan collaborators.
   
--------------------------------------------------------
                      Known Bugs
--------------------------------------------------------

1. Budget Bars - Don't properly size up based on the
   percentage of the budget filled.
   
2. Logout Button - Occasionally takes you to a white
   screen. Temp Fix: Reload when it occurs.
   
3. Add Transaction - Any date is acceptable. Therefore
   adding a date such as 05/12/192834746738 will be
   accepted and then it will break the Graphs.
# Jira ticket tracking

- **Features**, **Bugs**, etc will be tracked through **Jira**
- This document outlines the proper github workflow to facilitate that tracking

### Completing a ticket

- When a new ticket is created, it will have a ticket number such as CV-15 and a title like **"Setup Jira Automation"**.
- Create a new branch from **dev** inluding the ticket number in the name in the format "feature - ticket number"
  - Example **Jira-Automation-CV-15**
  ```sh
  $ git checkout -b Jira-Automation-CV-15
  ```
- You can now begin working from this branch and add commits, each commit will be reflected in **Jira** automatically for project tracking.
- A new branch will automatically move that ticket into the **IN PROGRESS** phase.
- Pull requests will also be tracked and closing(merge to dev) a PR will move the ticket to the **DONE** phase

## Overview

Status Report is the web application to replace spreadsheet based reporting system in Online Program Development

---

## Usage
### Reporting

1.  To report the work or task simply fills out the forms. The course-related form is "COURSE" and Administration related form is "ADMINISTRATION." Once filling out the form, click "ADD TASK" and the task will go to Summary. A task can be added to Summary more than one.
2.  Review the tasks that are added to Summary.
3.  Type your name on the input box. Your name should be showed up automatically
4.  If everything looks good, click the "SUBMIT" button.

### Searching

- Two searching options are provided: search by user and search by course. Choose one of the options to search.
- User Search:
  1.  Type valid start date and end date. The dates are based on task completion dates not reporting dates.
  2.  Type username. The username should be showed up automatically.
  3.  Course task will show up in Course task table and admin task will show up in Admin task table
- Course Search
  1.  Type valid start date and end date. The dates are based on task completion dates not reporting dates.
  2.  Choose search type
  3.  Type valid program name or course number

---

## Development

### Stack

1. Front-End: React

2. CSS Preprocessor: SASS
    - (followed the 7-1 pattern [Information about 7-1](https://sass-guidelin.es/#the-7-1-pattern))

3. Back-End: Node, Express

4. Database: MySql

5. API

- material-ui: Dialog component is used to handle popup menu.
- react-autosuggest: it is used throughout the application to handle auto-completion.
- react-table: it is used in search page to show the data in the table.
- react-transition-group: it is used to animate components.

---

## File structure

The application has two main pages which are Report page and Search Page.

### "src" folder has three folders: component, css and img

- "component" contains javascript files for React.
  - in "component" folder it has three folders: "helper", "report", "search"
  - to change, message on popup menus such as course guide and admin guide, modify Message.js file in helper folder.
- "css" contains all of the files that are related to styling.
- "img" contain one png file for the background image.

---

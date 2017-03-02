To Do List Example using Angular 2

Requirement: 

It will be a TODO list. Hope everyone is familiar with the concept of a TODO list.

For storing data, we are going to use a singleton service for now, which will later be replaced with rest API.

In the application we'll have two tabs, SHOW TASKS and CREATE TASK. You can add them in navbar or header whatever you like. 
On selecting them, rest of the page should be updated respectively.

On clicking CREATE TASK, user should get a form to add a new task with the following fields :
1. Date
2. Title
3. Description
4. Priority ( should be a dropdown with low, medium and high options)

On clicking SHOW TASKS, user should be displayed all the stored tasks, and each task should have two buttons, EDIT and DONE.

On clicking DONE, it should remove the task as it is completed.
On clicking on EDIT, user should be redirected to the same form with the fields auto filled in the form which he can then edit.
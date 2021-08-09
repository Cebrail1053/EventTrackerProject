# EventTrackerProject

### Full-Stack Spring/REST/JPA Project for Skill Distillery

## Overview
Habit Tracker is a web-application that allows you to keep track of habits to help keep you accountable.

## REST Endpoints
| Method | URI                | Request Body | Response Body |
|--------|--------------------|--------------|---------------|
| GET    | `/api/habits`      |              | Collection of representations of all _habit_ resources|
| GET    | `/api/habits/{id}` |              | Single habit entity associated with given id |
| POST   | `/api/habit`       | Habit JSON   | Creates a new habit  |
| PUT    | `/api/habit`       | Habit JSON   | Updates details for existing habit |
| DELETE | `/api/habits/{id}` |              | Deletes habit associated with id

<img src='https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png' width=150 style="float: left"/>
<img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png' width=120 style="float: left"/>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png' width=100 style="float: left"/>
<img src='https://wikitech-static.wikimedia.org/w/images/wikitech/8/8e/Mysql_logo.png' width=150 style="float: left"/>
<img src='https://voicefoundry.com/wp-content/uploads/2018/09/feature-aws.jpg' width=200 style="float: left"/>


## Technologies Used
* Java
* Spring Boot
* JPA
* MySQL
* AWS
* AJAX
* Javascript

## How to Run
1. Upon loading the webpage, you're presented with a table of all Habits that currently exist and a form that allows the user to add a new Habit they would like to track.
2. The table has a button labeled "View Details" that shows the details in another HTML form for a single habit including a start date and updated date.
3. After clicking the "View Details" button, a user can change and update any fields within the form to better track their habits.
4. The "Delete" button from the table allows the user to delete, or no longer track, the Habit of their choosing.

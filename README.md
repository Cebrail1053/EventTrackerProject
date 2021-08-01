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

## Technologies Used
* Java
* Spring Boot
* JPA
* MySQL
* AWS

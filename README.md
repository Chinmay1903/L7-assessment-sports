# L7-assessment-sports

## Overview
**SportsApp** is a web application for managing sports-related data. It includes features for managing matches, teams, player details, and areas. The application is divided into two main parts: the frontend and the backend.

### Frontend:
- **Framework**: Vue 3
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm

### Backend:
- **Framework**: Django
- **API Framework**: Django REST Framework
- **Database**: Sqlite
- **Language**: Python

---

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.10+
- Node.js (for frontend)
- Docker (optional, for containerized environment)
- Docker Compose (if using Docker)

---

## Setup Steps

### 1. Clone the Repository
To get started, clone the repository:

```bash
git clone git@github.com:Chinmay1903/L7-assessment-sports.git
```

### 2. Get inside the Directory

```bash
cd L7-assessment-sports
```

### 3. Building and Running in Docker
For building the Containers, this app is Docker based build

```bash
docker-compose up --build
docker-compose up # if want to only run the container without bulding
```
For stopping the container

```bash
docker-compose down
```

### 4. Running Migrating and Creating Django Super User
After completing the container build, open a new duplicate terminal.

Run below docker command in new terminal to run migration

```bash
docker-compose exec backend python manage.py migrate
```


Run below docker command in new terminal to create new django admin super user

```bash
docker-compose exec backend python manage.py createsuperuser
```

### 5. Open the App in Browser
Using url [http://localhost:8080/](http://localhost:8080/) to run frontend in browser.


Using url [http://localhost:8000/admin/](http://localhost:8000/admin/) to login into django admin and adding data to Areas, Teams, Players and Matches.


Using url [http://localhost:8000/swagger/](http://localhost:8000/swagger/) to open Swagger UI for API documentation.



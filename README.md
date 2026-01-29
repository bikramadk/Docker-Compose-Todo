## Architecture Overview

This application follows a multi-container architecture using Docker Compose.
- Nginx acts as a reverse proxy and the single public entry point
- The backend API is isolated and communicates internally
- MongoDB is not exposed publicly and uses persistent storage
This design mirrors real-world production systems.

#1 Project Structure
docker-compose-todo/
├── backend/                  
│   ├── Dockerfile            
│   ├── package.json          
│   ├── package-lock.json     
│   └── server.js             
│
├── frontend/                
│   ├── index.html            
│   └── app.js                
│
├── nginx/                    
│   └── default.conf          
│
├── .gitignore                
├── docker-compose.yml        
└── README.md                 

#2 Request / Traffic Flow
  a. User opens the application in the browser:   http://localhost:8081

#3 ▶️ How to Run the Project
Prerequisites:
--Docker
--Docker Compose (v2+)
Steps: 
 -git clone
 -cd docker-compose-todo
#4 Build and start all services
docker compose up --build

Open in browser:  http://localhost:8081
To stop the application: docker compose down

#5📦 Tech Stack :
Docker & Docker Compose
Nginx (reverse proxy)
Node.js + Express
MongoDB
HTML / JavaScript (frontend)

#6🎯 Purpose :
This project is part of a Junior DevOps learning journey and is designed to:
Demonstrate infrastructure understanding
Show real-world container orchestration patterns
Serve as a portfolio project on GitHub

#7👤 Author :
Bikram Raj Adhikari
Aspiring DevOps Engineer
    

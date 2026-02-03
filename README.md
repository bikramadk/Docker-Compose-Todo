##  Docker Compose Todo Application

A production-ready todo application demonstrating modern containerization practices with Docker Compose, featuring a complete multi-container architecture with Nginx reverse proxy, Node.js backend, and MongoDB database.

---

##  Architecture Overview

This application follows a **multi-container architecture** using Docker Compose, mirroring real-world production systems:

- **Nginx** acts as a reverse proxy and the single public entry point
- **Backend API** is isolated and communicates internally
- **MongoDB** is not exposed publicly and uses persistent storage

```
┌─────────────────────────────────────────────────────────┐
│                     User Browser                        │
│                 http://localhost:8081                   │
└───────────────────────────┬─────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                    Nginx (Port 8081)                    │
│                   Reverse Proxy                         │
└───────────┬─────────────────────────────────────────────┘
            │
            ├─── /          ──────────────────► Frontend
            │                                   (Static Files)
            │
            └─── /api/*    ──────────────────► Backend
                                                (Node.js + Express)
                                                     │
                                                     ▼
                                            ┌────────────────┐
                                            │    MongoDB     │
                                            │  (Port 27017)  │
                                            └────────────────┘
```

---

##  Project Structure

```
docker-compose-todo/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend/
│   ├── index.html
│   └── app.js
├── nginx/
│   └── default.conf
├── .gitignore
├── docker-compose.yml
└── README.md
```

---

##  Request / Traffic Flow

1. **User** opens the application in browser: `http://localhost:8081`
2. **Nginx** receives the request and routes it:
   - Static files (`/`) → Frontend HTML/JavaScript
   - API calls (`/api/*`) → Backend Node.js service
3. **Backend** processes requests and communicates with MongoDB
4. **MongoDB** stores and retrieves todo items
5. **Response** flows back through the same path to the user

---

##  How to Run the Project

### Prerequisites

- **Docker** (v20.10 or higher)
- **Docker Compose** (v2.0 or higher)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd docker-compose-todo
   ```

2. **Build and start all services**
   ```bash
   docker compose up --build
   ```

3. **Open in browser**
   ```
   http://localhost:8081
   ```

4. **To stop the application**
   ```bash
   docker compose down
   ```

5. **To stop and remove volumes** (clean restart)
   ```bash
   docker compose down -v
   ```

---

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| **Docker** | Container runtime |
| **Docker Compose** | Multi-container orchestration |
| **Nginx** | Reverse proxy and web server |
| **Node.js + Express** | Backend API server |
| **MongoDB** | NoSQL database |
| **HTML + JavaScript** | Frontend interface |

---

##  Key Features

-  Multi-container architecture with Docker Compose
-  Nginx reverse proxy for routing
-  Isolated backend service (not publicly exposed)
-  Persistent MongoDB storage
-  Production-ready container patterns
-  Environment-based configuration
-  Clean separation of concerns

---

##  Development

### View Logs

```bash
# All services
docker compose logs -f

# Specific service
docker compose logs -f backend
docker compose logs -f nginx
docker compose logs -f mongodb
```

### Rebuild After Changes

```bash
docker compose up --build
```


##  Purpose

This project is part of a **Junior DevOps learning journey** and is designed to:

- Demonstrate infrastructure understanding
- Show real-world container orchestration patterns
- Serve as a portfolio project showcasing DevOps skills
- Practice Docker Compose networking and service communication
- Implement reverse proxy patterns with Nginx

---

##  Configuration Files

### `docker-compose.yml`
Orchestrates all services, defines networks, volumes, and dependencies.

### `nginx/default.conf`
Configures reverse proxy rules and routing logic.

### `backend/Dockerfile`
Defines the Node.js backend container image.

---

##  Security Considerations

- MongoDB is **not exposed** to the host machine
- Backend API is only accessible through Nginx
- Services communicate over internal Docker network
- Port 8081 is the only public entry point

---

##  Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

##  Author

**Bikram Raj Adhikari**  
*Aspiring DevOps Engineer*

- GitHub: [@bikramadhikari](https://github.com/bikramadhikari)
- LinkedIn:www.linkedin.com/in/bikram-raj-adhikari


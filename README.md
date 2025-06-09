# RMS MongoDB Container Setup

This folder contains the configuration for the MongoDB container used by all other RMS (Remote Monitoring System) containers. It provides a centralized database service for storing and managing application data.

---

## 📄 Files Included

- **docker-compose.yml**  
  Defines the MongoDB container setup, including container name, image, ports, volumes, and initialization scripts.

- **init.js**  
  A MongoDB JavaScript initialization script that runs when the container is first created. It typically sets up initial databases, collections, and optionally adds test data or users.

---

## 📦 How to Use

1. **Navigate to this directory in your terminal**  
   ```bash
   cd /path/to/this/folder

   type the docker command docker-compose up -d --build

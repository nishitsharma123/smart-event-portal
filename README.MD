# 🎉 Smart Event Portal - DevOps CI/CD Project

A complete DevOps implementation of the **Smart Event Portal** using **Node.js, Docker, Kubernetes, Jenkins, and GitHub**. This project demonstrates an end-to-end Continuous Integration and Continuous Deployment (CI/CD) pipeline that automatically builds, pushes, and deploys application updates to a Kubernetes cluster.

---

# 📌 Project Overview

The Smart Event Portal is a web application for managing and browsing events. The project focuses on implementing industry-standard DevOps practices by automating the software delivery lifecycle.

The CI/CD pipeline automatically:

- Pulls the latest source code from GitHub
- Builds a Docker image
- Pushes the image to Docker Hub
- Deploys the latest version to Kubernetes
- Performs a rolling update without downtime

---

# 🚀 Features

- Event Management Portal
- Responsive Web Interface
- Docker Containerization
- Kubernetes Deployment
- Rolling Updates
- CI/CD using Jenkins
- Docker Hub Integration
- Automatic Build Trigger (Poll SCM)
- NodePort Service
- Horizontal Scaling
- Deployment Verification

---

# 🛠 Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js

## DevOps

- Git
- GitHub
- Docker
- Docker Hub
- Kubernetes
- Minikube
- Jenkins
- WSL Ubuntu

---

# 📂 Project Structure

```
smart-event-portal/
│
├── backend/
│   ├── app.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── index.html
│   ├── history.html
│   ├── css/
│   └── images/
│
├── kubernetes/
│   ├── deployment.yaml
│   └── service.yaml
│
├── Dockerfile
├── Jenkinsfile
├── .dockerignore
├── .gitignore
└── README.md
```

---

# ⚙ Prerequisites

Install the following software before running the project.

- Git
- Node.js (20+)
- Docker Desktop
- Docker Hub Account
- Minikube
- kubectl
- Jenkins
- WSL Ubuntu

---

# 📥 Clone Repository

```bash
git clone https://github.com/nishitsharma123/smart-event-portal.git

cd smart-event-portal
```

---

# ▶ Run Application Locally

Install dependencies

```bash
cd backend

npm install
```

Run server

```bash
node app.js
```

Application

```
http://localhost:3000
```

---

# 🐳 Docker

## Build Image

```bash
docker build -t nishitsharma128/smart-event-portal:v1 .
```

---

## Run Container

```bash
docker run -d -p 3000:3000 nishitsharma128/smart-event-portal:v1
```

---

## Verify

```bash
docker ps
```

---

# ☁ Push Image to Docker Hub

Login

```bash
docker login
```

Push

```bash
docker push nishitsharma128/smart-event-portal:v1
```

Docker Hub Repository

```
nishitsharma128/smart-event-portal
```

---

# ☸ Kubernetes Deployment

Start Minikube

```bash
minikube start
```

Create Namespace

```bash
kubectl create namespace smart-event
```

Deploy Application

```bash
kubectl apply -f kubernetes/
```

---

# Verify Deployment

Deployment

```bash
kubectl get deployment -n smart-event
```

Pods

```bash
kubectl get pods -n smart-event
```

Service

```bash
kubectl get svc -n smart-event
```

---

# 🌐 Access Application

```bash
minikube service smart-event-service -n smart-event
```

or

```
http://<minikube-ip>:<node-port>
```

---

# 📈 Scaling

Increase replicas

```bash
kubectl scale deployment smart-event-deployment \
--replicas=5 \
-n smart-event
```

Verify

```bash
kubectl get pods -n smart-event
```

---

# 🔄 Rolling Update

Deploy new Docker image

```bash
kubectl set image deployment/smart-event-deployment \
smart-event=nishitsharma128/smart-event-portal:v2 \
-n smart-event
```

Monitor rollout

```bash
kubectl rollout status deployment/smart-event-deployment \
-n smart-event
```

---

# ↩ Rollback

Rollback to previous version

```bash
kubectl rollout undo deployment/smart-event-deployment \
-n smart-event
```

---

# ⚙ Jenkins CI/CD Pipeline

Pipeline Stages

```
Checkout Source
        │
        ▼
Verify Environment
        │
        ▼
Install Dependencies
        │
        ▼
Build Docker Image
        │
        ▼
Docker Hub Login
        │
        ▼
Push Docker Image
        │
        ▼
Deploy to Kubernetes
        │
        ▼
Rolling Update
        │
        ▼
Verify Deployment
```

---

# 🔁 Automatic CI/CD

The project uses **Poll SCM** in Jenkins.

Whenever code is pushed to GitHub,

```
git push origin main
```

Jenkins automatically:

- Detects new commits
- Starts the pipeline
- Builds Docker image
- Pushes image to Docker Hub
- Deploys to Kubernetes
- Updates running application

---

# 🧪 Useful Commands

## Docker

Images

```bash
docker images
```

Containers

```bash
docker ps
```

Remove Container

```bash
docker rm -f <container-id>
```

---

## Kubernetes

Pods

```bash
kubectl get pods -n smart-event
```

Deployments

```bash
kubectl get deployment -n smart-event
```

Services

```bash
kubectl get svc -n smart-event
```

Describe Pod

```bash
kubectl describe pod <pod-name> -n smart-event
```

Logs

```bash
kubectl logs <pod-name> -n smart-event
```

Delete Deployment

```bash
kubectl delete deployment smart-event-deployment -n smart-event
```

---

# 🏗 CI/CD Workflow

```
Developer
      │
      ▼
Git Push
      │
      ▼
GitHub Repository
      │
      ▼
Jenkins Pipeline
      │
      ▼
Checkout Source
      │
      ▼
Install Dependencies
      │
      ▼
Build Docker Image
      │
      ▼
Docker Hub
      │
      ▼
Kubernetes Deployment
      │
      ▼
Rolling Update
      │
      ▼
Application Running
```

---

# 📚 Learning Outcomes

This project demonstrates:

- Git & GitHub
- Docker Containerization
- Docker Hub
- Kubernetes
- Jenkins
- Continuous Integration
- Continuous Deployment
- Rolling Updates
- Scaling
- Rollback
- DevOps Automation

---

# 🔮 Future Enhancements

- GitHub Webhooks instead of Poll SCM
- Helm Charts
- Ingress Controller
- SSL/TLS
- Monitoring with Prometheus & Grafana
- Logging with ELK Stack
- SonarQube Code Analysis
- Automated Testing
- Multi-stage Docker Builds
- GitOps using ArgoCD

---

# 👨‍💻 Author

**Nishit Sharma**

B.Tech Computer Science & Engineering (AI & ML)

Lovely Professional University

GitHub:
https://github.com/nishitsharma123

Docker Hub:
https://hub.docker.com/u/nishitsharma128

---

# 📄 License

This project is developed for educational and learning purposes.

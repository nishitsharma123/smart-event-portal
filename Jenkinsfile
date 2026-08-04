pipeline {
    agent any

    environment {
        IMAGE_NAME = "nishitsharma128/smart-event-portal"
        IMAGE_TAG = "latest"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                sh '''
                node -v
                npm -v
                docker --version
                kubectl.exe version --client
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }

        stage('Login Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                docker push $IMAGE_NAME:$IMAGE_TAG
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl.exe set image deployment/smart-event-deployment \
                smart-event=$IMAGE_NAME:$IMAGE_TAG \
                -n smart-event

                kubectl.exe rollout status deployment/smart-event-deployment -n smart-event
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                kubectl.exe get pods -n smart-event
                '''
            }
        }

    }

    post {

        success {
            echo 'Pipeline executed successfully.'
        }

        failure {
            echo 'Pipeline failed.'
        }

    }

}
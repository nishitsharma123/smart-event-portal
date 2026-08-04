pipeline {

    agent any

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    environment {

        IMAGE_NAME = "nishitsharma128/smart-event-portal"
        IMAGE_TAG = "${BUILD_NUMBER}"

        DOCKERHUB_CREDENTIALS = "DockerHub"

        KUBE_NAMESPACE = "smart-event"
        DEPLOYMENT_NAME = "smart-event-deployment"
        CONTAINER_NAME = "smart-event"

        KUBECTL = "/mnt/c/ProgramData/chocolatey/bin/kubectl.exe"
    }

    stages {

        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }

        stage('Verify Environment') {
            steps {
                sh '''
                    echo "===== Node ====="
                    node -v

                    echo "===== NPM ====="
                    npm -v

                    echo "===== Docker ====="
                    docker --version

                    echo "===== kubectl ====="
                    $KUBECTL version --client
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
                    docker build \
                    -t ${IMAGE_NAME}:${IMAGE_TAG} \
                    .
                '''
            }
        }

        stage('Docker Hub Login') {
            steps {

                withCredentials([
                    usernamePassword(
                        credentialsId: "${DOCKERHUB_CREDENTIALS}",
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {

                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login \
                        -u "$DOCKER_USERNAME" \
                        --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                    docker push ${IMAGE_NAME}:${IMAGE_TAG}
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {

                sh """
                    ${KUBECTL} set image deployment/${DEPLOYMENT_NAME} \
                    ${CONTAINER_NAME}=${IMAGE_NAME}:${IMAGE_TAG} \
                    -n ${KUBE_NAMESPACE}

                    ${KUBECTL} rollout status deployment/${DEPLOYMENT_NAME} \
                    -n ${KUBE_NAMESPACE}
                """
            }
        }

        stage('Verify Deployment') {
            steps {

                sh """
                    ${KUBECTL} get deployment \
                    -n ${KUBE_NAMESPACE}

                    ${KUBECTL} get pods \
                    -n ${KUBE_NAMESPACE}
                """
            }
        }

    }

    post {

        success {

            echo "====================================="
            echo "Pipeline Executed Successfully"
            echo "Image : ${IMAGE_NAME}:${IMAGE_TAG}"
            echo "====================================="
        }

        failure {

            echo "====================================="
            echo "Pipeline Failed"
            echo "====================================="
        }

        always {

            sh 'docker logout || true'
        }
    }

}
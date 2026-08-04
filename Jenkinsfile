pipeline {

    agent any

    stages {

        stage('Checkout') {

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
                    kubectl.exe version --client

                    echo "===== Current Directory ====="
                    pwd

                    echo "===== Files ====="
                    ls -la
                '''
            }
        }

    }

}
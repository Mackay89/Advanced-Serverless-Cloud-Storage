pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t username/project:latest .'
            }
        }
        stage('Push') {
            steps {
                sh 'docker push username/project:latest'
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl apply -f kubernetes/deployment.yaml'
            }
        }
    }
}


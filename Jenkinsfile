pipeline {
    agent any

    stages {
        
        stage('Build') {
            steps {
                echo 'Building..'
                sh "docker-compose up -d"
            }
        }
    }
}

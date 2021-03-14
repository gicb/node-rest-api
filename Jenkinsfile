Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'sleep(5)'
                sh 'echo "PPPPPPPPPPPPPPPPPPPPPPPPPPP"'
            }
        }
    }
}
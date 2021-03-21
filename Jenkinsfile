pipeline {
    agent { 
    dockerfile {
        args '-t Rest-Api'
    }
    }
    stages {	
        stage('Deploy') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
				echo 'saving and loading image on localhost'
                // sh 'docker save  | ssh -C gicb@localhost docker load'
				// sh 'docker context create remote --docker "host:ssh//gicb@localhost"'
				// sh 'docker context use remote'
				// sh 'docker run '
				// sh '''ssh gicb@localhost << EOF
				// 		 cd ~/node
				// 		 git pull 
				// 		 npm install
				// 		 npm build
				// 		 pm2 start
				// 		 exit
				// 	EOF'''
            }		
        }
    }
}
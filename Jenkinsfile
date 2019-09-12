pipeline {
    environment {
        VIRTUAL_HOST = 'practical-vim.rdok.dev'
        VIRTUAL_PORT = 3003
        LETSENCRYPT_HOST = 'practical-vim.rdok.dev'
        LETSENCRYPT_EMAIL = 'r.dokollari@gmail.com'
        DEFAULT_EMAIL = 'r.dokollari@gmail.com'
    }
    agent { label "linux" }
    stages {
        stage('Build') {
            steps { echo 'build' }
        }
        stage('Test') {
            steps { echo 'build' }
        }        
        stage('Deploy') {
            agent { label "rdok.dev" }
            steps { sh '''
                docker-compose build --pull 
                docker-compose down
                docker-compose up -d
            ''' }
        }
    }
    post {
        failure {
            slackSend color: '#FF0000',
                message: "@here Failed: <${env.BUILD_URL}console | ${env.JOB_BASE_NAME}#${env.BUILD_NUMBER}>"
        }
        fixed {
            slackSend color: 'good',
                message: "@here Fixed: <${env.BUILD_URL}console | ${env.JOB_BASE_NAME}#${env.BUILD_NUMBER}>"
        }
        success { slackSend message: "Stable: <${env.BUILD_URL}console | ${env.JOB_BASE_NAME}#${env.BUILD_NUMBER}>" }
    }
}


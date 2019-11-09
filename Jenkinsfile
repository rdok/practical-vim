pipeline {
    triggers { cron('H H(18-19) * * *') }
    options { buildDiscarder(logRotator(daysToKeepStr: '30', numToKeepStr: '100') ) }
    environment {
        VIRTUAL_HOST = 'practical-vim.rdok.dev'
        VIRTUAL_PORT = 3003
        LETSENCRYPT_HOST = 'practical-vim.rdok.dev'
        LETSENCRYPT_EMAIL = 'r.dokollari@gmail.com'
        DEFAULT_EMAIL = 'r.dokollari@gmail.com'
    }
    agent { label "linux" }
    stages {
        stage('Deploy') {
            agent { label "rdok.dev" }
            steps { 
                sh '''
                docker-compose build --pull 
                docker-compose down
                docker-compose up -d
                ''' 
            }
        }
        stage('Health Check') { 
            agent { label "linux" }
            steps { build 'health-check' }
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
        success { 
            slackSend message: "Stable: <${env.BUILD_URL}console | ${env.JOB_BASE_NAME}#${env.BUILD_NUMBER}>" 
        }
    }
}


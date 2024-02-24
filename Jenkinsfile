pipeline {
    agent any

    environment {
        // 设置 Node.js 版本
        NODEJS_VERSION = '16.20.0'
    }

    tools {
        // 安装并配置 Node.js
        nodejs "${NODEJS_VERSION}"
    }

    options {
        // 使用 Generic Webhook Trigger 插件
        buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5'))
    }

    triggers {
        // 使用 Generic Webhook Trigger 插件配置
        GenericTrigger(
            genericVariables: [
                [key: 'githubEvent', value: '$.headers.X-GitHub-Event'],
                [key: 'repository', value: '$.repository.name'],
                [key: 'branch', value: '$.ref'],
                [key: 'commit', value: '$.after']
            ],
            token: 'officialWebsite'
        )
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // 设置 npm 淘宝源
                script {
                    npmRegistry = 'http://registry.npmmirror.com/'
                    sh "npm config set registry ${npmRegistry}"
                }

                // 执行 npm install
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build Documentation') {
            steps {
                // 执行 npm run docs:build
                script {
                    sh 'npm run docs:build'
                }
            }
        }

        stage('Copy to /www/web') {
            steps {
                // 复制 build 文件夹的内容到 /www/web
                script {
                    sh 'cp -r dist/* /www/web'
                }
            }
        }
    }
    
    post {
        success {
            // 构建成功后的操作，例如发送通知
            echo 'Build and deploy succeeded!'
        }
        failure {
            // 构建失败后的操作，例如发送通知
            echo 'Build or deploy failed!'
        }
    }
}

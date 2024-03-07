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
                script {
                    def sourceDir = 'web'
                    def targetDir = '/www/web'

                    // 判断目标文件夹是否存在，如果存在则删除
                    dir(targetDir) {
                        deleteDir()
                        echo "Removed existing target directory: ${targetDir}"
                    }

                    // 复制文件夹到目标路径
                    sh "cp -r ${sourceDir} ${targetDir}"

                    // 给予目标文件夹权限
                    sh "chmod -R 777 ${targetDir}"
                }
            }
        }
    }

    post {
        always {
            // 在构建完成后触发邮件通知，无论成功或失败，使用全局配置的 HTML 模板
            // 空字符串表示使用全局配置的模板
            emailext subject: 'Jenkins Pipeline', body: '$DEFAULT_CONTENT', to: '784184859@qq.com'
        }
    }
}

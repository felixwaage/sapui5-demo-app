@Library('piper-lib-os') _

node() {
    stage('Prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }

    stage('Build') {
        //mtaBuild script: this
        echo 'build should happen here'
    }

    stage('Unit Tests'){
        //karmaExecuteTests script: this
        echo 'Unit Tests should happen here... lol'
    }

    stage('Integration Tests'){
        echo 'Integration Tests should happen here... lol'
        sh 'npm run integration-test'
    }

    stage('Deploy') {
        //cloudFoundryDeploy script: this
        echo 'deploy should happen here... lol'
    }
}


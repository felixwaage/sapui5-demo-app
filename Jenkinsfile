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
        echo 'Begin of the Stage: Integration Test'
        npmExecute script: this, dockerImage: 'node:8-stretch', npmCommand: 'install'
        npmExecute script: this, dockerImage: 'node:8-stretch', npmCommand: 'install $(npm pack ./octt)'
        npmExecute script: this, dockerImage: 'node:8-stretch', npmCommand: 'run integration-test'
    }

    stage('Deploy') {
        //cloudFoundryDeploy script: this
        echo 'deploy should happen here... lol'
    }
}


@Library('piper-lib-os') _

node() {
    stage('Prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }

    stage('Build') {
        mtaBuild script: this
    }

    stage('Unit Tests'){
        karmaExecuteTests script: this
    }

    stage('Integration Tests'){
        steps {
            echo 'Integration Tests should happen here... lol'
        }
    }

    stage('Deploy') {
        cloudFoundryDeploy script: this
    }
}


@Library('piper-lib-os')

//this is the old custom made pipeline defintion

/*node() {
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
        BackendIntegrationTest = load './.pipline/extension/Integration.groovy'
        BackendIntegrationTest.call(this);
    }

    stage('Deploy') {
        cloudFoundryDeploy script: this
    }
}*/

// now we are using the General Purpose Pipeline Script
piperPipeline script: this
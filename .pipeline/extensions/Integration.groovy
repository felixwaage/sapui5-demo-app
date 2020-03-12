void call(Map params) {
  //access stage name
  echo "Start - Extension for stage: ${params.stageName}"

  //access config
  echo "Current stage config: ${params.config}"


  //access overall pipeline script object
  echo "Branch: ${params.script.commonPipelineEnvironment.gitBranch}"

  echo "End - Extension for stage: ${params.stageName}"
}
return this
void call(Map params) {
  //access stage name
  echo "Start - Extension for stage: ${params.stageName}"
  
  echo "Skip stage: ${params.stageName}"
  //execute original stage as defined in the template
  //params.originalStage()

return this
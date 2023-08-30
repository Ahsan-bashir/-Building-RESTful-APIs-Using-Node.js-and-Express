const swaggerUi=require('swagger-ui-express')
const YAML=require('yamljs')
const swaggerJSDocs=YAML.load("api.yaml")



module.exports={
    swaggerServe:swaggerUi.serve,
    swaggerSetup:swaggerUi.setup(swaggerJSDocs)
}

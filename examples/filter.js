const swaggerCombine = require("../src");

const config = (module.exports = {
  swagger: "2.0",
  info: {
    title: "Swagger Combine Filter Example",
    version: {
      $ref: "./package.json#/version",
    },
  },
  excludeParameters: ["file"],
  apis: [
    {
      url: "http://petstore.swagger.io/v2/swagger.json",
      paths: {
        include: ["/pet/{petId}/uploadImage"],
        parameters: {},
      },
    },
  ],
});

if (!module.parent) {
  swaggerCombine(config)
    .then((res) => console.log(JSON.stringify(res, false, 2)))
    .catch((err) => console.error(err));
}

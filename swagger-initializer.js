window.onload = function() {
  // Begin Swagger UI call region
  const ui = SwaggerUIBundle({
    url: "swagger.yaml",
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  })
  // End Swagger UI call region
  window.ui = ui
}

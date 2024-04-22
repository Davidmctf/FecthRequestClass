# RequestData

La clase `RequestData` facilita el envío de solicitudes HTTP con configuraciones flexibles en JavaScript.

## Uso

Importa la clase `RequestData` en tu aplicación y crea una instancia con la configuración deseada:

````markdown
El método `sendRequest()` envía la solicitud HTTP y devuelve una promesa:

```javascript
// Ejemplo de uso de la clase RequestData
import { RequestData } from "request-data";

const requestData = new RequestData({
  url: "https://api.example.com/data",
  method: "POST",
  debug: true,
  body: { key: "value" },
  typeSend: "JSON",
  typeReceive: "JSON",
  addBody: true
});

try {
  const response = await requestData.sendRequest();
  console.log("Response:", response);
} catch (error) {
  console.error("Request failed:", error);
}
```
````

# Documentación

## Constructor

```javascript
/**
 * Constructor de la clase RequestData.
 * @param {object} data - Configuración inicial para la solicitud.
 * @param {string} [data.url=window.location.href] - URL de la solicitud (por defecto, la URL actual).
 * @param {string} [data.method="POST"] - Método HTTP (por defecto, "POST").
 * @param {boolean} [data.debug=false] - Habilitar modo de depuración (por defecto, desactivado).
 * @param {object} [data.body] - Cuerpo de la solicitud (opcional).
 * @param {string} [data.typeSend="JSON"] - Formato de datos enviados ("JSON" por defecto).
 * @param {string} [data.typeReceive="JSON"] - Formato esperado de los datos de respuesta ("JSON" por defecto).
 * @param {boolean} [data.addBody=true] - Adjuntar cuerpo de la solicitud a los datos de respuesta (por defecto, activado).
 */
constructor(data) {
  // Implementación del constructor
}
```

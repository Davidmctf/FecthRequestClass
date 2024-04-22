# RequestData

La clase `RequestData` facilita el envío de solicitudes HTTP con configuraciones flexibles en JavaScript.

## Uso

Importa la clase RequestData en tu aplicación y crea una instancia con la configuración deseada:

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

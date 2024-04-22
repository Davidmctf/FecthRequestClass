/*!
 * Request Module
 * Author: David M. Cruz (davidmctf@gmail.com)
 * Date: 2022
 * Clase que facilita el envío de solicitudes HTTP con configuraciones flexibles.
 */
export class RequestData {
  #url;
  #method;
  #debug;
  #typeSend;
  #typeReceive;
  #body;
  #addBody;

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
    this.#url = data.url || window.location.href;
    this.#method = data.method || "POST";
    this.#debug = data.debug || false;
    this.#body = data.body;
    this.#typeSend = (data.typeSend || "JSON").toUpperCase();
    this.#typeReceive = (data.typeReceive || "JSON").toUpperCase();
    this.#addBody = typeof data.addBody === "boolean" ? data.addBody : true;
  }

  /**
   * Establece la URL de la solicitud.
   * @param {string} url - Nueva URL para la solicitud.
   */
  setUrl(url) {
    this.#url = typeof url === "string" && url.trim() !== "" ? url : this.#url;
  }

  /**
   * Obtiene la URL actual de la solicitud.
   * @returns {string} - URL actual de la solicitud.
   */
  getUrl() {
    return this.#url;
  }

  /**
   * Establece el modo de depuración.
   * @param {boolean} debug - Estado del modo de depuración (true para habilitar, false para deshabilitar).
   */
  setDebug(debug) {
    this.#debug = typeof debug === "boolean" ? debug : this.#debug;
  }

  /**
   * Obtiene el estado actual del modo de depuración.
   * @returns {boolean} - true si el modo de depuración está habilitado, false si está deshabilitado.
   */
  getDebug() {
    return this.#debug;
  }

  // Métodos restantes de configuración y obtención similares...

  /**
   * Envía la solicitud HTTP con la configuración actual.
   * @returns {Promise<any>} - Promesa que se resuelve con los datos de la respuesta.
   */
  async sendRequest() {
    const method = this.getMethod().toUpperCase();
    const url = new URL(this.getUrl());
    const typeSend = this.getTypeSend();
    const typeReceive = this.getTypeReceive();
    const body = this.getBody();
    const debug = this.getDebug();
    const addBody = this.getAddBody();

    if (method === "GET" && body) {
      // Agregar parámetros al URL para método GET
      Object.keys(body).forEach((key) =>
        url.searchParams.append(key, body[key])
      );
    }

    const headers = {
      "Content-Type": "application/json; charset=utf-8"
    };

    let requestOptions = {
      cache: "no-cache",
      headers: headers,
      method: method
    };

    if (method !== "GET") {
      requestOptions.body = JSON.stringify(body);
    }

    return await fetch(url.toString(), requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not OK. Status: ${response.status}`
          );
        }

        switch (typeReceive) {
          case "JSON":
            return response.json();
          case "TEXT":
            return response.text();
          case "FORMDATA":
            return response.formData();
          case "BLOB":
            return response.blob();
          case "ARRAYBUFFER":
            return response.arrayBuffer();
          default:
            return response.json();
        }
      })
      .then((data) => {
        if (debug) {
          console.log(`Request Body: ${JSON.stringify(body)}`);
          console.log(`Response Data:`, data);
        }

        if (addBody) {
          data.body = body;
        }

        return data;
      })
      .catch((error) => {
        console.error("Error processing request:", error);
        throw error; // Propagar el error para que pueda ser capturado por el método catch
      });
  }
}

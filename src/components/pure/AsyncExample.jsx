import React from 'react';

const AsyncExample = () => {
  
  async function generateNumber() {
    return 1;
  }
  // Con uso de promesas
  async function generatePromiseNumber(){
    return Promise.resolve(2);
  }

  // Devuelve un valor futuro que puede o no existir. De no existir, ataja el error y lo muestra.
  function obtainNumber() {
    generatePromiseNumber()
      .then((response) => alert(`Respuesta: ${response}`))
      .catch((error) => alert(`Hubo un error: ${error}`));;
  }

  function obtainNumber2() {
    generateNumber()
      .then((response) => alert(`Respuesta: ${response}`))
      .catch((error) => alert(`Hubo un error: ${error}`));
  }

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key));

  }

  function showStorage() {
    saveSessionStorage('name', 'Andres') // ejecuta una funcion
      .then((response) => { // una vez hecho, pasa a lo que esta dentro de .then()
        let value = response;
        alert(`Nombre guardado: ${value}`);
      })
      .catch((error) => alert(`Hubo un error: ${error}`)) // si hay un problema, para la ejecucion y muestra el error
      .finally(() => console.log('SUCCESS: Nombre guardado y recuperado exitosamente')); // si todo va bien, con .finally() muestra un mensaje en consola
  }

  async function obtainMessage() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Hola mundo'), 2000);
    });

    let message = await promise;

    await alert(`Mensaje recibido: ${message}`);

  }

  const returnError = async() => {
    await Promise.reject(new Error('Ups, hubo un error.'));
  }

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Todo en orden: ${response}`))
      .catch((error) => alert(`Error: ${error}`))
      .finally(() => alert('Ejecucion finalizada')); // finally() se ejecuta independiente de si hubo error o no
  }

  const urlNotFound = async() => {
    try { // try-catch clasico
      let response = await fetch('https://invalidURL.com/');
      alert(`Respuesta: ${JSON.stringify(response)}`);
    } catch (error) {
      alert(`Hubo un error: ${error}`);
    }
  }
  
  const multiplePromise = async() => {
    let results = await Promise.all(
      [
        fetch('https://reqres.in/api/users'),
        fetch('https://reqres.in/api/users?page=2'),
      ]
    )
    .catch((error) => alert(`Hubo un error con la URL: ${error}`));
  }

  return (    
    <div>
      <h1>Ejemplos de asincronia y promesas</h1>
    <button onClick={obtainNumber}>Obtener numero</button>   
    <button onClick={obtainNumber2}>Obtener otro numero</button>  
    <button onClick={showStorage}>Almacenar nombre y mostrarlo</button>   
    <button onClick={obtainMessage}>Enviar mensaje en 2 segundos</button>   
    <button onClick={consumeError}>Obtener error</button>   
    <button onClick={urlNotFound}>Peticion a URL desconocida</button>   
    <button onClick={multiplePromise}>Multiples promesas</button>   
    </div>
  );
}

export default AsyncExample;

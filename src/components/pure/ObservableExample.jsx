import { React, useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

  const [number, setNumber] = useState(0)

  const obtainNewNumbers = () => {
    console.log('Subscription a Observable');
    getNumbers.subscribe(
      {
        next(newNumber){
          console.log('Nuevo numero: ', newNumber);
          setNumber(newNumber);
        },
        error(error){
          alert(`Hubo un error: ${error}`);
          console.log('Error en observable');
        },
        complete(){
          alert(`Finalizado con: ${number}`);
          console.log('Listo con el observable');
        }
      }
    )
    console.log('Finalizado recibiendo numeros');
  }

  return (
    <div>
      <h2>Numero: {number}</h2>
      <button onClick={obtainNewNumbers}>Obtener nuevos numeros</button>
    </div>
  );
}

export default ObservableExample;

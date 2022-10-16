import { Observable } from 'rxjs'

export const getNumbers = new Observable(subscriber => {
  // Emite valores
  subscriber.next(1); //Emite 1
  subscriber.next(2); //Emite 2
  subscriber.next(3); //Emite 3
  setTimeout(() => {
    subscriber.next(4); //Emite 4
    subscriber.complete(); //Completa y termina      
  }, 1000) // Espera en ms
})

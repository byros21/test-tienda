import { useState } from "react";
import PropTypes from 'prop-types'
import { IonButton } from '@ionic/react'

export const CounterApp = ({ value }) => {


    const [ contador, setContador ] =  useState( 0 )

    //let cont = 0;

    const handleAdd = (event, newValue) => {
        setContador( contador + 1 );
        //value = contador;
        //CounterApp.propTypes.value = contador;
        console.log(contador, value, {value})
      }

    return (
        <div>CounterApp
            <>
                <h1> Incrementado </h1>
                <h2> { contador } </h2>
            </>

            <IonButton onClick={(event) => handleAdd(event, '**Hola M')}>
            Contador
          </IonButton>

        </div>
    );
}

CounterApp.propTypes = {
    
    value: PropTypes.number

}

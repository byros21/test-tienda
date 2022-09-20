import React, { useState } from 'react';
import {
  IonHeader, IonItem, IonButton, IonContent, IonToolbar,
  IonTitle, IonIcon, IonChip, IonInput, IonLabel, IonText
} from '@ionic/react';
import PropTypes from 'prop-types'

import { trash } from 'ionicons/icons';
import { createOutline } from 'ionicons/icons';

export const ModalOrder = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  function sumarTotales() {
    let suma = 0;
    data.forEach(element => {
      suma = suma + parseFloat(element.pro_price * element.pro_quanty)
    });

    return suma;
  }

  function setNumber(value, item){
    item.pro_quanty = value
    //console.log(value, item)
  }

  return (
    < >
      <IonHeader >
        <IonToolbar color="success">
          <IonTitle style={{ textAlign: 'center' }}>ORDER Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        {/* <p>This is the modal content.</p> */}

        <IonItem style={{ fontWeight: "bold", fontSize: "0.9rem" }} >
          <div style={{ width: '50%', marginLeft: '10%' }}>
            NAME
          </div>
          <div style={{ width: '15%', textAlign: 'right' }}>
            AMOUNT
          </div>
          <div style={{ width: '15%', textAlign: 'right' }}>
            PRICE
          </div>
          <div style={{ width: '20%', textAlign: 'right' }}>
            TOTAL
          </div>
        </IonItem>

        {
          data.map(item => {

            return (
              <IonItem key={item.id} style={{ fontSize: "0.9rem" }}>

                {/* <IonButton fill="clear" color="danger" style={{ marginRight: '10px' }}>
                  <IonIcon icon={trash} />
                </IonButton> */}

                <div style={{ width: '50%' }}>
                  {item.pro_name}
                </div>
                <div style={{ width: '15%', textAlign: 'right' }}>
                  <IonInput
                    type="number"
                    value={item.pro_quanty}
                    //placeholder="Enter Number"
                    onIonChange={(e) => setNumber(parseInt(e.detail.value), item)}
                  >

                  </IonInput>
                </div>
                <div style={{ width: '15%', textAlign: 'right' }}>
                  ${item.pro_price}
                </div>
                <div style={{ width: '20%', textAlign: 'right', fontWeight: "bold", fontSize: "1rem" }} >
                    ${(item.pro_price * item.pro_quanty).toFixed(2)}
                </div>

              </IonItem>
            )

          })
        }

      </IonContent>

      <IonItem style={{ opacity: 0.7 }} color="warning" >
        <IonLabel style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem' }} >
          TOTAL <IonText style={{ marginLeft: '10%', marginRight: '5%' }}> $ {sumarTotales().toFixed(2)} </IonText>
        </IonLabel>

      </IonItem>

    </>
  );
  //);
}

ModalOrder.propTypes = {

  data: PropTypes.any

}



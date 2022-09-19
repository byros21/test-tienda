
import React, { useState } from 'react';

import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem,
  IonCard, IonCardHeader, IonCardContent, IonTextarea, IonButton, IonLabel
} from '@ionic/react';

// import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';


const Tab2: React.FC = () => {

  const pro_name = ''
  const pro_price = 1.00
  const pro_descr = ''

  const [name, setName] = useState("");
  const [price, setPrice] = useState(pro_price);
  const [descr, setDescr] = useState("");

  const handleInputName = (event: any) => {
    setName(event.target.value);
  };

  const handleInputPrice = (event: any) => {
    //console.log(event.target.value.toFixed(2))
    setPrice(event.target.value);
  };

  const handleInputDescr = (event: any) => {
    setDescr(event.target.value);
  };

  function finishOrder() {
    //setProduct(data)
    const product = { pro_name: name, pro_price: price, pro_descr: descr }
    //console.log(product)
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Add Products</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonCard style={{ width: '50%' }}>
          <IonCardHeader color="secondary">
            <IonTitle > Product info </IonTitle>
          </IonCardHeader>
          <IonCardContent >
            <IonItem >
              <IonLabel position='floating' > Product name </IonLabel>
              <IonInput placeholder="Ex. Table wood dark orange" value={name} onIonChange={(event) => handleInputName(event)}>
              </IonInput>
            </IonItem>
            <IonInput placeholder="Price" type='number' step="0.10" value={price} onIonChange={(event) => handleInputPrice(event)}>
              <IonLabel style={{marginLeft:'10px'}}> $ </IonLabel>
            </IonInput>
            <IonTextarea placeholder="Description" value={descr} onIonChange={(event) => handleInputDescr(event)} >
            </IonTextarea>
          </IonCardContent>
          <div style={{ textAlign: 'center' }} >
            <IonButton color="secondary" onClick={() => finishOrder()} >
              Save Product
            </IonButton>
          </div>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;


import React, { useState, useEffect } from 'react';

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

  const saveProduct = async () => {
    //const url = `${environment.url}/discover/movie?api_key=${environment.apiKey}&language=es&sort_by=popularity.desc&page=${popularesPage}`
    /*const nProd = {
      "id": 7,
      "pro_name": "Sillas de mareda importada",
      "pro_descr": "Articulo para el interiores y exteriores",
      "pro_image": "url-imagen-sillas",
      "pro_price": "8.99",
      "details": []
    }*/
    const url = `https://test-tienda-0922.herokuapp.com/products`;

    const nProd = `{"id":2,"pro_name":"Tablero Alto Brillo","pro_descr":"Un efecto espejoque permite un acabado cristalino. Fabricado en base a la última tecnología de lacados superficiales.","pro_image":"url_imagen_tablero","pro_price":"28.70","details":[]}`

    /*const xhr = new XMLHttpRequest();
    console.log(xhr.responseText, url)
    // open the request with the verb and the url
    xhr.open('GET', url)
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // send the request
    xhr.send()

    setTimeout(() => {
    }, 2000 );*/


    let myHeaders = new Headers();
    //myHeaders.append("Accept", "*/*");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("User-Agent", "PostmanRuntime/7.29.2");
    // myHeaders.append("Cache-Control", "no-cache, no-store");
    //myHeaders.append("Server", "heroku-router");

    const x: RequestMode = "cors";

    const raw: any = {
      "id": 3,
      "pro_name": "Tablero Alto Brillo",
      "pro_descr": "Un efecto espejoque permite un acabado cristalino",
      "pro_image": "fake_image",
      "pro_price": "28.70"
    }//);

    console.log(nProd, JSON.stringify(nProd))

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      mode: 'no-cors' as RequestMode,
      body: nProd, 
      redirect: 'follow' as RequestRedirect
      //mode: x
      //redirect: 'follow'
    };

    /*const handler = () => {
      const requestOptions = {
        mode: 'no-cors' as RequestMode,
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'cache': 'no-cache' },
        body: JSON.stringify(raw)
        };
        fetch('https://test-tienda-0922.herokuapp.com/products', requestOptions)
            .then(response => response)
            .then(data => console.log(data));
      }
      handler()*/


    const temp = fetch("http://test-tienda-0922.herokuapp.com/products", requestOptions)
      .then((response: any) => {
        //response.text().then( res => {

        console.log(response)

        //})
      })
      .then(result => console.log('**', result))
    //.catch(error => console.log('error', error));

    setTimeout(() => {

      //console.log(temp)

    }, 3000);
    /*await fetch("http://test-tienda-0922.herokuapp.com/products", requestOptions)
      .then(response => {
        response.text()
        console.log(response)
      })
      .catch(error => console.log('error', error));*/


    /*const requestOptions = {
      method: 'POST',
      //mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: nProd
    };

    console.log(nProd, JSON.parse(nProd), body)

    const url = `https://test-tienda-0922.herokuapp.com/products/`;

    console.log({ ...requestOptions, mode: 'cors' }, url)

    const response = await fetch(url, { ...requestOptions, mode: 'no-cors' });
    const data = await response.json();*/


    /*fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));*/


    /*fetch(url, {  // Enter your IP address here
      method: 'POST',
      mode: 'no-cors',
      body: nProd // body data type must match "Content-Type" header
    }).then( () => console.log())

    setTimeout(() => {
      console.log(nProd, ' **');
    }, 3000);*/


    /*resp.json().then((data) => {

    });*/


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
              <IonLabel style={{ marginLeft: '10px' }}> $ </IonLabel>
            </IonInput>
            <IonTextarea placeholder="Description" value={descr} onIonChange={(event) => handleInputDescr(event)} >
            </IonTextarea>
          </IonCardContent>
          <div style={{ textAlign: 'center' }} >
            <IonButton color="secondary" onClick={() => saveProduct()} >
              Save Product
            </IonButton>
          </div>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;

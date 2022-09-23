import React, { useState, useEffect } from 'react';

import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardTitle, IonModal, IonButtons,
  IonButton, IonIcon, IonCardContent, IonSearchbar, IonBadge,
  IonGrid, IonRow, IonCol, IonChip, IonLabel, IonFooter, IonFab, IonFabButton
} from '@ionic/react';

import { ModalOrder } from '../components/ModalOrder';
import './Tab1.css';

import { cart, addCircle, refreshCircle } from 'ionicons/icons';
import Productos from "../appdata/productos.json";




const Tab1: React.FC = () => {
  
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    
    if(flag === true) return;

    const myHeaders = new Headers({
      //'Access-Control-Allow-Origin':'http://localhost:8100',
      'Content-Type':'application/json'
    });
    //myHeaders.append('Content-Type', 'application/json');
    //myHeaders.append('Access-Control-Allow-Origin', '*');
    // myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:8100');
    
    //const myHeaders = { "Access-Control-Allow-Origin": "*" }

    //const x:RequestMode = "no-cors";

    
    const requestOptions = {
      //method: 'GET',
      //mode: x,
      //headers: myHeaders
      //redirect: 'follow'
    };
    
    console.log(requestOptions)

    fetch('http://localhost:8080/products', requestOptions )
      .then(response => response.json())
      .then(json => {
        const nlist = json.map((data: any) => {
          const x = { ...data, checked: false }
          return x
        })
        setProducts(nlist)
        setFilter(nlist)
        setFlag(true)
        //console.log(nlist, flag)
      })

  }, [flag]);

  
  const getProducts = async () => {

    setFlag(false)
    console.log('REFRESH!!')

  }

  const lista: any[] = [];

  let listaFilter: any[] = [];
  //let 
  const orderList: any[] = [];

  const [products, setProducts] = useState(lista);
  const [orderproducts, setProductOrder] = useState(orderList);
  const [productfilter, setFilter] = useState(listaFilter);

  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');


  /*const getProducts = async () => {

    const url = `https://test-tienda-0922.herokuapp.com/products`
    const resp = await fetch(url);

    const result = await resp.json()

    const list = result.map((data: any) => {
      const x = { ...data, checked: false }
      return x
    })
    console.log(list)
    return list

  }*/




  setTimeout(async () => {
    /*setProducts(await getProducts().then((res) => {
      //setFilter({... res})
      return res;
    }))*/

  }, 2000);



  const handleAdd = (event: any, item: any) => {

    if (item.checked == false) {
      item.checked = true
    }
    else {
      const x = orderproducts.filter((obj) => { return obj.id !== item.id })
      setProductOrder(x)

      item.checked = false
      return
    }

    const nItem = { ...item, pro_quanty: 1 }
    setProductOrder(orderproducts.concat(nItem))
  }

  function findProducts(text: string) {

    setSearchText(text)
    setFilter([])

    setFilter(products.filter(obj => obj.pro_name.toLowerCase().includes(text.toLowerCase())).map(filteredName => (
      filteredName

    )))


  }
  const handleConfirm = (event: any) => {
    setShowModal(true)
  }

  const finishOrder = () => {
    console.log('---FINISH**', orderproducts)
  }


  return (

    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" >
          <IonTitle> SHOP E-Store
          </IonTitle>
          <IonButton slot="end" color="light" onClick={() => getProducts()} >
            <IonIcon slot="start" icon={refreshCircle} />
            Refresh
          </IonButton>
        </IonToolbar>

        <IonSearchbar
          value={searchText}
          onIonChange={(e) => findProducts(e.detail.value!)}
          showCancelButton="focus"
        ></IonSearchbar>

      </IonHeader>

      <IonContent fullscreen>

        <IonModal isOpen={showModal} backdropDismiss={false} >
          <ModalOrder data={orderproducts.sort((a, b) => (a.pro_name < b.pro_name ? -1 : 1))} ></ModalOrder>
          <IonFooter>
            <IonToolbar>

              {/* <IonButtons > */}
              <IonButton slot='start' expand='block' fill='clear' style={{ width: '25%' }}
                onClick={() => setShowModal(false)} >
                Back
              </IonButton>

              <IonButton color="success" expand='block' fill="solid"
                onClick={() => finishOrder()} >
                Purcharse
              </IonButton>
              {/* </IonButtons> */}
            </IonToolbar>
          </IonFooter>

        </IonModal>

        <IonGrid>
          <IonRow>
            {
              productfilter.map(item => {

                return (
                  <IonCol class='ion-col' sizeLg='3' sizeMd='4' sizeSm='6' sizeXs='12' key={item.id} >
                    <IonCard class='ion-card'>
                      <IonCardHeader class='product-header' color="light" >
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                        <IonCardTitle > {item.pro_name} </IonCardTitle>
                      </IonCardHeader>

                      <IonCardContent class='ion-card-content'>

                        {item.pro_descr}<br></br>

                      </IonCardContent>

                      <IonFooter className="ion-no-border" class='footer-car' >

                        <IonChip color="primary" >
                          <IonLabel style={{ fontSize: '1rem' }}> ${item.pro_price} </IonLabel>
                        </IonChip>
                        <IonButton class='btn_add-car' color="success" hidden={item.checked}
                          onClick={(event) => handleAdd(event, item)}>
                          <IonIcon slot="end" icon={addCircle} />
                          Add item
                        </IonButton>
                        <IonButton class='btn_add-car' color="danger" hidden={!item.checked}
                          onClick={(event) => handleAdd(event, item)}>
                          <IonIcon slot="end" icon={addCircle} />
                          Remove
                        </IonButton>
                      </IonFooter>

                    </IonCard>

                  </IonCol>
                )
              })
            }

          </IonRow>
        </IonGrid>


        {/* <CounterApp value={cont} /> */}


        <IonFab vertical="bottom" horizontal="end" slot="fixed" >
          <IonFabButton color="success" onClick={(event) => handleConfirm(event)}>
            <IonIcon icon={cart} size="large" />
            <IonBadge class="buy-fab-badge" style={{ visibility: (orderproducts.length) ? '' : 'hidden' }} > {orderproducts.length} </IonBadge>
          </IonFabButton>
        </IonFab>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;

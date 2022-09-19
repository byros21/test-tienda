import React, { useState } from 'react';
//import { CounterApp } from "../components/CounterApp";

import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardTitle, IonModal, IonButtons,
  IonButton, IonIcon, IonCardContent, IonSearchbar, IonBadge,
  IonGrid, IonRow, IonCol, IonChip, IonLabel, IonFooter, IonFab, IonFabButton
} from '@ionic/react';

import { ModalOrder } from '../components/ModalOrder';
import './Tab1.css';

import { cart } from 'ionicons/icons';
import { addCircle } from 'ionicons/icons';
import Productos from "../appdata/productos.json";
import { environment } from '../environments/environment';

const Tab1: React.FC = () => {

  let cont = 0;

  const getProducts = () => {

  }
  //let orderProducts: any = []
  const popularesPage = 1;

  const url = `${environment.url}/discover/movie?api_key=${ environment.apiKey }&language=es&sort_by=popularity.desc&page=${ popularesPage }`
  console.log(url)



  const lista: any[] = [];

  Productos.forEach((item: any) => {
    const nitem = { ...item, checked: false }
    lista.push(nitem)
  });

  let orderList: any[] = [];

  const [products, setProducts] = useState(lista);
  const [orderproducts, setProductOrder] = useState(orderList);
  const [showModal, setShowModal] = useState(false);


  const [searchText, setSearchText] = useState('');


  const handleAdd = (event: any, item: any) => {
    //const prod = {... item, {chech}}
    if (item.checked == false) {
      item.checked = true
    }
    else {
      const x = orderproducts.filter((obj) => { return obj.pro_id !== item.pro_id })
      setProductOrder(x)
      //console.log(x)
      item.checked = false
      return
    }
    setProducts(products)
    const nItem = { ...item, pro_quanty: 1 }
    setProductOrder(orderproducts.concat(nItem))
    // console.log(item,'<->', item['checked'] )
    //console.log(products[0],item, orderproducts )

    //setProduct()
  }

  const handleConfirm = (event: any) => {
    //console.log(items.length, items)
    setShowModal(true)
    //orderProducts.push(item)
  }

  const finishOrder = () => {
    console.log('---FINISH**', orderproducts)
  }

  //const searchText =
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" >
          <IonTitle> SHOP E-Store </IonTitle>
        </IonToolbar>

        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
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
              products.map(item => {

                return (
                  <IonCol class='ion-col' sizeLg='3' sizeMd='4' sizeSm='6' sizeXs='12' key={item.pro_id} >
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

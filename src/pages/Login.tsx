
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput
} from '@ionic/react';

import { useState } from 'react';

//import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

import { loginUser } from '../firebaseConfig';

const Login: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        const res = await loginUser(username, password)
        console.log(`${res ? 'login success!':'**login failed'}`)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Login Page</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonCard class='ion-card' style={{margin:'5% 10% 0% 10%'}}>
                    <IonCardHeader class='product-header' color="primary" >
                        {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> */}
                        <IonCardTitle > LOGIN </IonCardTitle>
                    </IonCardHeader>

                    <>
                        <IonItem >
                            <IonLabel position='floating' > e-mail </IonLabel>
                            <IonInput placeholder="prueba@proconty.com" onIonChange={(event: any) => setUsername(event.target.value)}>
                            </IonInput>
                        </IonItem>
                        <IonItem >
                            <IonLabel position='floating' > password </IonLabel>
                            <IonInput onIonChange={(event: any) => setPassword(event.target.value)}
                                type='password' >
                            </IonInput>
                        </IonItem>
                    </>

                    <IonLabel> {'user: prueba@proconty.com - pass: 123xyz\n'}</IonLabel>

                    <IonButton expand='block' fill='clear' 
                  onClick={login} >
                  Login
                </IonButton>

                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Login;

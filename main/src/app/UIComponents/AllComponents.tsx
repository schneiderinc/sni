import React, { useState } from 'react';
import { IonContent, IonList, IonPage, IonInput, IonButton, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardContent, IonGrid, IonRow, IonCol, IonIcon, IonToggle, IonSelect, IonSelectOption, IonBadge, IonToast, IonDatetime, IonAlert, IonCheckbox, IonPopover, IonLoading, IonProgressBar, IonSpinner, IonRadioGroup, IonListHeader, IonRadio, IonRange, IonReorder, IonSegment, IonSearchbar, IonSegmentButton, IonText } from '@ionic/react';
import './AllComponents.scss';
import { settings, arrowUp, arrowDown, calendar, search, heart, pin, home, star, globe, basket } from 'ionicons/icons';


const AllComponents: React.FC = () => {
    const [showToast1, setShowToast1] = useState(false);
    const [showToast2, setShowToast2] = useState(false);
    const [show, setShow] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const toggleAccordion = () =>{
        if(show){
            setShow(false);
        }else {
            setShow(true);
        }
    }
    return (
        <div>
            <IonPage>
                <IonHeader className="page-header">
                    <IonToolbar>
                        <IonTitle>Home Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {/* INPUT FIELD */}
                    <div className="contianer">
                        <h6 className="ion-text-center">Input Field</h6>
                        <IonItem>
                            <IonLabel className="ion-label" position="floating">User Name</IonLabel>
                            <IonInput className="ion-input" name="username" type="text" />
                        </IonItem>
                    </div>
                    {/* BUTTON */}
                    <div className="contianer ion-text-center">
                        <h6>Button</h6>
                        <IonButton class="loginBtn" expand="block" data-kind="primary" type="submit">Login</IonButton>
                    </div>
                    {/* TOGGLE */}
                    <div className="contianer">
                        <h6 className="ion-text-center">Toggle</h6>
                        <IonList>
                            <IonToggle value="pepperoni" onChange={() => { }} />
                            <IonLabel>Remember me</IonLabel>
                        </IonList>
                    </div>
                    {/* BADGES */}
                    <div className="contianer">
                        <h6 className="ion-text-center">Badges</h6>
                        <IonBadge className="ion-badge">Dry Van</IonBadge>
                        <IonBadge className="ion-badge">0 Stop Offs</IonBadge>
                        <IonBadge className="ion-badge">Pickup Date</IonBadge>
                    </div>
                    {/* DROPDOWN */}
                    <div className="contianer">
                        <h6 className="ion-text-center">Drop Down</h6>
                        <IonSelect value="vij" okText="Okay" cancelText="Dismiss" class="select" interface="popover">
                            <IonSelectOption value="vij">VIJ</IonSelectOption>
                            <IonSelectOption value="HYD">HYD</IonSelectOption>
                            <IonSelectOption value="BLR">BLR</IonSelectOption>
                            <IonSelectOption value="BLR">CHN</IonSelectOption>
                        </IonSelect>
                    </div>
                    {/* CARD */}
                    <IonCard>
                        <IonCardContent>
                            <IonGrid>
                                <IonRow class="row-address">
                                    <IonCol size="5.5">
                                        <div className="card-text"><b>Dallas, Tx</b></div>
                                        <div className="card-text1">Nov 16, 10:00 - 14:00</div>
                                        <div className="card-text2">22 Mile Deadhead</div>
                                    </IonCol>
                                    <IonCol size="1"><IonIcon className="card-icon" name="arrow-forward"></IonIcon></IonCol>
                                    <IonCol size="5.5" className="right">
                                        <div className="card-text"><b>Detroit, MI</b></div>
                                        <div className="card-text1">Nov 18, 14:00 - 16:00</div>
                                        <div className="card-text2">32 Mile Deadhead</div>
                                    </IonCol>
                                </IonRow>
                                <IonRow class="row-details">
                                    <IonCol size="4.5" className="card-col">
                                        <div className="card-icon1"><IonIcon icon={settings} /></div>
                                        <div className="card-details">15k lbs</div>
                                        <div className="card-icon1"><IonIcon icon={settings} /></div>
                                        <div className="card-details">2 Stops</div>
                                    </IonCol>
                                    <IonCol size="4.5" className="card-col">
                                        <div className="card-icon1"><IonIcon icon={settings} /></div>
                                        <div className="card-details">2000 miles</div>
                                        <div className="card-icon1"><IonIcon icon={settings} /></div>
                                        <div className="card-details">Dry Van</div>
                                    </IonCol>
                                    <IonCol size="3" className="price">
                                        $2300
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>

                    <IonCard class="sn-card">
                    <IonCardHeader>Toast</IonCardHeader>
                
                    <IonCardContent>
                    <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast 1</IonButton>
                    <IonButton onClick={() =>setShowToast2(true)} expand="block">Show Toast 2</IonButton>
                    <IonToast cssClass="toaster"
                        isOpen={showToast1}
                        onDidDismiss={() => setShowToast1(false)}
                        message="Favorite removed."
                        duration={200}
                    />

                    <IonToast
                        isOpen={showToast2}
                        onDidDismiss={() => setShowToast2(false)}
                        message="Favorite removed."
                        buttons={[
                        {
                            side: 'end',
                            text: 'undo',
                            handler: () => {
                            console.log('Undo clicked');
                            }
                        }
                        ]}
                        duration = {500}
                    />
                </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>Acoordian</IonCardHeader>
                </IonCard>

                <IonCard class="sn-card" onClick={toggleAccordion} key="1">
                    <IonCardHeader class="sn-acc-header"> 
                        <span>Load Info and Terms</span>                            
                        {
                            show ?
                            <IonIcon icon={arrowUp}></IonIcon>
                            :
                            <IonIcon icon={arrowDown}></IonIcon>
                        }
                    </IonCardHeader>
                    <IonCardContent class={show ? 'fadein' : 'fadeout' }>
                        Some Content Some Content Some Content Some Content Some Content  Some Content Some Content Some Conten Some Content Some Content
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>DropDown</IonCardHeader>
                    <IonCardContent>
                        <IonLabel position="floating">Select One</IonLabel>
                        <IonSelect placeholder="Any" class="sn-select">
                            <IonSelectOption value="f">Female</IonSelectOption>
                            <IonSelectOption value="m">Male</IonSelectOption>
                        </IonSelect>
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>DateFeild</IonCardHeader>
                    <IonCardContent>
                        <IonLabel position="floating">Date</IonLabel>
                        <IonDatetime displayFormat="DD/MM/YYYY" class="sn-select"></IonDatetime>
                        <IonIcon class="sn-input-icon" icon={calendar}></IonIcon>
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>Search</IonCardHeader>
                    <IonCardContent>
                    <IonLabel position="floating">Search</IonLabel>
                    <IonInput class="sn-select"></IonInput>
                    <IonIcon class="sn-input-icon" icon={search}></IonIcon>
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>Alert</IonCardHeader>
                    <IonCardContent>
                        <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert 1</IonButton>
                        <IonAlert
                            isOpen={showAlert1}
                            onDidDismiss={() => setShowAlert1(false)}
                            header={'Confirm!'}
                            message={'Message <strong>text</strong>!!!'}
                            buttons={[
                                {
                                text: 'Cancel',
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: blah => {
                                    console.log('Confirm Cancel: blah');
                                }
                                },
                                {
                                text: 'Okay',
                                handler: () => {
                                    console.log('Confirm Okay');
                                }
                                }
                            ]}
                            />
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>CheckBox</IonCardHeader>
                    <IonCardContent>
                        <IonCheckbox color="primary" />
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>Pop Over</IonCardHeader>
                    <IonCardContent>
                        <IonPopover
                            isOpen={showPopover}
                            onDidDismiss={e => setShowPopover(false)}
                        >
                            <p>This is popover content This is popover content This is popover content This is popover content This is popover content This is popover content This is popover content</p>
                        </IonPopover>
                        <IonButton onClick={() => setShowPopover(true)}>Show Popover</IonButton>
                    </IonCardContent>
                </IonCard>


                <IonCard class="sn-card">
                    <IonCardHeader>Progress Indicator</IonCardHeader>
                    <IonCardContent>
                       <p> Loading </p> 
                        <IonButton onClick={() => setShowLoading(true)}>Show Loading</IonButton>
                        <IonLoading
                            isOpen={showLoading}
                            onDidDismiss={() => setShowLoading(false)}
                            message={'Loading...'}
                            duration={5000}
                        />                        
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>Progress Bar</IonCardHeader>
                    <IonCardContent>
                        {/*-- Default Progressbar --*/}
                        <IonProgressBar></IonProgressBar><br />

                        {/*-- Default Progressbar with 50 percent --*/}
                        <IonProgressBar value={0.5}></IonProgressBar><br />

                        {/*-- Colorize Progressbar --*/}
                        <IonProgressBar color="primary" value={0.5}></IonProgressBar><br />
                        <IonProgressBar color="secondary" value={0.5}></IonProgressBar><br />

                        {/*-- Other types --*/}
                        <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar><br />
                        <IonProgressBar type="indeterminate"></IonProgressBar><br />
                        <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar><br />
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>Spinner</IonCardHeader>
                    <IonCardContent>
                        {/*-- Default Spinner --*/}
                        <IonSpinner color="primary" />

                        {/*-- Lines --*/}
                        <IonSpinner name="lines" />

                        {/*-- Lines Small --*/}
                        <IonSpinner name="lines-small" />

                        {/*-- Dots --*/}
                        <IonSpinner name="dots" color="primary" />

                        {/*-- Bubbles --*/}
                        <IonSpinner name="bubbles" />

                        {/*-- Circles --*/}
                        <IonSpinner name="circles" color="primary" />

                        {/*-- Crescent --*/}
                        <IonSpinner name="crescent" />

                        {/*-- Paused Default Spinner --*/}
                        <IonSpinner paused />
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>
                        Radio
                    </IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonRadioGroup>
                                <IonListHeader>
                                    <IonLabel>Fruit</IonLabel>
                                </IonListHeader>
                                <IonItem>
                                    <IonLabel>Apple</IonLabel>
                                    <IonRadio slot="start" color="primary" value="apple"></IonRadio>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>Grape</IonLabel>
                                    <IonRadio slot="start" color="primary" value="grape" checked></IonRadio>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>Cherry</IonLabel>
                                    <IonRadio slot="start" color="primary" value="cherry"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>

                            <IonRadioGroup allowEmptySelection>
                                <IonListHeader>
                                    <IonLabel>Pizza Topping</IonLabel>
                                </IonListHeader>
                                <IonItem>
                                    <IonLabel>Beef</IonLabel>
                                    <IonRadio slot="end" color="primary"></IonRadio>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>Anchovies</IonLabel>
                                    <IonRadio slot="end" color="primary" checked></IonRadio>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>Sausage</IonLabel>
                                    <IonRadio slot="end" color="primary" name="sausage"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                        </IonList>
                    </IonCardContent>
                </IonCard>
                            
                <IonCard class="sn-card">
                    <IonCardHeader>Range</IonCardHeader>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                1
                                <IonRange color="primary" pin={true} />
                            </IonItem>

                            <IonItem>
                                2
                                <IonRange min={-200} max={200} color="secondary">
                                <IonLabel slot="start">-200</IonLabel>
                                <IonLabel slot="end">200</IonLabel>
                                </IonRange>
                            </IonItem>

                            <IonItem>
                                3
                                <IonRange dualKnobs={true} min={21} max={72} step={3} snaps={true} />
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    {/* <IonCardHeader>Reorder <IonButton onClick={toggleReorder}>toggle</IonButton></IonCardHeader> */}
                    <IonCardContent>
                        <IonItem>
                            <IonLabel>Item 1</IonLabel>
                        <   IonReorder slot="end" />
                        </IonItem>

                        <IonItem>
                            <IonLabel>Item 2</IonLabel>
                            <IonReorder slot="end" />
                        </IonItem>

                        {/*-- Default reorder icon, start aligned items --*/}
                        <IonItem>
                            <IonReorder slot="start" />
                            <IonLabel>Item 3</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonReorder slot="start" />
                            <IonLabel>Item 4</IonLabel>
                        </IonItem>

                        {/*-- Custom reorder icon end items --*/}
                        <IonItem>
                        <IonLabel>Item 5</IonLabel>
                            <IonReorder slot="end">
                                <IonIcon name="pizza" />
                            </IonReorder>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Item 6</IonLabel>
                            <IonReorder slot="end">
                                <IonIcon name="pizza" />
                            </IonReorder>
                        </IonItem>

                        {/*-- Items wrapped in a reorder, entire item can be dragged --*/}
                        <IonReorder>
                            <IonItem>
                                <IonLabel>Item 7</IonLabel>
                            </IonItem>
                        </IonReorder>

                        <IonReorder>
                            <IonItem>
                                <IonLabel>Item 8</IonLabel>
                            </IonItem>
                        </IonReorder>
                    </IonCardContent>
                </IonCard>
                
                
                <IonSearchbar></IonSearchbar>

                <IonCard class="sn-card">
                    <IonCardHeader>Segment (scrollable)</IonCardHeader>
                    <IonCardContent>
                        <IonSegment scrollable>
                            <IonSegmentButton class="sn-segment-button">
                                <IonIcon icon={home} />
                            </IonSegmentButton>
                            <IonSegmentButton checked class="sn-segment-button">
                                <IonIcon icon={heart} />
                            </IonSegmentButton>
                            <IonSegmentButton class="sn-segment-button">
                                <IonIcon icon={pin} />
                            </IonSegmentButton>
                            <IonSegmentButton class="sn-segment-button">
                                <IonIcon icon={star} />
                            </IonSegmentButton>
                            <IonSegmentButton class="sn-segment-button">
                                <IonIcon icon={globe} />
                            </IonSegmentButton>
                            <IonSegmentButton class="sn-segment-button">
                                <IonIcon icon={basket} />
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonCard class="sn-card">
                    <IonCardHeader>Toolbar</IonCardHeader>
                    <IonCardContent>         
                        <IonToolbar>
                            <IonTitle>Title Only</IonTitle>
                        </IonToolbar>
                    </IonCardContent>
                </IonCard>
                <IonCard class="sn-card">
                    <IonCardHeader>TypoGraphy</IonCardHeader>
                    <IonCardContent>         
                        <IonText color="primary"> Some Text Here</IonText>
                    </IonCardContent>
                </IonCard>
                </IonContent>
            </IonPage>
        </div>
    )
}
export default AllComponents;



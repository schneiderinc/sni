import React, { useState } from 'react';
import { IonCol, IonRow } from '@ionic/react';
import './Toggle.scss';

const Toggle = (props: any) => {
    const tabNames = props.data;
    const colsize = (12/tabNames.length).toString();
    const [showActive, setShowActive] = useState(tabNames[0]);
    const handleClick=(e:any, tabValue:any)=>{
        const clicked = e.target.id
        props.onToggleStateChange(tabValue);       
       setShowActive(clicked);
    }
    
    return (
        <div className="header_toggle_div">
            <IonRow class="header_toggle_layer">
                {
                   tabNames.map((tab:any, index:any) => (
                        <IonCol size = {colsize} key={index}>
                            <button id={tab} onClick={(e)=>handleClick(e, tab)} className={`${showActive === tab ?"header_toggle_layer_button":""} ${tab === 'Watchlist' ?"header_tab_like":""}`}>{tab} </button>
                        </IonCol>
                    ))
                }
            </IonRow>
        </div>
    );
};

export default Toggle;
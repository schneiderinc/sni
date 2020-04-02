import React, { useState } from 'react';
import { IonLabel, IonRange, IonButton, IonGrid, IonModal, IonRow, IonCol } from '@ionic/react';
import Slider , { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import 'app/pages/Search/New/NewPage.scss';
import Tooltip from 'rc-tooltip';



interface RadiusProps {
    labelName: any,
    InputValue: any,
    name: any,
    handleChange: any,
    divClassName: string,
    rangeDisabled: any
}
export const RadiusRange: React.FC<RadiusProps> = ({ labelName, InputValue, handleChange, name, divClassName, rangeDisabled }) => {
    const [selectedValue, setSelectedValue] = useState(InputValue);
   
    const SliderWithTooltip = createSliderWithTooltip(Slider);
   
     const valueFormatter = (v:any) => {
        return `${v} mi`;
      }
   
    const marks = {
        25: '25mi',
        50: '50 mi',
        75: '',
        100: '100 mi',
        125: '',
        150: '150 mi',
        175: '',
        200: '200 mi',
        225: '',
        250: {
            style: {
                left:'95%',
                width: '38px'
            },
            label:'250 mi',
          },
      };
  
    const onValueChnage =(value:any) =>{
        setSelectedValue (value);
        let event = {target: {name: name, value: value}}
        handleChange(event)
    }
    return (
        <>
            <div className="ion-item1">
            <div className={divClassName}> <IonLabel mode="ios" className="ion-label-radius">{labelName}</IonLabel> <div className="value-div"> {selectedValue} mi</div></div>
                   <SliderWithTooltip min={25} marks={marks} step={25} max={250} 
                   onChange={onValueChnage} 
                   tipFormatter={valueFormatter} 
                   value={selectedValue} 
                   tipProps={{ overlayClassName: 'sliderTooltip' }}
                   disabled = {rangeDisabled}
                   />
            </div>
        </>
    );
};

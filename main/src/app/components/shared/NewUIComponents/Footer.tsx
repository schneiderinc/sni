
import React from 'react';
import { IonFooter, IonRow, IonCol, IonToggle, IonBadge, IonImg, IonButton, IonGrid } from '@ionic/react';
import {AddFavorite} from 'app/utils/constants'
import 'app/pages/Search/New/NewPage.scss';
interface NewFooterProps{
    favorite:any,
    ToggleChange:any ,
    Reset:any,
    CancelForm :any ,
    Apply:any,
 
}
export const NewFooter: React.FC<NewFooterProps> = ({favorite,ToggleChange ,Reset, CancelForm ,Apply}) => {
    const apply = (event: any,platform: string) =>{
        event.platform = platform;
       Apply(event);
    }
    return (
        <>
            <IonFooter class="serach-page-footer">
                <IonRow className="save_as_favorite">
                    <IonCol size="6">
                        <div className="toggle-div">
                            <IonToggle mode="ios" className="favorite-toggle" name="favorite" checked={favorite} onIonChange={ToggleChange}></IonToggle>
                            <div className="save_as_favorite_text"><span>{AddFavorite}</span></div>
                        </div>
                    </IonCol>
                    <IonCol size="6" className="footer-col">
                        <IonBadge onClick={CancelForm} class="new_badges new_badges_cancel"><IonImg className="cancel_img" src="/assets/icon/cancel.svg" /></IonBadge>
                        <IonBadge class="new_badges new_badge_reset" onClick={Reset}><IonImg className="reset_img" src="/assets/icon/reset.svg" /></IonBadge>
                        <IonBadge class="new_badges new_badge_apply" onClick={(event) => apply(event,"mobile")}><IonImg className="apply_img" alt="logo" src="/assets/icon/tick.svg" /></IonBadge>
                    </IonCol>
                </IonRow>
            </IonFooter>
            <IonGrid class="serach-page-footer-desktop">
                <IonRow className="save_as_favorite">
                    <IonCol size="6">
                        <div className="toggle-div">
                            <IonToggle mode="ios" className="favorite-toggle" name="favorite" checked={favorite} onIonChange={ToggleChange}></IonToggle>
                            <div className="save_as_favorite_text"><span>{AddFavorite}</span></div>
                        </div>
                    </IonCol>
                    <IonCol size="6" className="footer-col-desktop">
                    <IonButton data-kind="primary" type="submit" class="call_btn" onClick={CancelForm}>CANCEL</IonButton>
                    <IonButton data-kind="primary" type="submit" class="call_btn" onClick={Reset}>RESET</IonButton>
                    <IonButton data-kind="primary" type="submit" class="call_btn" onClick={(event) => apply(event,"desktop")}>APPLY</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
};

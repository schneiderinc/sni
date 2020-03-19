
import React from 'react';
import { IonFooter, IonRow, IonCol, IonToggle, IonBadge, IonImg } from '@ionic/react';
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
                        <IonBadge class="new_badges new_badge_apply" onClick={(event) => Apply(event)}><IonImg className="apply_img" alt="logo" src="/assets/icon/tick.svg" /></IonBadge>
                    </IonCol>
                </IonRow>
            </IonFooter>
        </>
    );
};

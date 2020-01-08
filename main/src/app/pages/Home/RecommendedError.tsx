import React, {PureComponent} from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { search } from 'ionicons/icons';

export class RecommendedError extends PureComponent<any, any> {
  render(){
return(
    <div className="No-Recommended">
     <img  alt="logo" src="assets/icon/No-Search icon.png" width="79.01px" height="84.59px" />
    <p className="recommended-Error">
      We don't have any recommendations right now. Please come back later.
    </p>

    <div className="SearchLoadBtn">
      <IonButton expand="full" shape="round" onClick={this.props.loads} size="large" type="submit" class="RecommendedSearch"><IonIcon icon={search} class="load-search"></IonIcon>Search for loads</IonButton>
    </div>

  </div>

)
  }


}
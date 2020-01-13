import { IonContent,IonPage, IonList,IonRow, IonCol, IonLabel } from '@ionic/react';
import React, {PureComponent} from 'react';
import { LoadTile } from "app/components/app/home/Load-Tile";
import { Loads } from "app/components/app/home/Loads";
import './Home.page.scss';
import {TabHeader} from 'app/components/app/Bars/Bar-header'
import {RecommendedError} from './RecommendedError';
import Dropdown from 'app/components/core/Dropdown/dropdown';
const LoadsList = ["Recommended", "Watchlist"];
class HomePage extends PureComponent<any, any> {


   constructor (props:any) {
    super(props);
this.handleScroll = this.handleScroll.bind(this);
   this.state = {
    prevScrollpos: window.pageYOffset,
    visible: true,
    title: "Recommended Loads",
    tab:true,
    toggleBtn:true,
    loadData:[],
    toggleValue: "Recommended",
    loadSize: 0,
  };
  }
  componentDidMount() {
    //document.getElementsByTagName("ion-content")[0].addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    //document.getElementsByTagName("ion-content")[0].removeEventListener("scroll", this.handleScroll);
  }
  componentDidUpdate(prevProps:any){
    if(prevProps.data!==this.props.data){
      this.setState({loadData:this.props.data})
    }
  }
  handleScroll() {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };


 getLoads()
 {
   this.props.getLoads();
 }

 handleToggleStateChange = (value:any) => {
  this.setState({toggleValue : value});
  if(this.state.toggleValue === "Recommended"){
    this.setState({title: "Liked Loads",
    loadSize: this.state.loadData.filter((c:any) => c.price !== "TBD").length});
    
  } else {
    this.setState({title: "Recommended Loads", loadSize: this.state.loadData.length});
  }
}
  sortedData=(data:any)=>{
    this.setState({ loadData: data});
  }

render(){
  
  const sortByOptions = [{ value: "origin_deadhead", name: "Origin DeadHead" }, { value: "destination_deadhead", name: "Destination DeadHead" }, { value: "price", name: "Price" }, { value: "origin_from_date", name: "Pickup date" }, { value: "total_distance", name: "Distance" }];
  // const contextOptions = [{ value: "context", name: "Context" }, { value: "distance", name: "Distance" }];
  return (
   

    <IonPage>
    <TabHeader className={!this.state.visible ? "hide-header":''} Title= {this.state.title} loadSize={this.state.loadSize>0? this.state.loadSize : this.state.loadData.length} LoadsList={LoadsList}  
     toggleBtn={this.state.toggleBtn} onToggleStateChange = {this.handleToggleStateChange}  />
        {this.state.loadData.length>0 &&   <div className="short-div">
         
         {this.state.tab?
         <IonRow class="short-row">
           <IonCol size="5" class="rec_text">
               <b>{this.state.loadSize>0? this.state.loadSize : this.state.loadData.length}  </b>Recommendations
           </IonCol>
           <IonCol size="7" class="sort_select">
              <div className="select_div">
                <IonLabel className="sort_label">Sort:</IonLabel>
                <Dropdown options={sortByOptions} loadData={this.state.loadData} sortedData={this.sortedData}/>
              </div>
          </IonCol>
         </IonRow>:null}
        </div>}

    <IonContent className="ion-padding">
   
      
      <div>
      {this.state.toggleValue === "Recommended" ? (
        <Loads loads={this.state.loadData} >{
          ({ loads }: { loads?: any }) => {
            return <IonList  className="loadTilePad">
              {loads.map((load: any, index:number) => <LoadTile key={index} {...load} />)}
            </IonList>
          }
        }
        </Loads>
        ) : (
          <Loads loads={this.state.loadData} >{
            ({ loads }: { loads?: any }) => {
              return <IonList className="loadTilePad">              
            {loads
            .filter((load: any) => load.price !== "TBD")
            .map((load: any, index:number) => <LoadTile key={index} {...load} />)}
              </IonList>
            }
          }
          </Loads>   
          )}
      </div>
      {!this.state.loadData.length && <RecommendedError loads={this.getLoads.bind(this)} />}
    </IonContent>
    
    </IonPage>

  );
        }
};

export default HomePage;


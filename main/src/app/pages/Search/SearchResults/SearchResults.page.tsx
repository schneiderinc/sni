import React, { PureComponent } from 'react';
import { IonContent, IonList, IonRow, IonCol, IonSegment, IonSegmentButton, IonBadge, IonLabel } from '@ionic/react';
import { Loads } from 'app/components/app/home/Loads';
import { LoadTile } from 'app/components/app/home/Load-Tile';
import Dropdown from 'app/components/core/Dropdown/dropdown';
import Toggle from 'app/components/shared/toggle/Toggle';
import searchModel from 'app/models/home/Search.model';

class SearchResultPage extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            tab: true,
            loadData: searchModel.searchResults.data,
            editSearch: true,
            searchVariables: ["1 Stop-off", "Dry Van", "Pick Up Date : Nov 16", "Drop off Date : Nov 16"]
        };
    }
    handleToggleStateChange = (value: any) => {
        this.props.onToggleStateChange(value);

        if (value === "Recommended") {
            this.setState({ subtitle: "Recommended", isContextsearchvisible: true })
        } else {
            this.setState({ subtitle: "Liked", isContextsearchvisible: false })
        }

    }
    sortedData=(data:any)=>{
        this.setState({ loadData: data});
    }
    render() {
        const srchRst: any = this.props.location && /results/.test(this.props.location.pathname);
        const sortByOptions = [{ value: "origin_deadhead", name: "Origin DeadHead" }, { value: "destination_deadhead", name: "Destination DeadHead" }, { value: "price", name: "Price" }, { value: "origin_from_date", name: "Pickup date" }, { value: "total_distance", name: "Distance" }];
        return (
                <IonContent>
                    {this.props.toggleBtn ? <Toggle onToggleStateChange={(value: any) => this.handleToggleStateChange(value)} data={this.props.LoadsList} /> : null}
                    {srchRst ?
                        <div className="header_search_bubble">
                            <IonSegment scrollable className="ion-segment">
                                {
                                     Object.entries(searchModel.searchResults.params).map((filter: any, index: any) => (
                                        Object.entries(searchModel.searchResults.params)[index][1] !== "" && (<IonSegmentButton className="ion-segment-button" key={index} >
                                            <IonBadge class="search_floating_badge">{filter[0] + " : " + filter[1]}</IonBadge>
                                        </IonSegmentButton>
                                        )))
                                }
                            </IonSegment>
                        </div>
                        : ''}
                    <div className="short-div">
                        <IonRow>
                            <IonCol size="4" class="rec_text">
                                <b>10</b> Matches
                            </IonCol>
                            <IonCol size="8" class="sort_select">
                                <div className="select_div">
                                    <IonLabel className="sort_label">Sort:</IonLabel>
                                    <Dropdown options={sortByOptions} loadData={this.state.loadData} sortedData={this.sortedData}/>
                                </div>
                            </IonCol>
                        </IonRow>
                    </div>
                    {searchModel.searchResults && this.state.loadData && 
                        
                            <div className="search_results_container">
                                <Loads loads={this.state.loadData} >{
                                    ({ loads }: { loads?: any }) => {
                                        return <IonList>
                                            {loads.map((load: any, index: number) => <LoadTile key={index} {...load} />)}
                                        </IonList>
                                    }
                                }
                                </Loads>
                            </div>
                        }
                </IonContent>
        );
    }
}
export default SearchResultPage;






import React, { PureComponent } from 'react';
import { IonContent, IonList, IonRow, IonCol, IonSegment, IonSegmentButton, IonBadge, IonLabel, IonPage } from '@ionic/react';
import { Loads } from 'app/components/app/home/Loads';
import { LoadTile } from 'app/components/app/home/Load-Tile';
import Dropdown from 'app/components/core/Dropdown/dropdown';
import AppHeader from 'app/components/app/Bars/Bar-header';

class SearchResultPage extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            tab: true,
            loadData: this.props.results,
            editSearch: true,
            searchVariables: ["1 Stop-off", "Dry Van", "Pick Up Date : Nov 16", "Drop off Date : Nov 16"]
        };
    }

    sortedData = (data: any) => {
        this.setState({ loadData: data });
    }
    render() {

        const sortByOptions = [{ value: "origin_deadhead", name: "Origin DeadHead" }, { value: "destination_deadhead", name: "Destination DeadHead" }, { value: "price", name: "Price" }, { value: "origin_from_date", name: "Pickup date" }, { value: "total_distance", name: "Distance" }];
        return (
            <IonPage>
                <AppHeader title="Search Results" editData={() => this.props.history.push("/app/search", { data: this.props.params })}/>
                <IonContent>
                    <div className="header_search_bubble">
                        {this.props.params && <IonSegment scrollable className="ion-segment">
                            {
                                Object.entries(this.props.params).map((filter: any, index: any) => (
                                    Object.entries(this.props.params)[index][1] !== "" && (<IonSegmentButton className="ion-segment-button" key={index} >
                                        <IonBadge class="search_floating_badge">{filter[0] + " : " + filter[1]}</IonBadge>
                                    </IonSegmentButton>
                                    )))
                            }
                        </IonSegment>}
                    </div>
                    <div className="short-div">
                        <IonRow>
                            <IonCol size="4" class="rec_text">
                                <b>10</b> Matches
                            </IonCol>
                            <IonCol size="8" class="sort_select">
                                <div className="select_div">
                                    <IonLabel className="sort_label">Sort:</IonLabel>
                                    <Dropdown options={sortByOptions} loadData={this.state.loadData} sortedData={this.sortedData} />
                                </div>
                            </IonCol>
                        </IonRow>
                    </div>
                    <div className="search_results_container">
                        <Loads loads={this.props.results} >{
                            ({ loads }: { loads?: any }) => {
                                return <IonList>
                                    {loads.map((load: any, index: number) => <LoadTile key={index} {...load} module="search" />)}
                                </IonList>
                            }
                        }
                        </Loads>
                    </div>

                </IonContent>
            </IonPage>
        );
    }
}
export default SearchResultPage;






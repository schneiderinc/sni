import React, { PureComponent } from 'react';
import { IonContent, IonList, IonRow, IonCol, IonSegment, IonSegmentButton, IonBadge, IonLabel, IonPage } from '@ionic/react';
import { Loads } from 'app/components/app/home/Loads';
import { LoadTile } from 'app/components/app/home/Load-Tile';
import Dropdown from 'app/components/core/Dropdown/dropdown';
import AppHeader from 'app/components/app/Bars/Bar-header';
import './SearchResults.page.scss';

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
    componentDidMount() {
        this.setState({ loadData: this.props.results });
    }
    sortedData = (data: any) => {
        this.setState({ loadData: data });
    }
    render() {

        const sortByOptions = [{ value: "origin_deadhead", name: "Origin DeadHead" }, { value: "destination_deadhead", name: "Destination DeadHead" }, { value: "price", name: "Price" }, { value: "origin_from_date", name: "Pickup date" }, { value: "total_distance", name: "Distance" }];
        return (
            <IonPage className="desktop-page search-result-page">
                <AppHeader title="Search Results" editData={() => this.props.history.push("/app/search", { data: this.props.params })} />
                <IonContent class="search_results_container">
                    {this.props.params && <IonSegment scrollable className="ion-segment">
                        {
                            Object.entries(this.props.params).map((filter: any, index: any) => (
                                Object.entries(this.props.params)[index][1] !== "" && (<IonSegmentButton className="ion-segment-button" key={index} >
                                    <IonBadge class="search_floating_badge">{filter[0] + " : " + filter[1]}</IonBadge>
                                </IonSegmentButton>
                                )))
                        }
                    </IonSegment>}
                    <div className="short-div">
                        <IonRow class="short-row">
                            <IonCol size="5" class="rec_text">
                                <span className="recommendations_num">10 </span> Matches
                            </IonCol>
                            <IonCol size="7" class="sort_select">
                                <div className="select_div">
                                    <IonLabel className="sort_label">Sort:</IonLabel>
                                    <Dropdown options={sortByOptions} loadData={this.state.loadData} sortedData={this.sortedData} />
                                </div>
                            </IonCol>
                        </IonRow>
                    </div>
                    <IonRow class="search-desktop-view">
                        <IonCol size="1.5" class="rec_text">
                            <span className="recommendations_num">10 </span> Matches
                        </IonCol>
                        <IonCol size="7.5">
                            {this.props.params && <IonSegment scrollable>
                                {
                                    Object.entries(this.props.params).map((filter: any, index: any) => (
                                        Object.entries(this.props.params)[index][1] !== "" && (<IonSegmentButton className="ion-segment-button" key={index} >
                                            <IonBadge class="search_floating_badge">{filter[0] + " : " + filter[1]}</IonBadge>
                                        </IonSegmentButton>
                                        )))
                                }
                            </IonSegment>}
                        </IonCol>
                        <IonCol size="3" class="sort_select">
                            <div className="select_div">
                                <IonLabel className="sort_label">Sort:</IonLabel>
                                <Dropdown options={sortByOptions} loadData={this.state.loadData} sortedData={this.sortedData} />
                            </div>
                        </IonCol>
                    </IonRow>
                    <Loads loads={this.props.results} >{
                        ({ loads }: { loads?: any }) => {
                            return <IonList>
                                {loads.map((load: any, index: number) => <LoadTile key={index} {...load} module="search" />)}
                            </IonList>
                        }
                    }
                    </Loads>
                </IonContent>
            </IonPage>
        );
    }
}
export default SearchResultPage;






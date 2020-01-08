import React, { PureComponent } from 'react';
import { IonContent, IonList, IonRow, IonCol, IonSegment, IonSegmentButton, IonBadge, IonLabel, IonPage, IonButton } from '@ionic/react';
import { Loads } from 'app/components/app/home/Loads';
import { LoadTile } from 'app/components/app/home/Load-Tile';
import Dropdown from 'app/components/core/Dropdown/dropdown';
import Toggle from 'app/components/shared/toggle/Toggle';
import { TabHeader } from 'app/components/app/Bars/Bar-header';
const sortByOptions = [{ value: "origin_deadhead", name: "Origin DeadHead" }, { value: "destination_deadhead", name: "Destination DeadHead" }, { value: "price", name: "Price" }, { value: "origin_from_date", name: "Pickup date" }, { value: "total_distance", name: "Distance" }];
class SearchResultPage extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            tab: true,
            loadData: this.props.location.state.data,
            editSearch: true,
            searchVariables: ["1 Stop-off", "Dry Van", "Pick Up Date : Nov 16", "Drop off Date : Nov 16"],
            asc: false,
            isDropdown: false,
            selectedValue: sortByOptions[0].name,
            selectedValue2: sortByOptions[0].value

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
    sortBy = (x: any) => {
        const {asc,loadData}= this.state;
        this.setState({ asc: !asc })
        console.log(asc, "hhi")
        if (asc) {
            let sortedList = [...loadData].sort((a: any, b: any) => (a[x] > b[x] ? 1 : -1));
            this.setState({ loadData:sortedList ,isDropdown:false})
            console.log(loadData)
        }

        else {
            let sortedList = [...loadData].sort((a: any, b: any) => (a[x] > b[x] ? -1 : 1));
           
            this.setState({ loadData: sortedList,isDropdown: false })
            console.log(loadData)
        }

        
    }
    dropdownClick = () => {
        this.setState({ isDropdown: true })
     

    }
    SelectedDropdown = async (k: any) => {
       await this.setState(() => ({ selectedValue2: sortByOptions[k]["value"], selectedValue: sortByOptions[k]["name"] }))
        this.sortBy(this.state.selectedValue2)
    }

    render() {
        const srchRst: any = this.props.location && /resutls/.test(this.props.location.pathname);
        const sortByOptions = [{ value: "origin_deadhead", name: "Origin DeadHead" }, { value: "destination_deadhead", name: "Destination DeadHead" }, { value: "price", name: "Price" }, { value: "origin_from_date", name: "Pickup date" }, { value: "total_distance", name: "Distance" }];
        return (
            <IonPage>
                <TabHeader Title="Search Results" {...this.props} isSearchRst={true} />
                <IonContent>
                    {this.props.toggleBtn ? <Toggle onToggleStateChange={(value: any) => this.handleToggleStateChange(value)} data={this.props.LoadsList} /> : null}
                    {srchRst ?
                        <div className="header_search_bubble">
                            <IonSegment scrollable className="ion-segment">
                                {
                                    Object.entries(this.props.location.state.params).map((filter: any, index: any) => (
                                        Object.entries(this.props.location.state.params)[index][1] !== "" && (<IonSegmentButton className="ion-segment-button" key={index} >
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
                            <IonCol size="8" class="rec_text1">
                                <IonLabel className="sort_label_search">Sort:</IonLabel>
                                <div className="search_sortby_select">
                                    <Dropdown options={sortByOptions} lable={true} sortBy={this.sortBy} />
                                </div>
                            </IonCol>
                        </IonRow>
                    </div>
                    <IonButton type="button" onClick={this.dropdownClick}>{this.state.selectedValue}</IonButton>
                        {this.state.isDropdown ?
                                sortByOptions.map((option: any, k: any) => (
                                    <ul key={k}>
                                        <li onClick={()=>this.SelectedDropdown(k)}>{option.name}</li>
                                    </ul>
                                
                                ))
                            : null

                        }

                    {this.props.location.state && <div className="search_results_container">
                        <Loads loads={this.state.loadData} >{
                            ({ loads }: { loads?: any }) => {
                                return <IonList>
                                    {loads.map((load: any, index: number) => <LoadTile key={index} {...load} />)}
                                </IonList>
                            }
                        }
                        </Loads>
                    </div>}
                </IonContent>
            </IonPage>
        );
    }
}
export default SearchResultPage;






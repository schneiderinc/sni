import React, { Component } from "react";
import { asyncContainer, Typeahead } from "react-bootstrap-typeahead";
import './typeahead.scss'
import { IonImg, IonItem, IonLabel } from "@ionic/react";
const AsyncTypeahead = asyncContainer(Typeahead);
export class TypeaheadComponent extends Component {

    state = {
        isLoading: false,
        options: []
    };
    render() {
        return (
            <>
                <IonLabel mode="ios" position="floating" class="type-ahead-label">labelValue</IonLabel>
                <AsyncTypeahead
                    isLoading={this.state.isLoading}
                    id="my-typeahead-id"
                    labelKey={(option: any) => `${option}`}
                    onSearch={(query: any) => {
                        this.setState({ isLoading: true });
                        fetch(
                            `https://atlas.microsoft.com/search/address/json?subscription-key=OAUdAUzYkM1bjzVQCdc5I1vOFSpCtf7TZcl_9DnrDpE%20&api-version=1.0&query=${query}`
                        )
                            .then(resp => resp.json())
                            .then(json => {
                                console.log(json.results, 'json');
                                const options = json.results.map((v: any, k:any) => {
                                    console.log(v.address.municipality + v.address.municipalitySubdivision + v.address.countrySubdivision, 'sss');
                                    return v.address.municipality ? v.address.municipality : v.address.freeformAddress + v.address.countrySubdivision + v.address.countrySubdivisionName + v.address.postalCode ? v.address.postalCode : ""
                                })
                                console.log(options, 'res');
                                this.setState({
                                    isLoading: false,
                                    options: options
                                })
                            }

                            );
                    }}
                    options={this.state.options}
                    placeholder = "Anywhere"
                >  <IonImg slot="end" alt="logo" src="/assets/icon/search_icon.svg" className="typeahead-input-icon" /></AsyncTypeahead>
            </>
        );
    }
}

export default TypeaheadComponent;
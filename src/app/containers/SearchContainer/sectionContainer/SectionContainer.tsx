
import React, { Component } from 'react';
import { NewContainer } from 'app/containers/SearchContainer/NewContainer';
import { RecentContainer } from 'app/containers/SearchContainer/RecentContainer';
import { FavouriteContainer } from 'app/containers/SearchContainer/FavouriteContainer';
import { SearchResultContainer } from "app/containers/SearchContainer/SearchResultContainer";

class SectionContainer extends Component<any, any>{	
    renderSwitch(section: string) {
        switch (section) {
            case 'new':
                return <NewContainer />;
            case 'recent':
                return <RecentContainer />;
            case 'favorite':
                return <FavouriteContainer />;
            case 'results':
                return <SearchResultContainer />
            default:
                return <NewContainer />; 
        }
    }
    render() {

        return (this.renderSwitch(this.props.match.params.section))
    }
}

export default SectionContainer;
import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { LOAD_DATA } from 'app/utils/mock_Data';
import { IonBadge, IonIcon, IonImg, IonGrid } from '@ionic/react';
import './searchResultsDesktop';
import '../../../../theme/variables.scss';
import '../../../../theme/responsive-styles.scss';

const customSort = (rows: any, field: any, direction: any) => {
    let sortedList = []
    if (direction === "asc") {
        sortedList = [...rows].sort((a: any, b: any) => (a[field] > b[field] ? 1 : -1));

    }
    else {
        sortedList = [...rows].sort((a: any, b: any) => (a[field] > b[field] ? -1 : 1));
    }
    return sortedList;
};


const src="assets/icon/star.svg";
const star_visible =false;
const SearchResultDesktop = (props: any) => {
    const showLoadDetails = (row: any) => {
        let url = '/app/search/' + row.schneider_loads_id;
        props.push(url);
    }
    const favorite = (row:any) => {
    // star_visible= !star_visible;
        const src="assets/icon/star-color.svg"
    }
    const columns = [
        {
            name: 'Origin',
            selector: 'origin_city',
            sortable: true,
            width:'110px',
            style: {
                fontWeight: 800,
                fontSize: 14,
                colorName: '#000000',
            }
            
        },
        {
            name: 'Origin Date',
            selector: 'origin_from_date',
            sortable: true,
            width: '123px',
            cell: (row: any) =>row.origin_from_date +","+ row.origin_to_date_time
        },
        {
            name: 'DH-O',
            selector: 'origin_deadhead',
            sortable: true,
            width: '79px'
        },
        // {
        // 	name: 'Origin Load Type',
        // 	selector: 'origin_',
        // 	sortable: true,
        // 	right: true,
        // },
        {
            name: 'Origin Load Type',
            selector: '',
            sortable: false,
            width:'93px',
            cell: (row: any) =><div>Live load</div> 
        },
        {
            name: 'Destination',
            selector: 'destination_city',
            sortable: true,
            width:'110px',
            style: {
                fontWeight: 800,
                fontSize: 14,
                colorName: '#000000',
            }
        },
        {
            name: 'Destination Date',
            selector: 'destination_from_date',
            width:'123px',
            sortable: true,
            cell: (row: any) =>row.destination_from_date + "," + row.destination_to_date_time
        },
        {
            name: 'DH-D',
            selector: 'destination_deadhead',
            sortable: true,
            width: '79px'
        },
        // {
        // 	name: 'Destination Load Type',
        // 	selector: 'year',
        // 	sortable: true,
        //     right: true,
        //     cell: (row: any) =><div>Live Unload</div>
        // },
        {
            name: 'Destination Load Type',
            selector: '',
            sortable: false,
            width:'110px',
            cell: (row: any) =><div>Live Unload</div> 
        },
        {
            name: 'Trailer Type',
            selector: 'trailer',
            sortable: true,
            width: '84px',
        },
        {
            name: 'Rate ($)',
            selector: 'price',
            sortable: true,
            width:'92px',
            cell: (row: any) => row.price === 0 ? <div className="price_text">Contact for Price</div> : row.price,
            style: {
                fontWeight: 800,
                fontSize: 14,
                colorName: '#000000',
            }
        },
        // {
        //     name: '',
        //     selector: '',
        //     sortable: false,
        //     width: "49px",
        //     cell: (row: any) => <IonImg onClick={() => favorite(row)} src= {src}/> 
        // },
        {
            name: '',
            selector: '',
            sortable: false,
            width: "50px",
            cell: (row: any) => <IonImg onClick={() => favorite(row)} src= {src}/> 
        },
        {
            name: '',
            selector: '',
            sortable: false,
            width: "70px",
            cell: (row: any) => <IonGrid class="datatable-badge" onClick={() => showLoadDetails(row)}><i></i></IonGrid>   }
    ];
    return (
        <>
            <div className="searchResults_div">Search Results</div>
            <DataTable
                title="12 Matches"
                columns={columns}
                data={props.data}
                highlightOnHover={true}
                sortFunction={customSort}
            />
            <div className="end-of-list">End of list</div>
        </>
    );
}
export default SearchResultDesktop;
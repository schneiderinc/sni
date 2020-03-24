import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { LOAD_DATA } from 'app/utils/mock_Data';
import { IonBadge, IonIcon, IonImg } from '@ionic/react';

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



const SearchResultDesktop = (props: any) => {
    const showLoadDetails = (row: any) => {
        let url = '/app/search/' + row.schneider_loads_id;
        props.push(url);
    }
    const columns = [
        {
            name: 'Origin',
            selector: 'origin_city',
            sortable: true,
            style: {
                color: '#FF6418',
                fontWeight: 700
            }
        },
        {
            name: 'Origin Date',
            selector: 'origin_from_date',
            sortable: true,
        },
        {
            name: 'DH-O',
            selector: 'origin_deadhead',
            sortable: true,
            width: '100px'
        },
        // {
        // 	name: 'Origin Load Type',
        // 	selector: 'origin_',
        // 	sortable: true,
        // 	right: true,
        // },
        {
            name: 'Destination',
            selector: 'destination_city',
            sortable: true,
            style: {
                color: '#FF6418',
                fontWeight: 600
            }
        },
        {
            name: 'Destination Date',
            selector: 'destination_from_date',
            sortable: true
        },
        {
            name: 'DH-D',
            selector: 'destination_deadhead',
            sortable: true,
            width: '100px'
        },
        // {
        // 	name: 'Destination Load Type',
        // 	selector: 'year',
        // 	sortable: true,
        // 	right: true,
        // },
        {
            name: 'Trailer Type',
            selector: 'trailer',
            sortable: true,
        },
        {
            name: 'Rate ($)',
            selector: 'price',
            sortable: true,
            cell: (row: any) => row.price === 0 ? <IonImg className="priceLogo" src="assets/icon/phones.svg"/> : row.price
        },
        {
            name: '',
            selector: '',
            sortable: false,
            width: "70px",
            cell: (row: any) => <IonBadge class="datatable-badge" onClick={() => showLoadDetails(row)}><i></i></IonBadge>
        }
    ];
    return (
        <>
            <DataTable
                title="Search Results"
                columns={columns}
                data={LOAD_DATA}
                highlightOnHover={true}
                pagination
                sortFunction={customSort}
            />
        </>
    );
}
export default SearchResultDesktop;
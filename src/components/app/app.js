import React from 'react';

import TableEditor from '../app-table-editor';
import AppTableList from '../app-table-list';

const App = () => {

    const listData = [
        {name: 'Vasily', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 1},
        {name: 'Viktor', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 2},
        {name: 'Vlad', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 3},
        {name: 'Vasily', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 4},
        {name: 'Viktor', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 5},
        {name: 'Vlad', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 6},
        {name: 'Vasily', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 7},
        {name: 'Viktor', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 8},
        {name: 'Vlad', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 9},
        {name: 'Vasily', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 10},
        {name: 'Viktor', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 11},
        {name: 'Vlad', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 12}
    ];

    return(
        <div className="page">
        <TableEditor/>
        <AppTableList list={listData}></AppTableList>
        </div>
    );
};

export default App;
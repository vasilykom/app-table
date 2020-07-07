import React from 'react';

import TableEditor from '../app-table-editor';
import AppTableList from '../app-table-list';

const App = () => {

    const listData = [
        {name: 'Vasily', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 1},
        {name: 'Viktor', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 2},
        {name: 'Vlad', surname: 'Komanovsky', age: '40', city: 'Vangazi', id: 3}

    ];

    return(
        <div className="page">
        <TableEditor/>
        <AppTableList list={listData}></AppTableList>
        </div>
    );
};

export default App;
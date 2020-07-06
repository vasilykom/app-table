import React from 'react';
import ReactDOM from 'react-dom';


import TableEditor from './components/app-table-editor';
import AppTableList from './components/app-table-list'

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

ReactDOM.render(<App></App>, document.getElementById('root'));
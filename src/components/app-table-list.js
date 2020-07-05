import React from 'react';
import ReactDOM from 'react-dom';
import AppTableListItem from './app-table-list-item'
import TableEditor from './app-table-editor';

const AppTableList = ({list}) => {

    const elements = list.map((item)=>{
        return(
            <div>
                <AppTableListItem
                name={item.name}
                surname={item.surname}
                age={item.age}
                city={item.city}/>
            </div>
        )
    })

    return (
        <div>
       {elements}
       </div>
    )
}
export default AppTableList;
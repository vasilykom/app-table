import React, { Component } from 'react';

import TableEditor from '../app-table-editor';
import AppTableList from '../app-table-list';

export default class App extends Component {

    startId=1000;
    state = {
         listData : [
            this.createListData('vik','kvo',45,'city')
        ]
    }    

    createListData(name, surname, age, city, id){
         return{
             name: name,
             surname: surname,
             age: age,
             city: city,
             id: this.startId++
         }

    }

    deleteItem = (id) => {
        this.setState (({ listData})=>{
            const idx = listData.findIndex((el)=> el.id ===id);
            const before= listData.splice(0,idx);
            const after = listData.splice(idx+1);
            const newListData = [...before, ...after];

            return {
                listData: newListData
            }
        })
    }

    addItem = (text) => {
        
        const newItem = {
            name: text,
            surname: text,
            age: text,
            city: text,
            id: this.startId
        }
        this.setState (({ listData})=>{

            const newArray = [
                ...listData, newItem
            ]

            return {
                listData: newArray
            }
        })

    };

    render(){
        
        return(
            <div className="page">
            <TableEditor 
            onItemAdded = {this.addItem}/>

            <AppTableList list={this.state.listData}
            onDeleted = { this.deleteItem}
            ></AppTableList>
            </div>
        );
    }
}
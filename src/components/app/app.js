import React, { Component } from 'react';

import TableEditor from '../app-table-editor';
import AppTableList from '../app-table-list';

export default class App extends Component {

    startId=1000;
    newEditCandidate;

    state = {
        listData : [
            this.createListData('vik','kvo',45,'city'),
            this.createListData('vik','kvo',45,'city'),
            this.createListData('vik','kvo',45,'city')


        ]
    }    

    createListData(name, surname, age, city){
        return{
            name: name,
            surname: surname,
            age: age,
            city: city,
            id: this.startId++
        }

    }

    deleteItem = (id) => {
        this.setState (({ listData })=>{
            const idx = listData.findIndex((el)=> el.id ===id);
            const before= listData.splice(0,idx);
            const after = listData.splice(idx+1);
            const newListData = [...before, ...after];

            return {
                listData: newListData
            }
        })
    }

    editItem = (id)=> {
        console.log('edit row',id)
        
            const idEdit = this.state.listData.findIndex((el)=> el.id ===id);
            const newEditCandidate=this.state.listData[idEdit]
        
        console.log(newEditCandidate)
    }

    addItem = (name, surname, age, city) => {
        
        const newItem = {
            name: name,
            surname: surname,
            age: age,
            city: city,
            id: this.startId++
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
            newEditCandidate = {this.newEditCandidate}
            onItemAdded = {this.addItem}
            />

            <AppTableList 
            list={this.state.listData}
            onDeleted = { this.deleteItem}
            onEdited = {this.editItem}
            ></AppTableList>
            </div>
        );
    }
}
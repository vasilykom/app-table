import React, { Component } from 'react';

import TableEditor from '../app-table-editor';
import AppTableList from '../app-table-list';

export default class App extends Component {

    startId=1000;
    newEditCandidate;

    state = {
        listData : [
            this.createListData('Oleg','Lukin',45,'Riga')
        ],
        newEditCandidate:[this.createListData('','','','')
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
        
        const newEditCandidate=this.state.listData[id]
        this.setState (({ listData })=>{
            const idx = listData.findIndex((el)=> el.id ===id);
            const newListData = [this.state.listData[idx]];
            console.log('edit row in app',newListData[0])

            return {newEditCandidate: newListData[0]}
            
        })   
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
            editList={this.state.newEditCandidate}
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
import React from 'react';
import ReactDOM from 'react-dom';
import AppTableListItem from './app-table-list-item'
import TableEditor from './app-table-editor';
import './app-table-list.css'


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
            <div className="table_edit_options">
                <div className="board-btn small_btn">
                    <button type="button" className="btn btn-primary btn-block btn-sm" >Copy table</button>
                </div>  

                <div className="delete_icon">
                    <img src="./btn_delete.svg"></img>
                </div> 
            </div>

            <div class="table-responsive">

                <table className="table table-sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Surname</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Edit</th>
                                    </tr>

                                </thead> 

                </table>
                {elements}

                    
            </div>
            
        </div>
       
    )
}
export default AppTableList;
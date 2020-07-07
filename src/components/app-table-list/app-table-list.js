import React from 'react';
import AppTableListItem from '../app-table-list-item/app-table-list-item';
import './app-table-list.css';

export default class AppTableList extends React.Component{

    render() {
        const{list, onDeleted} = this.props;
        
        const elements = list.map((item)=>{

            const {id, ...itemProps } = item;
            return(
                <div key = {item.id}>
                    <AppTableListItem {...itemProps}
                    onDeleted={ () => onDeleted(id)}
                    />
                </div>
            )
        })
    
        return (
    
            <div className="table_section"> 
                <div className="table_edit_options">
                    <div className="board-btn small_btn">
                        <button type="button" className="btn btn-primary btn-block btn-sm" >Copy table</button>
                    </div>  
    
                    <div className="delete_icon">
                        <input type="image" src="./btn_delete.svg" alt="delete_btn"></input>
                    </div> 
                </div>
    
                <div className="table-responsive">
    
                    <table className="table table-sm ">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" className="th_name">Name</th>
                                <th scope="col" className="th_surname">Surname</th>
                                <th scope="col" className="th_age">Age</th>
                                <th scope="col" className="th_city">City</th>
                                <th scope="col" className="th_edit">Edit</th>
                            </tr>
                        </thead> 
                    </table>
    
                    {elements}
       
                </div>
            </div>
        )
    }
}



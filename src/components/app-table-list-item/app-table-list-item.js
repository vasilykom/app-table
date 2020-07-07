import React, {Component} from 'react';
import './app-table-list-item.css';

export default class AppTableListItem extends Component {

    constructor(){
       super();
        this.onLableEditClick =() => {
            console.log('click is on lable Edit')     
        }
        this.onLableDeleteClick =() => {
            console.log('click is on lable Delete')     
        }
    }
    
   render(){
       const {name,surname,age,city} = this.props;
        return (
            <div>
                <table className="table table-bordered table-hover table-sm">
                    <tbody>
                        <tr>
                            <td className="td_name">{name}</td>
                            <td className="td_surname">{surname}</td>
                            <td className="td_age">{age}</td>   
                            <td className="td_city">{city}</td>
                            <td className="td_edit">
                                <div className="td_edit_options">
                                    <a href="/#" className="edit_row" alt="edit_btn"
                                    onClick={ this.onLableEditClick}

                                    >Edit</a> 
                                    <a href="#top" className="delete_row"
                                    onClick={ this.onLableDeleteClick}
                                    >Delete</a> 
                                </div>
                            </td>       
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
import React from 'react';
import './app-table-list-item.css';

const AppTableListItem = ({name,surname,age,city}) => {
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
                                <a href="/#" className="edit_row" alt="edit_btn">Edit</a> 
                                <a href="/#" className="delete_row">Delete</a> 
                            </div>
                        </td>       

                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default AppTableListItem;
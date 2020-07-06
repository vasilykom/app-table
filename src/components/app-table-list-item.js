import React from 'react';
import './app-table-list-item.css'

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
                        <td className="td_edit"></td>               
                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default AppTableListItem;
import React from 'react';
import './app-table-list-item.css'

const AppTableListItem = ({name,surname,age,city}) => {
    return (
        <div>

            <table className="table table-bordered table-hover table-sm">

                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{surname}</td>
                        <td> {age}</td>   
                        <td> {city}</td>
                        <td> </td>   
            
                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default AppTableListItem;
import React from 'react';
import './app-table-editor.css';

const AppTableEditor = () => {
return (
    
    <div className="group-table">
        <a name="top"></a>
        <div className="board-row">
            <input placeholder = "Name" type= "text" className="form-control"/>
        </div>
        <div className="board-row">
            <input placeholder = "Surname" className="form-control"/>
        </div>
        <div className="board-row">
            <input placeholder = "Age" className="form-control"/>
        </div>
        <div className="board-row">
            <input placeholder = "City" className="form-control"/>  
        </div>  

        <div className="board-btn">
            <button type="button" className="btn btn-primary btn-block">ADD</button>
        </div>  
    </div>

    );
};

export default AppTableEditor;
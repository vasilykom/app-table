import React from 'react';
import ReactDOM from 'react-dom';
import './app-table-editor.css'

const TableEditor = () => {
return (
    
    <div className="group-table">
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
        <button type="button" class="btn btn-primary btn-block">ADD</button>
        </div>  
    </div>

    );
};

export default TableEditor;
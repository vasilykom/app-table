import React, {Component} from 'react';
import './app-table-editor.css';

export default class AppTableEditor extends Component {


    state = { name: '', surname: '', age: '', city: '' };

    onLableChangeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }

    onLableChangeSurname = (e) =>{
        this.setState({
            surname: e.target.value
        })
    }

    onLableChangeAge = (e) =>{
        this.setState({
            age: e.target.value
        })
    }

    onLableChangeCity = (e) =>{
        this.setState({
            city: e.target.value
        })
    }

    onClickAddButton = () =>{
        this.props.onItemAdded(this.state.name,this.state.surname,this.state.age,this.state.city)
        this.setState({
            name: '',
            surname:'',
            age:'',
            city: ''
        })
    }

    render(){
     
        return (
    
            <div className="group-table">
                <a name="top"></a>
                <div className="board-row">
                    <input placeholder = "Name" type= "text" className="form-control"
                    onChange={this.onLableChangeName}
                    value={this.state.name}
                    />
                </div>
                <div className="board-row">
                    <input placeholder = "Surname" className="form-control"
                    onChange={this.onLableChangeSurname}
                    value={this.state.surname}
                    />
                </div>

                <div className="board-row">
                    <input placeholder = "Age" className="form-control"
                    onChange={this.onLableChangeAge}
                    value={this.state.age}
                    />
                </div>

                <div className="board-row">
                    <input placeholder = "City" className="form-control"
                    onChange={this.onLableChangeCity}
                    value={this.state.city}
                    /> 
                </div>  
        
                <div className="board-btn">
                    <button type="button" className="btn btn-primary btn-block"
                    onClick={ this.onClickAddButton}
                    >ADD</button>

                </div>  
            </div>
        
        );
    }
}
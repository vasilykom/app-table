import React, {Component} from 'react';
import './app-table-editor.css';

export default class AppTableEditor extends Component {

    state = {
        name: '',
        surname:'',
        age:'',
        city: ''
    };

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

    render(){
        return (
    
            <div className="group-table">
                <a name="top"></a>
                <div className="board-row">
                    <input placeholder = "Name" type= "text" className="form-control"
                    onChange={this.onLableChangeName}
                    />
                </div>
                <div className="board-row">
                    <input placeholder = "Surname" className="form-control"
                    onChange={this.onLableChangeSurname}/>
                </div>

                <div className="board-row">
                    <input placeholder = "Age" className="form-control"
                    onChange={this.onLableChangeAge}/>
                </div>

                <div className="board-row">
                    <input placeholder = "City" className="form-control"
                    onChange={this.onLableChangeCity}/> 
                </div>  
        
                <div className="board-btn">
                    <button type="button" className="btn btn-primary btn-block"
                    onClick={ () => this.props.onItemAdded(this.state.name,this.state.surname,this.state.age,this.state.city)}
                    >ADD</button>

                </div>  
            </div>
        
        );
    }
}
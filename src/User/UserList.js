import React, { Component }  from "react";

class UserList extends Component{
    constructor(){
        super();
        this.state = {
            userInput:'',
            items:[]
        };
    }
    onChange(event){
        this.setState({
            userInput:event.target.value
        });
    }
    addUser(event){
     event.preventDefault();
     this.setState({
        userInput:'',
        items:[...this.state.items, this.state.userInput]
     })
    }
    deleteUser(event){
     event.preventDefault();
     const array = this.state.items;
     const index = array.indexOf(event.target.value);
     array.splice(index, 1);
     this.setState({
        items:array
     });
    }
    editUser(event){
     event.preventDefault();
     const array = this.state.items;
     const findUser = array.find(event.target.value);
     this.setState({
        items:findUser
     });
    }
    renderUsers(){
        return this.state.items.map((item) =>{
            return(
                <li className='list-item' key={item}>
                       <input 
                       type="text"
                       value={item}
                       className="list"
                       onChange={(event)=> event.preventDefault()}
                        />
                        <div>
                    <button className='button-delete task-button name' onClick={()=>this.deleteUser.bind(this)}>
                        <i className='fa fa-trash'></i>
                    </button>
                    <button className='button-edit task-button' onClick={()=>this.editUser.bind(this)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    </div>
                </li>
            );

        });
    }
    render(){
        return(
            <div>
               <form>
                    <input type="text" 
                    placeholder='Entrez votre nom...' 
                    className='task-input'
                    value={this.state.userInput}
                    required
                    onChange={this.onChange.bind(this)}/>
                    <button className='button-add' onClick={this.addUser.bind(this)}>
                    <i className="fa-solid fa fa-plus"></i>
                    </button>
               </form>
               <div>
                {this.renderUsers()}
               </div>
            </div>
        )
    }
}

export default UserList;
import React ,{ Component }from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { robots } from "./robots";

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    onSearchCange = (event)=>{

        this.setState({searchfield:event.target.value})
        

    }
    render(){
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
        <div className="tc">
            <h1>My_Robo</h1>
            <SearchBox searchChange={this.onSearchCange}/>
            <CardList robots={filterRobots}/> 
        </div> 
    ); 
    }
    
}
export default App;
import React ,{ Component }from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { robots } from "./robots";

const state = {
    robots: robots,
    searchfield: ''
}
class App extends Component{
    constructor(){
        // this.state
    }
    render(){
        return (
        <div className="tc">
            <h1>My_Robo</h1>
            <SearchBox />
            <CardList robots={robots}/> 
        </div>
    ); 
    }
    
}
export default App;
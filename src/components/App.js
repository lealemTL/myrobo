import React ,{ Component }from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../containers/Scroll';
//import { robots } from "./robots";
import '../components/App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce=> responce.json())
        .then(users=>this.setState({robots:users}));
    }
    onSearchCange = (event)=>{

        this.setState({searchfield:event.target.value})
    }

    render(){
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length ===0){
            return <h1 className="f2 sega-font tc">Loading</h1>
        }else{
            return (
        <div className="tc">
            <h1 className="f2 sega-font">My Robots</h1>
            <SearchBox searchChange={this.onSearchCange}/>
            <Scroll>
                <CardList robots={filterRobots}/>
            </Scroll>
             
        </div> 
    ); 
        }
        
    }
}
export default App;
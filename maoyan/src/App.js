import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from "axios";
import Sidebar from "./components/Common/Sidebar"
import Navbar from "./components/Common/Navbar"

class App extends Component {

  constructor(){
    super();

    this.state = {
      isShow:false
    }
  }


  render() {
    return (
     
      <div>

        <Navbar myevent={()=>{
          this.setState({
            isShow:!this.state.isShow
          })
        }}/>

        <Sidebar myshow= {this.state.isShow} myevent={()=>{
          this.setState({
            isShow:false
          })
        }}/>
        {
          // router-view 容器
        }
        
        <section>
          {this.props.children}
        </section>

      </div>
    );
  }

}

export default App;

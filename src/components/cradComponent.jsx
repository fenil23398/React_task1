import React, { Component } from "react";
import SerachComponent from "./serachComponent";
import '../App.css';
var storeData = require('../storingData');
class cardDisplay extends Component {
  state = {
      data:storeData.data
  };

  getAllCards() {

    //Demo to show how to show data  using inline css
    //rule1 if 2 parts of css dn rather dn writibg - between them use camelCase
    //rule2 everything will be covered by "" and dn rather dn ; write ,

    // let imgSetting = {
    //   width: "100%",
    //   height: "300px"
    // };
    // let mainContainer = {
    //   marginTop: "5%"
    // };

    // let insideContainer = {
    //   border: "1px solid black",
    //   marginLeft: "6%",
    //   padding: "0px",
    //   marginTop: "5%",
    //   boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    //   textAlign: "center",
    //   backgroundColor: "#f1f1f1",
    //   height: "20%"
    // };

  
    return (
      <div className="row" id="mainContainer" >
        {this.state.data.map(obj => (
          
          <div  className="col-3"  id="insideContainer">
            <img src={obj.img_url} id="imgSetting" />
            <h3 id="nameId"> {obj.name}</h3><br/>
            <div id="letHeightCard">
              <p>{obj.description}</p>
            </div>
          </div>
    
        ))}
      </div>
    );
  }

  changeDataView=(tmpArr)=>
    this.setState({
      data: tmpArr,
    })
  

  render() {
    return (
      <div>
        <SerachComponent 
          filterData={this.state.data}
          changeDataByChild={this.changeDataView} />

        <div className="container">
          {this.state.data.length === 0 && "Sorry No data"}
          {this.getAllCards()}
        </div>
      </div>
    );
  }
}

export default cardDisplay;

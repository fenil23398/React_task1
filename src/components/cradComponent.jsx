import React, { Component } from "react";
import SerachComponent from "./serachComponent";
var storeData = require('../storingData');
class cardDisplay extends Component {
  state = {
      data:storeData.data
  };

  getAllCards() {
    let imgSetting = {
      width: "100%",
      height: "300px"
    };
    let mainContainer = {
      marginTop: "5%"
    };

    let insideContainer = {
      border: "1px solid black",
      marginLeft: "6%",
      padding: "0px",
      marginTop: "5%",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      backgroundColor: "#f1f1f1",
      height: "20%"
    };

    let letHeightCard = {
      height: "200px",
      overflow: "auto",
      border: "1px solid black"
    };
    return (
      <div className="row" style={mainContainer}>
        {this.state.data.map(obj => (
          <div className="col-3" style={insideContainer}>
            <img src={obj.img_url} style={imgSetting} />
            <h4> {obj.name}</h4>
            <div style={letHeightCard}>
              <p>{obj.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  changeDataView=((fakeArr)=>
    this.setState({
      data: fakeArr,
      
    })
  )

  render() {
    return (
      <div>
        <SerachComponent 
          filterData={this.state.data}
          changeDataByChild={this.changeDataView} />

        <div className="container">
          {this.state.data.length == 0 && "Soory No data"}
          {this.getAllCards()}
        </div>
      </div>
    );
  }
}

export default cardDisplay;

import React, { Component } from "react";
class searchCompo extends Component {
  state = {
    dummyArr: ""
  };

  constructor(props) {
    super();
    this.i = 0;
    this.tmp = 0; //this tmp variable is to main state when searchbox is touched and now empty
    this.data = props.filterData;
    this.flag = 0; //flag is to manage while searching data is not found & also the keyup fired once
   
  }

  myfunction = () => {
    this.flag = 1;
    let valueInSerach = document.getElementById("myInput").value;
    let fakeArr = "";
    this.state.dummyArr = "";
    if (valueInSerach !== "") {
      fakeArr = this.data.filter(obj =>
        obj.name.toLowerCase().startsWith(valueInSerach.toLowerCase())
      );
      this.i = 1;
      // console.log(fakeArr);
    } else {
      fakeArr = "";
      this.i = 0;
      this.tmp = 1;
    }

    this.setState({
      dummyArr: fakeArr
    });
  };

  render() {
    let styles = {
      backgroundImage: "url('/images/search.svg')",
      backgroundPosition: "10px 12px",
      backgroundRepeat: "no-repeat",
      width: "100%",
      fontSize: "16px",
      padding: "12px 20px 12px 40px",
      border: "1px solid #ddd",
      marginBottom: "12px"
    };
    var handleToParent = this.props.changeDataByChild;
    return (
      <div>
        <input
          type="text"
          style={styles}
          id="myInput"
          onKeyUp={() => this.myfunction()}
          placeholder="Search for names.."
          title="Type in a name"
        />
        {this.state.dummyArr.length > 0 ? (    //this block is to check dummyarr has any values & keyup in
          this.i === 1 && (                   //searchbox has fired
            console.log("0 from "),
            this.i = 0,
           handleToParent(this.state.dummyArr)
          ) 
        ) 
        : this.flag === 1   && (                //this else block is to use or to fire when dummyarray length is
          ((this.flag = 0),                     // 0 but keyup event has fired //so we will show No data Found
          handleToParent(this.state.dummyArr))
        ) 
        }
        
        {/* this last box is to check if initial loading dn give full array to show all contents */}
        {this.tmp === 1 ? ((this.tmp = 0), handleToParent(this.data)) : <p />} 
      </div>
    );
  }
}

export default searchCompo;

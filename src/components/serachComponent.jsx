import React, { Component } from "react";
class searchCompo extends Component {
  state = {
    i: 0,
    value: "",
    dummyArr: ""
  };

  constructor(props) {
    super();
    this.data = props.filterData;
    console.log(this.data);
  }

  myfunction = () => {
    let valueInSerach = document.getElementById("myInput").value;
    let fakeArr;
    let tmp;
    if (valueInSerach !== "") {
      fakeArr = this.data.filter(obj =>
        obj.name.toLowerCase().startsWith(valueInSerach.toLowerCase())
      );
    tmp=1;
      console.log(fakeArr);
    } else {
      fakeArr = "";
      tmp=0;
    }
    console.log(tmp);
    this.setState({
      dummyArr: fakeArr,
      i:tmp
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
    var handleToParent  =   this.props.changeDataByChild;
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
        {
          this.state.dummyArr.length > 0 ? (
          this.state.dummyArr.map(obj => <p>{obj.name}</p>),
          // console.log("Inside Search Component if block")
        //  <button onClick={this.props.changeDataByChild(this.state.dummyArr)}></button>
            handleToParent(this.state.dummyArr)
          
          ) : 
          (
          <p> </p>
           )
           
        }
        {/* {
          this.state.i === 1 ?
          
          : (
            <p> </p>
          )
        } */}
      </div>
    );
  }
}

export default searchCompo;

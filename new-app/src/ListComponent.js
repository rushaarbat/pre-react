import React,{Component} from "react";
 export  default class ListComponent extends Component{
    state={
        myList : [],
        inputValue: "",
        inputValue1: "",
    }




    onAdd = ()=>{
console.log("on add");
const myListCopy = this.state.myList;
myListCopy.push(this.state.inputValue);
console.log(myListCopy);
this.setState({myList:myListCopy, inputValue : ""});

    }

    onInputTextChange= (event)=>
    {
        console.log(event.target.value);
        this.setState({inputValue : event.target.value});
    };

    onInputTextChange1= (event1)=>
    {
        console.log(event1.target.value);
        this.setState({inputValue1 : event1.target.value});
    };





    render(){
        return(
            <>
            <h1> From ListComponent</h1>

            <input   value= {this.state.inputValue}
                    onChange= {this.onInputTextChange}     >
            
            </input>

            <input   value= {this.state.inputValue1}
                    onChange= {this.onInputTextChange1}     >
            
            </input>


            
            <button onClick ={this.onAdd}> Add</button>
            <h2> In Side List Component</h2>
            {this.state.myList.map((element,index)=>(
           <div key={index}> 
    
            <div > {element}</div>
                </div>
            ))}




            </>
        );
    }

}  
import axios from "axios"
import { useEffect, useState } from "react"

export default ()=>{
    const [userList, setUserList] = useState([]); 

    const [name, setName] = useState(""); 

    const [userName, setUserName] = useState("")

    const [email, setEmail] = useState("");  
      
    const [phone, setPhone] = useState("");  

    const [id, setUserId] = useState(0);

    const [isEditMode, setIsEditMode] = useState(false)

    useEffect(()=>{
        fetchData();
        
    },[]);


    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            console.log(response);
            if(response && response.data){                          //method to fetch data from server
                setUserList(response.data)
            }

        })
    }

    const onNameChange=(event)=>{
        setName(event.target.value);
    }

    const onUserNameChange=(event)=>{
        setUserName(event.target.value);
    }

    const onEmailChange=(event)=>{
        setEmail(event.target.value);
    }
    const onPhoneChange=(event)=>{
        setPhone(event.target.value);
    }

    const onSubmitClickHandler=(event)=>{     // submit activity
        event.preventDefault();
        console.log(name, email,phone);
        if(!isEditMode){axios.post("https://jsonplaceholder.typicode.com/users",{
            name,
            userName,
             email, 
             phone, 
             id:1,
            })
        .then((response)=>{
            console.log(response);
            alert("User Added")
            //fetch data again
            fetchData();
            //reset input fields
            setName("");
            setUserName("");
            setEmail("");
            setPhone("");
        })
    }else{
        //code to edit the record
        if (id > 0){
            axios
            .put("https://jsonplaceholder.typicode.com/posts/" + id, {

                name,
                userName,
                email,
                phone,
                id: 1,
            })
            .then((response) => {
                if (response){
                    fetchData();
                    alert("user Updated..");
                    onResetClickHandler();
                }
            });
        }
    }
        
    };

    const onEditClickHandler = (userObject) =>{
    console.log(userObject);
    setIsEditMode(true);
    setName(userObject.name);
    setUserName(userObject.username);
    setEmail(userObject.email);
    setPhone(userObject.phone);
    setUserId(userObject.id);
    };

    const onResetClickHandler = (event) => {
        if (event) {
            event.preventDefault();

        }
        setIsEditMode(false);
        setName("");
        setUserName("");
        setEmail("");
        setPhone("");
    };

    const onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/users/" +id)
        .then((response)=>{
            alert("User Deleted");
            fetchData();
        })
    }

    return(
        <>
        <h1>User List</h1>
        <form onSubmit={onSubmitClickHandler}>

            <label>Name</label>
            <input name="name" value={name} onChange={onNameChange}/>

            <label>UserName</label>
            <input name="userName" value={userName} onChange={onUserNameChange}/>

            <label>Email</label>
            <input name="email" value={email} onChange={onEmailChange}/>

            <label>phone</label>
            <input name="phone" value={phone} onChange={onPhoneChange}/>


            <button type="submit">{isEditMode ? "update" : "Submit"}</button>
            {isEditMode && <button onClick={onResetClickHandler}>Reset</button>}
        </form>
        <br/>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone</th>
                   
                </tr>
            </thead>
            <tbody>
                {userList.map((user, index)=>{       
                    
                    return(
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td> {user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                   
                    <td><button onClick={()=> {onDeleteClickHandler(user.id)}}>Delete</button></td>
                <td> <button onClick={()=>{onEditClickHandler(user)}}> Edit</button></td>

                  </tr>
                    )
                })}
            </tbody>
        </table>
        </>

    )
}

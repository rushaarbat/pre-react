import { useState } from "react";
import withOrder from "./withOrder";

const OnlineOrders =(props)=>{
    console.log(props);
    const status = [
        "Order Placed  ",
        "pending",
        "preparing",
        "Out Of delivery",
        "delivered",
    ]
    // const [value, setValue] = useState(0);

    // const onClickHandler =()=>{
    //     setValue(value +1);
    // };
    return(
        <>
<h1> Online Order</h1>
<div> Current Status:{status[props.value]}</div>
<button onClick={props.onClickHandler}>Next status</button>
        </>
    );
};
export default withOrder(OnlineOrders)
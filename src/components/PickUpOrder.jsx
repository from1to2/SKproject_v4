import React from "react";
import "./tool.css";

// import { Margin } from "@mui/icons-material";

const PickUpOrder = (props) => {
    const itemName = props.itemName;
    const storeName = props.storeName;

    const orderHandler = () => {
      console.log(`${storeName} '${itemName}' 주문 완료!`);
    }

    return (

        <div style ={{display: 'flex', alignItems:'center'}}>
          <button onClick={orderHandler} style ={{ marginLeft:'30px', fontWeight:'bold',height:'2.5rem'}}>픽업 주문</button>
        </div>

    );
}
export default PickUpOrder;
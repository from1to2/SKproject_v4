import React from "react";
import "./tool.css"
import Product from "./Product";

// import { Margin } from "@mui/icons-material";

const Menu = (props) => {

    let item1Name = Product[props.index].items.이름[0];
    let item1Price = Product[props.index].items.가격[0];
    let item1Review = Product[props.index].items.리뷰개수[0];

    let item2Name = Product[props.index].items.이름[1];
    let item2Price = Product[props.index].items.가격[1];
    let item2Review = Product[props.index].items.리뷰개수[1];

    let item3Name = Product[props.index].items.이름[2];
    let item3Price = Product[props.index].items.가격[2];
    let item3Review = Product[props.index].items.리뷰개수[2];

    return (
        
        <div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center"
            }} >
                <div style={{
                    width: "30%",
                    marginRight: "50px",
                    fontSize: "15px",
                }} >
                    <h3>{item1Name}</h3>
                    <h3>리뷰({item1Review})</h3>
                    <h3>{item1Price}</h3>
                </div>
                <div>
                    <img style={{
                        width: "100%",
                        height: "150px",
                        border: "2px solid",
                        borderRadius: "20px"
                    }} alt="mark" src="./images/storeInfo/users.png"
                        onClick={function () { alert('www.wwwww.co.kr') }} />
                </div>
            </div>

            <hr color='gray' width='90%' align='left' />

            <div style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
            }}>
                <div style={{
                    width: "30%",
                    marginRight: "50px",
                    fontSize: "15px",
                }}  >
                    <h3>{item2Name}</h3>
                    <h3>리뷰({item2Review})</h3>
                    <h3>{item2Price}</h3>
                </div>
                <div>
                    <img style={{
                        width: "100%",
                        height: "150px",
                        border: "2px solid",
                        borderRadius: "20px"
                    }} alt="mark" src="./images/storeInfo/users.png" />
                </div>
            </div>

            <hr color='gray' width='90%' align='left' />

            <div style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center"
            }}>
                <div style={{
                    width: "30%",
                    marginRight: "50px",
                    fontSize: "15px",
                }}  >
                    <h3>{item3Name}</h3>
                    <h3>리뷰({item3Review})</h3>
                    <h3>{item3Price}</h3>
                </div>
                <div>
                    <img style={{
                        width: "100%",
                        height: "150px",
                        border: "2px solid",
                        borderRadius: "20px"
                    }} alt="mark" src="./images/storeInfo/users.png" />
                </div>
            </div>

        </div>
    );
}
export default Menu;
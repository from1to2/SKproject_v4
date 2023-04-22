import React from "react";
import "./tool.css"

const Menu = () => {
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
                    <h3>맛있는 꽈배기</h3>
                    <h3>리뷰(320)</h3>
                    <h3>3,700원</h3>
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

            <hr color='gray' width='450px' align='left' />

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
                    <h3>맛있는 사과</h3>
                    <h3>리뷰(200)</h3>
                    <h3>2,700원</h3>
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

            <hr color='gray' width='450px' align='left' />

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
                    <h3>맛있는 배</h3>
                    <h3>리뷰(108)</h3>
                    <h3>1,700원</h3>
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
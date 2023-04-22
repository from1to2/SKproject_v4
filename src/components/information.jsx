import React from "react";
import "./tool.css"

const information = () => {

    return (
        <div>
            <h1>가게 소개(사장님 입력)</h1>
            <div className="product">
                <div className="s2">
                    <h2>영업정보</h2>
                    <h3>가게 명:성결 시장</h3>
                    <h3>운영 시간:09:00~17:00</h3>
                    <h3>휴무일:매주 월요일</h3>
                    <h3>전화 번호:031-123-4567</h3>
                </div>

                <div className="s2">
                    <h2>사업자 정보</h2>
                    <h3>대표자 명:이현석</h3>
                    <h3>사업자 주소:안양중앙시장</h3>
                    <h3>사업자 등록번호:001</h3>
                </div>
            </div>
        </div>
    );
}
export default information;
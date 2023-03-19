import { useState } from 'react';
import db from './Firebase'
import { collection, addDoc, getDocs, query, deleteDoc } from "firebase/firestore";
import { doc } from 'firebase/firestore';
const SampleBase = () => {
    const [userAge, setUserAge] = useState('');
    const [userName, setUserName] = useState('');
    const getUserName = (e) => {
        setUserName(e.target.value);
    }
    const getUserAge = (e) => {
        setUserAge(e.target.value);
    }
    const usersCollectionRef = collection(db, "users");
    const addData = async () => {
        try {
            const res = await addDoc(usersCollectionRef, {
                name: userName,
                age: userAge
            });
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };
    const getData = async () => {
        try {
            const q = await query(usersCollectionRef)
            const getData = await getDocs(q);
            const newData = getData.docs.map(doc => ({
                //rest 문법
                ...doc.data()
            }));
            console.log(newData);
        } catch (err) {
            console.log(err)
        }
    }
    const deleteData = async (id) => {
        try {
            const dd = await deleteDoc(doc(db, "users", id));
            console.log(dd);
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div>
            <fieldset>
                <input type='text' placeholder='이름을 입력하세요' onChange={getUserName}></input><br />
                <input type="text" placeholder='나이를 입력하세요' onChange={getUserAge}></input><br />
                <button onClick={addData}>추가</button>
                <button onClick={getData}>조회</button>
                <button onClick={deleteData}>삭제</button>
            </fieldset>
        </div>
    );
};

export default SampleBase;
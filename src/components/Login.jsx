import React, { useState } from 'react';
import { ImageList, ImageListItem, Typography, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    //앤터키
    function handleEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('Enter key pressed!');
            if (id === 'iamuser') {
                goToFirstPage();
            } else if (id === 'iammaster') {
                goToSecondPage();
            } 
        }
    }
    const handleClick = (id) => {
        if (id === 'iamuser') {
            goToFirstPage();
        } else if (id === 'iammaster') {
            goToSecondPage();
        } 
    };
    
    function goToFirstPage() {
        console.log(`입력한 ID는 ${id}이고, Password는 ${password}입니다.`);
        navigate("/Search");
    }

    function goToSecondPage() {
        console.log(`입력한 ID는 ${id}이고, Password는 ${password}입니다.`);
        navigate("/ShopKeeper");
    }

    return (
        <>
            <Typography variant='h6' component="div" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'black', fontSize: "1.5rem" }}>
                로그인
            </Typography>
            <ImageList sx={{ width: "85%", ml: '8rem' }} cols={2} rowHeight={300}>
                <ImageListItem >
                    <img
                        src={'/images/loginImage/SKprojectCharacter.png'}
                        alt="그림"
                        style={{
                            width: "100%",
                            height: "80%",
                            borderRadius: '0.5em',
                            objectFit: 'contain'
                        }} />
                </ImageListItem>
            </ImageList>

            <TextField style={{ marginLeft:'1rem', width: '84%', marginbot: '10px', padding: '3px' }} id="standard-basic" placeholder='ID' variant="standard" onChange={(e) => setId(e.target.value)} onKeyDown={handleEnter} />
            <TextField style={{ marginLeft:'1rem',width: '84%', marginbot: '4px', padding: '3px' }} id="standard-basic" placeholder='Password' variant="standard" onChange={(e) => setPassword(e.target.value)} onKeyDown={handleEnter} />
            <Button style ={{marginTop:'2rem', marginLeft: '10rem'}} onClick={() => handleClick(id)} sx={{ display: "block" }}
                size="large" color="error" variant="contained">
                사용자 로그인
            </Button>
            

        </>
    )
}

export default Login;
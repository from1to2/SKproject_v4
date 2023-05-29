import React, { useState } from 'react';
import { Button, AppBar, Box, Container, IconButton, Toolbar, Typography, Input } from '@mui/material';

const EditBox = ({ id, onDelete, index }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleText1Change = (e) => {
    setText1(e.target.value);
  };

  const handleText2Change = (e) => {
    setText2(e.target.value);
  };

  const handleReset1 = () => {
    setText1('');
  };

  const handleReset2 = () => {
    setText2('');
  };

  const label = `#음식 ${index + 1}`;

  return (
    <Box sx={{ height: '150px', width:'400px',border: '1px solid #E0E0E0',  position: 'relative', }}>
      <Box sx={{ bottom: '10px' }}>
        {label}
        <Box style={{ display: 'flex', flexDirection: 'row',}}>
          <div style={{ width: '20%', marginTop: '10px' }}>메뉴 이름</div>
          <Input
            style={{ width: '60%', height: '40px', border: '1px solid black', padding: 1 }}
            onChange={handleText1Change}
            value={text1}
          />
          <Button
            style={{
              fontSize: '15px',
              border: '1px solid black',
              color: 'black',
              background: 'white',
              position: 'absolute',
              right: '0px',
              textAlign: 'center'
            }}
            onClick={handleReset1}
          >
            수정
          </Button>
        </Box>

        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '20%', marginTop: '10px' }}>메뉴 이름</div>
          <Input
            style={{ width: '60%', height: '40px', border: '1px solid black', padding: 1 }}
            onChange={handleText2Change}
            value={text2}
          />
          <Button
            style={{
              fontSize: '15px',
              border: '1px solid black',
              color: 'black',
              background: 'white',
              position: 'absolute',
              right: '0px',
              textAlign: 'center'
            }}
            onClick={handleReset2}
          >
            수정
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <Button onClick={() => onDelete(id)} variant="contained" color="secondary">
            삭제
          </Button>
          <Button variant="contained" color="secondary">
            저장
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const ProductEdit = () => {
  const [boxes, setBoxes] = useState([]);

  const handleAddBox = () => {
    setBoxes([...boxes, { id: Date.now() }]);
  };

  const handleDeleteBox = (id) => {
    const updatedBoxes = boxes.filter((box) => box.id !== id);
    setBoxes(updatedBoxes);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ paddingLeft: '0', paddingRight: '0' }}>
      <Box sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
        <AppBar color="inherit">
          <Toolbar>
            <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1, textAlign: 'center', marginRight: '1em' }}>
              상품 편집
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit"></IconButton>
          </Toolbar>
        </AppBar>
        <br />
        <br />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        {boxes.map((box, index) => (
          <EditBox
            key={box.id}
            id={box.id}
            onDelete={handleDeleteBox}
            index={index}
          />
        ))}
        <Button onClick={handleAddBox} variant="contained" color="primary" sx={{ mt: 2 }}>
          항목 추가
        </Button>
      </Box>
    </Box>
    </Container>
  );
};

export default ProductEdit;
import { ArrowBack, Close } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Container, Toolbar, Typography, Grid, TextField, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import marketlist from './Marketlist';

const Search = () => {
    const navigate = useNavigate();
    const [searchWord, setsearchWord] = useState("");
    const onSearch = (e) => {
        setsearchWord(e.target.value);
    }
    const goHome = () => {
        navigate('/');
    }
    const findMarket = marketlist.filter((item) =>
        item.includes(searchWord)
    );
    return (
        <Container component='main' maxWidth='xs' sx={{ paddingLeft: "0", paddingRight: "0" }}>
            <Box
                display="flex"
                flexDirection="column">
                <AppBar
                    color='inherit'>
                    <Toolbar>
                        <Typography
                            variant='h5'
                            component='h5'
                            sx={{ flexGrow: 1, textAlign: 'center' }}>
                            내 주변 시장 찾기
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container
                    sx={{ paddingTop: '3.5em' }}>
                    <Grid item xs>
                        <IconButton
                            size='small'
                            onClick={goHome}
                            sx={{ marginTop: '0.5em', marginLeft: '0.7em' }}>
                            <ArrowBack />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <TextField
                            size='medium'
                            onChange={onSearch}
                            value={searchWord}
                            fullWidth
                            sx={{
                                bgcolor: '#CCCCCC',
                                borderRadius: '0.5em',
                                border: '1px',
                                width: "99%"
                            }}
                            required
                            InputProps={{
                                startAdornment: <IconButton position='start'><SearchIcon /></IconButton>,
                                endAdornment: <IconButton position='end'><Close /></IconButton>
                            }}
                        />
                    </Grid>
                </Grid>
                <Box>
                    <Typography variant='body1'> 검색결과: {searchWord}</Typography>
                </Box>
                <Box>
                    {searchWord.length === null ?
                        setsearchWord(<div>검색어를 입력하세요!</div>) :
                        <Box>
                            {findMarket.map((item) =>
                                <Typography
                                    key={item}
                                    variant='h6'
                                    sx={{
                                        fontSize: "1em",
                                    }}>
                                    {item}
                                </Typography>)}
                        </Box>}
                </Box>
            </Box>
        </Container>
    );
};

export default Search;
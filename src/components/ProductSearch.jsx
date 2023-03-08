import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from "./Product"
import { Box, Container, TextField, IconButton, AppBar, Toolbar, Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { ArrowBack, Search } from '@mui/icons-material';


const ProductSearch = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState("");
    const goToHome = () => {
        navigate('/');
    }
    const onProductSearch = (e) => {
        setProduct(e.target.value);
    }
    const findProduct = Product.filter((item) =>
        item.title.includes(product)
    )
    return (
        <Container component="main" maxWidth="xs" sx={{ paddingLeft: "0", paddingRight: "0" }} >
            <Box
                display="flex"
                flexDirection="column">
                <AppBar
                    color='warning'>
                    <Toolbar>
                        <IconButton
                            size='small'
                            aria-label='back'
                            sx={{ pr: '1em' }}
                            onClick={goToHome}>
                            <ArrowBack />
                        </IconButton>
                        <TextField
                            placeholder='검색어를 입력해주세요'
                            onChange={onProductSearch}
                            value={product || ""}
                            sx={{ bgcolor: '#CCCCCC', borderRadius: '0.5em', border: '1px' }}
                            fullWidth
                            InputProps={{
                                startAdornment: <IconButton position='start'><Search /></IconButton>
                            }}>
                        </TextField>
                    </Toolbar>
                </AppBar>
                <Box
                    sx={{ paddingTop: "3em" }}>
                    <Typography variant='p' sx={{ fontSize: "1em" }}>
                        검색 결과:{product}
                    </Typography>
                </Box>
                <div>
                    {product.length === null ?
                        setProduct(<div>검색어를 입력하세요</div>) :
                        <ImageList sx={{ width: 300, }} cols={2} rowHeight={100}>
                            {findProduct.map((item) =>
                                <ImageListItem key={item.title}>
                                    <Box>
                                        <img
                                            src={item.poster}
                                            alt="그림"
                                            style={{
                                                width: 150,
                                                height: 100,
                                                borderRadius: '0.5em'
                                            }} />
                                        <ImageListItemBar
                                            title={item.title}
                                            sx={{ height: '5' }}>
                                        </ImageListItemBar>
                                    </Box>
                                </ImageListItem>
                            )}
                        </ImageList>
                        // : findProduct.map((item) =>
                        // <Grid container spacing={2} key={item.title}>
                        //     <Grid item xs={6} >
                        //         <Box>
                        //             <img src={item.poster} alt="그림" style={{ width: 150, height: 75, borderRadius: '0.5em' }} />
                        //             <Typography sx={{ fontSize: '0.9em' }}>{item.title}</Typography>
                        //         </Box>
                        //     </Grid>
                        // </Grid>
                    }
                </div>
            </Box>
        </Container >
    );
};

export default ProductSearch;
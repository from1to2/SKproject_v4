import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./productSearch.module.css";
import Product from "./Product"
import { Box, Button, Container, TextField, Grid } from '@mui/material';


const ProductSearch = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState("");
    const goHome = () => {
        navigate('/');
    }
    const onProductSearch = (e) => {
        setProduct(e.target.value);
    }
    const SearchProduct = () => {

    }
    const findProduct = Product.filter((item) =>
        item.title.includes(product)
    )
    return (
        <Container component="main" maxWidth="xs" >
            <Box
                className={styles.searchframe}
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: "675px"
                }}>
                <Grid container>
                    <Grid item>
                        <Button
                            className={styles.backButton}
                            onClick={goHome}
                            variant="outlined">Back</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            type="text"
                            onChange={onProductSearch}
                            placeholder='상품명을 입력해주세요!'
                            variant="outlined"
                            size='small'
                            required />
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            onClick={SearchProduct}
                            variant="outlined">검색</Button>
                    </Grid>
                </Grid>
                <p>검색 결과:{product}</p>
                <div>
                    {product.length === null ? setProduct(<div>검색어를 입력하세요</div>) : findProduct.map((item) =>
                        <Grid container spacing={2} key={item.title}>
                            <Grid item xs={6} >
                                <div>
                                    <img src={item.poster} alt="그림" style={{ width: 150, height: 75 }} />
                                    <div>{item.title}</div>
                                </div>
                            </Grid>
                        </Grid>
                    )}
                </div>
            </Box>
        </Container>
    );
};

export default ProductSearch;
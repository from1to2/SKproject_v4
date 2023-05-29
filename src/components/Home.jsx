import { AppBar, Box, Container, IconButton, Stack, Toolbar, Typography, Grid, Drawer, List, ListItem, ListItemButton, ListItemIcon, Divider, ListItemText, Avatar, ListItemAvatar, Tabs, Tab, Button, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Menu, Search, ArrowForward, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined } from "@mui/icons-material"
import React, { useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Call, Share } from '@mui/icons-material';
import { db } from './Firebase';
import { getDocs, query, collection } from 'firebase/firestore';
import Product from "./Product"
import Menus from "./Menu"
import Information from './information';
import Review from './review';
import { storage, ref, getDownloadURL } from './Firebase';
import MarketInfo from './MarketInfo';

console.log("APP의 storage를 가져옵니다.")
    console.log(storage);
    console.log("/AnyangJungangMarket 경로의 참조를 가져옵니다.");
    const storageRef = ref(storage, '/AnyangJungangMarket');
    console.log(storageRef);

    // getDownloadURL(storageRef).then((url) => {
    //     const imgsample = document.querySelector('.imgsample');
    //     imgsample.setAttribute('src', url);
    //     console.log('/clothStore/clothStore.jpg 경로의 참조한 곳의 url을 출력해봅니다. ')
    //     console.log(url);
    // })



const Home = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('one');
    const [toggleState, setToggleState] = useState(1);
    const [open, setOpen] = useState(false);
    const [product, setProduct] = useState('');
    const marketLists = useMemo(() => [], [])
    const [Arraymarket, setArrayMarket] = useState();
    const [compareValue, setCompareValue] = useState();

    const handleStore = (index)=> {
        let title =Product[index].title;
        let poster =Product[index].poster;
        let reviewNumber =Product[index].reviewNumber;
        let likeNumber =Product[index].likeNumber;
        
        navigate('/StoreInfoPage', { state: { index: index } });


        console.log("인덱스", index);
        console.log(title);
        console.log(poster);
        console.log("리뷰 개수",reviewNumber);
        console.log("좋아요 개수",likeNumber);

        
    }
    const toggleTab = (index) => {
        setToggleState(index);
    };
    // Product 컴포넌트 데이터 filter로 product 값과 같은 값 가져오기 
    const findProduct = Product.filter((item) =>
        item.title.includes(product)
    )
    // Tab 전환
    const handleToptab = (e, newValue) => {
        setValue(newValue);
    }
    //Search 페이지에서 시장의 이름을 가져옴. 
    const location = useLocation();
    const marketName = location.state.id;
    console.log(marketName);
    //Collection 데이터 가져오기  
    const getCollectionData = async () => {
        const getcollDat = query(collection(db, "Traditional MarketList"));
        const getTdmarket = await getDocs(getcollDat);
        const getNambumarket = getTdmarket.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        }))
        setArrayMarket(getNambumarket[2])
        console.log(getNambumarket[2])
        // const getmarktes = getNambumarket.filter(doc => doc.id.includes(marketName))
        // console.log(getmarktes);
        getNambumarket.map(async (data) => {
            const getSubCol = query(collection(db, `Traditional MarketList/${data.id}/product`));
            const getSubData = await getDocs(getSubCol);
            const gets = getSubData.docs.map((doc) => ({
                ...doc.data(), id: doc.id
            }))
            console.log(gets);
        })
        const marketObjToArray = () => {
            for (let Objkey in Arraymarket) {
                if (Arraymarket.hasOwnProperty(Objkey)) {
                    marketLists.push([Objkey, ": ", Arraymarket[Objkey]])
                }
            }
        }
        marketObjToArray();
        console.log(marketLists);
    }
    const getMarket = marketLists.filter((item) =>
        item.includes(marketName)
    )


    // 화면 이동
    const goToMyOrderHistory = () => {
        navigate("/MyOrderHistory")
    }
    const goToAlarm = () => {
        navigate("/Alarm")
    }
    const goToFavoriteStores = () => {
        navigate("/FavoriteStores")
    }
    const goToSettings = () => {
        navigate("/Settings")
    }
    const goToMySettings = () => {
        navigate("/Userprofile")
    }
    const goToProductSearch = () => {
        navigate("/ProductSearch")
    }
    //화면 이동

    //탭 구성
    const TabPanel = (props) => {
        const { children, value, index } = props;
        return (<div hidden={value !== index}>
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>)
    }
    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                paddingLeft: '0',
                paddingRight: '0'
            }}>
            <Box
                sx={{
                    flexDirection: 'column',
                    display: "flex",
                    alignItems: 'center'
                }}>
                <AppBar
                    color='inherit'>
                    <Toolbar>
                        <>
                            <IconButton
                                className="icon_button"
                                size='large'
                                color='inherit'
                                sx={{ mr: "1.2em" }}
                                edge='start'
                                aria-label='open drawer'
                                onClick={() => setOpen(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer
                                open={open}
                                anchor={"left"}
                                onClose={() => setOpen(false)}
                                // 주의 꼭 Temporary 값으로 설정해야만 click 이벤트 값을 받아서 토글 형식으로 유지 가능.
                                variant="temporary">
                                <Typography
                                    p={3}
                                    variant="h5"
                                    component="div"
                                    textAlign="center">
                                    My page
                                </Typography>
                                <Divider />
                                <Box
                                    width='250px'
                                    textAlign='center'
                                    style={{ width: 250 }}
                                    role="presentation"
                                    onClick={() => setOpen(false)}>
                                    <List>
                                        <ListItem>
                                            <ListItemButton onClick={goToMyOrderHistory}>
                                                <ListItemIcon><ContentCopyOutlined /></ListItemIcon>
                                                <ListItemText primary="나의 주문 내역" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToAlarm}>
                                                <ListItemIcon><NotificationsNoneOutlined /></ListItemIcon>
                                                <ListItemText primary="알림" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToFavoriteStores}>
                                                <ListItemIcon><BookmarkBorderOutlined /></ListItemIcon>
                                                <ListItemText primary="찜한 가게 목록" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemButton onClick={goToSettings}>
                                                <ListItemIcon><SettingsOutlined /></ListItemIcon>
                                                <ListItemText primary="설정" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                    <List>
                                        <ListItem sx={{ position: 'fixed', bottom: 0, width: "100%" }}>
                                            <ListItemButton onClick={goToMySettings}>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: "secondary.main" }}>
                                                        <AccountCircleOutlined />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="사용자 이름" secondary="user@sungkyul.ac.kr" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </>
                        <Typography
                            variant='h6'
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                                marginRight: "1.5em",
                                fontWeight: "bold"
                            }}>
                            {marketName}
                        </Typography>
                        <IconButton
                            size='large'
                            aria-label='search'
                            color='inherit'
                            onClick={goToProductSearch}>
                            <Search />
                        </IconButton>
                    </Toolbar>
                </AppBar><br />
                <Box
                    width='100%'>
                    <Tabs
                        sx={{ paddingTop: 3, paddingBottom: 1 }}
                        TabIndicatorProps={{
                            style: { backgroundColor: 'orange' }
                        }}
                        textColor='inherit'
                        variant="fullWidth"
                        value={value}
                        onChange={handleToptab}>
                        <Tab
                            value="one"
                            label="메인">
                        </Tab>
                        <Tab
                            value="two"
                            label="시장정보">
                        </Tab>
                        <Tab
                            value="three"
                            label="편의시설">
                        </Tab>
                        {/* <Tab
                            value="four"
                            label="가게정보">
                        </Tab> */}
                        <Tab
                            value="five"
                            label="가게목록">
                        </Tab>
                    </Tabs>
                    {/* 메인 페이지 */}
                    <TabPanel
                        value={value}
                        index="one">
                        <Box>
                            <div style={{ fontSize: "1em", fontWeight: 'bold', marginBottom: 11 }}>
                                현재 진행중인 이벤트
                            </div>
                            <img src="./images/homePageImg/fruitSale.png" alt="설연휴 세일" style={{ width: '100%', borderRadius: '0.5em' }} />
                            <Grid container mt={1}>
                                <Grid item xs>
                                    <div style={{ fontSize: "1em", fontWeight: 'bold', marginBottom: 10 }}>추천 코스 안내</div>
                                </Grid>
                                <Grid item>
                                    <ArrowForward />
                                </Grid>
                            </Grid>
                            <Stack
                                direction="row"
                                sx={{ width: '100%' }}>
                                <Stack
                                    direction="column">
                                    <img src="/images/homePageImg/recommendedcourse.png" alt="떡볶이" width="100%" height="80%" />
                                    <div style={{ textAlign: 'center', fontWeight:'bold' }}>먹짱을 위한 맛집 코스</div>
                                </Stack>
                                {/* <Stack
                                    direction="column">
                                    <img src="/images/homePageImg/seasonedChicken.png" alt="양념치킨" width="100%" height="80%" />
                                    <div style={{ textAlign: 'center' }}>오늘 야식은 이거!</div>
                                </Stack> */}
                            </Stack>
                        </Box>
                        <button onClick={getCollectionData} style={{ width: '100%' }}>Get</button>
                        <div>
                            {getMarket.map((item) => {
                                <div
                                    key={item}>
                                    {item}
                                </div>
                                if (item.includes(marketName)) {
                                    setCompareValue(item[0]);
                                    console.log(compareValue);
                                }
                            })}
                        </div>
                    </TabPanel>
                    {/* 시장 정보 */}
                    <TabPanel
                        value={value}
                        index="two">
                        <Box
                            p={2}
                            position='relative'
                            bottom='1em'>
                            <Typography
                                variant="h6"
                                component='div'
                                sx={{
                                    fontSize: "1.2em",
                                    fontWeight: 'bold'
                                }}>
                                취급 품목(대표 품목)
                            </Typography>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1rem',
                                    marginBottom: '1em'
                                }}>
                                <mark>식품류, 의류, 음식업, 생활용품</mark>
                            </Typography>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1.2em',
                                    fontWeight: 'bold'
                                }}>
                                시장 오시는 길
                            </Typography>
                            <img src='/images/marketInfo/getDirection.png' alt='시장 오시는 길' width='100%'></img>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1em'
                                }}>
                                <mark>{MarketInfo.find((item)=> item.title == marketName).address }</mark>
                            </Typography>
                            <br></br>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1.2em',
                                    fontWeight: 'bold'
                                }}>
                                주차장 위치
                            </Typography>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1em'
                                }}>
                                 <mark>{MarketInfo.find((item)=> item.title == marketName).parkingaddress }</mark>
                            </Typography>
                            <br></br>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1.2em',
                                    fontWeight: 'bold'
                                }}>
                                주차 요금
                            </Typography>
                            
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1em'
                                }}>
                                <mark>{MarketInfo.find((item)=> item.title == marketName).parkingfare }</mark>
                            </Typography>
                        </Box>
                    </TabPanel><br />
                    {/* 편의 시설 */}
                    <TabPanel
                        value={value}
                        index="three">
                        <Box
                            position='relative'
                            bottom='2.5em'
                            p={2}>
                            <img src="/images/marketInfo/getDirection.png" alt="주차장" width='100%' />
                            <br></br>
                            <br></br>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1.2em',
                                    fontWeight: 'bold'
                                }}>
                                자전거 보관소
                            </Typography>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1em'
                                }}>
                                <mark>{MarketInfo.find((item)=> item.title == marketName).address }</mark>
                            </Typography>
                            <br></br>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1.2em',
                                    fontWeight: 'bold'
                                }}>
                                물품 보관소
                            </Typography>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1em'
                                }}>
                                <mark>{MarketInfo.find((item)=> item.title == marketName).parkingaddress }</mark>
                            </Typography>
                            <br></br>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1.2em',
                                    fontWeight: 'bold'
                                }}>
                                주차장 위치
                            </Typography>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1em'
                                }}>
                               <mark>{MarketInfo.find((item)=> item.title == marketName).parkingaddress }</mark>
                            </Typography>
                            <br></br>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1.2em',
                                    fontWeight: 'bold'
                                }}>
                                주차 요금
                            </Typography>
                            <Typography
                                variant='h6'
                                component='div'
                                sx={{
                                    fontSize: '1em'
                                }}>
                                <mark>{MarketInfo.find((item)=> item.title == marketName).parkingfare }</mark>
                            </Typography>
                        </Box>
                    </TabPanel>
                    {/* 가게 정보 */}
                    <TabPanel
                        value={value}
                        index="four">
                        <Box>
                            <Box
                                border='1px solid #E0E0E0'
                                boxShadow="0 0 6px">
                                <img
                                    src="/images/storeInfo/storeImg.png"
                                    alt="가게이미지"
                                    width="100%"
                                    style={{
                                        position: 'relative',
                                        bottom: "1.8em"

                                    }}
                                />
                                <Typography
                                    position='relative'
                                    variant='h6'
                                    sx={{
                                        bottom: '1.5em',
                                        fontSize: "1.2em",
                                        textAlign: 'center',
                                        fontWeight: "bold"
                                    }}>
                                    가게명
                                </Typography>
                                <Box
                                    width="100%"
                                    textAlign="center"
                                    position='relative'
                                    bottom='1em'>
                                    <Typography
                                        variant='span'
                                        fontSize='1em'>
                                        리뷰 330&nbsp;
                                    </Typography>
                                    <Typography
                                        variant='span'>
                                        🧡540&nbsp;
                                    </Typography>
                                    <Typography
                                        variant='span'>
                                        <Call fontSize='2em' />전화&nbsp;
                                    </Typography>
                                    <Typography
                                        variant='span'>
                                        <Share fontSize='2em' />공유&nbsp;
                                    </Typography><br />
                                </Box>
                                <Typography
                                    variant='div'
                                    width='100%'
                                    fontSize='0.8em'
                                    display='inline-block'
                                    position='relative'
                                    left='13%'>
                                    결제 방법 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;예약 및 픽업 구매 현장결제
                                </Typography><br />
                                <Typography
                                    variant='div'
                                    width='100%'
                                    fontSize='0.8em'
                                    display='inline-block'
                                    position='relative'
                                    left='13%'>
                                    픽업준비시간&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 약 10분
                                </Typography><br />
                            </Box>
                            <Box
                                border='1px solid #E0E0E0'
                                boxShadow="0 0 3px"
                                marginTop='0.5em'>
                                <Button
                                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(1)}
                                    sx={{
                                        width: "33%",
                                        color: "black"
                                    }}>가게물품</Button>
                                <Button
                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}
                                    sx={{
                                        width: "33%",
                                        color: "black"
                                    }}>가게정보</Button>
                                <Button
                                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(3)}
                                    sx={{
                                        width: "33%",
                                        color: "black"
                                    }}>리뷰</Button>
                                <Box sx={{
                                    display: "block",
                                    padding: "1em",
                                    width: "100%",
                                    height: "100%"
                                }}>
                                    {toggleState === 1 ? <Menus /> : null}
                                </Box>
                                <Box>
                                    {toggleState === 2 ? <Information /> : null}
                                </Box>
                                <Box>
                                    {toggleState === 3 ? <Review /> : null}
                                </Box>
                            </Box>
                        </Box>
                    </TabPanel>
                    <TabPanel
                        value={value}
                        index="five">
                        <Box>
                            {/* <TextField
                                placeholder='검색어를 입력해주세요'
                                onChange={onProductSearch}
                                value={product}
                                sx={{ bgcolor: '#CCCCCC', borderRadius: '0.5em', border: '1px' }}
                                fullWidth
                                InputProps={{
                                    startAdornment: <IconButton position='start'><Search /></IconButton>
                                }} /> */}
                            <div>
                                {product.length === null ?
                                    setProduct(<div>검색어를 입력하세요</div>) :
                                    <ImageList
                                        sx={{ width: "100%" }}
                                        cols={2}
                                        rowHeight={140}>
                                        {findProduct.map((item, index) =>
                                            <ImageListItem onClick ={()=> handleStore(index)}
                                                key={item.title}>
                                                <img
                                                    src={item.poster}
                                                    alt="그림"
                                                    style={{
                                                        width: "100%",
                                                        height: "80%",
                                                        borderRadius: '0.5em'
                                                    }} />
                                                <ImageListItemBar
                                                    subtitle={<span>{item.title}</span>}
                                                    position='below' />
                                            </ImageListItem>
                                        )}
                                    </ImageList>
                                }
                            </div>
                        </Box>
                    </TabPanel>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
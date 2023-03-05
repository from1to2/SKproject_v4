import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography, Grid, Drawer, List, ListItem, ListItemButton, ListItemIcon, Divider, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import { Menu, Search, ArrowForward, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined } from "@mui/icons-material"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
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
    const [open, setOpen] = useState(false);
    const list = () => {
        <Box
            sx={{ width: 250, height: 250 }}
            role="presentation">
            <List>
                <Typography
                    variant='h6'
                    component="div"
                    sx={{ fontSize: 15 }}
                >나의 정보</Typography>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContentCopyOutlined />
                        </ListItemIcon>
                        <ListItemText primary="나의 주문 내역" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsNoneOutlined />
                        </ListItemIcon>
                        <ListItemText primary="찜한 가게 목록" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BookmarkBorderOutlined />
                        </ListItemIcon>
                        <ListItemText primary="설정" />
                    </ListItemButton>
                </ListItem><ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <SettingsOutlined />
                        </ListItemIcon>
                        <ListItemText primary="사용자 이름. 이메일" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    }
    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                flexDirection: 'column',
                display: "flex",
                alignItems: 'center'
            }}>
                <AppBar>
                    <Toolbar>
                        <>
                            <IconButton
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='open drawer'
                                sx={{ mr: 2 }}
                                onClick={() => setOpen(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer
                                open={open}
                                anchor={"left"}
                                onClose={() => setOpen(false)}
                                // 주의 꼭 Temporary 값으로 설정해야만 click 이벤트 값을 받아서 토글 형식으로 유지 가능.
                                variant="temporary">
                                <Typography p={3} variant="h5" component="div" textAlign="center">
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
                            variant='h5'
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center' }}>
                            홈페이지
                        </Typography>
                        <IconButton
                            size='large'
                            aria-label='search'
                            color='inherit'
                        >
                            <Search />
                        </IconButton>
                    </Toolbar>
                </AppBar><br />
                <Stack
                    direction="row"
                    mt={3}
                    weight={4}
                >
                    <Button
                        weight={1}
                        size='large'
                    >메인</Button>
                    <Button
                        weight={1}
                        size='large'
                    >시장정보</Button>
                    <Button
                        weight={1}
                        size='large'
                    >커뮤니티</Button>
                    <Button
                        weight={1}
                        size='large'
                    >편의시설</Button>
                </Stack><br />
                <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 11 }}>
                    현재 진행중인 이벤트
                </div>
                <img src="./images/homePageImg/fruitSale.png" alt="설연휴 세일" />
                <Grid container mt={3}>
                    <Grid item xs>
                        <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>추천 코스 안내</div>
                    </Grid>
                    <Grid item>
                        <ArrowForward />
                    </Grid>
                </Grid>
                <Stack
                    direction="row"
                    weight={2}
                >
                    <Stack
                        direction="column"
                        weight={1}
                    >
                        <img src="/images/homePageImg/tteokbokki.png" alt="떡볶이" width={190} height={180} />
                        <div style={{ textAlign: 'center' }}>먹짱을 위한 맛집 코스</div>
                    </Stack>
                    <Stack
                        direction="column"
                        weight={1}>
                        <img src="/images/homePageImg/seasonedChicken.png" alt="양념치킨" weight={1} width={190} height={180} />
                        <div style={{ textAlign: 'center' }}>오늘 야식은 이거!</div>
                    </Stack>
                </Stack>
                <Drawer
                    anchor='left'
                >{list()}</Drawer>
            </Box>
        </Container>
    );
};

export default Home;
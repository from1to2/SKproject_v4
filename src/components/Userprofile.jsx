import { Menu, HomeOutlined, ContentCopyOutlined, NotificationsNoneOutlined, BookmarkBorderOutlined, SettingsOutlined, AccountCircleOutlined, AccountCircleRounded, CloseRounded } from '@mui/icons-material';
import { Avatar, AppBar, Button, Box, Container, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, TextField, Stack, Switch } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Userprofile = () => {
    const [open, setOpen] = useState(false);
    const [nickname, setNickname] = useState('');
    // const [username, setUsername] = useState('');
    const changeMyNickname = (e) => {
        setNickname(e.target.value);
    }
    const deleteMyNickname = () => {
        setNickname(" ");
    }
    // const userIdSave = () => {

    // }
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/")
    }
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
    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                paddingLeft: "0",
                paddingRight: "0"
            }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center">
                <AppBar>
                    <Toolbar>
                        <>
                            <IconButton
                                size='large'
                                edge='start'
                                color='inherit'
                                aria-label='open drawer'
                                onClick={() => setOpen(true)}>
                                <Menu />
                            </IconButton>
                            <Drawer
                                open={open}
                                anchor={"left"}
                                onClose={() => setOpen(false)}
                                variant="temporary">
                                <Typography
                                    p={3} variant="h5"
                                    component="div"
                                    textAlign="center">
                                    My Page
                                </Typography>
                                <Divider />
                                <Box>
                                    <List>
                                        <ListItem>
                                            <ListItemButton onClick={goToHome}>
                                                <ListItemIcon><HomeOutlined /></ListItemIcon>
                                                <ListItemText primary="홈"></ListItemText>
                                            </ListItemButton>
                                        </ListItem>
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
                                            <ListItemAvatar>
                                                <Avatar sx={{ bgcolor: "secondary.main" }}>
                                                    <AccountCircleOutlined />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="사용자 이름" secondary="user@sungkyul.ac.kr" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </>
                        <Typography
                            variant='h5'
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                                marginLeft: "1em"
                            }}>
                            프로필 설정
                        </Typography>
                        <Button
                            variant='text'
                            sx={{
                                fontWeight: "bold",
                                color: 'black',
                                fontSize: "1em",
                                left: "1em",
                                marginBottom: "1em"
                            }}>저장</Button>
                    </Toolbar>
                </AppBar>
                <Avatar sx={{
                    marginTop: "3em",
                    width: 40,
                    height: 40,
                }}>
                    <AccountCircleRounded />
                </Avatar>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}>
                    <TextField
                        label="My Nickname"
                        onChange={changeMyNickname}
                        value={nickname || ""}
                        InputProps={{
                            endAdornment: <IconButton
                                position="end"
                                onClick={deleteMyNickname}>
                                <CloseRounded />
                            </IconButton>
                        }}>
                    </TextField>
                    <Button
                        // onClick={userIdSave}
                        variant="outlined"
                        sx={{
                            marginTop: "1.3em",
                            color: "black",
                            borderColor: "black"
                        }}>저장</Button>
                </Box>
                <Stack
                    direction="row"
                    sx={{
                        position: "relative",
                        right: "4em",
                        marginTop: "0.5em"
                    }}>
                    <Typography
                        variant='h6'
                        sx={{
                            position: "relative",
                            fontSize: "1em",
                            fontWeight: "bold",
                            marginRight: "0.5em"
                        }}>
                        이메일
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            color: "gray"
                        }}>
                        user@sungkyul.ac.kr
                    </Typography>
                </Stack>
                <Typography
                    variant='h6'
                    sx={{
                        position: "relative",
                        fontWeight: "bold",
                        fontSize: "1em",
                        right: "7.7em"
                    }}>휴대폰 번호</Typography>
                <Grid container xs={12}>
                    <Grid item xs={9}>
                        <TextField
                            label="휴대폰*"
                            sx={{
                                width: "16em",
                                marginLeft: "1em",
                                right: "0.1em"
                            }}>
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            variant="outlined"
                            sx={{
                                marginTop: "0.9em",
                                marginLeft: "0.8em",
                                color: "black",
                                borderColor: "black",
                                fontSize: "0.8em"
                            }}>
                            재인증
                        </Button>
                    </Grid>
                </Grid>
                <Typography
                    variant='h6'
                    sx={{
                        position: "relative",
                        fontWeight: "bold",
                        fontSize: "1em",
                        right: "7.2em",
                        marginTop: "0.6em"
                    }}>비밀번호 변경</Typography>
                <TextField
                    label="현재 비밀번호"
                    sx={{
                        width: "21em",
                        left: "0.2em"
                    }} />
                <TextField
                    label="신규 비밀번호"
                    sx={{
                        width: "21em",
                        left: "0.2em"
                    }} />
                <Button
                    variant='outlined'
                    justify="flex-start"
                    sx={{
                        color: 'black',
                        borderColor: "black",
                        marginTop: "0.6em",
                        left: "9.9em"
                    }}
                >변경</Button>
                <Box
                    sx={{
                        border: "1px solid #E0E0E0",
                        boxShadow: "0 0 6px",
                        marginTop: "0.6em",
                        width: "100%"
                    }}>
                    <Typography
                        variant='p'
                        sx={{ fontWeight: "bold" }}>
                        마케팅 정보 수신 동의
                    </Typography>
                    <Divider sx={{
                        borderBottomWidth: 1,
                        borderColor: "black"
                    }} />
                    <Grid container >
                        <Grid item xs>
                            <Typography
                                variant='p'
                                sx={{
                                    display: "flex",
                                    fontWeight: "bold",
                                    marginTop: "0.5em"
                                }}>
                                메일 수신동의
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Switch></Switch>
                        </Grid>
                    </Grid>
                    <Divider sx={{
                        borderBottomWidth: 1,
                        borderColor: "black"
                    }} />
                    <Grid container >
                        <Grid item xs>
                            <Typography
                                variant='p'
                                sx={{
                                    display: "flex",
                                    fontWeight: "bold",
                                    marginTop: "0.5em"
                                }}>
                                SNS 수신동의
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Switch></Switch>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Userprofile;
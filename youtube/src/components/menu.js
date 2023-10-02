

import styled from "styled-components"

import AmanTube from "../img/yt-logo.jpg"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";



const Menu = ({ darkMode, setDarkMode, isListIconClicked, toggleMenu }) => {
    const { currentUser } = useSelector(state => state.user)





    const handleMenuItemClick = () => {
        // Hide the menu container only on small screens
        if (window.innerWidth <= 767) {
            toggleMenu();
        }
    };



    const handleDarkModeClick = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode); // Toggle dark mode
    };

    return (
        <>

            <>

                <Container isListIconClicked={isListIconClicked} onClick={handleMenuItemClick}>
                    <Wrappper >
                        {/* Render other menu items conditionally */}

                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <Logo>
                                <Img src={AmanTube} />
                                AmanTube
                            </Logo>
                        </Link>

                        <Item >
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                <HomeIcon />
                                Home
                            </Link>
                        </Item>
                        <Item>
                            <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
                                <ExploreOutlinedIcon />
                                Explore
                            </Link>
                        </Item>


                        <Item>
                            <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
                                <SubscriptionsOutlinedIcon />
                                Subscriptions
                            </Link>
                        </Item>

                        <Hr />
                        <Item>
                            <VideoLibraryOutlinedIcon />
                            Library
                        </Item>
                        <Item>
                            <HistoryOutlinedIcon />
                            History
                        </Item>
                        <Hr />

                        <>
                            {!currentUser &&

                                <> <Login>
                                    Sign in to like videos, comment,Subscribe
                                    <Link to="/signin" style={{ textDecoration: "none", color: "inherit" }}>
                                        <Button>
                                            <AccountCircleOutlinedIcon />
                                            SIGN IN
                                        </Button>
                                    </Link>

                                </Login>
                                    <Hr /></>}
                        </>

                        <Title>BEST OF AMANTUBE</Title>
                        <Item>
                            <LibraryMusicOutlinedIcon />
                            Music
                        </Item>
                        <Item>
                            <SportsBasketballOutlinedIcon />
                            Sports
                        </Item>
                        <Item>
                            <SportsEsportsOutlinedIcon />
                            Gaming
                        </Item>
                        <Item>
                            <MovieOutlinedIcon />
                            Movies
                        </Item>
                        <Item>
                            <ArticleOutlinedIcon />
                            News
                        </Item>
                        <Item>
                            <LiveTvOutlinedIcon />
                            Live
                        </Item>
                        <Hr />
                        <Item>
                            <SettingsOutlinedIcon />
                            Settings
                        </Item>
                        <Item>
                            <FlagOutlinedIcon />
                            Report
                        </Item>
                        <Item>
                            <HelpOutlineOutlinedIcon />
                            Help
                        </Item>


                        <Item onClick={handleDarkModeClick}>
                            <SettingsBrightnessOutlinedIcon />
                            {darkMode ? "Light" : "Dark"} Mode
                        </Item>





                    </Wrappper>
                </Container>
            </>

        </>
    )
}
export default Menu








const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;

  /* Add media query to apply styles for small screens */
  @media (min-width: 320px) and (max-width:767px) {
    display: ${({ isListIconClicked }) => (isListIconClicked ? 'unset' : 'none')};
    position: relative; 
    overflow-y: auto; /* Enable vertical scrolling */
    height: calc(100vh - 56px); /* Adjust the height to accommodate the top bar */
    background-color: ${({ isListIconClicked }) =>
        isListIconClicked ? 'transparent' : 'transparent'};
  
  }
  
`;


const Wrappper = styled.div`
    padding:18px 16px;
    background-color: ${({ isListIconClicked }) =>
        isListIconClicked ? 'transparent' : 'transparent'};
    `;


const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:25px;

@media (min-width: 320px) and (max-width:767px){


    margin-bottom:8px;
}

`;

const Img = styled.img`
height:25px`;



const Item = styled.div`
display:flex;
align-items:center;
gap:4px;
cursor:pointer;
padding: 6px 0px;
&:hover {
    background-color: ${({ theme }) => theme.soft};
  }`;



const Hr = styled.hr`
  margin: 9.5px 0px;
   border: 0.5px solid ${({ theme }) => theme.soft};;
`;


const Login = styled.div``;


const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 15px;
`;

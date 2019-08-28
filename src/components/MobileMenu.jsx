import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, device } from '../media';

export default function MobileMenu(props) {
    const [active, setActive] = useState(false);

    function setTab(id) {
        props.setCurrentTab(id);
    }

    return (
        <Container active={active} onClick={() => {
            setActive(!active);
        }}>
            <span ></span>
            <span ></span>
            <span ></span>
            <Menu active={active}>
                <Item active={active} onClick={setTab.bind(this, 'home')}>
                    <p>Home</p>
                </Item>
                {/* <Item id='about' active={active} onClick={setTab.bind(this, 'about')}>
                    <p>About</p>
                </Item> */}
                <Item active={active} onClick={() => { window.open('https://medium.com/@biolinktech') }}>
                    <p>Blog</p>
                </Item>
                <Item active={active} onClick={setTab.bind(this, 'projects')}>
                    <p>Projects</p>
                </Item>
                <Item active={active} onClick={setTab.bind(this, 'contacts')}>
                    <p>Contacts</p>
                </Item>

            </Menu>
        </Container>

    );

}

const Container = styled.div`
    position: fixed;
    z-index: 100;
    top: 30px;
    right: 20px;
    width: 50px;
    height: 50px;
    display: grid;
    grid-template-rows: auto;
    span{
        position: relative;
        z-index: 100;
        height: 3px;
        background: ${colors.main};
        transition: .3s;
        &:nth-child(1){
            width: ${({ active }) => (active ? '20px' : '50px')};
        }
        &:nth-child(2){
            width: ${({ active }) => (active ? '40px' : '50px')};
        }
        &:nth-child(3){
            width: ${({ active }) => (active ? '30px' : '50px')};
        }
    }
`
const Menu = styled.nav`
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    transition: .3s;
    background: ${colors.menuBg};
    height: 100vh;
    width: ${({ active }) => (active ? '100vw' : '0vw')};
    transition-delay: ${({ active }) => (active ? '0s' : '.3s')};
    display: grid;
    grid-template-rows: 10% 20% 20% 20% 20% 10%;
`
const Item = styled.div`
    position: relative;
    height: 50px;
    background: rgba(255,255,255,.3);
    transition: .3s;
    transition-delay: ${({ active }) => (active ? '.3s' : '0s')};
    width: ${({ active }) => (active ? '80%' : '0')};
    align-self: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    :nth-child(1){
        grid-row-start: 2;
    }
    :nth-child(2){
        grid-row-start: 3;
    }
    :nth-child(3){
        grid-row-start: 4;
    }
    :nth-child(4){
        grid-row-start: 5;
    }
    
    p{
        color: ${colors.main};
        transition-delay: ${({ active }) => (active ? '.6s' : '0s')};
        opacity: ${({ active }) => (active ? '1' : '0')};
        @media ${device.pc}{
            font-size: 2vw;
        }
        @media ${device.tablet}{
            font-size: 3vw;
        }
        @media ${device.phone}{
            font-size: 30px;
        }
    }
`
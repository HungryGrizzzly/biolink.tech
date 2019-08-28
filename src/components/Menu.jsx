import React from 'react';
import styled from 'styled-components';
import { colors } from '../media';
import MobileMenu from './MobileMenu';

export default function Menu(props) {

    if (window.innerWidth > 1366) {
        return (
            <Container>
                <li onClick={props.setCurrentTab.bind(this, 'home')}>
                    <p >Home</p>
                </li>
                {/* <li onClick={props.setCurrentTab.bind(this, 'about')}>
                    <p>About</p>
                </li> */}
                <li>
                    <p onClick={() => { window.open('https://medium.com/@biolinktech') }} >Blog</p>
                </li>
                <li onClick={props.setCurrentTab.bind(this, 'projects')}>
                    <p >Projects</p>
                </li>
                <li onClick={props.setCurrentTab.bind(this, 'contacts')}>
                    <p>Contacts</p>
                </li>
            </Container>
        )
    } else {
        return <MobileMenu setCurrentTab={props.setCurrentTab} />
    }
}

const Container = styled.ul`
    position: absolute;
    z-index: 10;
    padding: 0;
    list-style: none;
    left: 5%;
    bottom: 40px;
    li {
        cursor: pointer;
            p {
                text-decoration: none;
                color: ${colors.main};
                transition: .3s;
                &:hover {
                    opacity: .5;
                }
            }
        &:hover{
            p{
                transform: translateX(20%);
            }
        }
    }
`
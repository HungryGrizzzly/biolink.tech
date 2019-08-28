import React from 'react';
import styled from 'styled-components';
import twitterIcon from '../assets/twitter.svg';
import facebookIcon from '../assets/facebook.svg';
import emailIcon from '../assets/email.svg';

import { TabArticle, Title, colors, device } from '../media';

export default function Contacts(props) {
    return (
        <TabArticle active={props.active}>
            <Title>Contacts</Title>
            <Container>
                <FirstSection active={props.active}>
                    <Block>
                        <Icon href='mailto:team@biolink.tech' url={emailIcon} >
                            <div></div>
                        </Icon>
                        <Icon href='https://www.facebook.com/biolinktech/' url={facebookIcon} >
                            <div></div>
                        </Icon>
                        <Icon href=' https://twitter.com/biolinktech' url={twitterIcon} >
                            <div></div>
                        </Icon>
                    </Block>
                </FirstSection>
                <SecondSection active={props.active}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.465923284794!2d-0.09075478426297241!3d51.50466757963467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035759d807d9%3A0xb93ad9de496965b!2s20+St+Thomas+St%2C+London+SE1+9RG%2C+UK!5e0!3m2!1sen!2sru!4v1552922068718" frameborder="0" style={mapStyle} allowfullscreen></iframe>
                    {/* <Address>20 St Thomas St, London SE1 9RG </Address> */}
                </SecondSection>
            </Container>
        </TabArticle>
    );
}

const mapStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    color: "#f5f5f5"
}

const Container = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    width: 100%;
    height: 90%;
    align-self: center;
    display: grid;
    @media ${device.pc}{
        grid-template-columns: 30% 70%;
    }
    @media ${device.tablet} and (orientation: landscape){
        grid-template-columns: 30% 70%;
    }
    @media ${device.tablet} and (orientation: portrait){
        grid-template-rows: 30% 70%;
    }
    @media ${device.phone} and (orientation: landscape){
        grid-template-columns: 30% 70%;
    }
    @media ${device.phone} and (orientation: portrait){
        grid-template-rows: 30% 70%;
    }
`

const FirstSection = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(0,0,0,.3);
    transform: translateX(${({ active }) => (active ? '0' : '2000px')});
    animation: ${({ active }) => (active ? `slide 1 1s` : 'none')};
    transition: .4s;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes slide{
        0%{
        transform: translateX(2000px);
    }
    75%{
        transform: translateX(-60px);
    }
    90%{
        transform: translateX(30px);
    }
    100%{
        transform: translateX(0);
    }
    }
`
const SecondSection = styled(FirstSection)`
    animation: ${({ active }) => (active ? `slide 1 1s .2s` : 'none')};
    .bg{
        position: absolute;
        z-index:10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: grayscale(200%) blur(2px);
        opacity: .7;
    }
`
const Block = styled.div`
    align-self: center;
    margin: 0 auto;
    display: grid;
    @media ${device.pc}{
        grid-template-rows: 33% 33% 33%;
        height: 50%;
    }
    @media ${device.tablet} and (orientation: landscape){
        grid-template-rows: 33% 33% 33%;
        height: 100%;
    }
    @media ${device.tablet} and (orientation: portrait){
        width: 100%;
        height: 50%;
        grid-template-columns: 33% 33% 33%;
    }
    @media ${device.phone} and (orientation: landscape){
        height: 100%;
        grid-template-rows: 33% 33% 33%;
    }
    @media ${device.phone} and (orientation: portrait){
        width: 100%;
        grid-template-columns: 33% 33% 33%;
    }
`
const Icon = styled.a`
    align-self: center;
    margin: 0 auto;
    transition: .3s;
    cursor: pointer;
    &:hover{
        opacity: .7;
    }
    div{
        width: 100%;
        height: 100%;
        content: '';
        background: url(${({ url }) => (url)});
        background-size: cover;
    }
    @media ${device.pc}{
        width: 3vw;
        height: 3vw;
    }
    @media ${device.tablet} {
        width: 50px;
        height: 50px;
    }
    @media ${device.phone} {
        width: 30px;
        height: 30px;
    }
`
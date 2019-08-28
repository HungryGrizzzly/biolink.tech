import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { TabArticle, Title, colors } from '../media';
import Typed from 'react-typed';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            shown: false,
            firstBlock: null,
            secondBlock: null
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.active && !this.state.shown) {
            setTimeout(() => {
                this.setState({
                    firstBlock: <Text active={newProps.active}>Biolink.Tech represents the new era of possibilities in Health and Wellness. We gather unique health
                    data from our own and our partners' sensors and devices and use AI to integrate into programmatic
                    self-management of eleven big and costly diseases and conditions. Our open ecosystem connects to 3rd
                    party health sensors, devices and IoT equipment. All data is owned by the user, stored privately &
                    securely using blockchain technology and only shared on explicit permission of a user. We use
                    gamification to drive motivation, clinical outcomes and long-term lifestyle changes.</Text>
                })
            }, 2000);

            setTimeout(() => {
                this.setState({
                    secondBlock: <Text active={newProps.active}>"Globesity" – a global epidemic of overweight and obesity has led to a drastic increase in diabetes.
                    By 2030, one in three people globally is likely to have Type 2 Diabetes. Over 5m people in the UK
                    will have a diabetes diagnosis by 2025, and the cost to society is estimated at £39Bn/year by 2035.</Text>
                })
            }, 3000);

            this.setState({
                shown: true
            })
        }
        if (!newProps.active && this.state.shown) {
            setTimeout(()=>{
                this.setState({
                    shown: false,
                    firstBlock: null,
                    secondBlock: null
                })
            }, 1000);
        }
    }

    render() {
        const { active } = this.props;
        return (
            <TabArticle active={active}>
                <Title>About</Title>
                <Container>
                    {active && <Typed
                        strings={['We create AI tools that allow people to be the best they can be']}
                        typeSpeed={20}
                        cursorChar=''
                        style={{ alignSelf: 'center', fontSize: '1.3vw' }}
                    />}
                    {this.state.firstBlock}
                    {active && <Typed
                        strings={['We are addressing a big global problem']}
                        startDelay={2000}
                        typeSpeed={20}
                        cursorChar=''
                        style={{ alignSelf: 'center', fontSize: '1.3vw' }}
                    />}
                    {this.state.secondBlock}
                </Container>
            </TabArticle>
        );
    }

}
const popUp = keyframes`
 0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
`

const Container = styled.article`
    grid-row-start: 2;
    grid-column-start: 2;
    display: grid;
    grid-template-rows: 10% 50% 10% 30%;
    width: 100%;
    height: 100%;
`
const Text = styled.div`
    width: 60%;
    padding: 15px;
    color: ${colors.main};
    font-size: 1.1vw;
    align-self: center;
    background: rgba(255, 255, 255, .1);
    transform: scale(${({ active }) => (active ? '1' : '0')});
    animation: ${popUp} 1 1s;
`

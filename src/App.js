import React, { Component } from 'react';
import styled from 'styled-components';
import logoIcon from './assets/logo.svg';
import Typed from 'react-typed';
import Menu from './components/Menu';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { device } from './media';

const videoUrls = [
  '/videos/biolink1.mp4',
  '/videos/biolink2.mp4',
  '/videos/biolink3.mp4',
  '/videos/biolink4.mp4',
  '/videos/biolink5.mp4',
  '/videos/biolink6.mp4',
  '/videos/biolink8.mp4',
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: null,
      url: null,
      typed: null
    }
    this.setCurrentTab = this.setCurrentTab.bind(this);
    this.video = null;
  }
  componentWillMount() {
    let index = Math.random() * videoUrls.length;
    this.setState({
      url: videoUrls[Math.floor(index)]
    })
  }

  componentDidMount() {
    this.video.addEventListener('loadeddata', () => {
      setTimeout(() => {
        document.querySelector('.preloader').style.opacity = '0';
      }, 500);
      setTimeout(() => {
        document.querySelector('.preloader').style.visibility = 'hidden';
      }, 800);
      this.setState({
        typed: <TypedText />
      })
    })
  }

  setCurrentTab(id) {
    this.setState({
      currentTab: id
    })
  }

  render() {
    return (
      <div className="app">
        <Logo onClick={() => {
          document.location.reload();
        }} />
        {this.state.typed}
        <Menu setCurrentTab={this.setCurrentTab} />
        <About active={this.state.currentTab === 'about'} />
        <Projects active={this.state.currentTab === 'projects'} />
        <Contacts active={this.state.currentTab === 'contacts'} />
        <video ref={ref => this.video = ref} src={this.state.url} autoPlay loop muted></video>
      </div >
    );
  }
}

function TypedText() {
  return (
    <Wrapper>
      <TypoWrapper1>
        <Typed
          strings={['Upgrading Humanity']}
          startDelay={800}
          typeSpeed={40}
          style={{ width: '100%' }}
        />
      </TypoWrapper1>
      <TypoWrapper2>
        <Typed
          strings={[
            '<b>Empowering people</b> to become smarter, stronger, more competitive, healthier and live longer by enhancing their humanity with <b>artificial intelligence</b>']}
          typeSpeed={40}
          startDelay={2800}
          cursorChar=''
          style={{ width: '100%', alignSelf: 'flex-start', fontWeight: '300' }} />
      </TypoWrapper2>
    </Wrapper>
  )
}

const Logo = styled.div`
  position: absolute;
  z-index: 10;
  left: 5%;
  cursor: pointer;
  background: url(${logoIcon}) no-repeat;
  background-size: contain;
  @media ${device.pc}{
    top: 40px;
    width: 20vw;
    height: 4vw;
  }
  @media ${device.tablet}{
    top: 20px;
    width: 25vw;
    height: 6vw;
  }
  @media ${device.phone}{
    top: 30px;
    width: 120px;
    height: 70px;
  }
`
const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
  height: 15vw;
  color: white;
  font-weight: bold;
  display: grid;
  grid-template-rows: 80% 20%;
  @media ${device.pc}{
    width: 35%;
    top: 30%;
    left: 5vw;
    font-size: 5vw;
  }
  @media ${device.tablet}{
    width: 50%;
    left: 25%;
    top: 35%;
  }
  @media ${device.phone}{
    top: 30%;
    width: 70%;
    left: 15%;
    height: 30%;
  }
`
const TypoWrapper1 = styled.div`
  @media ${device.pc}{
    width: 60%;
  }
  @media ${device.tablet}{
    width: 100%;
    margin: 0 auto;
    text-align: left;
    font-size: 5vw;
  }
  @media ${device.phone}{
    margin: 0 auto;
    font-size: 15vw;
  }
`
const TypoWrapper2 = styled.div`
  width: 100%;
  @media ${device.pc}{
    font-size: 1vw;
  }
  @media ${device.tablet}{
    width: 100%;
    margin: 0 auto;
    text-align: left;
    font-size: 2.5vw;
  }
  @media ${device.phone}{
    margin: 0 auto;
  }
`
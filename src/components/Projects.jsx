import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { TabArticle, Title, colors, device } from '../media';
import * as THREE from 'three';

const cards = [
    {
        title: 'Kord',
        url: 'http://kord.tech'
    },
    {
        title: 'Lonvivo',
        url: 'http://lonvivo.com'
    },
    {
        title: 'RUNE',
        url: 'http://rune.systems'
    },
    {
        title: 'Ariellium',
        url: 'http://ariellium.com'
    },
    {
        title: 'Coming soon',
        url: null
    },
    {
        title: 'Coming soon',
        url: null
    },
]

export default function Projects(props) {

    return (
        <TabArticle active={props.active}>
            <Title>Projects</Title>
            <Container>
                {cards.map((card, index) => (
                    <Project key={index} active={props.active} title={card.title} url={card.url} index={index} delay={index * .1} />
                ))}
            </Container>
        </TabArticle>
    );
}


class Project extends Component {
    constructor() {
        super();
        this.state = {
            animIsRunnig: false,
            scale: 0
        }
        this.threeAnimate = this.threeAnimate.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.changeAnimStatus = this.changeAnimStatus.bind(this);
    }
    componentWillReceiveProps(newProps) {
        if (newProps.active && newProps.active !== this.props.active) {
            setTimeout(() => {
                this.setState({
                    scale: 1
                })
            }, this.props.index * 100);
        }
        if (!newProps.active && newProps.active !== this.props.active) {
            this.setState({
                scale: 0
            })
        }
    }
    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        //ADD SCENE
        this.scene = new THREE.Scene();
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        this.camera.position.z = 20;
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setClearColor('#000000', 0)
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)
        //ADD CUBE
        let geometry = new THREE.BoxBufferGeometry(10, 10, 10);
        let material = new THREE.MeshBasicMaterial({ color: colors.main, wireframe: true });
        if (this.props.title === 'Coming soon') {
            geometry = new THREE.SphereGeometry(3, 10, 10);
            material = new THREE.MeshBasicMaterial({ color: colors.main, wireframe: true });
            this.camera.position.z = 10;
        }

        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        this.start();

        this.changeAnimStatus();

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > this.container.getBoundingClientRect().height && this.state.animIsRunnig) {
                this.stop();
                this.changeAnimStatus();
            }
            if (window.pageYOffset < this.container.getBoundingClientRect().height && !this.state.animIsRunnig) {
                this.start();
                this.changeAnimStatus();
            }
        })
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {
        this.frameId = requestAnimationFrame(this.threeAnimate)
    }

    changeAnimStatus() {
        this.setState({
            animIsRunnig: !this.state.animIsRunnig
        })
    }

    stop = () => {
        cancelAnimationFrame(this.frameId);
    }

    threeAnimate = () => {
        this.cube.rotation.y += 0.01;
        if (this.props.title === 'RUNA') {
            this.cube.rotation.x += 0.01;
        }
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.threeAnimate)
    }

    renderScene = () => {
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        const { title, delay, active, url } = this.props;
        return (
            <Card active={active} delay={delay} scale={this.state.scale} onClick={() => { if (url) { window.open(url) } }} >
                <div
                    style={{ width: '100%', height: '100%' }}
                    ref={(mount) => { this.mount = mount }}
                />
                <CardTitle>{title}</CardTitle>
            </Card>
        );
    }
}

const Container = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
    width: 100%;
    height: 90%;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    @media ${device.pc}{
        justify-content: flex-start;
    }
    @media ${device.tablet}{
        justify-content:center;
        overflow-y: auto;
    }
    @media ${device.phone}{
        justify-content: space-between;
        overflow-y: auto;
    }
`
const Card = styled.div`
    border: 1px solid;
    display: grid;
    cursor: pointer;
    transition: .3s;
    &:hover{
        transform: scale(1.1);
    }
    transform: scale(${({ scale }) => (scale)});
    animation: ${({ active, delay }) => (active ? 'popUp 1 .75s ' + delay + 's' : 'none')};

    @media ${device.pc}{
        width: 10vw;
        height: 14vw;
        margin: 2vw;
        grid-template-rows: 70% 30%;
    }
    @media ${device.tablet} and (orientation: portrait){
        width: 200px;
        height: 250px;
        margin: 2vw;
        grid-template-rows: 70% 30%;
    }
    @media ${device.tablet} and (orientation: landscape){
        width: 180px;
        height: 240px;
        margin: 2vw;
        grid-template-rows: 70% 30%;
    }
    @media ${device.phone} and (orientation: portrait){
        width: 90%;
        height: 100px;
        margin: 1vw;
        grid-template-rows: none;
        grid-template-columns: 50% 50%;
    }
    @keyframes popUp{
    0%{
        transform: scale(0);
    }
    75%{
        transform: scale(1.2);
    }
    90%{
        transform: scale(.9);
    }
    100%{
        transform: scale(1);
    }
    }
`
const CardTitle = styled.h3`
    align-self: center;
    margin: 0 auto;
    color: ${colors.main};
    @media ${device.pc}{

    }
    @media ${device.tablet}{
    }
    @media ${device.phone}{
        font-size: 14pt;
    }
`

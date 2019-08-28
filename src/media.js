import styled from 'styled-components';

export const colors = {
    main: '#ef7900',
    menuBg: 'rgb(4, 0, 14)'
}
export const device = {
    pc: '(min-width: 1400px)',
    tablet: '(min-width: 768px) and (max-width: 1399px)',
    phone: '(max-width: 767px)'
}

export const Title = styled.h2`
    color: ${colors.main};
    align-self: flex-end;
    margin: 0;
    grid-column-start: 2;
    grid-row-start: 1;
    text-transform: uppercase;
    @media ${device.pc}{
        font-size: 1.8vw;
    }
    @media ${device.tablet}{
        font-size: 3vw;
    }
    @media ${device.phone}{
        font-size: 16pt;
    }
`

export const TabArticle = styled.article`
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    height: 100%;
    transition: .3s ease-in-out;
    color: white;
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 12% 80%;
    transform: ${({ active }) => (active ? 0 : 'translateX(100%)')};
    @media ${device.pc}{
        width: 60%;
        background: rgba(0, 0, 0, .3);
    }
    @media ${device.tablet}{
        width: 100%;
        background: rgba(0, 0, 0, .8);

    }
    @media ${device.phone}{
        background: rgba(0, 0, 0, .8);
        width: 100%;
    }
`

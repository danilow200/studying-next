import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    padding-right: 30px;
    /* background: blue; */
    width: 95%;
    margin: 10px auto;
    border: solid rgba(0, 0, 0, 0.35) 3px;
    border-radius: 999px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    backdrop-filter: blur(10px);
    position: relative;
    transition: ease 300ms;
`;

export const Hamburguer = styled.button`
    display: none;
    color: white;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    transition: ease 300ms;
    @media ${(props) => props.theme.breakpoints.mobile} {
        display:flex;
    }

    :hover {
        text-shadow: rgba(0, 0, 0, 0.75) 0px 0px 15px;
        transition: ease 300ms;
    }
`;

export const Menu = styled.div`
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 255, 0.5);
    backdrop-filter: blur(10px);
    width: 100%;
    height: 200px;
    right: 0;
    top: 50px;
    border-radius: 20px;
    transition: ease-in-out 300ms;
    @media ${(props) => props.theme.breakpoints.mobile} {
        display:flex;
    }
`
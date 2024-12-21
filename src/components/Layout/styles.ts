import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 background-color: white;
 min-height: 100vh;
 width: 100vw;
`


export const ContainerHeader = styled.header`
    display: flex;
    background-color: black;
    h3{
        color: white;
        font-weight: 600;
    }
`
export const ContainerFooter = styled.header`
    display: flex;
    background-color: black;
    span{
        font-size: 1.2rem;
        color: white;
        font-weight: 600;
    }
`
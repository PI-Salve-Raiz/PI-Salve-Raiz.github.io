import styled from "styled-components";

export const Container =  styled.div`
    
    width:100%;
    height:64px;
    background:${props=> props.theme.color.primary};

    padding: 0 16px;

    display:flex;
    align-itens:center;
    justify-content:space-between;

    h3{
        margin:0;
        padding: 0;
        color: #fff;
    }
`;

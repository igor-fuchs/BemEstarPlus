import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .phrase-box{
        display: flex;
        flex-direction: column;
        gap: 11px;
        border-radius: 7px;
        border: 3px solid #F2947B;
        padding: 10px;
        background-color: #FFF3E9;
    }
    .phrase-box p{
        margin: 0;
        font-size: 23px;
        font-family: 'Comic Sans MS', cursive;
        color: #323232;
    }

    .buttons{
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
    }
`;
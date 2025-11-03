import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p{
        color: #2D7F87;
        font-size: 32px;
        margin: 0;
        font-family: impact, "Arial Black", sans-serif;
    }

    .buttons{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
`;
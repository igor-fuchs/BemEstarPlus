import styled from "styled-components";

type ContainerProps = {
    $height: string;
    $fontSize: string;
    $gap: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props => props.$gap};
    img {
        height: ${props => props.$height};
    }
    h1 {
        font-size: ${props => props.$fontSize};
        font-family: impact, "Arial Black", sans-serif;
        font-weight: normal;
        color: #2D7F87;
        margin: 0;
    }
`;
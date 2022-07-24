import styled from "styled-components";

export const CardContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
`;

export const CardLabel = styled.p`
    background: #4faab2;
    color: white;
    margin: 0;
    text-align: center;
    padding: 20px 0;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 10px 8px -5px rgb(0 0 0 / 50%);
    font-size: 1.3em;
`;

export const CardValue = styled.p`
    margin: 0;
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    background: white;
    box-shadow: 0px 56px 11px 0px rgb(0 0 0 / 45%);
    font-size: 3em;
    color: #3d8a91;
`;

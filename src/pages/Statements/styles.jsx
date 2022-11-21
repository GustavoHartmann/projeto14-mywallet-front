import styled from "styled-components";

const StatementsPageContainer = styled.div`
    width: 90%;

    margin: 25px auto;

    h1{
        margin-bottom: 25px;
    }

    & > span{
        width: 100%;

        margin-top: 15px;

        display: flex;
        justify-content: space-between;
    }

    button {
        width: 150px;
        height: 115px;

        font-size: 17px;
        font-weight: bold;

        background-color: #A328D6;
        color: white;

        border: none;
        border-radius: 5px;
    }

    svg {
        font-size: 20px;

        color: white;

        padding-top: 5px;
    }
`;

export default StatementsPageContainer;

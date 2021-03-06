import styled from "styled-components";

const ContainerApp = styled.div`
    max-width: 350px;
    margin: 6rem auto;
    background-color: #fff;
    padding: 1rem;
    border-radius: 15px;

    @media (max-width: 576px) {
        max-width: 300px;
    }
`;

export default ContainerApp;
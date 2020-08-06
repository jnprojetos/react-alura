import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer'
import styled from 'styled-components';

// Página padrão onde contém o Menu do topo e o rodapé

const Main = styled.main`
    background-color: var(--black);
    flex: 1;
    color: var(--white);
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault ({children}) {
    return(
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
    );
}

export default PageDefault;
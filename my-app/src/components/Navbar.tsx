import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

const Icon = styled.a`
  margin-left: 1rem;
  color: black;
  text-decoration: none;
`;

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <Icon href="https://github.com/apps/gothub-ai" target="_white" rel="noopener noreferrer">
                <FaGithub size={32} />
            </Icon>
            <Icon href="https://www.linkedin.com/company/gothubai" target="_white" rel="noopener noreferrer">
                <FaLinkedin size={32} />
            </Icon>
            <Icon href="https://twitter.com/" target="_white" rel="noopener noreferrer">
                <FaTwitter size={32} />
            </Icon>
        </NavbarContainer>
    );
};

export default Navbar;

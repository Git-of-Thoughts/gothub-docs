import React from 'react';
import styled from 'styled-components';
import ClientIcons from './ClientIcons';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`;

const MainText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SubText = styled.p`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`;

const CustomButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MainContent: React.FC = () => {
    const handleClick = () => {
        window.location.href = 'https://github.com/apps/gothub-ai'; // Replace with your demo link
    };

    return (
        <MainContainer>
            <MainText>Gothub AI</MainText>
            <SubText>Let LLM Do The Code While You Get Some Sleep!</SubText>
            <CustomButton onClick={handleClick}>Go to Demo</CustomButton>
            <ClientIcons />
        </MainContainer>
    );
};

export default MainContent;






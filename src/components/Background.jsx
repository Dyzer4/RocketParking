import React from 'react';
import styled from 'styled-components/native';

export const ScreenWrapper = ({ children }) => {
  return (
    <Background>
      {children}
    </Background>
  );
};

const Background = styled.ImageBackground.attrs({
  source: require('../assets/images/background.png'),
})`
  flex: 1;
`;

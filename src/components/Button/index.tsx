import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement>;
// Como a interface é fazia, o ESLINT converte para type, vamos manter pois ele reduz o texto.

const Button: React.FC<InputProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;

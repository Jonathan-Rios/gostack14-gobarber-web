import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};
// Como a interface é vazia, o ESLINT converte para type, vamos manter pois ele reduz o texto.

const Button: React.FC<InputProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;

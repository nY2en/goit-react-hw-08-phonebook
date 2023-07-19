import styled from '@emotion/styled';
import { Button, Input } from '@chakra-ui/react';
import '@fontsource/inconsolata';

export const H1 = styled.h1`
  margin-bottom: 32px;

  font-size: 32px;
  text-align: center;
`;

export const Form = styled.form`
  width: 500px;
  margin: 90px auto;
  padding: 20px 50px;

  background-color: #fff3;

  border-radius: 25px;
`;

export const Label = styled.label`
  font-size: 24px;
`;

export const Inpt = styled(Input)`
  margin-bottom: 32px;

  font-family: 'Inconsolata';
  font-size: 20px;

  &:focus-visible {
    border-color: purple;
    box-shadow: 0px 1px 0px 0px purple;
  }
`;

export const Btn = styled(Button)`
  display: block;
  margin: 0 auto 24px;
`;

export const P = styled.p`
  text-align: center;
`;

export const Span = styled.span`
  margin-left: 8px;

  font-weight: 700;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: teal;
  }
`;

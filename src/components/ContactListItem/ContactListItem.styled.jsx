import styled from '@emotion/styled';

export const Li = styled.li`
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  width: 400px;
  align-items: center;
  margin-bottom: 8px;
`;

export const Span = styled.span`
  width: 5px;
  height: 5px;
  display: block;
  background-color: black;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 4px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: gray;
    color: #ffffff;
  }
`;

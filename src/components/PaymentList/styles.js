import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  width: 960px;
  height: 90px;
  background-color: #fff;
  margin: 0 auto;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`;

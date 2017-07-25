import styled from 'styled-components';

const Img = styled.img`
  width: 180px;
  height: 140px;
`;

const P = styled.p`
  color: #95a5a6;
  font-size: 16px;
  font-family: sans-serif;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Container = styled.div`
  border: 1px solid #999;
  margin: 10px;
  padding: 10px;
  height: auto;
  border-radius: 6px;
`;

const Button = styled.a`
  padding: 10px 25px 10px 25px;
  background-color: #e74c3c;
  border-radius: 6px;
  color: #fff;
  margin-top: 20px;

  &:hover {
    background-color: #c0392b;
    color: #fff;
  }
`;

export {Img, P, Row, Container, Button}

import styled from 'styled-components';

const Div = styled.div`
  margin-top: 20px;
  padding: 20px;
  color: #666;
  font-family: sans-serif;
  font-size: 18px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const styles = {
  button:{
    'padding': '10px',
    'color': '#fff',
    'background': '#424949',
    'border': '0',
    'borderRadius': '6px'
  },
  input:{
    'border': '1px solid #5D6D7E',
    'borderRadius': '6px',
    'padding': '5px',
    'background': '#F2F4F4',
    'width': '100%',
    'margin': '-440px 0px 10px 0px',
    ':hover':{
      'border': '1px solid red !important'
    }
  }
};

export {Div, Row, styles}

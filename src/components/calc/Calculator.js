import React, {useState} from "react";
import styled from "styled-components";

function Calculator(props){
    const [calc, SetCalc] = useState({});

    const MainContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 80vh;
    `;


    const ButtonContainer = styled.div`
      display: grid;
      max-width: 450px;
      height: 50%;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 6px;
      grid-row-gap: 6px;
    `;

    const Button = styled.button`
      background-color: #f2f3f5;
      border: none;
      color: black;
      font-size: 1.5rem;
      border-radius: 35px;
      cursor: pointer;
      box-shadow: 3px 3px 3px lightgray;
      width: 70px;
      
      &:active {
        box-shadow: none;
      }
    `;

    const CalButton = styled(Button)`
      font-size: 2rem;
      color: white;
      background-color: #F4CCCC;
    `;

    const ZeroButton = styled(Button)`
      grid-column: 1/3;
      width: 145px;
    `;

    const InputBar = styled.input`
      width: 30%;
      max-width: 450px;
      height: 70px;
      margin-bottom: 10px;
      border-radius: 10px;
      font-size: 30px;
      border: 2px solid #F4CCCC;
      text-align: right;
      padding-right: 20px;
      &:focus {
        outline: none;
      }
    `;




    return(
        <MainContainer>
            <InputBar/>
            <ButtonContainer>
                <Button>AC</Button>
                <Button>DEL</Button>
                <CalButton value="%">%</CalButton>
                <CalButton value="÷">÷</CalButton>
                <Button value={7}>7</Button>
                <Button value={8}>8</Button>
                <Button value={9}>9</Button>
                <CalButton value="×">×</CalButton>
                <Button value={4}>4</Button>
                <Button value={5}>5</Button>
                <Button value={6}>6</Button>
                <CalButton value="-">-</CalButton>
                <Button value={1}>1</Button>
                <Button value={2}>2</Button>
                <Button value={3}>3</Button>
                <CalButton value="+">+</CalButton>
                <ZeroButton value={0}>0</ZeroButton>
                <Button value=".">.</Button>
                <CalButton>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    )
}
export default Calculator;
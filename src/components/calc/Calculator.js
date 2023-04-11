import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

function Calculator(props){
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState(0);

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

    const getNum = (x) => {
        setCalc((prev) => prev + x.target.value)
    }

    const allClear = () => {
        setCalc((prev) => "");
    }

    const delCalc = () => {
        let str = String(calc).slice(0, -1);
        setCalc((prev) => str);
    }

    const getResult = (x) => {
        getNum(x);
        axios.get('http://localhost/calc/result_react',{
            params:{
                x:x
            }
        }).then(response=>{
            console.log(response.data)
        })
    }


    return(
        <MainContainer>
            <InputBar readOnly value={calc}/>
            <ButtonContainer>
                <Button onClick={allClear}>AC</Button>
                <Button onClick={delCalc}>DEL</Button>
                <CalButton value="%" onClick={getNum}>%</CalButton>
                <CalButton value="÷" onClick={getNum}>÷</CalButton>
                <Button value={7} onClick={getNum}>7</Button>
                <Button value={8} onClick={getNum}>8</Button>
                <Button value={9} onClick={getNum}>9</Button>
                <CalButton value="×" onClick={getNum}>×</CalButton>
                <Button value={4} onClick={getNum}>4</Button>
                <Button value={5} onClick={getNum}>5</Button>
                <Button value={6} onClick={getNum}>6</Button>
                <CalButton value="-" onClick={getNum}>-</CalButton>
                <Button value={1} onClick={getNum}>1</Button>
                <Button value={2} onClick={getNum}>2</Button>
                <Button value={3} onClick={getNum}>3</Button>
                <CalButton value="+" onClick={getNum}>+</CalButton>
                <ZeroButton value={0} onClick={getNum}>0</ZeroButton>
                <Button value="." onClick={getNum}>.</Button>
                <CalButton onClick={getResult}>=</CalButton>
            </ButtonContainer>
        </MainContainer>
    )
}
export default Calculator;
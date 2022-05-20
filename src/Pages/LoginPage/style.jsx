import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

export const Container = styled.div`
    position: absolute;
    inset: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
`;

export const Form = styled.form`
    width: 60vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputField = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 300px;
    margin: 10px auto;
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
    width: 100%;
`;

export const Label = styled.label`
    text-align: left;
    display: block;
`;

export const IconUser = styled(AiOutlineUser)`
    position: absolute;
    top: 1;
    left: 1;
    margin-top: 20px;
    margin-left: 5px;
    color: #000;
`;

export const IconPassword = styled(RiLockPasswordLine)`
    position: absolute;
    top: 1;
    left: 1;
    margin-top: 20px;
    margin-left: 5px;
    color: #000;
`;

export const Button = styled.button`
    margin-top: 10px;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #eee;
    color: #2d2f2e;
    transition: 300ms ease-in-out;

    cursor: pointer;

    :hover {
        background-color: #b0aaaa;
    }
`;
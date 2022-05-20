import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiGingerbreadMan } from "react-icons/gi";
import { Link } from "react-router-dom";

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
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputField = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 35%;
    margin: 10px auto;

    @media screen and (min-width: 370px) {
        width: 100%;
    }

    @media screen and (min-width: 800px) {
        width: 60%;
    }

    @media screen and (min-width: 1024px) {
        width: 35%;
    }
`;

export const Input = styled.input`
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 12px 10px 12px 38px;
    width: 100%;
    background-color: #eee;
    font-size: 1rem;
`;

export const Label = styled.label`
    text-align: left;
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
`;

export const IconUser = styled(AiOutlineUser)`
    position: relative;
    margin-bottom: -67px;
    margin-left: -36px;
    font-size: 1.3rem;
    color: #000;
    height: 42px;
    padding-right: 6px;
    border-right: 1px solid #5d625f;
    border-radius: 2px;
`;

export const IconPassword = styled(RiLockPasswordLine)`
    position: relative;
    margin-bottom: -67px;
    margin-left: -41px;
    font-size: 1.3rem;
    color: #000;
    height: 42px;
    padding-right: 6px;
    border-right: 1px solid #5d625f;
    border-radius: 2px;
`;

export const IconName = styled(GiGingerbreadMan)`
    position: relative;
    margin-bottom: -67px;
    margin-left: -52px;
    font-size: 1.3rem;
    color: #000;
    height: 42px;
    padding-right: 6px;
    border-right: 1px solid #5d625f;
    border-radius: 2px;
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

export const StyledLink = styled(Link)`
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    color: #eee;
    transition: 300ms ease-in-out;

    margin-top: 20px;

    :hover {
        color: #6060c1;
    }
`;
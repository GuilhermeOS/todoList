import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { useForm } from "react-hook-form";

import { Form, Container, Title, InputField, Input, Label, IconUser, IconPassword, Button, StyledLink } from "../../styles/stylesCadLogin";

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { login } = useContext(AuthContext);

    const onSubmit = async (data) => {
        try {
            await login(data.email, data.password); 
        } catch (err) {
            console.error('Deu ruim', err)
        }
    }

    return (
        <Container>
            <Form onSubmit={ handleSubmit(onSubmit) }>
                <Title>Login</Title>
                <InputField>
                    <Label htmlFor="email">Email</Label>
                    <IconUser />
                    <Input 
                        type="email"
                        {...register(
                            "email",
                            {
                                required: true
                            }
                        )}
                        name="email"
                        id="email"
                    />
                    {
                        errors.email && 
                        <span style={{ color: 'red', marginTop: 5}}>Esse campo é obrigatório</span>
                    }
                </InputField>
                
                <InputField>
                    <Label htmlFor="password">Senha</Label>
                    <IconPassword />
                    <Input 
                        type="password"
                        {...register(
                            "password",
                            {
                                required: true
                            }
                        )}
                        name="password"
                        id="password"
                    />
                    {
                        errors.password && 
                        <span style={{ color: 'red', marginTop: 5}}>Esse campo é obrigatório</span>
                    }
                </InputField>
                

                <Button>Entrar</Button>
                <StyledLink to='/create-user'>Crie uma conta aqui!</StyledLink>
            </Form>
        </Container>
    )
};

export default LoginPage;
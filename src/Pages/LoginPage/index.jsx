import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import { Form, Container, Title, InputField, Input, Label, IconUser, IconPassword, Button } from "./style";

const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const [ email, setEmail ] = useState("");
    const [ password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <Container>
            <Form>
                <Title>Login</Title>
                <InputField>
                    <Label htmlFor="email">Email</Label>
                    <IconUser />
                    <Input 
                        type="email" 
                        name="email"
                        id="email"
                        value={ email }
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputField>
                
                <InputField>
                    <Label htmlFor="password">Senha</Label>
                    <IconPassword />
                    <Input 
                        type="password" 
                        name="password"
                        id="password"
                        value={ password }
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputField>
                

                <Button onClick={ handleLogin }>Entrar</Button>
            </Form>
        </Container>
    )
};

export default LoginPage;
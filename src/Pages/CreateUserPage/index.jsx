import { Container, Form, Title, InputField, Input, Label, IconUser, IconPassword, IconName, Button } from "../../styles/stylesCadLogin";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { createUser } from "../../services/api";
/* 
    O que precisa no form:
        - Email - required
        - Senha - required
        - Nome - required
*/

const CreateUserPage = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
        try {
            await createUser(data.email, data.password, data.name);

            navigate('/login');
        } catch (err) {
            console.error('Deu ruim', err)
            if (err.response.status === 422) {
                alert(`Já existe um usuário com o email ${data.email} cadastrado!`)
            }
        }
    }

    return (
        <Container>
            <Form onSubmit={ handleSubmit(onSubmit) }>
                <Title>Cadastrar</Title>

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

                <InputField>
                    <Label htmlFor="name">Apelido</Label>
                    <IconName />
                    <Input 
                        type="text"
                        {...register(
                            "name",
                            {
                                required: true
                            }
                        )}
                        name="name"
                        id="name"
                    />
                    {
                        errors.name && 
                        <span style={{ color: 'red', marginTop: 5}}>Esse campo é obrigatório</span>
                    }
                </InputField>

                <Button>Cadastrar</Button>
            </Form>
        </Container>
    )
}

export default CreateUserPage;
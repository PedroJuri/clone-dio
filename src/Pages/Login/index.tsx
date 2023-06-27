import { useNavigate } from 'react-router-dom'
import {MdEmail, MdLock} from 'react-icons/md'
import { Button } from "../../Components/Button"
import { Header } from "../../Components/Header"
import {Input} from '../../Components/Input/index'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import {Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'
import { IFormData } from './types'
import { useAuth } from '../../Hooks/useAuth'

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório')
}).required();

const Login = () =>{
    const {handleLogin} = useAuth();
    const navigate = useNavigate()

    const handleClickSignUp = () =>{
        navigate('/clone-dio/SignUp')
    }

    const {control, handleSubmit, formState: {errors}} = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode:'onChange'
    })

    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData);
    }
    
    return(
        <>
            <Header/>
            <Container>
                <Column>
                    <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro.</TitleLogin>
                        <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" type="email" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title='Entrar' variant="secondary" type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText onClick={handleClickSignUp}>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export {Login}
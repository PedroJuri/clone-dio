import { useNavigate } from 'react-router-dom'
import {MdEmail, MdLock, MdAccountCircle} from 'react-icons/md'
import { Button } from "../../Components/Button"
import { Header } from "../../Components/Header"
import {Input} from '../../Components/Input/index'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import {TextoAlt, Column, Container, CriarText, SubtitleLogin, Title, TitleLogin, Wrapper, Login} from './styles'

const schema = yup.object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório')
}).required();

const SignUp = () =>{
    const navigate = useNavigate();
    
    const handleClickSignIn = () =>{
        navigate('/clone-dio/login')
    }

    const handleClickSignUp = () =>{
        navigate('/clone-dio/feed')
    }

    const {control, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode:'onChange'
    })
    
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                        <form>
                            <Input name="name" control={control} placeholder="Nome completo" type="text" leftIcon={<MdAccountCircle/>}/>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email" type="email" leftIcon={<MdEmail/>}/>
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                            <Button title='Criar minha conta' variant="secondary" onClick={handleClickSignUp}/>
                        </form>
                        <Column>
                            <TextoAlt>Ao clicar em "criar minha conta grátis", declaro que aceito as políticas de Privacidade e os Termos de Uso da DIO.</TextoAlt>
                            <CriarText className='texto'>Já tenho conta</CriarText>
                            <Login onClick={handleClickSignIn}>Fazer login</Login>
                        </Column>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export {SignUp}
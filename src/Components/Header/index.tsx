import React, { useContext } from 'react'
import logo from '../../Assets/logo-dio.png'
import { Button } from '../Button'
import { Container, Row, Input, BuscarInputContainer, Menu, MenuRight, Wrapper, UserPicture } from './styles'
import { AuthContext } from '../../Context/auth'
import { Link } from 'react-router-dom'

const Header = () => {
  const {user, handleSignOut} = useContext(AuthContext);  
  return (
    <Wrapper>
        <Container>
            <Row>
                <Link to="/clone-dio/">
                    <img src={logo} alt='logo DIO'/>
                </Link>
                {user.id ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>LiveCode</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {user.id ? (
                    <>
                        <UserPicture src='https://avatars.githubusercontent.com/u/73957555?v=4'/>
                        <a href="#" onClick={handleSignOut}>Sair</a>
                    </>
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
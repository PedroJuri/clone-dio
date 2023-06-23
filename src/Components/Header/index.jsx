import React from 'react'
import logo from '../../Assets/logo-dio.png'
import { Button } from '../Button'
import { Container, Row, Input, BuscarInputContainer, Menu, MenuRight, Wrapper, UserPicture } from './styles'

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt='logo DIO'/>
                {autenticado ? (
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
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/73957555?v=4'/>
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
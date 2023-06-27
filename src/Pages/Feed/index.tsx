import { Header } from "../../Components/Header"
import { Card } from "../../Components/Card"
import { UserInfo } from "../../Components/UserInfo"

import {Column, Container, Title, TitleHighlight} from './styles'

const Feed = () =>{
    return(
        <>
            <Header/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={35} nome="Pedro Henrique" image="https://avatars.githubusercontent.com/u/73957555?v=4"/>
                    <UserInfo percentual={27} nome="Pedro Henrique" image="https://avatars.githubusercontent.com/u/73957555?v=4"/>
                    <UserInfo percentual={89} nome="Pedro Henrique" image="https://avatars.githubusercontent.com/u/73957555?v=4"/>
                    <UserInfo percentual={57} nome="Pedro Henrique" image="https://avatars.githubusercontent.com/u/73957555?v=4"/>
                    <UserInfo percentual={12} nome="Pedro Henrique" image="https://avatars.githubusercontent.com/u/73957555?v=4"/>
                </Column>
            </Container>
        </>
    )
}

export {Feed}
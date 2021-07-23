import React from 'react';
import { FiLock, FiArrowLeft, FiUser } from "react-icons/fi";

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SigIn: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <form>
                <h1>Faça seu cadastro</h1>

                <Input icon={FiUser} name="Email" placeholder="E-mail" />
                <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

                <Button>Cadastrar</Button>
            </form>

            <a href="teste">
                <FiArrowLeft />
                Voltar para o login
            </a>
        </Content>
    </Container>
);

export default SigIn;
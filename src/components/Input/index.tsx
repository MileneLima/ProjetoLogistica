import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import {Container} from "./styles";

//? significa que não é obrigatório ter o icon
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
    <Container>
      {Icon && <Icon size={20}> </Icon>} 
        <input {...rest}/>
    </Container>
);

export default Input;
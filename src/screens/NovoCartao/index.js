import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, Scroller, HeaderArea, HeaderTitle, ListArea,TextoNegritoMensagemBotao,BotaoCustomizado,
  TextoBotaoCustomizado,BotaoCustomizado2} from './styles';


import MenuItem from '../../components/MenuItem';
import Cartao from '../../components/Cartao';

import IconeOlho from '../../assets/eye.svg';
export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Scroller>
        <ListArea>

        <TextoNegritoMensagemBotao>
          Preencha os dados referente à coleção a ser criada
        </TextoNegritoMensagemBotao>

          <Cartao />

          <BotaoCustomizado >
          <TextoBotaoCustomizado>CADASTRAR</TextoBotaoCustomizado>
        </BotaoCustomizado>
        <BotaoCustomizado2 >
          <TextoBotaoCustomizado>CANCELAR</TextoBotaoCustomizado>
        </BotaoCustomizado2>

        </ListArea>
      </Scroller>
    </Container>
  );
};

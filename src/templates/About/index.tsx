import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from "components/LinkWrapper";

import * as S from './styles'

const AboutTemplate = () => (

  <S.Content>
    <LinkWrapper href="/" >
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Alô Mochilão</S.Heading>

    <S.Body>Lobby</S.Body>
  </S.Content>

)




export default AboutTemplate
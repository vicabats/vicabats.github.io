import styled from "styled-components"
import { colors, fontSize } from "../variables"

const FooterWrapper = styled.footer`
  width: 100%;
  bottom: 0;
  color: ${colors.OFFWHITE};
`

const FooterText = styled.p`
  color: ${colors.PRIMARY};
  text-align: center;
  font-size: ${fontSize.smallText};
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        Copyright © 2021 Metallum @ Rodovia Padre Manoel da Nóbrega, KM 287 - Andaraguá - Praia Grande/SP
      </FooterText>
    </FooterWrapper>
  )
}

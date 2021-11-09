import styled from "styled-components"
import HeaderImage from "../assets/header.jpg"
import { SectionName } from "../data"
import { colors, fontSize, spacing } from "../variables"

const HeaderSection = styled.header`
  background-image: url("${HeaderImage}");
  background-size: 100%;
  background-position-y: 40%;
  background-repeat: no-repeat;
  height: 65vh;
  position: relative;
  opacity: 0.9;
  margin-bottom: ${spacing.sectionSpacing};
  font-family: "Montserrat", sans-serif;
`

const HeaderContentWrapper = styled.div`
  position: absolute;
  bottom: 20%;
`

const HeaderText = styled.h1`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.style?.fontWeight};
  margin: 8px 0;
  padding-left: ${(props) => props.style?.paddingLeft};
  padding-right: 1rem;
  font-size: ${fontSize.superTitle};
`

const HeaderContentBackground = styled.div`
  background-color: rgba(254, 254, 254, 0.8);
  width: fit-content;
  height: fit-content;
  display: flex;
`

interface IHeaderProps {
  id: SectionName
}

export const Header: React.FC<IHeaderProps> = ({ id }) => {
  return (
    <HeaderSection id={id}>
      <HeaderContentWrapper>
        <HeaderContentBackground>
          <HeaderText
            style={{
              fontWeight: "bold",
              color: colors.PRIMARY,
              paddingLeft: "10rem",
            }}
          >
            Referência em reciclagem
          </HeaderText>
        </HeaderContentBackground>
        <HeaderContentBackground>
          <HeaderText
            style={{
              fontWeight: "bold",
              color: colors.PRIMARY,
              paddingLeft: "10rem",
            }}
          >
            de sucatas{" "}
          </HeaderText>
          <HeaderText style={{ color: colors.SECONDARY, fontWeight: "normal" }}>
            na Baixada Santista
          </HeaderText>
        </HeaderContentBackground>
      </HeaderContentWrapper>
    </HeaderSection>
  )
}

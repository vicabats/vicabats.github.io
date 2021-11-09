import styled from "styled-components"
import { colors, fontSize, fontWeight, spacing } from "../variables"
import ClientsIcon from "../assets/clients-icon.png"
import RecycleIcon from "../assets/recycle-icon.png"
import TeamIcon from "../assets/team.png"
import { SectionName } from "../data"

const AboutUsSection = styled.section`
  margin-bottom: ${spacing.sectionSpacing};
`

const AboutUsText = styled.h2`
  font-size: ${fontSize.text};
  line-height: 2;
  color: ${colors.SECONDARY};
  font-weight: ${fontWeight.regular};
  text-align: center;
`

const AboutUsCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  align-items: center;
`

const AboutUsBox = styled.div`
  padding: 2rem 1rem;
  border: 1px ${colors.TERCIARY} solid;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 2px -2px ${colors.TERCIARY};
  align-items: center;
  border-radius: 6px;
  flex: 1;
  min-height: 9rem;
  margin-right: ${(props) => props.style?.marginRight};
  justify-content: space-evenly;
`
const AboutUsBoxIcon = styled.img`
  height: 60px;
  width: 55px;
  margin-bottom: 0.5rem;
`

const AboutUsBoxInfos = styled.p`
  font-size: ${fontSize.text};
  color: ${colors.SECONDARY};
  font-weight: ${fontWeight.medium};
  margin: 0;
  text-align: center;
`

interface IAboutUsProps {
  id: SectionName
}

export const AboutUs: React.FC<IAboutUsProps> = ({ id }) => {
  return (
    <AboutUsSection id={id}>
      {/* <Line /> */}
      <AboutUsText>
        A<span style={{ fontWeight: "bold" }}> Metallum</span> é uma empresa
        especializada no gerenciamento de resíduos não contaminantes que atua na
        Baixada Santista. Estamos situados em uma área de 3.000m² em Praia
        Grande e atuamos no mercado desde 2019, atendendo, principalmente,
        clientes industrias no polo petroquímico de Cubatão e terminais
        portuários em Santos e Guarujá
      </AboutUsText>
      <AboutUsCardWrapper>
        <AboutUsBox style={{ marginRight: "3rem" }}>
          <AboutUsBoxIcon src={ClientsIcon}></AboutUsBoxIcon>
          <AboutUsBoxInfos style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold" }}>+30</span> clientes industriais
          </AboutUsBoxInfos>
        </AboutUsBox>
        <AboutUsBox style={{ marginRight: "3rem" }}>
          <AboutUsBoxIcon src={RecycleIcon}></AboutUsBoxIcon>
          <AboutUsBoxInfos style={{ textAlign: "center" }}>
            <span style={{ fontWeight: "bold" }}>+1200</span> toneladas de
            sucata recicladas por ano
          </AboutUsBoxInfos>
        </AboutUsBox>
        <AboutUsBox>
          <AboutUsBoxIcon src={TeamIcon}></AboutUsBoxIcon>
          <AboutUsBoxInfos style={{ textAlign: "center" }}>
            Time composto por profissionais com{" "}
            <span style={{ fontWeight: "bold" }}>+40</span> anos de experiência
          </AboutUsBoxInfos>
        </AboutUsBox>
      </AboutUsCardWrapper>
    </AboutUsSection>
  )
}

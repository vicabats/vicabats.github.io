import styled from "styled-components"
import { colors, fontSize, fontWeight, spacing } from "../variables"
import DegreeIcon from "../assets/degree-icon.png"
import { SectionName } from "../data"

const CertificationsSection = styled.section`
  margin-bottom: ${spacing.sectionSpacing};
  display: flex;
  align-items: center;
`
const CertificationsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CertificationsTitle = styled.h4`
  font-size: ${fontSize.title};
  font-weight: ${fontWeight.regular};
  color: ${colors.PRIMARY};
  flex: 1;
  text-transform: uppercase;
`

const CertificationsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  align-items: center;
`

const CertificationsIcon = styled.img`
  width: 75px;
  height: 90px;
`

const CertificationsText = styled.h3`
  color: ${colors.SECONDARY};
  font-size: ${fontSize.smallText};
  font-weight: ${fontWeight.medium};
  text-align: center;
`

interface ICertificationsProps {
  id: SectionName
}

export const Certifications: React.FC<ICertificationsProps> = ({ id }) => {

  return (
    <CertificationsSection id={id}>
      <CertificationsContent>
        <CertificationsTitle>
          Licensas e <br />
          certificados de atuação
        </CertificationsTitle>
        <CertificationsBox>
          <CertificationsIcon src={DegreeIcon} />
          <CertificationsText>
            A Metallum é uma empresa localizada em uma área de 3.000m² em Praia Grande, em São Paulo, licenciada pela Cetesb (Licença de Operação e SIGOR) e também autorizada em âmbito federal pelo IBAMA (Cadastro Técnico Federal Protocolo AFE).
          </CertificationsText>
        </CertificationsBox>
      </CertificationsContent>
    </CertificationsSection>
  )
}

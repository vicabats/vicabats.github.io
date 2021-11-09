import styled from "styled-components"
import { colors, fontSize, fontWeight, spacing } from "../variables"
import Bulldozer from "../assets/bulldozer.jpg"
import ArrowIcon from "../assets/arrow.png"
import { SectionName, StructureInfo } from "../data"

const StructureSection = styled.section`
  margin-bottom: ${spacing.sectionSpacing};

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.OFFWHITE};
`
const StructureContent = styled.div`
  padding-left: 10rem;
`

const StructureTitle = styled.h2`
  text-transform: uppercase;
  color: ${colors.PRIMARY};
  font-weight: ${fontWeight.regular};
`

const StructureSubtitle = styled.p`
  color: ${colors.SECONDARY};
`

const StructureList = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 1.5;
`

const StructureItem = styled.li`
  color: ${colors.SECONDARY};
`
const StuctureItemArrow = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 6px;
`

const StructureImage = styled.img`
  max-width: 100%;
  height: auto;
  width: 50%;
`

export interface IStructureProps {
  structureItems: StructureInfo[]
  id: SectionName
}

export const Structure: React.FC<IStructureProps> = ({ structureItems, id }) => {
  return (
    <StructureSection id={id}>
      <StructureContent>
        <StructureTitle>CONHEÇA NOSSA ESTRUTURA</StructureTitle>
        <StructureSubtitle>
          Temos os equipamentos ideais para prestar um serviço de excelência{" "}
        </StructureSubtitle>
        <StructureList>
          {structureItems.map((item) => (
            <StructureItem>
              <StuctureItemArrow src={ArrowIcon} />{" "}
              <span style={{ fontSize: fontSize.title }}>{item.value}</span>{" "}
              {item.name}{" "}
            </StructureItem>
          ))}
        </StructureList>
      </StructureContent>
      <StructureImage src={Bulldozer}></StructureImage>
    </StructureSection>
  )
}

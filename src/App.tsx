import { Nav } from "./components/Nav"
import { Header } from "./components/Header"
import { AboutUs } from "./components/AboutUs"
import styled from "styled-components"
import { Structure } from "./components/Structure"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { NavOption, navOptions, SectionName, structureItems } from "./data"
import { Certifications } from "./components/Certifications"
import { colors } from "./variables"

function App() {
  const BodyWrapper = styled.div`
    padding: 0 25rem;
  `

  const onNavClick = (option: NavOption) => {
    const anchor = document.querySelector(`#${option.id}`)
    anchor?.scrollIntoView({ behavior: "smooth", block: 'center', inline: 'end'})
  }

  const Line = styled.hr`
  width: 15%;
  height: 2px;
  background-color: ${colors.PRIMARY};
  border: none;
  margin: 3rem auto;
`

  return (
    <div className="App">
      <Nav navOptions={navOptions} handleNavClick={onNavClick}/>
      <Header id={SectionName.Header}></Header>
      <BodyWrapper>
        <AboutUs id={SectionName.AboutUs}></AboutUs>
      </BodyWrapper>
        <Structure id={SectionName.Structure} structureItems={structureItems}></Structure>
      <BodyWrapper>
        <Certifications id={SectionName.Certifications}></Certifications>
      </BodyWrapper>
        <div style={{backgroundColor: colors.OFFWHITE}}>
          <BodyWrapper>
        <Contact id={SectionName.Contact}></Contact>
          </BodyWrapper>
        </div>
        <Line />
      <Footer></Footer>
    </div>
  )
}

export default App

import logo from "../assets/logo-metallum.png"
import styled from "styled-components"
import { colors, fontWeight, spacing } from "../variables"
import { NavOption } from "../data"

const NavSection = styled.nav`
  height: fit-content;
  padding: ${spacing.horizontalPadding};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Montserrat", sans-serif;
`

const Logo = styled.img`
  height: 3em;
  align-self: center;
  cursor: pointer;
`

const NavOptionsWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  flex: 0.45;
  width: 100%;
`

const NavOptionLi = styled.li`
  color: ${colors.SECONDARY};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  position: relative;
  cursor: pointer;
  font-weight: ${fontWeight.medium};

  :hover {
    color: ${colors.PRIMARY};
  }

  :hover:after {
    width: 100%;
    left: 0;
  }

  :after {
    background: none repeat scroll 0 0 transparent;
    top: 50px;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${colors.PRIMARY};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
`

export interface INavProps {
  navOptions: NavOption[]
  handleNavClick: (option: NavOption) => void;
}


export const Nav: React.FC<INavProps> = ({ navOptions, handleNavClick }) => {
  return (
    <NavSection>
      <Logo src={logo} alt="Logo Metallum" />
      <NavOptionsWrapper>
        {navOptions.map((option: NavOption) => (
          <NavOptionLi onClick={() => handleNavClick(option)}>
            {option.value}
          </NavOptionLi>
        ))}
      </NavOptionsWrapper>
    </NavSection>
  )
}

import logo from '../../assets/images/logo.png'
import { FiMenu, FiSearch } from 'react-icons/fi'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="navbarMenu">
        {/* <FiMenu /> */}
      </div>
      <span className="headerLogo">
        <img src={logo} alt="Logo intibiome" />
      </span>
      <div className="searchIcon">
        <FiSearch />
      </div>
    </HeaderContainer>
  )
}

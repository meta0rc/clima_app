import Logo from '../../assets/images/logo.png'
import headerStyle from "./style"

export const Header = () => {

    return (
        <header className="container" style={headerStyle}>
            <div className="logo">
                <img src={Logo} alt="Logo" width={80}/>
            </div>
        </header>
    )
}
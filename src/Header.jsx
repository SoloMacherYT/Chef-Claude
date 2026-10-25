
import logo from "./assets/chef-claude-icon.png"

export default function Header(){
    return(<>
    <header>
        <a href="/">
            <img src={logo} height={52} width={43} alt="chef claude logo" />
            <h1>Chef Claude</h1>
        </a>
    </header>
    <hr />
    </>)
}
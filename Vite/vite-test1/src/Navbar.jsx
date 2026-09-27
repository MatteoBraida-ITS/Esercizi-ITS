import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavMenuBtn from "./NavMenuBtn";
import "./Navbar.css";

const items = ["Home", "Prodotti", "Carrello", "Contatti"];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLogo />
        <NavMenuBtn />
      </div>
      <div className="navbar-items">
        {items.map((label) => (
          <NavItem key={label} label={label} />
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

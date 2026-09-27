function NavItem({ icon, label }) {
  return (
    <div className="navbar-item">
      {icon && <img className="itemImg" src={icon} alt="" />}
      <span className="itemLbl">{label}</span>
    </div>
  );
}

export default NavItem;

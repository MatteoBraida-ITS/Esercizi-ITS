function SidebarItem({ icon, label }) {
  return (
    <div>
      <img src={icon} alt="" />
      <span>{label}</span>
    </div>
  );
}

export default SidebarItem;

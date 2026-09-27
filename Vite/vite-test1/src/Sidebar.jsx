import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

const items = [
  "Dashboard",
  "Prodotti",
  "Ordini",
  "Utenti",
  "Statistiche",
  "Impostazioni",
  "Aiuto",
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {items.map((label) => (
        <SidebarItem key={label} label={label} />
      ))}
    </aside>
  );
}

export default Sidebar;

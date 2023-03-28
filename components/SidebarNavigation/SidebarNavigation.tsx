import styled from "styled-components";
import MenuItem from "./MenuItem";

const menuItems = [
  { text: "Projects", iconSrc: "/thirteen.svg", href: "#" },
  { text: "Issues", iconSrc: "/thirteen.svg", href: "#" },
  { text: "Alerts", iconSrc: "/thirteen.svg", href: "#" },
  { text: "Users", iconSrc: "/thirteen.svg", href: "#" },
  { text: "Settings", iconSrc: "/thirteen.svg", href: "#" },
];

const Nav = styled.nav`
  width: 280px;
  height: 100vh;
  background: #101828;
`;

const List = styled.ul`
  list-style: none;
  padding: 0 16px;
`;
export function SidebarNavigation() {
  return (
    <Nav>
      <List>
        {menuItems.map((menuItem, idx) => (
          <MenuItem {...menuItem} key={idx} />
        ))}
      </List>
      <List>
        <li>Support</li>
        <li>Collapse</li>
      </List>
    </Nav>
  );
}

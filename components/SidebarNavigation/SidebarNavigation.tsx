import { Routes } from "../../config/routes";
import styled from "styled-components";
import MenuItem, { MenuItemfn } from "./MenuItem";
import { useRouter } from "next/router";

const menuItems = [
  { text: "Projects", iconSrc: "/thirteen.svg", href: Routes.projects },
  { text: "Issues", iconSrc: "/thirteen.svg", href: Routes.issues },
  { text: "Alerts", iconSrc: "/thirteen.svg", href: Routes.alerts },
  { text: "Users", iconSrc: "/thirteen.svg", href: Routes.users },
  { text: "Settings", iconSrc: "/thirteen.svg", href: Routes.settings },
];

const Nav = styled.nav`
  width: 280px;
  height: calc(100vh - 2 * 32px);
  background: #101828;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  padding: 0 12px 24px;
  color: white;
  font-size: 30px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkList = styled(List)`
  flex: 1;
`;

export function SidebarNavigation() {
  const { pathname } = useRouter();

  return (
    <Nav>
      <Logo>Brim</Logo>
      <LinkList>
        {menuItems.map((menuItem, idx) => (
          <MenuItem
            {...menuItem}
            key={idx}
            isActive={pathname === menuItem.href}
          />
        ))}
      </LinkList>
      <List>
        <MenuItemfn
          text={"Support"}
          onClick={() => alert("Junior")}
          iconSrc={"/thirteen.svg"}
        />
        <MenuItemfn
          text={"Collapse"}
          onClick={() => alert("Easy")}
          iconSrc={"/thirteen.svg"}
        />
      </List>
    </Nav>
  );
}

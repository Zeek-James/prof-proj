import { Routes } from "../../config/routes";
import styled from "styled-components";
import MenuItem, { MenuItemfn } from "./MenuItem";
import { useRouter } from "next/router";
import React from "react";
import { NavigationContext } from "../../context/Navigation";

const menuItems = [
  { text: "Projects", iconSrc: "/thirteen.svg", href: Routes.projects },
  { text: "Issues", iconSrc: "/thirteen.svg", href: Routes.issues },
  { text: "Alerts", iconSrc: "/thirteen.svg", href: Routes.alerts },
  { text: "Users", iconSrc: "/thirteen.svg", href: Routes.users },
  { text: "Settings", iconSrc: "/thirteen.svg", href: Routes.settings },
];

const Nav = styled.nav<{ isCollapsed: boolean }>`
  width: ${({ isCollapsed }) => (isCollapsed ? "50px" : "248px")};
  height: calc(100vh - 2 * 32px);
  background: #101828;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div<{ isCollapsed: boolean }>`
  font-size: ${({ isCollapsed }) => (isCollapsed ? "35px" : "30px")};
  color: white;
  margin: 0 12px 24px;
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
  const { sidebarCollapsed, setSidebarCollapsed } =
    React.useContext(NavigationContext);

  return (
    <Nav isCollapsed={sidebarCollapsed}>
      <Logo isCollapsed={sidebarCollapsed}>
        B{!sidebarCollapsed ? "rim" : "."}
      </Logo>
      <LinkList>
        {menuItems.map((menuItem, idx) => (
          <MenuItem
            {...menuItem}
            key={idx}
            isActive={pathname === menuItem.href}
            isCollapsed={sidebarCollapsed}
          />
        ))}
      </LinkList>
      <List>
        <MenuItemfn
          text={"Support"}
          onClick={() => alert("Junior")}
          iconSrc={"/thirteen.svg"}
          isCollapsed={sidebarCollapsed}
        />
        <MenuItemfn
          text={"Collapse"}
          onClick={() => setSidebarCollapsed((prev) => !prev)}
          iconSrc={"/thirteen.svg"}
          isCollapsed={sidebarCollapsed}
        />
      </List>
    </Nav>
  );
}

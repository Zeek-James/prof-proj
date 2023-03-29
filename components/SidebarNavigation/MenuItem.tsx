import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  iconSrc: string;
  text: string;
  isCollapsed: boolean;
};

interface MenuLinkProps extends MenuItemProps {
  href: string;
  isActive: boolean;
}

interface MenuButtonProps extends MenuItemProps {
  onClick: () => void;
}

const ListItemfn = styled.li`
  padding: 8px 12px;
`;

const ListItem = styled(ListItemfn)<{ isActive: boolean }>`
  height: 51px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  background: ${({ isActive }) => (isActive ? "#344054" : "transparent")};
  border-radius: 6px;

  &: first-child {
    margin-top: 0;
  }
`;

const CustomDiv = styled.div`
  display: flex;
  align-items: center;
  color: #f2f4f7;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #f2f4f7;
  cursor: pointer;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-smoothing: inherit;
  -webkit-appearance: none;
`;

const Icon = styled.img`
  margin-right: 12px;
  height: 20px;
  width: 20px;
  background: #f2f4f7;
  border-radius: 100%;
`;

export default function MenuItem({
  text,
  iconSrc,
  href,
  isActive,
  isCollapsed,
}: MenuLinkProps) {
  return (
    <ListItem isActive={isActive}>
      <Link href={href} passHref style={{ textDecoration: "none" }}>
        <CustomDiv>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Icon src={iconSrc} alt={`${text} icon`} />
          {!isCollapsed && text}
        </CustomDiv>
      </Link>
    </ListItem>
  );
}

export function MenuItemfn({
  text,
  iconSrc,
  onClick,
  isCollapsed,
}: MenuButtonProps) {
  return (
    <ListItemfn>
      <Button onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Icon src={iconSrc} alt={`${text} icon`} />
        {!isCollapsed && text}
      </Button>
    </ListItemfn>
  );
}

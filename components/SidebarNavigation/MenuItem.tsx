import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuLinkProps = {
  iconSrc: string;
  text: string;
  href: string;
};

type MenuButtonProps = {
  iconSrc: string;
  text: string;
  onClick: () => void;
};

const ListItem = styled.li`
  padding: 8px 12px;
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

export default function MenuItem(menuItem: MenuLinkProps) {
  const { text, iconSrc } = menuItem;

  return (
    <ListItem>
      <Link href={menuItem.href} passHref style={{ textDecoration: "none" }}>
        <CustomDiv>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Icon src={iconSrc} alt={`${text} icon`} />
          {text}
        </CustomDiv>
      </Link>
    </ListItem>
  );
}

export function MenuItemfn({ text, iconSrc, onClick }: MenuButtonProps) {
  // const { text, iconSrc } = menuItem;

  return (
    <ListItem>
      <Button onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Icon src={iconSrc} alt={`${text} icon`} />
        {text}
      </Button>
    </ListItem>
  );
}

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
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
`;

const ListItem = styled(ListItemfn)<{ isActive: boolean }>`
  height: 51px;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[1]};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.gray[700] : "transparent"};
  border-radius: 6px;

  &: first-child {
    margin-top: 0;
  }
`;

const CustomDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[100]};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[100]};
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
  margin-right: ${({ theme }) => theme.spacing[3]};
  height: 20px;
  width: 20px;
  background: ${({ theme }) => theme.colors.gray[100]};
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

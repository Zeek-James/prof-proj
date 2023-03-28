import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuItemProps = {
  href: string;
  text: string;
  iconSrc: string;
  //   iconSrc: React.ReactNode;
};

const ListItem = styled.li`
  padding: 8px 12px;
`;

const Anchor = styled.div`
  display: flex;
  align-items: center;
  color: #f2f4f7;
`;

const Icon = styled.img`
  margin-right: 12px;
  height: 20px;
  width: 20px;
  background: #f2f4f7;
  border-radius: 100%;
`;

export default function MenuItem({ href, text, iconSrc }: MenuItemProps) {
  return (
    <ListItem>
      <Link href={href} passHref style={{ textDecoration: "none" }}>
        <Anchor>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Icon src={iconSrc} alt={`${text} icon`} />
          {text}
        </Anchor>
      </Link>
    </ListItem>
  );
}

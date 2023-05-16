import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #f3e9ff;
  width: 79%;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  margin-left: 22vw;
  justify-items: flex-end;
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5),
              5px 0 5px -5px rgba(0, 0, 0, 0.5);
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 4px 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 19px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  text-align: right;
  width: 100%
  
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        
        <LinksWrapper>       
        <div> 
          <LinkItem>
            <Link href={'/Home'}>Home</Link>
          </LinkItem>
          <LinkItem>
            <Link href={'/MyAccount'}>Meu Perfil</Link>
          </LinkItem>
          <LinkItem>
            <Link href={'/Favorites'}>Favoritos</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Configuracoes</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">Baixe nosso App</Link>
          </LinkItem>
          <Marginer />
          <Accessibility />
          </div> 
        </LinksWrapper>
        
      )}
    </NavLinksContainer>
  );
}

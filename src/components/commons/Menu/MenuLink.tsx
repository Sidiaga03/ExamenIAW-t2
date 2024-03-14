"use client"

import React, { FC } from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, link} from "@nextui-org/react";
import Link from 'next/link';
import { SdagILink } from '../../../interfaces/SdagILink';

interface Props {
  links: SdagILink[]
};

const Menu:FC<Props> = ({links}) => {

    return (
        <Navbar style={{backgroundColor: 'gray'}}>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">
        <Link color="foreground" href="/public">
          <img className='logo' src="/Kalogo.png" alt="" />
        </Link>
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map ( (link) => (//return
            <NavbarItem>
              <Link color="foreground" href={ link.href }>
                { link.name }
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
            
    )

}
export default Menu;
import { HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { Component } from 'react'
import { AddIcon, CalendarIcon, EditIcon, HamburgerIcon, RepeatIcon, SearchIcon, ViewIcon } from '@chakra-ui/icons'
function NavbarMenu() {
    return (
        <HStack>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <Link href='/'>
                        <MenuItem icon={<ViewIcon />}>
                            All Events
                        </MenuItem>
                    </Link>
                    <Link href='/calendar'>
                        <MenuItem icon={<CalendarIcon />}>
                            Calendar
                        </MenuItem>
                    </Link>
                    <Link href='/map'>
                        <MenuItem icon={<SearchIcon />}>
                            Events Map
                        </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            <div>
                <p>
                    Event Checker
                </p>
            </div>
        </HStack>
    );
}

export default NavbarMenu;
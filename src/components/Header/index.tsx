import Image from "next/image";
import { Container } from "./style";
import React, { useRef, useState } from 'react';
import { Burger } from "./Burger";
import { Menu } from "./Menu";
import { useOnClickOutside } from '../../hook/hook';
import {isMobile} from 'react-device-detect';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef<HTMLDivElement>();
    useOnClickOutside(node, () => setOpen(false));

    return <>
        <Container open={open}>
            <Image src="/logo.png" width={50} height={50} alt={""} />
            {!isMobile && 
            <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
            }
            
        </Container>
    </>
};
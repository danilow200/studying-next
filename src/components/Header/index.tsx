import Image from "next/image";
import { Container, Hamburguer, Menu } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { theme } from "../../styles/Theme";

export const Header = () => {
    const [isSelected, setIsSelected] = useState(false)
    const isMobile = theme.breakpoints.mobile

    return <>
        <Container>
            <Image src="/favicon.ico" width={50} height={50} alt={""} />
            <Hamburguer onClick={() => {setIsSelected(!isSelected)}}><FontAwesomeIcon icon={faBars} /></Hamburguer>
            {isSelected && <Menu></Menu>}
        </Container>
    </>
};
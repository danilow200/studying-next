import Image from "next/image";
import { Container, Login, Menu } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
    const [isSelected, setIsSelected] = useState(false)

    return <>
        <Container>
            <Image src="/favicon.ico" width={50} height={50} alt={""} />
            <Login onClick={() => {setIsSelected(!isSelected)}}><FontAwesomeIcon icon={faBars} /></Login>
            {isSelected && <Menu></Menu>}
        </Container>
    </>
};
import Image from "next/image";
import { Container, Login } from "./style";

export const Header = () => {
    return <>
        <Container>
            <Image src="/logo.png" width={50} height={50} alt={""} />
            <Login>Login</Login>
        </Container>
    </>
};
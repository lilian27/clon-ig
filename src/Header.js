import { Navbar, Container } from 'react-bootstrap';
function Header() {
    return (
        <div >
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Desafiogram</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
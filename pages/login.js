import Head from "next/head";
import styled from 'styled-components';
import { auth, provider } from "../firebase";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <Container>
            <Head>
                <title>Login - Whatsapp 2.0</title>
                <link rel="icon" href="/whatsapp.ico" />
            </Head>

            <LoginContainer>
                <Logo src="/whatsapp.ico" />
                <Button onClick={signIn} variant="outline">Sign in with Google</Button>
            </LoginContainer>

        </Container>
    )
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;

const Button = styled.button``;
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

function Chat({ id, users }) {
    return (
        <Container>
            <UserAvatar />
            <p>Receipient Email</p>
        </Container>
    );
}

export default Chat;

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover{
        background-color: #39eaeb;
    }
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`;
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';
import getRecipientEmail from '../helper/getRecipientEmail';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Chat({ id, users }) {

    const [user] = useAuthState(auth);

    const recipientEmail = getRecipientEmail(users, user);

    return (
        <Container>
            <UserAvatar />
            <p>{recipientEmail}</p>
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
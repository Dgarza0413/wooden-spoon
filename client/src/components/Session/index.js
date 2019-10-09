import React from 'react';
import AuthUserContext from './context';
import withAuthentication from './withAuthentication';
import { FirebaseContext } from '../Firebase';

const Session = () => (
    <FirebaseContext.Consumer>
        {firebase => {
            return <div>
                <h1>This is the Session page</h1>
            </div>
        }}
    </FirebaseContext.Consumer>

)
export default Session

export { AuthUserContext, withAuthentication };
import React from 'react';

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
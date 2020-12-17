import React from 'react';

interface LoginProps {

}

export default function Login(props: LoginProps): JSX.Element {
    return (
        <div>
            <div>
                <input type="text" placeholder="Input login name" />
            </div>
            <div>
                <input type="password" placeholder="Input password" />
            </div>
        </div>
    );
}

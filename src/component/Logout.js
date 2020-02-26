import React from 'react';

export default function Profile(props) {
    return (
        <>
            <p>hellokk, {props.name}</p>
            <button onClick={props.handleLogout}>Logoutttt</button>
        </>
    )

}
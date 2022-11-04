import React from "react";
import { authService } from "fBase";
export default () => {
    const onLogOutClick=()=>authService.signOut();
    return (
    <>
        <button onClick={onLogOutClick}>Log Out</button>
    </>
    );
};
import {useEffect, useState} from "react";
function Title({count}) {
    console.log("Title component rendered");
    useEffect(() => {
        document.title='Clciked ${count} times';
    }, [count]);
    return (
        <h1>Clicked {count} times</h1>
    );
}   
export default Title;
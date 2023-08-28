// Code EyesOnMe Component Here
import React from 'react';
function EyesOnMe(){
    function handleFocus(){
        console.log('Good!');

    }
    function blur(){
        console.log('Hey! Eyes on me!');
    }

    return (
        <div>
            <button onFocus={handleFocus} onBlur={blur}>Eyes on me</button>
        </div>
    )
}
export default EyesOnMe
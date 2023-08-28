import React from 'react'
function Keypad(){
    function handlePasswordChange(){
        console.log('Entering password...')
    }
    return (
        <div>
        <input type="password" onChange={handlePasswordChange}/>
        </div>
        )

}
export default Keypad
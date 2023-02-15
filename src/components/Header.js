import React from "react";
/*
npm install -g firebase-tools
   5 cd .\project1\
   6 firebase login
   7 firebase init
   8 npm run build
   9 firebase deploy --only hosting

*/
function Header(properties){
    return(
        <h1 className="Header">{properties.data}</h1>
    )
}

export default Header;
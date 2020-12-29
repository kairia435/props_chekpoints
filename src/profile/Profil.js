import React from 'react';

import ReactDOM from 'react-dom';

    const ProfileComponent=props =>{ return(
        
           
<div >
<div>
<h1> {props.children}</h1>
</div>
<div>
<h2>fullName: {props.fullName}</h2>
</div>
<div>
<h2> bio:{props.bio}</h2>
</div>
<div>
<h2>profession:{props.profession}</h2>
</div>
<div>
<h2>my age is {props.age} years old</h2>

</div>
<button  onClick={() => props.handleName(`My name is `+ props.fullName)}>  click here  </button>
</div>
     ) }

export default ProfileComponent;
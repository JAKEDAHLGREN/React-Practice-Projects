import React, {useState} from 'react';
const StarRating = () => {
    // Initialize a 'courseRating' state

const [ courseRating, setCourseRating] = useState(null)

    // Write a function that returns 5 Star components
for(let i = 0; i <= 5; i++) 
    

    // Write an event handler that updates the courseRating state.
    // Pass the function to a Star component via props
    

    return (
        <ul className='course--stars'>
            {/* Render the Star components */}
        </ul>
    );
}

export default StarRating;
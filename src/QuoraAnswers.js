import { useState } from "react"

const QuoraAnswers = () => {
    const [likes, setLikes] = useState(0);

    // Function for changing the state of likes
    const addingToTheState = () => {
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <p>Just a check</p>
            {/* Button with a click event which will trigger the  Like changer state */}
            <button onClick={addingToTheState}>Likes {likes}</button>
        </div>
    )
}

export default QuoraAnswers;
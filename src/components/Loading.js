import React from "react";
import loadingGif from "../images/gif/loading.gif"


const Loading = () => {
    return(
        <div>
            <h4>Loading rooms...</h4>
            <img src={loadingGif}/>
        </div>
    );
}

export default Loading;
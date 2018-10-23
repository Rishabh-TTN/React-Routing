import React from 'react';
import {Link,Route} from "react-router-dom";

export const About=(props)=>{
    let {match}=props;
    return(
        <div>
            <h1>About</h1>
            <ul>
                <li><Link to={`${match.url}/Topic-1`}> Topic-1</Link></li>
                <li><Link to={`${match.url}/Topic-2`}>Topic-2</Link></li>
                <li><Link to={`${match.url}/Topic-3`}>Topic-3</Link></li>
            </ul>
            <Route path={`${match.path}/:topicid`} component={Topic}/>
            <Route
                exact path={match.path}
                render={()=><h3>please select a topic.</h3>}/>
        </div>
    )
}

const Topic=({match})=>{
    return(
        <h3>{`${match.params.topicid}`}</h3>
    )
}
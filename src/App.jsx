import React from "react";
import gal from './images/galexy.jpg';

import './index.scss';

const App = () => {
        return (
            <div>
                <h1>My React App!</h1>
                <img src={gal} alt="gal"/>
            </div>
        );
}

export default App;
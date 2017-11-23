import React from 'react';
import ReactDOM from 'react-dom';

import ProfileCard from './ProfileCard';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ProfileCard/>,
    document.getElementById('root')
);

registerServiceWorker();

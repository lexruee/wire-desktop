import React from 'react';

import TeamsSidebar from '../containers/TeamsSidebar'
import WebviewList from '../containers/WebviewList'

const App = (() => (
    <div className="container">
        <div className="drag-region"/>
        <TeamsSidebar />
        <WebviewList />
    </div>
))

export default App
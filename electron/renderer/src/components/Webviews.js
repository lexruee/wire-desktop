import React from 'react';

import Webview from './Webview'

const Webviews = ({ accounts, onAccountBadgeUpdate }) =>
    <ul className="webview-container">
        {accounts.map(account => (
            <Webview
                key={account.id} 
                className={"webview " + (account.visible ? '' : 'hide')}
                src="http://wire-webapp-dev.zinfra.io/"
                partition={(account.sessionID !== undefined) ? `persist:${account.sessionID}` : 'foo'}
                preload='./static/js/webview-preload.js'
                onPageTitleUpdated={({title}) => {
                    let counter = (/\(([0-9]+)\)/).exec(title)
                    let count = parseInt(counter ? counter[1] : 0, 10);
                    onAccountBadgeUpdate(account.id, count)
                }}
            />
        ))}
    </ul>

export default Webviews
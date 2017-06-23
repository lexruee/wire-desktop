import React from 'react';

const Webviews = ({ accounts }) => (
    <ul className="webview-container">
        {accounts.map(account => (
            <div key={account.id} className={"webview " + (account.visible ? '' : 'hide')}>
                <webview is
                src="http://wire-webapp-dev.zinfra.io/"
                partition={(account.sessionID !== undefined) ? `persist:${account.sessionID}` : 'foo'}
                preload='./static/webview-preload.js'
                />
            </div>
        ))}
    </ul>
)

export default Webviews
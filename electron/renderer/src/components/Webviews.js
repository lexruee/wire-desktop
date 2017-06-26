import React from 'react'

import Webview from './Webview'

import './Webviews.css'

const Webviews = ({ accounts, onAccountBadgeUpdate }) =>
    <ul className="Webviews">
        {accounts.map(account => (
            <Webview
                key={account.id}
                className={"webview " + (account.visible ? '' : 'hide')}
                src="https://wire-webapp-staging.wire.com/?env=prod"
                partition={account.sessionID}
                preload='./static/webview-preload.js'
                onPageTitleUpdated={({title}) => {
                    // TODO helper
                    let counter = (/\(([0-9]+)\)/).exec(title)
                    let count = parseInt(counter ? counter[1] : 0, 10)
                    onAccountBadgeUpdate(account.id, count)
                }}
            />
        ))}
    </ul>

export default Webviews

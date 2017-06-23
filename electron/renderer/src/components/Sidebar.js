import React from 'react';

function classNames(account) {
    return [
        "sidebar-button",
        (account.visible ? 'sidebar-button-active' : ''), 
        (account.badgeCount > 0 ? 'sidebar-button-badge' : '')
    ].join(' ')
}

const Sidebar = ({ accounts, onAddAccountClick, onSwitchAccountClick }) =>
    <div className="sidebar">
        <ul className="sidebar-account-list">
            {accounts.map(account => (
                <div 
                    key={account.id} 
                    className={classNames(account)} 
                    onClick={() => onSwitchAccountClick(account.id)} >A</div>
            ))}
        </ul>
        <div className="sidebar-button sidebar-button-account-add" onClick={() => onAddAccountClick()} >+</div>  
    </div>

export default Sidebar
import React from 'react';

const Sidebar = ({ accounts, onAddAccountClick, onSwitchAccountClick }) => (
    <div className="sidebar">
        <ul className="sidebar-account-list">
            {accounts.map(account => (
                <div className={"sidebar-button " + (account.visible ? 'sidebar-button-active' : '')} key={account.id} onClick={() => onSwitchAccountClick(account.id)} >A</div>
            ))}
        </ul>
        <div className="sidebar-button sidebar-button-account-add" onClick={() => onAddAccountClick()} >+</div>  
    </div>
  
)

export default Sidebar
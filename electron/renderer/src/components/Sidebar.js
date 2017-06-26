import React from 'react'

import TeamIcon from './TeamIcon'

import './Sidebar.css'

const Sidebar = ({ accounts, onAddAccountClick, onSwitchAccountClick }) =>
  <div className="Sidebar">
    {accounts.map(account => (
      <div className={"Sidebar-icon " + (account.badgeCount > 0 ? "Sidebar-icon-badge" : '')} key={account.id}>
        <TeamIcon account={account} onClick={() => onSwitchAccountClick(account.id)} />
      </div>
    ))}
    <div className="Sidebar-account-add" onClick={onAddAccountClick} >+</div>
  </div>

export default Sidebar

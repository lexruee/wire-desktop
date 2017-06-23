import {connect} from 'react-redux'
import uuid from 'uuid/v4'

import { addAccount, switchAccount } from '../actions'
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddAccountClick: () => {
      dispatch(addAccount(uuid()))
    },
    onSwitchAccountClick: (id) => {
      dispatch(switchAccount(id))
    }
  }
}

const TeamsSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default TeamsSidebar
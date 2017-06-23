import { connect } from 'react-redux'
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
      dispatch(addAccount(Date.now()))
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
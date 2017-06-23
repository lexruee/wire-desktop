import { connect } from 'react-redux'

import { updateAccountBadge } from '../actions'
import Webviews from '../components/Webviews'

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAccountBadgeUpdate: (id, count) => {
      dispatch(updateAccountBadge(id, count))
    }
  }
}

const WebviewList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Webviews)

export default WebviewList
import { connect } from 'react-redux'
import Webviews from '../components/Webviews'

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts
  }
}

const WebviewList = connect(
  mapStateToProps,
)(Webviews)

export default WebviewList
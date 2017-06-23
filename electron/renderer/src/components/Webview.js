import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class Webview extends Component {
    constructor(props) {
        super(props)

        this._onPageTitleUpdated = this._onPageTitleUpdated.bind(this)
    }

    componentDidMount() {
        const {src, partition, preload} = this.props

        // set unknown props
        // see: https://facebook.github.io/react/warnings/unknown-prop.html
        // see: https://github.com/electron/electron/issues/6046
        this.webview.partition = partition
        this.webview.src = src
        this.webview.preload = preload

        this.webview.addEventListener('page-title-updated', this._onPageTitleUpdated)
    }

    _onPageTitleUpdated(title) {
        this.props.onPageTitleUpdated(title)
    }

    render() {
        const {className} = this.props
        return <webview className={className} ref={(webview) => { this.webview = webview; }} />
    }
}

export default Webview
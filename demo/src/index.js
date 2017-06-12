import React, {Component} from 'react'
import {render} from 'react-dom'

import SubscribeForm from '../../src'

class Demo extends Component {
  render() {
    const action = "//path/to/mailchimp/url"
    return <div>
      <h1>react-mailchimp-subscribe Demo</h1>
      <SubscribeForm action={action}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

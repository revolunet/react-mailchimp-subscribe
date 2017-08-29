import React, {Component} from 'react'
import {render} from 'react-dom'
import GithubCorner from 'react-github-corner';

import SubscribeForm from '../../src'

class Demo extends Component {
  render() {
    const action = "https://prizoners.us9.list-manage.com/subscribe/post?u=d66d8c5d1ef09114cf8c27ccb&id=3c7edc9b14"
    return (
      <div>
        <h1>react-mailchimp-subscribe Demo</h1>
        <GithubCorner href="https://github.com/revolunet/react-mailchimp-subscribe" />
        <SubscribeForm action={action}/>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))

import React, {Component} from 'react'
import {render} from 'react-dom'
import GithubCorner from 'react-github-corner';

import SubscribeForm from '../../src'

class Demo extends Component {
  render() {
    const action = "https://prizoners.us9.list-manage.com/subscribe/post?u=d66d8c5d1ef09114cf8c27ccb&id=3c7edc9b14"
    const customMessages={
      inputPlaceholder: "Insert your Email",
      btnLabel: "Subscribe",
      sending: "Sending...",
      success: "Thanks for the interest!<p>Now confirm your email.</p>",
      error: "Oops, the submitted email is incorrect"
    };
    const customStyles={
      sending: {
        fontSize: 18,
        color: "green"
      },
      success: {
        fontSize: 18,
        color: "blue"
      },
      error: {
        fontSize: 18,
        color: "yellow"
      }
    };
    return (
      <div>
        <h1>react-mailchimp-subscribe Demo</h1>
        <GithubCorner href="https://github.com/revolunet/react-mailchimp-subscribe" />
        <h2>Normal Form</h2>
        <SubscribeForm action={action}/>
        <h2>Form with different messages and Styles</h2>
        <SubscribeForm action={action} messages={customMessages} styles={customStyles} />
        <h2>Form with callbacks</h2>
        <SubscribeForm action={action} onSuccess={()=>{alert('Hello from Success Callback!')}} onError={()=>{alert('Something went wrong and the Error Calback was triggered')}} />
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))

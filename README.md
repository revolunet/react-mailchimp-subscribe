# react-mailchimp-subscribe

[![npm package][npm-badge]][npm]

React Ajax subscribe form for Mailchimp.

Working demo : https://codesandbox.io/s/5wyqr6npw4

## Usage

Create a list on mailchimp, add a form and get its "action" attribute

```js
import SubscribeFrom from 'react-mailchimp-subscribe'

const formProps = {
  action: '//xxxx.us13.list-manage.com/subscribe/post?u=695fze434a101fd2a718afddde8&id=72al97ece5',
  messages: {
    inputPlaceholder: "Votre email",
    btnLabel: "Envoyer",
    sending: "Envoi en cours...",
    success: "Merci de votre intérêt!",
    error: "Oops, impossible d'enregistrer cette adresse"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}

const Form = () => <SubscribeFrom {...formProps}/>

```


[npm-badge]: https://img.shields.io/npm/v/react-mailchimp-subscribe.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-mailchimp-subscribe


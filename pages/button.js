import Link from 'next/link'
import { Component } from 'react'

class ViewData extends Component {
  state = {
    isLoggedIn: false
  }

  runFunction() {
    console.log('hello')
  }

  render() {
    return (
      <div>
        <p>Page button</p>
        <ul>
          <li><Link href='/' as='/'><a>index</a></Link></li>
          <li><Link href='/hello' as='/hello'><a>hello</a></Link></li>
        </ul>
        <div>
          <button onClick={() => this.runFunction()}>Run a function</button>
        </div>
      </div>
    )
  }
}

export default ViewData

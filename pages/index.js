import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <p>Page index</p>
    <ul>
      <li><Link href='/button' as='/button'><a>button</a></Link></li>
      <li><Link href='/hello' as='/hello'><a>hello</a></Link></li>
    </ul>
  </div>
)

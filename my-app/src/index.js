import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return <h4>this is Grib and this is one of my first components</h4>
}

ReactDom.render(<Greeting />, document.getElementById('root'))
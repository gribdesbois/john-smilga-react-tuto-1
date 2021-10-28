import React from 'react'

const Book = (props) => {
  const {imgUrl, title, author} = props
  //attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = ($event => {
    alert('hello world')
    console.log($event)
  })
  const complexExample = (author) => {
    console.log(author)
  }
  return (
  <article className="book" onMouseOver={ () => {
    console.log(title);
  }} >
    <img src={imgUrl} alt="" />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>
      reference example
    </button>
    <button type="button" onClick={ () => complexExample(author) }>more complex example</button>
  </article> /* We need the above arrow function to pass author in param */
  )
}

export default Book

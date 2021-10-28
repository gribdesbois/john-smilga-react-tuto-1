import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
const books = [
  {
    id: 1,
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 2,
    author: 'Dr Seuss',
    title: 'The Cat in the Hat in English and French',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/516hUF87pTL._SX361_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
    author: 'Brit Bennett',
    title: 'The Vanishing Half: A Novel',
    imgUrl: 'https://m.media-amazon.com/images/I/41ThX3SfAiL.jpg'
  }
]

function BookList() {
  return (
  <section className="booklist">
    {books.map((book)=> {
      return (
        <Book key={book.id} {...book}></Book>
      )
    })}
  </section>
  )

}

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


ReactDom.render(<BookList />, document.getElementById('root'))


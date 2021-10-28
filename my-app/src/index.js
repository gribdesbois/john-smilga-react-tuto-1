import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
const books = [
  {
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    author: 'Dr Seuss',
    title: 'The Cat in the Hat in English and French',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/516hUF87pTL._SX361_BO1,204,203,200_.jpg'
  }
]

function BookList() {
  return (
  <section className="booklist">
    {books.map((book)=> {
      const {imgUrl, title, author} = book
      return (
        <Book book={book}></Book>
      )
    })}
  </section>
  )

}

const Book = (props) => {
  const {imgUrl, title, author} = props.book
  return (
  <article className="book">
    <img src={imgUrl} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))


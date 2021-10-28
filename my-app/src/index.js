import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

const firstBook = {
  author: 'Amelia Hepworth',
  title: 'I Love You to the Moon and Back',
  imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
}

const secondBook = {
  author: 'Dr Seuss',
  title: 'The Cat in the Hat in English and French',
  imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/516hUF87pTL._SX361_BO1,204,203,200_.jpg'
}

function BookList() {
  return (
  <section className="booklist">
    <Book 
      imgUrl={firstBook.imgUrl}
      title={firstBook.title}
      author={firstBook.author}
    />
    <Book 
      imgUrl={secondBook.imgUrl}
      title={secondBook.title}
      author={secondBook.author}
    />
  </section>
  )

}

const Book = (props) => {
  console.log(props)
  return (
  <article className="book">
    <img src={props.imgUrl} alt="" />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))


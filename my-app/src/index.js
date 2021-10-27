import React from 'react'
import ReactDom from 'react-dom'

// Nested Components, React Tools

function BookList() {
  return (
  <section>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    
  </section>
  )

}

const Book = () => {
  return (
  <article>
    <Image />
    <Title />
    <Author />
  </article>
  )
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />
const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4>Amelia Hepworth</h4>


ReactDom.render(<BookList />, document.getElementById('root'))


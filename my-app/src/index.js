import React from 'react'
import ReactDom from 'react-dom'

// Nested Components, React Tools

function BookList() {
  return (
  <section>
    <Book />
  </section>
  )

}

const Book = () => {
  return (
  <article>
    <Image />
  </article>
  )
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="" />


ReactDom.render(<BookList />, document.getElementById('root'))


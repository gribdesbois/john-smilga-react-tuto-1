import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// setup variables
const author = 'Amelia Hepworth'
const title = 'I Love You to the Moon and Back'
const imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'

function BookList() {
  return (
  <section className="booklist">
    <Book job='developer'/>
    <Book title='random title' number ={22}/>
  </section>
  )

}

const Book = (props) => {
  console.log(props)
  return (
  <article className="book">
    <img src={imgUrl} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))


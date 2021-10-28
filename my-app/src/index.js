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
const names = ['john', 'peter', 'susan']
const newNames = names.map((name)=> {
  return <h1>{name}</h1>
})
console.log(newNames)
function BookList() {
  return (
  <section className="booklist">
   {newNames}
  </section>
  )

}

const Book = ({imgUrl, title, author}) => {
  //const {imgUrl, title, author} = props
  return (
  <article className="book">
    <img src={imgUrl} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'))


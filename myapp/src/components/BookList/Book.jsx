import React from 'react'
import {Link} from 'react-router-dom'
import "./BookList.css"
const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
        <div className="book-item-img">
            <img src={book.cover_img} alt="cover" size='32' />
        </div>
        <div className="book-item-info text-center">
            <Link to={`/book/${book.id}`}{...book}>
                <div className="book-item-inf-elm title fw-4">
                    <span className='book-name'>{book.title}</span>
                </div>
            </Link>
         <div className="book-item-inf-elm">
            <span className='text-capitalize'>Author:</span>
            <span className='opacity'>{book.author.join(",")}</span>
         </div>
         <div className="book-item-inf-elm">
            <span className='text-capitalize'>Total Edition:</span>
            <span className='opacity'>{book.edition_count}</span>
         </div>
     

        </div>
    </div>
  )
}

export default Book
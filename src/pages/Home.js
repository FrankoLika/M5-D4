import React from 'react'
import MyBadge from '../components/MyBadge'
import BookList from '../components/BookList'

const Home = () => {
  return (
    <>
      <MyBadge color={"primary"} str={"Badge"} />
      <BookList />
    </>
  )
}

export default Home
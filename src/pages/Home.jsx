import React from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Hero from '../components/Hero'

function Home() {
  return (
    <div className="home">
      {/* Feed */}
      <Hero/>
      <Feed/>
    </div>
  )
}

export default Home
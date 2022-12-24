import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='最近掲載された物件' subtitle='これらは、私たちのサイトに掲載されている最新の物件です。地域性は素晴らしく、場所はとても良いです' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent

import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='次の家を探す' subtitle='新しいの地元の都市にある新しい＆注目の物件を見つけてください。' />

          <form className='flex'>
            <div className='box'>
              <span>街/通り</span>
              <input type='text' placeholder='場所...' />
            </div>
            <div className='box'>
              <span>財産</span>
              <input type='text' placeholder='財産...' />
            </div>
            <div className='box'>
              <span>価格帯</span>
              <input type='text' placeholder='価格帯' />
            </div>
            <div className='box'>
              <h4>高度なフィルター</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero

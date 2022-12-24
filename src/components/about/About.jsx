import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='関しては' title='私たちについて - 私たちは誰ですか?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='私たちのエージェンシーストーリー' subtitle='当社のストーリーと作業プロセスをご覧ください' />

            <p>私たちはここまで頑張ってきました。私たちも他の会社と同じように始めましたが、今では仕事でうまくいっています。私たちは全力を尽くして懸命に取り組んできました。それが、この成功の高さを達成した理由です。</p>
            <p>私たちは経験豊富で勤勉で忠実な従業員と一緒に仕事をすることを楽しみにしています。私たちは、従業員だけでなく、お客様にも完全な満足を提供できるよう支援したいと考えています。</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About

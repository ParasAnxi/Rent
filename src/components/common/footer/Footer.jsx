import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>質問ありませんか ？</h1>
              <p>キャリアアップと成長を全力でサポートします。</p>
            </div>
            <button className='btn5'>今すぐお問い合わせください</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>何かお手伝いが必要ですか?</h2>
              <p>更新、お得な情報、チュートリアル、割引が毎月受信トレイに直接送信されます</p>

              <div className='input flex'>
                <input type='text' placeholder='電子メールアドレス' />
                <button>申し込む</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 RentUP.</span>
      </div>
    </>
  )
}

export default Footer

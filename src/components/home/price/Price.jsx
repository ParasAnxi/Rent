import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='パッケージを選択' subtitle='要件に応じて、さまざまなパッケージを選択してメンバーになることができます' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price

import { useEffect, useState } from "react"

import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Footer } from './components/Footer/Footer'
import { HeroTextArea } from "./components/Hero/HeroTextArea"
import { HeroImageArea } from "./components/Hero/HeroImageArea"

const initialStockExample = 10

const fakeProductsDB = [
  {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    company: 'Sneaker Company',
    price: 250,
    discount_percent: 50,
    quantity_available: initialStockExample,
    images: [
      {
        large: '/images/image-product-1.jpg',
        thumbnail: '/images/image-product-1-thumbnail.jpg',
      },
      {
        large: '/images/image-product-2.jpg',
        thumbnail: '/images/image-product-2-thumbnail.jpg',
      },
      {
        large: '/images/image-product-3.jpg',
        thumbnail: '/images/image-product-3-thumbnail.jpg',
      },
      {
        large: '/images/image-product-4.jpg',
        thumbnail: '/images/image-product-4-thumbnail.jpg',
      }
    ]
  }
]

const initialState = {
  items: [],
  total: 0
}

export default function Home() {
  const [cartItems, setCartItems] = useState(initialState)
  const [products, setProducts] = useState(fakeProductsDB)

  useEffect(() => setProducts(fakeProductsDB), [])

  const getCurrentTotal = () => cartItems.items.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.quantity * (currentValue.price * (currentValue.discount_percent / 100)))
  }, 0)


  const addToCard = (productId, quantity) => {
    const item = products.find(product => product.id === productId)

    if (!item) return

    const itemIsInCart = cartItems.items.findIndex(item => item.id === productId)

    const { id, name, price, discount_percent } = item
    const thumbnail = item.images[0].thumbnail

    const updatedTotal = (quantity * price * (discount_percent / 100)) + getCurrentTotal()

    if (itemIsInCart === -1) {
      setCartItems({
        items: [{ id, name, price, discount_percent, thumbnail, quantity }],
        total: updatedTotal
      })
    } else {
      const updatedItems = cartItems.items.map(item => item.id = id ? { ...item, quantity: item.quantity + quantity } : item)
      setCartItems({
        items: updatedItems,
        total: updatedTotal
      })
    }
    //Let's pretend to reduce stock in the database
    setProducts(products.map(product => product.id === id ? { ...product, quantity_available: product.quantity_available - quantity } : product))
  }



  const removeFromCard = (productId) => {
    const updatedCartItems = products.filter(product => product.id !== productId)
    const updatedTotal = updatedCartItems.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.quantity * (currentValue.price * (currentValue.discount_percent / 100)))
    }, 0)
    setCartItems({
      items: updatedCartItems,
      total: updatedTotal
    })
    //Let's pretend to restore stock in the database
    setProducts(products.map(product => product.id === productId ? { ...product, quantity_available: initialStockExample } : product))
  }



  return (
    <>
      <Header
        cartItems={cartItems}
        removeFromCard={removeFromCard}
      />
      <Hero>
        <HeroImageArea
          product={products[0]}
        />
        <HeroTextArea
          product={products[0]}
          addToCard={addToCard}
        />
      </Hero>
      <Footer />
    </>
  )
}
import axios from 'axios'
import Link from 'next/link'

const Products = ({ data }) => {
  const products = data.products
  return (
    <div>
      <Link href='/'>Go back</Link>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id} className='product-card'>
          <img src={product?.images[3]} alt='' />
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://dummyjson.com/products')
  return { props: { data } }
}

export default Products

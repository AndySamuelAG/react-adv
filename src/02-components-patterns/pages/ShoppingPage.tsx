import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shipping Store</h1>
        <hr />
        <div style={
            {display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}
        }>

            <ProductCard 
                product={product} 
                className="bg-dark"
            >
                <ProductCard.Image className="custom-image"/>
                <ProductCard.Title title={ 'MoccaChino' } className="text-white"/>
                <ProductCard.Buttons className="custom-buttons"/>
            </ProductCard>

            <ProductCard 
                product={product}
                className="bg-dark"
            >
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white" />
                <ProductButtons className="custom-buttons" />
            </ProductCard>

            <ProductCard 
                product={product}
            >
                <ProductImage style={{ boxShadow: '0 3px 3px rgba(0,0,0,.3)'}} />
                <ProductTitle style={{ fontWeight: 'bold' }} />
                <ProductButtons style={{
                    display: 'Flex',
                    justifyContent: 'flex-end'
                }} />
            </ProductCard>
        </div>
    </div>
  )
}

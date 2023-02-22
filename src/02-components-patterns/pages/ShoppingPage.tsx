import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {



    return (
        <div>
            <h1>Shipping Store</h1>
            <hr />
  
            <ProductCard 
                key={product.id}
                product={ product }
                className="bg-dark"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                ({
                    reset,
                    count,
                    isMaxCountReached,
                    increaseBy
                }) => (
                    <>
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-white" />
                        <ProductButtons className="custom-buttons" />
                        <button onClick={reset}>Resetear</button>
                        <button onClick={() => increaseBy(-2)}>-2</button>
                        {/* Si no se llega al isMaxCount, ocultar */}
                        {
                            !isMaxCountReached && (
                                <button onClick={() => increaseBy(2)}>+2</button>
                            )
                        }
                        <span>{ count }</span>
                    </>
                )
                }
            </ProductCard>

        </div>
    );
}

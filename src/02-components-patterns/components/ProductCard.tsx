import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

// import { ProductImage } from './ProductImage';
// import { ProductTitle } from './ProductTitle';
// import { ProductButtons } from './ProductButtons';

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string; 
    style?: React.CSSProperties
}


export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;




export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
            }}>
            <div className={ `${styles.productCard} ${className}` } style={ style }>

                { children }

            </div>
        </Provider>
    )
}

// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;
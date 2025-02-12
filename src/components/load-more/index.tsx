import { useEffect, useState } from "react";
import './styles.css';

export default function LoadMoreData () {

    const [loading, setLoading]= useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

    async function fetchProducts() {
        console.log('fetch products');
        console.log(count);
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count *20 }`);
            const result = await response.json();

            if(result && result.products && result.products.length){
                setProducts((prevData) => [...prevData, ...result.products]);
                console.log(products);
                setLoading(false);
            }

            console.log(result);
        }catch (e) {
            console.log(e);
            setLoading(false);
        }

    }
    useEffect(() => {
        console.log('useEffect');
        fetchProducts();
    }, [count])

    useEffect(() => {
        if(products && products.length === 100) setDisableBtn(true);
    }, [products])

    if(loading) {
        return <div> Loading data! Please wait.</div> 
    }

    return <div className="load-more-container">
        <div className="product-container">
            {
                products && products.length ? products.map(item => (<div key = {item.id}>
                    <img 
                    src= {item.thumbnail} alt={item.title}/>
                    <p>{item.title}</p>
                </div>)) : null
            }
        </div>

        <div className="button-container">
            <button disabled={disableBtn} onClick={() => setCount(count + 1)}>Load more products</button>
            {
                disableBtn ? <p>You've reached 100 products! </p> : null
            }
        </div>
    </div>
}
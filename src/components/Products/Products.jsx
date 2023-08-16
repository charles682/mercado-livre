import { Container } from './index';
import {useState, useEffect} from 'react'; 
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
function Products() {

  const [products, setProducts, setLoading ] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
       setLoading(false);
    });
  }, [])



  return ( 
    <Container>
         (loading && <Loading /> ) || (
      <section className="products container">
      {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
         )
    </Container>
   );
}

export default Products;
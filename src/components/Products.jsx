import { styled } from "styled-components"
import {popularProducts} from '../data'
import Product from "./product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:center;
    justify-content: space-between;
    `;

const products = () => {
  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default products
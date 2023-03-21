import React, { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import {productFecthing , productFetched , productError} from '../redux/action/productFetchAction'
import {useDispatch, useSelector} from 'react-redux'
const Products = () => {

    const product = useSelector(state=>state)
    const dispatch = useDispatch()
    useEffect(() => {
      
        fetchProduct()
        
    }, [])

    const fetchProduct = async () =>{
        
        try{
            let data = await  fetch('https://dummyjson.com/products/1')
            let result = await data.json()
            console.log('dasf',data.status)
            dispatch(productFetched(result))

            // if(data === 200){
            // dispatch(productFetched(result))
            // }else{
            // dispatch(productFecthing("data fetching"))
            // }
            console.log("ddddd",result)
        }
        catch(error){
            dispatch(productError(error))
        }
    }

    console.log("product___",product.productReducer)

    return (
        <div className="container" style={{ marginTop: '65px' }} >

            <Card style={{ width: '18rem', }}>
                <Card.Img variant="top" src="https://assets.impactpool.org/logos/im-individuell-mnniskohjlp-0b534e5e-b6b8-4100-828f-a5682e0ed50d.svg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Products
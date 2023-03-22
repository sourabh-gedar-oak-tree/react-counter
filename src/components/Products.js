import React, { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { productFecthing, productFetched, productError } from '../redux/action/productFetchAction'
import { useDispatch, useSelector } from 'react-redux'
import { RiseLoader } from 'react-spinners'
const Products = () => {

    const product = useSelector(state => state.productReducer.items)
    const loading = useSelector(state => state.productReducer.loading )
    console.log("fff", loading)
    const dispatch = useDispatch()
    useEffect(() => {
        fetchProduct()
    }, [])

    const fetchProduct = async () => {

        try {
            dispatch(productFecthing("data fetching"))
            let data = await fetch('https://dummyjson.com/products')
            let result = await data.json()
            console.log('dasf', data.status)
            dispatch(productFetched(result))

            // if(data === 200){
            // dispatch(productFetched(result))
            // }else{
            // dispatch(productFecthing("data fetching"))
            // }
            console.log("ddddd", result)
        }
        catch (error) {
            console.log("error:",error)
            dispatch(productError(error))
        }
    }

    console.log("product___", product)

    return (
        <div className="container" style={{ marginTop: '65px', textAlign: 'start' }} >

            {loading === false ?
                <Container>
                    <Row xs={2} md={4} lg={6} >
                        {
                            product ? product?.products.map((el,index)=>{
                                return <Card   style={{ width: '18rem', margin:'10px' }}  >
                                <Card.Img variant="top" src={el.images[0]} />
                                <Card.Body>
    
                                    <Card.Title>{el.title}</Card.Title>
                                    <Card.Text>
                                        {el.description}
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            }):"no data found"
                        }
                      
                    </Row>

                </Container>
                : <div style={{ textAlign: 'center', marginTop: '330px' }} ><RiseLoader color="hsla(3, 0%, 0%, 1)" size={30} /> </div>

            }
        </div>
        
    )
}

export default Products
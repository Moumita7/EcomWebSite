import React from "react";
import { Card,CardImg,CardBody,CardTitle,CardText,Button } from "reactstrap";

const CartItem=({product,addInCart})=>{
    return(
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" 
            src={product.img}/>
            <CardBody className="text-center ">
                <CardTitle className="font-weight-bold">
                {product.title}
                </CardTitle>
                <CardText className="secondary">
                 {product.description}
                </CardText>
                <CardText className="secondary">
                    price: ₹ {product.price}
                </CardText>
                <Button color="success" 
                onClick={()=>addInCart(product)}>
                    Buy Now
                </Button>

            </CardBody>

        </Card>


    )
}
export default CartItem
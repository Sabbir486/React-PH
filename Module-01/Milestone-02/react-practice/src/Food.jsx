export default function Food({name, price, quantity}){
    if(price >= 100){
        return(
        <div>
            <li>Name: {name}</li>
            <li>Price: {price}</li>
            <li>Quantity: {quantity}</li>
        </div>
    )
    }

    else{
        return(
        <div>
            <li>Name: {name}</li>
            <li>Price: {price}</li>
        </div>
    )
    }
}
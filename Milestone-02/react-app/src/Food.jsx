export default function Food({name, price, quantity}){
    if(price<=15){
        return(
        <ul>
            <li>Food Description: {name} {price} {quantity}</li>
        </ul>
        )
    }

    else{
        return(
            <li>Food: {name} {price}</li>
        )
    }
}
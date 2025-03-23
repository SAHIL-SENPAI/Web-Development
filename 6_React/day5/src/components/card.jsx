function Card(props){
    return(
        <div id="body-card">
            {/*  */}
            <div style={{height:"230px"}} class="image-container">
                <img src="https://i.pinimg.com/736x/d6/65/d9/d665d9ed0b330a2a4ab3ea2900c7bbb0.jpg" height="230px"></img>
                <div className="shine"></div>
            </div>

            <div id="cloth-name">{props.cloth}</div>
            <div id="cloth-offer">{props.offer}</div>
            <div id="cloth-price ">{props.price}</div>
            <div id="cloth-buy">Buy Now</div>
        </div>
    )
}

export default Card;

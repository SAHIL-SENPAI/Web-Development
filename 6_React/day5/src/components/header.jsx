function Header(){
    return(
        <div className="nav">

            <img src="https://logos-download.com/wp-content/uploads/2016/09/Myntra_logo.png" alt="" />

            <div className="options">
                <button>Men</button>
                <button>Women</button>
                <button>Kids</button>
                <button>Beauty</button>
                <button>Studio</button>
            </div>

            <input type="text" placeholder="Search for products,brands and more "/>

            <div className="icons">
                <div className="profile">
                    <i class='bx bx-user'></i>
                    <p>profile</p>
                </div>
                <div className="wishlist">
                    <i class='bx bx-heart' ></i>
                    <p>wishlist</p>
                </div>
                <div className="bag">
                    <i class='bx bx-shopping-bag' ></i>
                    <p>bag</p>
                </div>
            </div>


        </div>
    )
}

export default Header;
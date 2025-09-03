import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <>
            <div className="descriptionbox">
                <div className="descriptionbox-navigator">
                    <div className="descriptionbox-nav-box">
                        Description
                    </div>

                    <div className="descriptionbox-nav-box fade">
                        Reviews (122)
                    </div>
                </div>

                <div className="descriptionbox-description">
                    <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller. A digital storefront can serve as the virtual equivalent of the product shelves, sales staff, and cash register of a physical shop.</p>

                    <p>E-commerce websites allow businesses to process orders, accept payments, manage shipping, and provide customer service.
                        E-commerce websites are accessible from anywhere with an internet connection. They can be used for a variety of transactions, including: Business-to-consumer (B2C), Business-to-business (B2B), and Consumer-to-consumer (C2C).</p>
                </div>

            </div>
        </>
    )
}

export default DescriptionBox
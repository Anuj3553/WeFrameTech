import React from 'react'
import ImageGallery from './ImageGallery'
import Navigation from './Navigation'
import ProductDetails from './ProductDetails'

export default function Hero() {
    return (
        <div className="p-4">
            {/* Navigation: Breadcrumbs */}
            <Navigation />

            <div className='flex mt-8 gap-6'>
                {/* Image Gallery */}
                <ImageGallery />

                {/* Product Details */}
                <ProductDetails />
            </div>
        </div>
    )
}

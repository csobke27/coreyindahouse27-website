import { useState, useEffect } from 'react';
import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const {name, price, imageUrl, additionalImages, listingSlug} = product;
    const [currentImage, setCurrentImage] = useState(imageUrl); // Default to the main image
    
    useEffect(() => {
        setCurrentImage(imageUrl); // Reset to the main image when product changes
    }, [product, imageUrl]);

    const handleMouseEnter = () => {
        if (additionalImages && additionalImages.length > 1) {
            setCurrentImage(additionalImages[1]["src"]); // Change to the first additional image
        }
    };

    const handleMouseLeave = () => {
        setCurrentImage(imageUrl); // Revert back to the main image
    };

    const viewItem = () => {
        if(listingSlug){
            const url = "https://coreyindahouse27s-store.creator-spring.com/listing/"
            window.open(url + listingSlug, "_blank"); // Open the URL in a new tab
        }
    }
    return (
        <div className='product-card-container'>
            <img src={currentImage} alt={`${name}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={viewItem}>View</Button>
            {/* <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button> */}
        </div>
    );
}

export default ProductCard;
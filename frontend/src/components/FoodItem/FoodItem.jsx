import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, description, price, image}) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img src={url + '/images/' + image} className='food-item-image' alt='Image' />
            {
                !cartItems[id]
                ? <img onClick={() => addToCart(id)} src={assets.add_icon_white} className='add' alt='Add Icon White' /> 
                : <div className='food-item-counter'>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='Remove Icon Red' />
                    <p>{cartItems[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='Add Icon Green' />
                  </div>
            }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt='Rating Starts' />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
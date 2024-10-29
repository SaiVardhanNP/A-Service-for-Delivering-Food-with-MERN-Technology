import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: '',
    description: '',
    category: 'Salad',
    price: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data, [name]: value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('image', image)
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('category', data.category)
    formData.append('price', Number(data.price))

    const response = await axios.post(`${url}/api/food/add`, formData)
    if (response.data.success) {
      setData({
        name: '',
        description: '',
        category: 'Salad',
        price: ''
      })
      setImage(false)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }
  return (
      <div className='add'>
        <form onSubmit={onSubmitHandler} className='flex-col'>
          <div className='add-img-upload flex-col'>
            <p>Upload Image</p>
            <label htmlFor='image'>
              <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='Upload Area' />
            </label>
            <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
          </div>
          <div className='add-product-name flex-col'>
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type product name here' required />
          </div>
          <div className='add-product-description flex-col'>
            <p>Product Description</p>
            <textarea onChange={onChangeHandler} value={data.description} name='description' placeholder='Type product description here' rows='6' required></textarea>
          </div>
          <div className='add-category-price'>
            <div className='add-category flex-col'>
              <p>Product Category</p>
              <select onChange={onChangeHandler} value={data.category} name='category'>
                <option value='Salad'>Salad</option>
                <option value='Rolls'>Rolls</option>
                <option value='Deserts'>Deserts</option>
                <option value='Sandwich'>Sandwich</option>
                <option value='Cake'>Cake</option>
                <option value='Pure Veg'>Pure Veg</option>
                <option value='Pasta'>Pasta</option>
                <option value='Noodles'>Noodles</option>
              </select>
            </div>
            <div className='add-price flex-col'>
              <p>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='$20' required />
            </div>
          </div>
          <button type='submit' className='add-btn'>Add Product</button>
        </form>
      </div>
  )
}

export default Add
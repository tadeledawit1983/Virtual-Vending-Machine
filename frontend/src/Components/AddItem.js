import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddItem = () => {
    const navigate = useNavigate()
    const url = 'http://localhost:3001/items/add'

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
        product_img: '',
    })
    function handleChange(event) {
        const { value, name } = event.target
        setFormData(prevdata => ({
            ...prevdata,
            [name]: value
        }))

    }
    console.log(formData);
    function submitForm() {
        axios.post(url, {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            quantity: formData.quantity,
            product_img: formData.product_img
        }).then(res => console.log(res))
        navigate('/')
    }

    return (
        <div className="AddItem">

            <form className="form" onSubmit={(event) => event.preventDefault()} action="/data">
                <h1 className="form_title">Add Item</h1>
                <a className="sock-link" href="http://localhost:3001/items/">Click here to see all stock.</a>
                <div className="form-control">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Product_name' />
                </div>
                <div className="form-control">

                    <label htmlFor="description">description</label>
                    <input
                        type="text" id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder='Description' />
                </div>
                <div className="form-control">

                    <label htmlFor="price">price</label>
                    <input
                        type="text" id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder='price' />
                </div>
                <div className="form-control">

                    <label htmlFor="quantity">quantity</label>
                    <input
                        type="text" id="quantity"
                        name="quantity"
                        value={formData.quantity} onChange={handleChange}
                        placeholder='quantity' />
                </div>
                <div className="form-control">

                    <label htmlFor="product_img">product_img</label>
                    <input
                        type="text" id="product_img"
                        name="product_img"
                        value={formData.product_img} onChange={handleChange}
                        placeholder='product_img' />
                </div>

                <button onClick={submitForm} className="form-control">Add Item</button>
                <button typr="submit" className="form-control">Update Item</button>
            </form>
        </div >
    )
}

export default AddItem

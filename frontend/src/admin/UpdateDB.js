
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
const UpdateDB = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)

    const url = 'http://localhost:3001/items/'

    const [singleItem, setSingleItem] = useState([])
    useEffect(() => {
        axios.get(url)
            .then(res => {
                const data = res.data;
                const filterData = data.filter(singleItem => singleItem._id = id)
                setSingleItem(filterData[0])
            })
    }, [])
    console.log(singleItem)
    const updateItemUrl = `http://localhost:3001/items/update/${id}`
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
        axios.post(updateItemUrl, {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            quantity: formData.quantity,
            product_img: formData.product_img
        }).then(res => console.log(res))
        navigate('/thanks')
    }

    return (
        <div className="AddItem">

            <form className="form" onSubmit={(event) => event.preventDefault()} action="/data">
                <h1 className="form_title">Update Item From Stock</h1>
                <a className="sock-link" target="_blank" href="http://localhost:3001/items/">Click here to see all stock.</a>
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

                <button onClick={submitForm} typr="submit" className="form-control">Update Item</button>
            </form>
        </div >
    )
}

export default UpdateDB

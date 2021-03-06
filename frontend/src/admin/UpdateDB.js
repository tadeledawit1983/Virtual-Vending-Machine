
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
    const updateItemUrl = `https://virtual-vending.herokuapp.com/update/${id}`
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
        navigate('/success')
    }

    return (
        <div className="container">

            <h2 className="link"><Link to="/update" style={{ color: '#639' }}>Update item</Link></h2>
            <button className="stock_btn"><a className="sock-link" target="_blank" href="https://virtual-vending.herokuapp.com/items/">Click here to see all stock.</a></button>
            <form className="addItem" onSubmit={(event) => event.preventDefault()} action="/data">
                <div className="form_control">
                    <input type="text" id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Product Name' />


                    <input
                        type="text" id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder='Description' />

                    <input
                        type="text" id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder='Price' />

                    <input
                        type="text" id="quantity"
                        name="quantity"
                        value={formData.quantity} onChange={handleChange}
                        placeholder='Quantity' />

                    <input
                        type="text" id="product_img"
                        name="product_img"
                        value={formData.product_img} onChange={handleChange}
                        placeholder='Product Image' />
                    <button onClick={submitForm} className="form-control">UPDATE ITEM</button>
                </div>
            </form>
        </div >
    )
}

export default UpdateDB

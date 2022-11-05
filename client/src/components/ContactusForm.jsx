import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const ContactusForm = ({ setSuccess, setError, setLoading, loading }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let payload = {
      name,
      email,
      phone,
      description,
    }
    setLoading(true)
    axios
      .post(`${process.env.REACT_APP_BACKEND}/sendEmail`, payload)
      .then((res) => {
        setSuccess('Request Recevied Our Executive will contact you shortly')
        setEmail('')
        setDescription('')
        setLoading(false)
        setName('')
        setPhone('')
        setTimeout(() => {
          setSuccess('')
        }, 6000)
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }, 3000)
      })
      .catch((error) => {
        console.log(error)
        setError('Something Happend Please Try again later')
        setLoading(false)
        setTimeout(() => {
          setError('')
        }, 5000)
      })
  }

  return (
    <form>
      <div className='form-group'>
        {/* <label for='exampleInputEmail1'>Email address</label> */}
        <input
          type='text'
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter Name'
          required={true}
          name='name'
        />
      </div>
      <div className='form-group'>
        {/* <label for='exampleInputEmail1'>Email address</label> */}
        <input
          type='number'
          className='form-control'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Enter Phone'
          required={true}
          name='phone'
        />
      </div>
      <div className='form-group'>
        {/* <label for='exampleInputEmail1'>Email address</label> */}
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Email'
          required={true}
          name='email'
        />
      </div>
      <div className='form-group'>
        {/* <label for='exampleInputEmail1'>Email address</label> */}
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder='Enter Description'
          rows='4'
          cols='30'
          required={true}
        />
      </div>
      <button
        disabled={!name || !email || !phone || !description || loading}
        className='btn btn-success'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  )
}

export default ContactusForm

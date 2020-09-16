import React, { useState, useEffect } from 'react'
import { Button } from '../../components/Button'
import { FramePage } from './../FramePage'
import { useParams } from 'react-router-dom'

export const BookingPage = () => {

    const { id } = useParams()
    const [name, setName] = useState('UserStandar')
    const [tel, setTel] = useState('4440001')
    const [email, setEmail] = useState('email@example.com')
    const [date, setDate] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)

    const bookingHandler = (event) => {
        event.preventDefault()
        requestBooking()
    }

    const requestBooking = () => {
        const body = {
            id: id,
            fullName: name, 
            cellphone: tel, 
            email_address: email, 
            bookingDate: date
        }
        console.log('body', body)
    }

    useEffect( () => {
        setIsValidForm(name !== '' && tel !== '' && email !== '' && date !== '')},
        [name, tel, email, date]
    )

    return (
    <FramePage>
        <form onSubmit={bookingHandler} className="booking-form">
            { name }
            { tel }
            { email }
            { date }
            <div>
                <label>Nombre:</label>
                <input value={name} onChange={event => setName(event.target.value)} type="text" />
            </div>

            <div>
                <label>Telefono:</label>
                <input value={tel} onChange={event => setTel(event.target.value)} type="tel" />
            </div>

            <div>
                <label>Correo:</label>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
            </div>

            <div>
                <label>Fecha de la reserva:</label>
                <input value={date} onChange={event => setDate(event.target.value)} type="date" />
            </div>

            <Button disabled={!isValidForm} type="submit" label="Reservar ahora" />
        </form>
    </FramePage>
    )
}
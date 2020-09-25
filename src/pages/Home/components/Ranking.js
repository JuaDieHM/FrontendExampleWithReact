import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { requestHttp } from '../../../config/HttpRequest'

/*
Implementacion sin invocar todavia el servicio.
*/
export const Ranking = () => {

    const [experiencesTop, setExperiencesTop] = useState([])

    useEffect( ()=>{
        getTop5()
    }, [])

    const getTop5 = async () => {
        try {
            const response = await requestHttp('get', '/experiences/top5')
            setExperiencesTop(response.top5)
        }  catch (error) {
            console.error(error)
        }
    }

    
    return (
    <section className="ranking">
        {
            experiencesTop.map(el => <Card key={ el._id } { ...el } /> )
        }
        {
//            experiencesTop.map((el, i) => <Card key={i} id={el.id} image={el.image} description={el.title} place={el.place} /> )
        }
    </section>
    )
}
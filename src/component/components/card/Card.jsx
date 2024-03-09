import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import Button from '../header/button/Button';
import Modal from '../modal/Modal';

const Card = () => {
    const [data, setData] = useState([])
    const [lessData, setlessData] = useState(false)
    const [idd, setId] = useState(null)
    // console.log(id)
    const [modalData, setModalData] = useState([])

    const eventHandler = () => {
        setlessData(true)
    }

    const sortDate = () => {
        const dateSort = data.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in)
        })
        setData([...data, dateSort])
    }

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(loaddata => loaddata.json())
            .then(show => setData(show.data.tools))
    }, [])

    useEffect(() => {
        fetch(` https://openapi.programming-hero.com/api/ai/tool/${idd}`)
            .then(data => data.json())
            .then(modal => setModalData(modal.data))
    }, [idd])


    return (
        <div>
            {/* eikhane onclick er vitore callback function use lora hoi nai karon sortDate ta eikhane ekta function not direct usestate . Direct usestate othoba children theke parent e data pathate callback function use korte hoi */}
            <span onClick={sortDate}>
                <Button>Sort by date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2 lg:px-12'>
                {
                    data.slice(0, lessData ? 12 : 6).map(product => <Product product={product} key={product.id} setId={setId}></Product>)
                }

            </div>
            {
                !lessData && (<span onClick={eventHandler}>
                    <Button>See More</Button>
                </span>)
            }
            <Modal modalData={modalData}></Modal>
        </div>
    );
};

export default Card;
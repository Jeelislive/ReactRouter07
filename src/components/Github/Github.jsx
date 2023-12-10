import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const Data = useLoaderData()
    // const [ Data, setData ] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Jeels-code')
    //         .then(response => response.json())
    //         .then(Data => {
    //             console.log(Data);
    //             setData(Data)
    //         })
    // }, [])
    return (
        <div >

            <div className='bg-gray-600 text-white text-center text-3xl p-4'> Github followers : { Data.followers }
                <img src={ Data.avatar_url } alt='Git picture' width={ 300 } /></div>
        </div>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Jeels-code')
    return response.json();
}

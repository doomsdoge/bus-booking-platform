import axios from 'axios'
import { useState, useEffect } from 'react'

const ScoreBoard = () => {
    const [data, setData] = useState([])

    useEffect(
        () => {
        axios.get('http://localhost:5000/data')
            .then((response) => {
                setData(response.data.football.liga1.season.standings)
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
        }, [])

        console.log(data)
    
    const dataTable = data.map((val, idx) => {
        return (
            <tr className='border border-grey-800' key={idx.toString()}>
                <td className='px-4 py-2'>{idx + 1}</td>
                <td className='px-4 py-2'>{val.teamName}</td>
                {
                    val.tables.split(',').map((value) => {
                       return <td className='px-4 py-2'>{value.split('|')[1]}</td>
                    }) 
                }
                <td className='px-4 py-2'>{val.last_match}</td>
            </tr>
        )
    })

    return (
        <div>
            <div className='bg-blue-700 text-white font-bold h-[50px] flex flex-row items-center justify-center mb-5'>
                Scoreboard
            </div>
            <div className='flex flex-row justify-center items-center'>
                <table>
                    <tbody>
                        <tr className='border border-grey-800'>
                            <th className='px-4 py-2 font-medium'>
                                Rank
                            </th>
                            <th className='px-4 py-2 font-medium text-left'>
                                Club
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                T
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                M
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                S
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                K
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                GM
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                GK
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                SG
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                Poin
                            </th>
                            <th className='px-4 py-2 font-medium'>
                                Last 5
                            </th>
                        </tr>
                    </tbody>
                    {dataTable}
                </table>
            </div>
        </div>
    )
}

export default ScoreBoard

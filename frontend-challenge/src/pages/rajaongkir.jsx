import axios from "axios";
import { useState, useEffect } from "react";

const RajaOngkir = () => {
    const [province, setProvince] = useState([])
    const [cityOrigin, setCityOrigin] = useState([])
    const [cityDestination, setCityDestination] = useState([])
    const [summary, setSummary] = useState({
        origin: '',
        destination: '',
        courier: '',
        originID: '',
        destinationID: ''
    })
  
    
    const onGetProvince = async() => {
        try {
            let response = await axios.get('https://pwd-selectiontchallenge.vercel.app/rajaongkir/get-province',
                {
                    headers: {
                        'key' : '0ab1e1cb6b9b40df49560b26aec4ec79'
                    }
                }
            )
            console.log(response)
            setProvince(response.data.data.rajaongkir.province)
        } catch (error) {
            console.log(error)
        }
    } 

    const onGetCityOrigin = async(province_id) => {
        try {
            let response = await axios.get(
                `https://pwd-selectiontchallenge.vercel.app/rajaongkir/get-city?province_id=${province_id}`,
                {
                    headers: {
                        'key' : '0ab1e1cb6b9b40df49560b26aec4ec79'
                    }
                }
            )
            console.log(response)
            setCityOrigin(response.data.data.rajaongkir.city)
        } catch (error) {
            
        }
    }

    const onGetCityDestination = async(province_id) => {
        try {
            let response = await axios.get(
                `https://pwd-selectiontchallenge.vercel.app/rajaongkir/get-city?province_id=${province_id}`,
                {
                    headers: {
                        'key' : '0ab1e1cb6b9b40df49560b26aec4ec79'
                    }
                }
            )
            console.log(response)
            setCityDestination(response.data.data.rajaongkir.city)
        } catch (error) {
            
        }
    }

    const onGetSummaryOrigin = async(e) => {
        try {
            let newOrigin = e.split(',')[1] + ' ' + e.split(',')[2] 
            let origin_id = e.split(',')[0]
            setSummary({
                ...summary, origin: newOrigin, originID: origin_id 
            })
            console.log(summary)
        } catch (error) {
            
        }
    }

    const onGetSummaryDestination = async(e) => {
        try {
            let newDestination = e.split(',')[1] + ' ' + e.split(',')[2] 
            let destination_id = e.split(',')[0]
            setSummary({
                ...summary, destination: newDestination, destinationID: destination_id
            })
            console.log(summary)
        } catch (error) {
            
        }
    }

    const onCheckOngkir = async() => {
        try {
            let response = await axios.post(
                'https://pwd-selectiontchallenge.vercel.app/rajaongkir/get-shipping-cost',
                {
                    origin: summary.originID,
                    destination: summary.destinationID,
                    weight: 1700,
                    courier: 'jne'
                },
                {
                    headers: {
                        'key' : '0ab1e1cb6b9b40df49560b26aec4ec79'
                    }
                }
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onGetProvince()
    },[])

    return (
        <div>
            <div className='bg-blue-700 text-white font-bold h-[50px] flex flex-row items-center justify-center mb-5'>
                RajaOngkir
            </div>
            <div className="flex justify-center my-5 h-[350px]">
                <div className="w-[720px] flex flex-row justify-between">
                    <div className="w-[300px] flex flex-col justify-between">
                        <div className="flex flex-col justify-between gap-2">
                            <div className="font-medium">
                                Origin
                            </div>
                            <select onChange={(e) => onGetCityOrigin(e.target.value)} className="w-[100%] h-[40px] px-2 py-1 border border-gray-300 rounded-md">
                                <option value="">Select Province</option>
                                {
                                    province.map((val, idx) => {
                                        return (
                                            <option value={val.province_id} key={idx}>{val.province}</option>
                                        )
                                    })
                                }
                            </select>
                            <select onChange={(e) => onGetSummaryOrigin(e.target.value)} className="w-[100%] h-[40px] px-2 py-1 border border-gray-300 rounded-md">
                                <option value="">Select City</option>
                                {
                                    province.length === 0? null :
                                    cityOrigin.map((val, idx) => {
                                        return (
                                            <option value={[val.city_id, val.type, val.city_name]} key={idx}>{val.type} {val.city_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <div className="font-medium">
                                Destination
                            </div>
                            <select onChange={(e) => onGetCityDestination(e.target.value)} className="w-[100%] h-[40px] px-2 py-1 border border-gray-300 rounded-md">
                                <option value="">Select Province</option>
                                {
                                    province.map((val, idx) => {
                                        return (
                                            <option value={val.province_id} key={idx}>{val.province}</option>
                                        )
                                    })
                                }
                            </select>
                            <select onChange={(e) => onGetSummaryDestination(e.target.value)} className="w-[100%] h-[40px] px-2 py-1 border border-gray-300 rounded-md">
                                <option value="">Select City</option>
                                {
                                    province.length === 0? null :
                                    cityDestination.map((val, idx) => {
                                        return (
                                            <option value={[val.city_id, val.type, val.city_name]} key={idx}>{val.type} {val.city_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="flex flex-col justify-between gap-2">
                            <div className="font-medium">
                                Courier
                            </div>
                            <select name="" id="" className="w-[100%] h-[40px] px-2 py-1 border border-gray-300 rounded-md">
                                <option value="">Select Courier</option>
                                <option value="">JNE</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-[400px] border border-gray-300 px-4 py-4">
                        <div className="font-medium mb-3">
                            Summary
                        </div>
                        <div className="border border-bottom border-gray-300 mb-3"></div>
                        <table className="w-[100%] mb-3">
                            <tbody>
                                <tr className="border border-gray-300">
                                    <td className="px-2 py-3 font-medium">Origin</td>
                                    <td className="px-2 py-3">: {summary.origin}</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="px-2 py-3 font-medium">Destination</td>
                                    <td className="px-2 py-3">: {summary.destination}</td>
                                </tr>
                                <tr className="border border-gray-300">
                                    <td className="px-2 py-3 font-medium">Courier</td>
                                    <td className="px-2 py-3">: JNE</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={onCheckOngkir} className="w-[100%] h-[30px] bg-blue-500 text-white font-bold">
                            Cek Ongkir
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center my-5">
                <table className="w-[100%] mb-3">
                    <tbody>
                        <tr>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RajaOngkir
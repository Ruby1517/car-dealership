import { useEffect, useState } from 'react';
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import axios from 'axios'
import { userRequest } from '../../requestMethods';
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;


export default function FeaturedInfo() {
    const [income, setIncome] = useState([])
    const [perc, setPerc] = useState(0)

    // useEffect(() => {
    //     const getIncome = async() => {
    //         try {
    //             const res = await axios.get("http://localhost:5000/api/orders/income", {token: `Bearer ${TOKEN}`})
    //             setIncome(res.data)
    //             setPerc((res.data[1].total * 100) / res.data[0].total - 100)
                
    //         } catch(err){

    //         }
    //     }
    //     getIncome()
    // },[]);

    console.log(income)
    
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">${income[1]?.total}</span>
                <span className="featuredMoneyRate">%{Math.floor(perc)}{" "}
                {perc < 0 ? (

                     
                    <ArrowDownward  className='featuredIcon negative'/>
                    ) : (
                        <ArrowUpward className='featuredIcon' />
                        
                    )}
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>    
        </div>
        <div className="featuredItem">
            <span className="featredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">-1.4
                <i className="ri-arrow-down-line featuredIcon negative"></i>
                    
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>    
        </div>
        <div className="featuredItem">
            <span className="featredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,215</span>
                <span className="featuredMoneyRate">
                    2.4
                    <i className="ri-arrow-up-line featuredIcon"></i>
                    <ArrowUpward className='featuredIcon' />
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>    
        </div>

    </div>
  )
}

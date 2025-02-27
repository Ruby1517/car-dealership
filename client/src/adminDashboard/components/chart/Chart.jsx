import './chart.css';
import { 
  LineChart, 
  Line, 
  XAxis, 
  CartesianGrid, 
  Tooltip,  
  ResponsiveContainer } from 'recharts';

 


export default function Chart({title, data, dataKey, grid, currentUser }) {
  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        {/* <ResponsiveContainer width="100%" aspect={4 / 1}> */}
`          <LineChart width={800} height={300} data={data} >
              <XAxis dataKey="name" stroke="#5550bd" />
              <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            { grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="4 5" /> }
           </LineChart> 
        {/* </ResponsiveContainer> */}
    </div>
  )
}

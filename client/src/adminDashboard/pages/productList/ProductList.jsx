import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCalls';
import Sidebar from '../../components/sidebar/Sidebar';


export default function ProductList() {
  const dispatch = useDispatch()
  const products = useSelector((state)=> state.product.products)

  useEffect(()  => {
    getProducts(dispatch)
  },[dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
}





const columns = [
  { field: '_id', headerName: 'ID', width: 220},
  { field: 'cars', headerName: 'Image', width: 250, renderCell: (params)=> {
    return (
        <div className='productListItem'>
            <img className='productListImg' src={params.row.imgs[0]} alt="" />
            {params.row.make}
        </div>
    )
} },
  
  { field: 'model', headerName: 'Model', width: 200 },
  {
    field: 'desc',
    headerName: 'Description',
    width: 320,
  }, 
  {
    field: 'year',
    headerName: 'Year',
    width: 120,
  },
  {
    field: 'vin',
    headerName: 'Vin',
    width: 160,
  },
 
  {
      field: 'action',
      headerName: "Action",
      width: 150,
      renderCell: (params)=> {
          return (
              <>
              <Link to= {"/admin/product/" + params.row._id}>
                  <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row._id)}/>
              </>
          )
      }
  }
  
];

  return (
    <div className='side-container'>
      <div>
        <Sidebar />
      </div>
      <div className='productList'>
        <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=> row._id}
        pageSize={8}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </div>
    
  )
}

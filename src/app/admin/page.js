"use client"
import image from '../images/1.png';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Admin() {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getproductlist");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-dark">
        <nav className="navbar bg-dark pb-3">
          <div className="container">
            <a className="navbar-brand"><Image src={image} width={300} height={30} /></a>
          </div>
        </nav>
      </div>
      <div className='container'>
        <h3 className='text-center mt-5'>Admin Dashboard</h3>
        <div className='row mt-5'>
            <div className='col-sm-8'>
                <h4>Product Details</h4>
            </div>
            <div className='col-sm-4 text-center'>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Modal content goes here.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mt-5'>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Manufacturer</th>
                <th>Model Name</th>
                <th>Model Number</th>
                <th>Type of Solar Panel</th>
                <th>Capacity</th>
                <th>Efficiency</th>
                <th>Dimensions</th>
                <th>Weight</th>
                <th>Frame Material</th>
                <th>Cell Type</th>
                <th>Number of Cells</th>
                <th>Warrenty</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product) => (
                <tr key={product.Product_ID}>
                  <td>{product.Product_ID}</td>
                  <td>{product.Manufacturer}</td>
                  <td>{product.Model_Name}</td>
                  <td>{product.Model_Number}</td>
                  <td>{product.Type_of_Solar}</td>
                  <td>{product.Capacity}</td>
                  <td>{product.Efficiency}</td>
                  <td>{product.Dimensions}</td>
                  <td>{product.Weight}</td>
                  <td>{product.Frame_Material}</td>
                  <td>{product.Cell_Type}</td>
                  <td>{product.Number_of_Cells}</td>
                  <td>{product.Warranty}</td>
                  <td>{product.Price}</td>
                  <td>{product.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

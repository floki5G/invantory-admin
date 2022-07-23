import React, { useState } from "react";
import { deleteProduct } from "../../../action/product.action";
import { Layout } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import './style.css'

export const Getproduct = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.getproduct)

    const __deleteproduct = (_id) => {
        dispatch(deleteProduct({ _id: _id }))
    }


    return (
        <Layout childrens>

            <div className=" m-3  position-relative" >
                <div>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                    <h1 className="d-flex justify-content-center">product List</h1>
                </div>


                <div className="p-md-3 mt-md-5" style={{ overflowX: "scroll", overflowY: "hidden", boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}>
                    <table className="table " >
                        <thead>
                            <tr>

                                <th scope="col" >Product</th>
                                <th scope="col" >Category</th>
                                <th scope="col" >Stock</th>
                                <th scope="col" >Price</th>
                                <th scope="col" > createdAt </th>

                                <th scope="col" > delete </th>
                                <th scope="col"> edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selector.product.map((e, index) => {

                                return (
                                    <tr >

                                        <Link to={`/catalog/product/updateproduct/${e._id}`}>

                                            <td>{e.name}</td>
                                        </Link>
                                        <td>{e.category}</td>
                                        <td>{e.caseQuantity}</td>
                                        <td>{e.retailPrice}</td>
                                        <td>{e.createdAt}</td>
                                        <td>
                                            <button onClick={() => __deleteproduct(e._id)} className="dropdown-item" href="#"><i className="fas fa-trash"></i></button>

                                        </td>
                                        <td>
                                            <Link to={`/catalog/product/updateproduct/${e._id}/${e.name}/${e.caseQuantity}/${e.retailPrice}/${e.unitholesalePrice}/${e.description}/${e.category}/${e.bestsaller}/${e.styleAndDimensions}`} ><div><i className="fas fa-wrench"></i></div></Link>

                                        </td>


                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>


            </div>


            {/* <button onClick={() => __deleteproduct(e._id)}> delete  </button> */}




        </Layout >
    )
}
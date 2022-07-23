import React from "react";
import { Layout } from "../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../../action/category";

export const Getcategory = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.getcategory)
    const __deletecategories = (_id) => {
        dispatch(deleteCategory({ _id: _id }))
    }

    return (
        <Layout childrens>

            <div>
                <div>
                    <div>

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Library</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Data</li>
                            </ol>
                        </nav>
                        <h1 className="d-flex justify-content-center">ADD PRODUCT</h1>
                    </div>
                </div>



                <div className="p-md-3 mt-md-5" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset" }}>
                    <table className="table " >
                        <thead>
                            <tr>

                                <th scope="col" >_id</th>
                                <th scope="col" >Category</th>
                                <th scope="col" >edit</th>
                                <th scope="col" >delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selector.categories.map((e) => {
                                return (
                                    <>
                                        <tr >
                                            <Link to={`/catalog/category/updatecategory/${e._id}/${e.name}`}> <td>{e._id}
                                            </td>
                                            </Link>
                                            <td>{e.name}</td>
                                            <Link to={`/catalog/category/updatecategory/${e._id}/${e.name}`}> <td>

                                                <i className="fas fa-wrench"></i>
                                            </td>
                                            </Link>
                                            <td>
                                                <button style={{ "border": "none" }} onClick={() => __deletecategories(e._id)} href="#"><i className="fas fa-trash"></i></button>

                                            </td>
                                        </tr>
                                    </>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

            </div>
        </Layout>
    )
}




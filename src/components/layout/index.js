import React, { setOpen } from "react"
import { Homepage } from "../../containers/home"
import { Link } from "react-router-dom"
import { adminsingout } from "../../action"
import { useSelector, useDispatch } from "react-redux"

// css 
import './index.css'
import { useState } from "react"

export const Layout = (props) => {

    const auth = useSelector((state) => state.adminsignIn.user);

    const [open, setOpen] = useState(true)

    const dispatch = useDispatch()
    const signout = () => {
        dispatch(adminsingout())
    }

    return (
        <>

            <div className="container-fluid p-0">

                <div className="bg-secondary ">
                    <div className="p-3"> curder </div>
                </div>


                <div className=" d-flex ">

                    <div className="mr-auto sidebar-toggler">
                        <div className="toggler" onClick={() => open ? setOpen(false) : setOpen(true)} style={{}}>
                            {(open) ? <i class="fas fa-chevron-right"></i> : <i class="fas fa-chevron-down"></i>}
                        </div>
                    </div>
                    <div className=" d-flex">

                        <Link to={`/profile/${auth._id}/${auth.firstName}/${auth.lastName}/${auth.email}/${auth.role}`}>
                            <button className="mx-5 my-2" style={{"border":"none","background":"yellow"}}>
                                profile
                            </button>

                        </Link>
                        <button className="mx-5 my-2" style={{"border":"none","background":"yellow"}}


                      onClick={signout}>signout</button>
                    </div>
                </div>


                <div className="d-flex m-0 "  >

                    <div className="bg-danger menu-toggler">


                        <div id="sidebar" className={open ? "active" : null}>
                            <div className="sidebar-header">
                                <h3> ADMIN</h3>
                            </div>

                            <ul className="list-unstyled components">




                                <li>
                                    <Link to="/catalog/product">product</Link>

                                </li>
                                <li>

                                    <Link to="/catalog/category">category</Link>
                                </li>
                                <li>

                                    <Link to="/catalog/categorylist">categorylist</Link>
                                </li>
                                <li>

                                    <Link to="/catalog/productlist">productlist</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="bg-light" style={{ height: "90vh", width: "100%", overflowY: "scroll", overflowX: "hidden" }}>

                        {
                            props.childrens ?

                                <div >

                                    {props.children}


                                </div>


                                :
                                props.children

                        }
                    </div>

                </div>



            </div>

        </>
    )
}
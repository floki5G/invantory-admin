import React, { useState } from "react"
import { Layout } from "../index"
import { useDispatch ,useSelector} from "react-redux"
import { createcategory } from "../../../action/category"
import { components } from "react-select";

export const Category = () => {

    const [sname, setName] = useState('')

    const dispatch = useDispatch()

    const addcategory = {
        name: sname,
    
    }
    const categorySubbmit = (e) => {

        e.preventDefault();
        alert("category created successfull")

        dispatch(createcategory(addcategory))
    }


    return (



        <Layout childrens>
            <div>
                <div>

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                    <h1 className="d-flex justify-content-center">ADD CATEGORY</h1>
                </div>
                <form onSubmit={(e) => categorySubbmit(e)}>


                    <div className="col me-md-3 d-flex  justify-content-center" >

                        <div className="mt-5 p-3" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}>
                            <div className="p-4  mx-5">
                                <div className="">
                                    CATEGORY NAME
                                </div>
                                <input className="my-2" type="text" name="name" value={sname} placeholder="name" onChange={(e) => setName(e.target.value)} />
                            </div>


                        </div>
                  
                    </div>
                    <div className="my-4 d-flex justify-content-center">
                        <button className="px-5 py-1" style={{ "border": "none" }}>send</button>
                    </div>
                </form>

            </div>
        </Layout >
    )
}


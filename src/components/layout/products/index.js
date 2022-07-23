import React, { useState } from "react";
import { Layout } from "../index"
import { product } from "../../../action/product.action";
import { useSelector, useDispatch } from "react-redux";
import './index.css'
import { Link } from "react-router-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

export const Product = (props) => {

    var formData = new FormData();


    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [bestsaller, setBestsaller] = useState("");
    const [img, setImg] = useState('')
    const [pakingimg, pakingsetImg] = useState('')
    const [description, setDescription] = useState("");
    const [retailPrice, setRetailPrice] = useState("");
    const [unitholesalePrice, setUnitholesalePrice] = useState('')
    const [category, setCategory] = useState("");
    const [value, setValue] = useState('');

    const [inputfield, setInputfield] = useState([{
        sku: "",
        options: "",
        weight: "",
        dimensions: {
            length: "",
            breadth: "",
            height: ""
        }
    }
    ])
    // const category = useSelector((state) => state.auth);
    const categories = useSelector((state) => state.getcategory.categories);


    const dispatch = useDispatch();


    let styleAndDimensions = []
    if (inputfield.length > 0) {

        styleAndDimensions = inputfield.map(e => {
            return {
                // images: e.image
                options: e.options,
                sku: e.sku,
                weight: e.weight,
                dimensions: {
                    length: e.length,
                    breadth: e.breadth,
                    height: e.height
                }
            }

        })

    }
    const _product = {
        name: name,
        bestsaller: bestsaller,
        caseQuantity: quantity,
        retailPrice: retailPrice,
        unitholesalePrice: unitholesalePrice,
        description: description,
        category: category,
        tags: value,
        styleAndDimensions: styleAndDimensions,
    }
    console.log(_product)
    const productsubbmit = () => {

        alert("product create successfull")

        formData.append("name", name)
        formData.append("bestsaller", bestsaller)
        formData.append("caseQuantity", quantity)
        formData.append("retailPrice", retailPrice)
        formData.append("unitholesalePrice", unitholesalePrice)
        formData.append("description", description)
        formData.append("category", category)
        formData.append("tags", JSON.stringify(value))
        formData.append("styleAndDimensions", JSON.stringify(styleAndDimensions))

        dispatch(product(_product))
    }


    const handelChange = (e, index) => {
        const values = [...inputfield]
        values[index][e.target.name] = e.target.value
        setInputfield(values)
    }
    const handleFiles = () => {
        setInputfield([...inputfield, {
            sku: "",
            options: "",
            weight: "",
            dimensions: {
                length: "",
                breadth: "",
                height: ""
            }
        }])

    }



    // category list 
    const categoryList = (category, _options = []) => {

        for (let _category of category) {
            _options.push({
                category: _category._id,
                name: _category.name,
            })


        }
        return _options;
    }





    return (
        <Layout childrens>

            <>
                <div className="m-2 m-md-0 position-relative">
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

                    <div className="">Basic information</div>

                    <div className="row bg-light">

                        <div className="col-12 col-md-8 m-md-4  p-md-5 " style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}>

                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name " name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />

                            <label for="bestsaller">Mark as bestsaller</label>

                            <input className="form-check-input" id=" bestsaller" type="checkbox" name="bestsaller" value="yes" onChange={(e) => setBestsaller('yes')} />

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label for="quantity">case quantity</label>
                                    <input className="form-control" id="quantity " type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="case quantity" />

                                </div>
                                <div className="form-group col-md-4">
                                    <label for="retailPrice">retailPrice</label>
                                    <input className="form-control" id=" retailPrice" type="number" name="retailPrice" value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} placeholder="retailPrice" />

                                </div>
                                <div className="form-group col-md-4">
                                    <label for="unitholesalePrice">unitholesalePrice</label>
                                    <input className="form-control" id="unitholesalePrice " type="number" name="unitholesalePrice" value={unitholesalePrice} onChange={(e) => setUnitholesalePrice(e.target.value)} placeholder="unitholesalePrice" />
                                </div>
                            </div>


                            <label for="description">description</label>
                            <textarea type="text" className="form-control " id="description" name="description" onChange={(e) => setDescription(e.target.value)} placeholder="description"></textarea>
                        </div>

                        <div className="col me-md-3" >

                            <div className=" mt-5 p-3" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}>

                                <label for="categories">Categories</label>
                                <input className="form-control" type="text" multiple="multiple" name="categories" list="categories" onChange={(e) => setCategory(e.target.value)} />

                                <datalist id="categories">
                                    {
                                        categoryList(categories).map(e => <option value={e.category}>{e.name} </option>)
                                    }

                                </datalist>
                                <div className="mt-3">
                                    <Link to="">   Add Categories</Link>
                                </div>
                            </div>



                        </div>



                    </div>
                </div>
                {/* <input type="number" name="offers" value={offers} onChange={(e) => setOffers(e.target.value)} placeholder="offers" /> */}


                {/* styleAndDimensions */}

                <div className="bg-light" >
                    <div className="mx-md-3 p-md-3" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }} >
                        <div className="d-flex justify-content-center">
                            style & dimensions
                        </div>
                        <div style={{ overflowX: "scroll", overflowY: "hidden" }}>

                            <div>

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">option</th>
                                            <th scope="col">sku</th>
                                            <th scope="col">weight</th>
                                            <th scope="col">length</th>
                                            <th scope="col">breadth</th>
                                            <th scope="col">height</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {inputfield.map((inputfield, index) => (


                                            <tr>

                                                <td><input type="text" id="options" name="options" className="form-control" onChange={(e) => handelChange(e, index)} placeholder="options" />   </td>
                                                <td>  <input className="form-control" id=" sku" type="text" name="sku" onChange={(e) => handelChange(e, index)} placeholder="sku" /></td>
                                                <td><input type="number" id="weight" name="weight" className="form-control" onChange={(e) => handelChange(e, index)} placeholder="weight" /></td>
                                                <td> <input type="number" id="length" name="length" className="form-control" onChange={(e) => handelChange(e, index)} placeholder="length" /></td>
                                                <td><input type="number" id="breadth" name="breadth" className="form-control" onChange={(e) => handelChange(e, index)} placeholder="breadth" />  </td>
                                                <td> <input type="number" id="height" name="height" className="form-control" onChange={(e) => handelChange(e, index)} placeholder="height" /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                                <button onClick={() => handleFiles()}> clicllk here</button>
                            </div>
                        </div>
                    </div>
                </div>






                {/* <input type="number" name="optionStatus" value={ } onChange={(e) => setName(e.target.value)} placeholder="optionStatus" /> */}

                <div className="m-md-3 bg-dark p-md-5  d-flex justify-content-center">
                    <button type="button" className="bg-success btn btn-light px-5 " onClick={(e) => productsubbmit(e)}><i class="fas fa-folder-plus"></i> Save </button>

                </div>


            </>
        </Layout>

    )
}
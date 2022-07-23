import React, { useEffect, useState } from "react";
import { Layout } from "../index"
import { updatProduct } from "../../../action/product.action";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import './index.css'
import { Link } from "react-router-dom";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

export const Updateproduct = (props) => {

    const { _id, name, caseQuantity, retailPrice, unitholesalePrice, description, category, bestsaller, styleanddimensions } = useParams()

    const _fproduct = useSelector((state) => state.getproduct.product);
    const productdetail = _fproduct.filter((e) => e._id === _id)


    const [sname, setName] = useState(name);
    const [squantity, setQuantity] = useState(caseQuantity);
    const [sbestsaller, setBestsaller] = useState(bestsaller);
    const [sdescription, setDescription] = useState(description);
    const [sretailPrice, setRetailPrice] = useState(retailPrice);
    const [sunitholesalePrice, setUnitholesalePrice] = useState(unitholesalePrice)
    const [scategory, setCategory] = useState(category);


    const categories = useSelector((state) => state.getcategory.categories);
    const dispatch = useDispatch();


    const _updateproduct = {
        _id: _id,
        name: sname,
        bestsaller: sbestsaller,
        caseQuantity: squantity,
        retailPrice: sretailPrice,
        unitholesalePrice: sunitholesalePrice,
        description: sdescription,
        category: scategory,
        styleAndDimensions: styleanddimensions,
    }


    const categoryList = (category, _options = []) => {

        for (let _category of category) {
            _options.push({
                category: _category._id,
                name: _category.name,
            })

        }
        return _options;
    }





    const productsubbmit = () => {
        alert("product update successfull")

        dispatch(updatProduct(_updateproduct))

    }

    return (
        <Layout childrens>

            <>

                {productdetail.map((e) => (
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
                                    <input type="text" className="form-control" id="name" name="name" value={sname} onChange={(e) => setName(e.target.value)} placeholder="name" />


                                    <label for="bestsaller">Mark as bestsaller</label>

                                    <input className="form-check-input" id=" bestsaller" type="checkbox" value={sbestsaller} name="bestsaller" onChange={(e) => setBestsaller(e.target.value)} />


                                    <div className="form-row">
                                        <div className="form-group col-md-4">
                                            <label for="quantity">case quantity</label>
                                            <input className="form-control" id="quantity " type="number" name="quantity" value={squantity} onChange={(e) => setBestsaller(e.target.value)} placeholder="case quantity" />


                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="retailPrice">retailPrice</label>
                                            <input className="form-control" id=" retailPrice" type="number" name="retailPrice" value={sretailPrice} onChange={(e) => setRetailPrice(e.target.value)} placeholder="retailPrice" />


                                        </div>
                                        <div className="form-group col-md-4">
                                            <label for="unitholesalePrice">unitholesalePrice</label>
                                            <input className="form-control" id="unitholesalePrice " type="number" name="unitholesalePrice" value={sunitholesalePrice} onChange={(e) => setUnitholesalePrice(e.target.value)} placeholder="unitholesalePrice" />

                                        </div>
                                    </div>


                                    <label for="description">description</label>
                                    <textarea type="text" className="form-control " id="description" name="description" value={sdescription} onChange={(e) => setDescription(e.target.value)} placeholder="description"></textarea>

                                </div>

                                <div className="col me-md-3" >

                                    <div className=" mt-5 p-3" style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}>

                                        <label for="categories">Categories</label>
                                        <input className="form-control" type="text" multiple="multiple" name="categories" list="categories" value={scategory} onChange={(e) => setCategory(e.target.value)} />

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








                        {/* <input type="number" name="optionStatus" value={ } onChange={(e) => setName(e.target.value)} placeholder="optionStatus" /> */}
                        <Link to="/">

                            <div className="m-md-3 bg-dark p-md-5  d-flex justify-content-center">
                                <button type="button" className="bg-success btn btn-light px-5 " onClick={(e) => productsubbmit(e)}><i class="fas fa-folder-plus"></i> Save </button>
                            </div>
                        </Link>


                    </>
                ))}
            </>
        </Layout>

    )


}


import React, { useEffect, useState } from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Cards from '../componets/Cards'



export default function Home() {

    const [search, setsearch] = useState("");
    const [foodcat, setFoodcat] = useState([]);
    const [fooditem, setFooditem] = useState([]);

    const loaddata = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        response = await response.json();

        //console.log(response[0], response[1]);
        setFooditem(response[1]);
        setFoodcat(response[0]);

    }
    useEffect(() => {
        loaddata()

    }, [])



    return (
        <div>
            <div><Navbar /></div>

            <div><div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption " style={{ zIndex: "10" }}>
                        <div className="d-flex justify- content- center">
                            <input className="form-control me-2" type="search" placeholder="Search" value={search} onChange={(e)=> {setsearch(e.target.value)}} aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                    </div>

                    <div class="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?momos" className="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?noodles" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div></div>

            <div className='container'>
                {
                    foodcat !== []
                        ? foodcat.map((data) => {
                            return (<div className='row mb-3'>
                                <div key={data._id} className='fs-3'>
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {fooditem !== [] ? fooditem.filter((item) => (item.CategoryName == data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                                    .map(filteritems => {
                                        return (
                                            <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                                                <Cards foodName={filteritems.name}
                                                    options={filteritems.options[0]}
                                                    imgSrc={filteritems.img} ></Cards>

                                            </div>
                                        )
                                    }) : <div> No such  data Food </div>}

                            </div>

                            )
                        })
                        : <div> "'"""""</div>


                }


            </div>

            <div><Footer /></div>


        </div>
    )
}

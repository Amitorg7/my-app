import React, { Fragment, useState } from "react";
import { fstore } from "../config/firebaseConfig";
import "./submit.css";

const Submit = () => {

  const [data, setData] = useState({
    name:'',
    quantity:'',
    price: ''
  });

  const handleInput=(e)=>{
    const {name, value}= e.target;
    setData({...data, [name]: value});
  };

  const handleSubmit=()=>{
    fstore.collection("info").add({...data}).then(()=>{
      setData({
        name:"",
        quantity: "",
        price:"",
      })
      alert("data saved");
    })
    .catch((e) =>{
      alert("something wrong");
    });
  }

  return (
    <Fragment>
      <section id="info">
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="information">
                <div className="header">
                  <h3>Insert Details</h3>
                  <div className="underline"></div>
                </div>

                <div className="textbox-home">
                  <input
                    type="text"
                    onChange={handleInput}
                    value= {data.name}
                    placeholder="Full Name"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="textbox-home">
                  <input
                    onChange={handleInput}
                    value= {data.quantity}
                    type="number"
                    placeholder="quantity"
                    id="number"
                    name="quantity"
                  />
                </div>
                <div className="textbox-home">
                  <input
                    type="number"
                    onChange={handleInput}
                    value= {data.price}
                    placeholder="price"
                    id="batch"
                    name="price"
                  />
                </div>
                <div className="submit">
                  <button 
                  onClick={handleSubmit}
                  className="btn btn-home">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Submit;

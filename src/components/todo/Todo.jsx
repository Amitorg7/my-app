import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fstore } from "../../config/firebaseConfig";
import "./todostyl.css";

const Todo = () => {
  const [userInformation, setUserInformation] = useState([]);
  useEffect(() => {
    fstore
      .collection("info")
      .onSnapshot({ includeMetadataChanges: true }, (snap) => {
        const info = [];
        snap.docs.forEach((doc) => {
          info.push({ ...doc.data(), id: doc.id });
        });
        setUserInformation(info);
      });
  });
  return (
    <Fragment>
      <section id="members">
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="information">
                  <div className="col-md-6">
                    <div className="info-header">
                      {/* <div className="underline"></div> */}
                      <h1>ITEM LIST</h1>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="addbtn">
                      <Link to="/Submit">
                        <button>add item</button>
                      </Link>
                    </div>
                  </div>
                  <div className="table">
                    <table>
                      <tr>
                        <th>NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                      </tr>
                      {userInformation.length > 0 &&
                        userInformation.map((item) => (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                          </tr>
                        ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Todo;

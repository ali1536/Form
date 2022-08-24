import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

class MyComponent extends Component {

    render() {

        return (
            <div id='ParentElement' className='pt-2'>
                <Form className=''>
                    <h4>Create Order</h4>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='username' className="form-label">User Name</label>
                        <input type="text" className="border border-dark form-control" />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='createdat' className=" form-label">Created at</label>
                        <input type={'date'} value={"2022-08-22"} className="border border-dark form-control" />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='source' className=" form-label">Source</label>
                        <input type="text" className="border border-dark form-control" />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='warehouse' className=" form-label">Warehouse</label>
                        <input type="text" className="border border-dark form-control" />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='ordernumer' className=" form-label">Order Number</label>
                        <input type="text" className="border border-dark form-control" />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='shipingdate' className=" form-label">Shiping Date</label>
                        <input type={'date'} value={"2022-08-22"} className="border border-dark form-control" />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='destination' className=" form-label">Destination</label>
                        <input type="text" className="border border-dark form-control" />
                    </div>
                </Form>
            </div >
        )
    }
}

export default MyComponent;
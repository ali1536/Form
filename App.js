import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './style.css';

class MyComponent extends Component {

    render() {
        return (
            <div id='ParentElement' className='pt-2'>
                <Form name='myform'>
                    <h4>Create Order</h4>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='username' className="fw-bold form-label">User Name</label>
                        < input type="text" className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='createdat' className="fw-bold form-label">Created at</label>
                        < input type={'date'} value={"2022-08-28"} className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='source' className="fw-bold form-label">Source</label>
                        < input type="text" className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='warehouse' className="fw-bold form-label">Warehouse</label>
                        < input type="text" className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='ordernumer' className="fw-bold form-label">Order Number</label>
                        < input type="text" className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='shipingdate' className="fw-bold form-label">Shiping Date</label>
                        < input type={'date'} value={"2022-09-20"} className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='destination' className="fw-bold form-label">Destination</label>
                        < input type="text" className="border border-dark form-control" required />
                    </div> <br />
                    <div className='text-center'>
                        <button type={'submit'} data-bs-toggle="modal" data-bs-target="#reg-modal"
                            className="mb-3 fw-bold btn btn-light">Submit</button>
                    </div>
                    <div className="madal text-center" tabIndex={-1} aria-labelledby="modal-title" aria-hidden="true">
                        <div className='modal-dialog'>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"> Are You Sure ? </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-secondary">Save </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div >
        )
    }
}

export default MyComponent;
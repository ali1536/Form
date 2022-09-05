import React, { Component } from 'react';
import './style.css';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            createdAt: new Date(),
            source: ""
        };
    }
    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value });
    };
    handleCreatedAtChange = (event) => {
        this.setState({ createdAt: event.target.value });
    };
    handleSourceChange = (event) => {
        this.setState({ source: event.target.value });
    };
    handleWarehouseChange = (event) => {
        this.setState({ warehouse: event.target.value });
    };
    handleOrderNumberChange = (event) => {
        this.setState({ ordernumber: event.target.value });
    };
    handleShipingDataChange = (event) => {
        this.setState({ shipingdata: event.target.value });
    };
    handleDestinationChange = (event) => {
        this.setState({ destination: event.target.value });
    }
    handleSumit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className='pt-2'>
                <form>
                    <h4>Create Order</h4>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='username' className="fw-bold form-label">User Name</label>
                        <input type="text"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                            className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='createdat' className="fw-bold form-label">Created at</label>
                        <input type={'date'}
                            onChange={this.handleCreatedAtChange}
                            value={this.state.createdAt}
                            className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='source' className="fw-bold form-label">Source</label>
                        <input type="text"
                            onChange={this.handleSourceChange}
                            value={this.state.source}
                            className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='warehouse' className="fw-bold form-label">Warehouse</label>
                        <input type="text"
                            onChange={this.handleWarehouseChange}
                            value={this.state.Warehouse}
                            className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='ordernumer' className="fw-bold form-label">Order Number</label>
                        <input type={'number'}
                            onChange={this.handleOrderNumberChange}
                            value={this.state.ordernumber}
                            className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='shipingdate' className="fw-bold form-label">Shiping Date</label>
                        <input type={'date'}
                            onChange={this.handleShipingDataChange}
                            value={this.state.shipingdata}
                            className="border border-dark form-control" required />
                    </div>
                    <div className="inputsgroup my-2 w-25">
                        <label htmlFor='destination' className="fw-bold form-label">Destination</label>
                        <input type="text"
                            onChange={this.handleDestinationChange}
                            value={this.state.destination}
                            className="border border-dark form-control" required />
                    </div> <br />
                    <div className='text-center'>
                        <button type={'submit'} data-bs-toggle="modal"
                            data-bs-target="#my-modal"
                            className="mb-3 fw-bold btn btn-secondary">Submit</button>
                    </div>
                    <div id='my-modal' className="modal text-center" tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title"> Are You Sure ? </h5>
                                    <button type="button" className="btn-close"
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-footer">
                                    <button type="button"
                                        className="btn btn-secondary"
                                        OnClientClick="this.disabled = true; this.value = 'در حال پردازش اطلاعات ...';"
                                        UseSubmitBehavior="false"
                                        onClick={this.handleSumit}
                                        data-bs-dismiss="modal">Yes</button>
                                    <button type="button" className="btn btn-secondary" >No </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}

export default MyComponent;
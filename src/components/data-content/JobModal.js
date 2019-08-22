import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
    CustomInput 
  } from "reactstrap";


class JobModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeJob: this.props.activeJob
        };
    }

    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "radio") {
          value = e.target.checked;
        }
        const activeJob = { ...this.state.activeJob, [name]: value };
        this.setState({ activeJob });
    };

    render() {
        const { toggle, onSave } = this.props;
        return(
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}> Job Details </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="department">Department</Label>
                  <Input
                    type="select"
                    name="department"
                    value={this.state.activeJob.department.name}
                    onChange={this.handleChange}
                    required
                    >
                    <option value=""></option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Legal">Legal</option>
                    <option value="Sales">Sales</option>
                    <option value="Product">Product</option>
                    <option value="Administrative">Administrative</option>
                    <option value="Finance">Finance</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={this.state.activeJob.title}
                    onChange={this.handleChange}
                    placeholder="Enter Job Title"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    value={this.state.activeJob.description}
                    onChange={this.handleChange}
                    placeholder="Enter Job description"
                    required
                  />
                </FormGroup>
                <FormGroup check>
                  <Label for="status" check required>Status</Label>
                    <div>
                    <CustomInput
                      type="radio"
                      name="status"
                      id="open"
                    //   checked={this.state.activeJob.status === 1 ? true:false}
                      onChange={this.handleChange}
                      label="Open"
                    />
                    <CustomInput  
                      type="radio"
                      name="status"
                      id="on_hold"
                    //   checked={this.state.activeJob.status === 2 ? true:false}
                      onChange={this.handleChange}
                      label="On Hold"
                    />
                    <CustomInput 
                      type="radio"
                      name="status"
                      id="closed"
                    //   checked={this.state.activeJob.status === 3 ? true:false}
                      onChange={this.handleChange}
                      label="Closed"
                    />
                    </div>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <button onClick={() => onSave(this.state.activeJob)}>
                Save
              </button>
            </ModalFooter>
          </Modal>
        )
    }
}


export default JobModal;

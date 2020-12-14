import React from "react"
import {
  FormGroup,
  Input,
  CustomInput,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader, Button, Form, Label,
  // Button
} from "reactstrap"
import {history} from "../../../../history";
import axios from "axios";
import {toast} from "react-toastify"
import SweetAlert from "react-bootstrap-sweetalert";

import Flatpickr from "react-flatpickr";

import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import InputMaskDate from "../edit/InputMaskDate";
import {MapPin, User} from "react-feather";
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";

toast.configure(); // required to work with toast
var generator = require('generate-password');

class AddUser extends React.Component {
  state = {
      Alert : false,
    data: {
      id: null,
      name: null,
      last_name: null,
      maiden_name: null,
      first_name: null,
      society_related: "Moneynci",
      email: null,
      role:"Client EOR",
      password: generator.generate({length: 10, numbers: true}),
      civility: "Monsieur",
      martial_status: "Célibataire",
      children_number: null,
      mobile_number: null,
      office_number: null,
      military_service: 'Service militaire',
      birth_date: null,
      personal_address: null,
      personal_address_2: null,
      personal_zip_code: null,
      personal_city: null,
      personal_country: null,
      society_name: null,
      society_address: null,
      society_address_2: null,
      society_zip_code: null,
      society_city: null,
      society_country:null
    }
  }

  handleAlert = (value) => {
    this.setState({ Alert : value })
    if (value === false)
      history.push("/app/user/conslist")
  }

  sendForm = (data, type) => {
    axios.post(global.config.server_url + "/register", {
      email: data.email,
      password: data.password,
      name: data.first_name + " " + data.last_name,
      role: data.role,
      parent_id:localStorage.getItem("userid")
    })
        .then(function(result) {
          console.log(result)
          if (result.data.accessToken) {
            axios
                .post(global.config.server_url + "/personal_information", {
                  user_id: 10,
                  last_name: data.last_name,
                  maiden_name: data.maiden_name,
                  first_name: data.first_name,
                  society_related: data.society_related,
                  civility: data.civility,
                  martial_status: data.martial_status,
                  children_number: data.children_number,
                  mobile_number: data.mobile_number,
                  office_number: data.office_number,
                  military_service: data.military_service,
                  birth_date: data.birth_date,
                  personal_address: data.personal_address,
                  personal_address_2: data.personal_address_2,
                  personal_zip_code: data.personal_zip_code,
                  personal_city: data.personal_city,
                  personal_country: data.personal_country,
                  society_name: data.society_name,
                  society_address: data.society_address,
                  society_address_2: data.society_address_2,
                  society_zip_code: data.society_zip_code,
                  society_city: data.society_city,
                  society_country: data.society_country,
                  notes: data.notes,
                  parent_id:localStorage.getItem("userid")
                })
                .then(response => {
                  if(type == 1){
                      history.push("/pages/create-contract/" +response.data.user_id )
                  }
                })
                .catch(error => {
                  console.log(error);
                  toast.error("API injoignable.")
                })
          } else
            toast.error("Création annulé: l'utilisateur existe déjà.")
        })
        .catch(function(error) {
          toast.error("API injoignable" + data.name)
        })
  }
    handledob = date => {
      var lstDate = date.split("/");
      // var MyDateString = test.getFullYear() + "-" + ('0' + (test.getMonth()+1)).slice(-2) + "-" + ('0' + test.getDate()).slice(-2)
      if(lstDate.length == 3) {
        var MyDateString = lstDate[2] + "-" + lstDate[1] + "-" + lstDate[0];
        this.setState({
          dob: MyDateString
        })
      }
        this.setState({ data: { ...this.state.data, birth_date: MyDateString} })
    }

  handleSubmit = (type) => {
    this.sendForm(this.state.data, type)
    if(type == 0)
      this.handleAlert(true)
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Création client</CardTitle>
        </CardHeader>
        <SweetAlert success title="Utilisateur enregistré"
                    show={this.state.Alert}
                    onConfirm={() => this.handleAlert(false)}
        >
          <p className="sweet-alert-text">Merci de copier son mot de passe : <b>{this.state.data.password}</b></p>
        </SweetAlert>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <FormGroup style={{marginBottom:'15px'}}>
                <div className="d-inline-block mr-1">
                  <Radio
                      label="Monsieur"
                      color="primary"
                      defaultChecked={true}
                      name="civility"
                      onChange={() => this.setState({ data: { ...this.state.data, civility: "Monsieur"}})}
                  />
                </div>
                <div className="d-inline-block mr-1">
                  <Radio
                      label="Madame"
                      color="success"
                      defaultChecked={false}
                      name="civility"
                      onChange={() => this.setState({ data: { ...this.state.data, civility: "Madame"}})}
                  />
                </div>
                <div className="d-inline-block mr-1">
                <Radio
                    label="Mlle"
                    color="info"
                    defaultChecked={false}
                    name="civility"
                    onChange={() => this.setState({ data: { ...this.state.data, civility: "Mlle"}})}
                />
              </div>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Input
                    type="text" placeholder="Nom"
                    required
                    value={this.state.data.last_name}
                    onChange={e => this.setState({ data: { ...this.state.data, last_name: e.target.value} })}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Input
                    type="pass"
                    placeholder="Mot de passe"
                    required
                    value={this.state.data.password}
                    onChange={e => this.setState({ data: { ...this.state.data, password: e.target.value} })}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Input
                    type="text" placeholder="Prénom"
                    required
                    onChange={e => this.setState({ data: { ...this.state.data, first_name: e.target.value} })}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <CustomInput type="select" name="role" required id="role" onChange={e => this.setState({ data: { ...this.state.data, role: e.target.value} })}>
                  <option>Client EOR</option>
                  <option>Client MAXO</option>
                  <option>Consultant EOR</option>
                  <option>Consultant MAXO</option>
                  <option>Technician EOR</option>
                  <option>Technician MAXO</option>
                  <option>Admin</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <InputMaskDate
                    onChange={e => this.handledob(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Input
                    type="text" placeholder="Nom Société"
                    onChange={e => this.setState({ data: { ...this.state.data, society_name: e.target.value} })}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup style={{marginBottom:'15px',marginTop:'5px'}}>

                  <div className="d-inline-block mr-1">
                    <Radio
                        label="Célibataire"
                        color="primary"
                        defaultChecked={true}
                        name="martial_status"
                        onChange={() => this.setState({ data: { ...this.state.data, martial_status: "Célibataire"}})}
                    />
                  </div>
                  <div className="d-inline-block mr-1">
                    <Radio
                        label="Pacsé"
                        color="success"
                        defaultChecked={false}
                        name="martial_status"
                        onChange={() => this.setState({ data: { ...this.state.data, martial_status: "Pacsé"}})}
                    />
                  </div>
                  <div className="d-inline-block mr-1">
                    <Radio
                        label="Marié"
                        color="info"
                        defaultChecked={false}
                        name="martial_status"
                        onChange={() => this.setState({ data: { ...this.state.data, martial_status: "Marié"}})}
                    />
                  </div>
                  <div className="d-inline-block mr-1">
                    <Radio
                        label="Veuf"
                        color="warning"
                        defaultChecked={false}
                        name="martial_status"
                        onChange={() => this.setState({ data: { ...this.state.data, martial_status: "Veuf"}})}
                    />
                  </div>
                  <div className="d-inline-block mr-1">
                    <Radio
                        label="Divorcé"
                        color="danger"
                        defaultChecked={false}
                        name="martial_status"
                        onChange={() => this.setState({ data: { ...this.state.data, martial_status: "Divorcé"}})}
                    />
                  </div>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup style={{marginBottom:'15px',marginTop:'5px'}}>
                  <div className="d-inline-block mr-1">
                    <Radio
                        label="Service militaire"
                        color="primary"
                        defaultChecked={true}
                        name="military_service"
                        onChange={() => this.setState({ data: { ...this.state.data, military_service: "Service militaire"}})}
                    />
                  </div>
                  <div className="d-inline-block mr-1">
                    <Radio
                        label="oui"
                        color="success"
                        defaultChecked={false}
                        name="military_service"
                        onChange={() => this.setState({ data: { ...this.state.data, military_service: "oui"}})}
                    />
                  </div>
                  <div className="d-inline-block mr-1">
                    <Radio
                        label="non"
                        color="info"
                        defaultChecked={false}
                        name="military_service"
                        onChange={() => this.setState({ data: { ...this.state.data, military_service: "non"}})}
                    />
                  </div>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Input
                    type="Input-Number" placeholder="Téléphone fixe"
                    onChange={e => this.setState({ data: { ...this.state.data, office_number: e.target.value} })}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Input
                    type="Input-Number" placeholder="Téléphone portable"
                    onChange={e => this.setState({ data: { ...this.state.data, mobile_number: e.target.value} })}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Input
                    type="number"
                    placeholder="Nombre d'enfants"
                    value={this.state.data.children_number}
                    onChange={e => this.setState({ data: { ...this.state.data, children_number: e.target.value} })}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Input
                    type="email"
                    placeholder="Email"
                    required
                    value={this.state.data.email}
                    onChange={e => this.setState({ data: { ...this.state.data, email: e.target.value} })}
                />
              </FormGroup>
            </Col>
            {/*<Col md="6" sm="12">*/}
            {/*  <FormGroup>*/}
            {/*    <CustomInput type="select" name="select" id="city" onChange={e => this.setState({ data: { ...this.state.data, society_related: e.target.value} })}>*/}
            {/*      <option>EOR</option>*/}
            {/*      <option>Moneynci</option>*/}
            {/*      <option>Les deux</option>*/}
            {/*    </CustomInput>*/}
            {/*  </FormGroup>*/}
            {/*</Col>*/}
            {/*<Col md="6" sm="12">*/}
            {/*  <FormGroup>*/}
            {/*    <Input*/}
            {/*        type="text" placeholder="Nom de jeune fille"*/}
            {/*        onChange={e => this.setState({ data: { ...this.state.data, maiden_name: e.target.value} })}*/}
            {/*    />*/}
            {/*  </FormGroup>*/}
            {/*</Col>*/}
          </Row>
          <Row>
            <Col className="mt-1" md="6" sm="12">
            <h5 className="mb-1">
              <User className="mr-50" size={16} />
              <span className="align-middle">Adresse du client</span>
            </h5>
              <FormGroup>
                <Input
                    type="text" placeholder="Adresse 1"
                    onChange={e => this.setState({ data: { ...this.state.data, personal_address: e.target.value} })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type="text" placeholder="Adresse 2"
                    onChange={e => this.setState({ data: { ...this.state.data, personal_address_2: e.target.value} })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type="number" placeholder="CP"
                    onChange={e => this.setState({ data: { ...this.state.data, personal_zip_code: e.target.value} })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type="text" placeholder="Ville"
                    onChange={e => this.setState({ data: { ...this.state.data, personal_city: e.target.value} })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type="text" placeholder="Pays "
                    onChange={e => this.setState({ data: { ...this.state.data, personal_country: e.target.value} })}
                />
              </FormGroup>
          </Col>
            <Col className="mt-1" md="6" sm="12">
              <h5 className="mb-1">
                <MapPin className="mr-50" size={16} />
                <span className="align-middle">Adresse de sa société</span>
              </h5>
              <FormGroup>
                <Input
                    type="text" placeholder="Adresse 1"
                    onChange={e => this.setState({ data: { ...this.state.data, society_address: e.target.value} })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type="text" placeholder="Adresse 2"
                    onChange={e => this.setState({ data: { ...this.state.data, society_address_2: e.target.value} })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type="number" placeholder="CP"
                    onChange={e => this.setState({ data: { ...this.state.data, society_zip_code: e.target.value} })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type="text" placeholder="Ville"
                    onChange={e => this.setState({ data: { ...this.state.data, society_city: e.target.value} })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type="text" placeholder="Pays"
                    onChange={e => this.setState({ data: { ...this.state.data, society_country: e.target.value} })}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <CustomInput type="select" name="select" id="status">
                  <option>Consultant</option>
                  <option>Mike</option>
                  <option>José</option>
                  <option>Donald</option>
                </CustomInput>
              </FormGroup>
            </Col>
          </Row>
          <h4>Notes</h4>
          <Row>
            <Col md="12" sm="12">
              <FormGroup>
                <Input type="textarea" rows="5" placeholder="Notes"
                       onChange={e => this.setState({ data: { ...this.state.data, notes: e.target.value} })}/>
              </FormGroup>
            </Col>
            <Col md={{ size: 8, offset: 4 }}>
              <Button.Ripple
                  color="primary"
                  className="mr-1 mb-1"
                  onClick={() => this.handleSubmit(0)}
              >
                Enregistrer
              </Button.Ripple>
              <Button.Ripple
                  color="primary"
                  className="mr-1 mb-1"
                  onClick={() => this.handleSubmit(1)}
              >
                Prestations
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default AddUser

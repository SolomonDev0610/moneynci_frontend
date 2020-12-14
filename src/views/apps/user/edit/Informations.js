import React from "react"
import {
    Row,
    Col,
    Button,
    Form,
    Input,
    Label,
    FormGroup, CustomInput, CardBody,
} from "reactstrap"
import Flatpickr from "react-flatpickr";
import { User, MapPin } from "react-feather"
import "flatpickr/dist/themes/light.css";
import "../../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import InputMaskDate from "./InputMaskDate"
//import { updateUsersInformation } from "../../../../redux/actions/form/informationsFormActions"
import axios from "axios";
import moment from "moment"
import {toast} from "react-toastify";
import {history} from "../../../../history";
import Radio from "../../../../components/@vuexy/radio/RadioVuexy";

class UserAccountTab extends React.Component {
  state = {
    dob: this.props.perso["birth_date"],
    username: this.props.data.username,
    p_password: this.props.data.p_password,
    civility: this.props.perso.civility ? this.props.perso.civility : "Monsieur",
    first_name: this.props.perso.first_name,
    last_name: this.props.perso.last_name,
    role: this.props.data.role ? this.props.data.role : "Client EOR",
    email: this.props.data.email,
    contact_number: this.props.perso.contact_number,
    office_number: this.props.perso.office_number,
    martial_status: this.props.perso.martial_status ? this.props.perso.martial_status : "Célibataire",
    children_number: this.props.perso.children_number,

      personal_address: this.props.perso.personal_address,
      personal_address_2: this.props.perso.personal_address_2,
      personal_zip_code: this.props.perso.personal_zip_code,
      personal_city: this.props.perso.personal_city,
      personal_country: this.props.perso.personal_country,
      society_name: this.props.perso.society_name,
      society_address: this.props.perso.society_address,
      society_address_2: this.props.perso.society_address_2,
      society_zip_code: this.props.perso.society_zip_code,
      society_city: this.props.perso.society_city,
      society_country: this.props.perso.society_country,
      military_service: this.props.perso.military_service? this.props.perso.military_service : "Service militaire",
  }

  updateUsersInformation = information => {
    const Config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }
    console.log(localStorage.getItem("token"))
    axios
        .put(global.config.server_url+"/users/" + this.props.id, {
          name: information.username,
          email: information.email,
          role: information.role,
          p_password: information.p_password
        }, Config)
        .then(response => {
          axios
              .put(global.config.server_url+"/personal_information/" + this.props.id,{
                civility: information.civility,
                first_name: information.first_name,
                last_name: information.last_name,
                birth_date: information.dob,
                martial_status: information.martial_status,
                children_number: information.children_number,
                mobile_number: information.contact_number,
                office_number: information.office_number,

                  personal_address: information.personal_address,
                  personal_address_2: information.personal_address_2,
                  personal_zip_code: information.personal_zip_code,
                  personal_city: information.personal_city,
                  personal_country: information.personal_country,
                  society_address: information.society_address,
                  society_address_2: information.society_address_2,
                  society_zip_code: information.society_zip_code,
                  society_city: information.society_city,
                  society_country: information.society_country,
                  society_name: information.society_name,
                  military_service: information.military_service,
              }, Config)
              .then(response => {
                  history.push("/app/user/conslist")
                  toast.info("Modifications enregistrées");
              })
              .catch(error => {
                console.log(error);
                toast.error("API injoignable.")
              })
        })
        .catch(error => {
          console.log(error);
          toast.error("API injoignable.")
        })
  }

  ifDateExist(name)
  {
    if (this.props.perso)
      return new Date(this.props.perso[name]);
    else
      return "";
  }

  ifExist(name)
  {
    if (this.props.perso) {
        return this.props.perso[name];
    }else
        return "";
  }

  ifDataExist(name)
  {
    if (this.props.data) {
        return this.props.data[name];
    }else
      return "";
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
  }
  updateData = e => {
    e.preventDefault();
    this.updateUsersInformation(this.state);
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Form onSubmit={this.updateData}>
            <Row>
                <Col md="6" sm="12">
                    <FormGroup style={{marginBottom:'15px'}}>
                        <div for="civility" style={{marginTop:'10px',marginBottom:'5px'}}>Civilité</div>
                        {this.props.perso['civility'] != null &&
                         <>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Monsieur"
                                    color="primary"
                                    defaultChecked={this.props.perso['civility'] == 'Monsieur'? true: false}
                                    name="civility"
                                    onChange={() => this.setState({civility: "Monsieur"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Madame"
                                    color="success"
                                    defaultChecked={this.props.perso['civility'] == "Madame"? true: false}
                                    name="civility"
                                    onChange={() => this.setState({civility: "Madame"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Mlle"
                                    color="info"
                                    defaultChecked={this.props.perso['civility'] == "Mlle"? true: false}
                                    name="civility"
                                    onChange={() => this.setState({civility: "Mlle"})}
                                />
                            </div>
                        </>
                        }
                        {this.props.perso['civility'] == null &&
                        <>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Monsieur"
                                    color="primary"
                                    defaultChecked={true}
                                    name="civility"
                                    onChange={() => this.setState({civility: "Monsieur"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Madame"
                                    color="success"
                                    defaultChecked={false}
                                    name="civility"
                                    onChange={() => this.setState({civility: "Madame"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Mlle"
                                    color="info"
                                    defaultChecked={false}
                                    name="civility"
                                    onChange={() => this.setState({civility: "Mlle"})}
                                />
                            </div>
                        </>
                        }
                    </FormGroup>
                </Col>
                <Col md="6" sm="12"></Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="name">Nom</Label>
                        <Input
                            type="text"
                            defaultValue={this.ifExist("last_name")}
                            onChange={e => this.setState({ last_name: e.target.value })}
                            id="name"
                            placeholder="Name"
                        />
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup style={{marginBottom:'15px'}}>
                        <Label for="p_password">Password</Label>
                        <Input
                            type="text"
                            defaultValue={this.ifDataExist('p_password')}
                            onChange={e => this.setState({ p_password: e.target.value })}
                            id="p_password"
                            placeholder="Password"
                        />
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="name">Prénom</Label>
                        <Input
                            type="text"
                            defaultValue={this.ifExist("first_name")}
                            onChange={e => this.setState({ first_name: e.target.value })}
                            id="name"
                            placeholder="Name"
                        />
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="role">Role</Label>
                        {this.ifDataExist("role") != null &&
                            <Input type="select" name="select" id="role" defaultValue={this.ifDataExist("role")}
                                   onChange={e => this.setState({role: e.target.value})}>
                                <option>Client EOR</option>
                                <option>Client MAXO</option>
                                <option>Consultant EOR</option>
                                <option>Consultant MAXO</option>
                                <option>Technician EOR</option>
                                <option>Technician MAXO</option>
                                <option>Admin</option>
                            </Input>
                        }
                        {this.ifDataExist("role") == null &&
                        <Input type="select" name="select" id="role" defaultValue="Client EOR"
                               onChange={e => this.setState({role: e.target.value})}>
                            <option>Client EOR</option>
                            <option>Client MAXO</option>
                            <option>Consultant EOR</option>
                            <option>Consultant MAXO</option>
                            <option>Technician EOR</option>
                            <option>Technician MAXO</option>
                            <option>Admin</option>
                        </Input>
                        }
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label className="d-block" for="dob">
                            Date de naissance
                        </Label>
                        {this.props.perso["birth_date"] != null &&
                            <InputMaskDate
                                defaultValue={this.props.perso["birth_date"]}
                                onChange={e => this.handledob(e.target.value)}
                            />
                        }
                        {this.props.perso["birth_date"] == null &&
                            <InputMaskDate
                                onChange={e => this.handledob(e.target.value)}
                            />
                        }
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="child_nbr">Nom Société</Label>
                        <Input
                            type="text"
                            id="society_name"
                            placeholder="Nom Société"
                            defaultValue={this.ifExist("society_name")}
                            onChange={e => this.setState({ society_name: e.target.value })}
                        />
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup style={{marginBottom:'15px',marginTop:'5px'}}>
                        {this.props.perso['martial_status'] != null &&
                        <>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Célibataire"
                                    color="primary"
                                    defaultChecked={this.props.perso['martial_status'] == 'Célibataire'? true: false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Célibataire"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Pacsé"
                                    color="success"
                                    defaultChecked={this.props.perso['martial_status'] == "Pacsé"? true: false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Pacsé"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Marié"
                                    color="info"
                                    defaultChecked={this.props.perso['martial_status'] == "Marié"? true: false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Marié"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Veuf"
                                    color="warning"
                                    defaultChecked={this.props.perso['martial_status'] == "Veuf"? true: false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Veuf"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Divorcé"
                                    color="danger"
                                    defaultChecked={this.props.perso['martial_status'] == "Divorcé"? true: false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Divorcé"})}
                                />
                            </div>
                        </>
                        }
                        {this.props.perso['martial_status'] == null &&
                        <>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Célibataire"
                                    color="primary"
                                    defaultChecked={true}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Célibataire"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Pacsé"
                                    color="success"
                                    defaultChecked={false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Pacsé"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Marié"
                                    color="info"
                                    defaultChecked={false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Marié"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Veuf"
                                    color="warning"
                                    defaultChecked={false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Veuf"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Divorcé"
                                    color="danger"
                                    defaultChecked={false}
                                    name="martial_status"
                                    onChange={() => this.setState({martial_status: "Divorcé"})}
                                />
                            </div>
                        </>
                        }
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup style={{marginBottom:'15px',marginTop:'5px'}}>
                        {this.props.perso['military_service'] != null &&
                        <>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Service militaire"
                                    color="primary"
                                    defaultChecked={this.props.perso['military_service'] == 'Service militaire'? true: false}
                                    name="military_service"
                                    onChange={() => this.setState({military_service: "Service militaire"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="oui"
                                    color="success"
                                    defaultChecked={this.props.perso['military_service'] == "oui"? true: false}
                                    name="military_service"
                                    onChange={() => this.setState({military_service: "oui"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="non"
                                    color="info"
                                    defaultChecked={this.props.perso['military_service'] == "non"? true: false}
                                    name="military_service"
                                    onChange={() => this.setState({military_service: "non"})}
                                />
                            </div>
                        </>
                        }
                        {this.props.perso['military_service'] == null &&
                        <>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="Service militaire"
                                    color="primary"
                                    defaultChecked={true}
                                    name="military_service"
                                    onChange={() => this.setState({military_service: "Service militaire"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="oui"
                                    color="success"
                                    defaultChecked={false}
                                    name="military_service"
                                    onChange={() => this.setState({military_service: "oui"})}
                                />
                            </div>
                            <div className="d-inline-block mr-1">
                                <Radio
                                    label="non"
                                    color="info"
                                    defaultChecked={false}
                                    name="military_service"
                                    onChange={() => this.setState({military_service: "non"})}
                                />
                            </div>
                        </>
                        }
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="officenumber">Office Number</Label>
                        <Input
                            type="text"
                            id="officenumber"
                            defaultValue={this.ifExist("office_number")}
                            placeholder="Office Number"
                            onChange={e => this.setState({ office_number: e.target.value })}
                        />
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="contactnumber">Contact Number</Label>
                        <Input
                            type="text"
                            id="contactnumber"
                            placeholder="Contact Number"
                            defaultValue={this.ifExist("mobile_number")}
                            onChange={e => this.setState({ contact_number: e.target.value })}
                        />
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="child_nbr">Nombre d'enfants</Label>
                        <Input
                            type="number"
                            id="child_nbr"
                            placeholder="Nombre d'enfants"
                            defaultValue={this.ifExist("children_number")}
                            onChange={e => this.setState({ children_number: e.target.value })}
                        />
                    </FormGroup>
                </Col>
                <Col md="6" sm="12">
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="text"
                            defaultValue={this.ifDataExist('email')}
                            onChange={e => this.setState({ email: e.target.value })}
                            id="email"
                            placeholder="Email"
                        />
                    </FormGroup>
                </Col>
                <Col className="mt-1" md="6" sm="12">
                    <h5 className="mb-1">
                        <User className="mr-50" size={16} />
                        <span className="align-middle">Adresse du client</span>
                    </h5>
                    <FormGroup>
                        <Label for="address1">Adresse1</Label>
                        <Input
                            type="text"
                            id="address1"
                            defaultValue={this.ifExist("personal_address")}
                            onChange={e => this.setState({ personal_address: e.target.value })}
                            placeholder="Address personnelle1"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address1">Adresse2</Label>
                        <Input
                            type="text"
                            id="address2"
                            defaultValue={this.ifExist("personal_address_2")}
                            onChange={e => this.setState({ personal_address_2: e.target.value })}
                            placeholder="Address personnelle2"
                        />
                    </FormGroup>
                    <FormGroup form-group-lg>
                        <Label for="pincode">Code postal</Label>
                        <Input
                            type="number"
                            id="pincode"
                            placeholder="Code postal de personnel"
                            defaultValue={this.ifExist("personal_zip_code")}
                            onChange={e => this.setState({ personal_zip_code: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Ville</Label>
                        <Input
                            type="text"
                            defaultValue={this.ifExist("personal_city")}
                            onChange={e => this.setState({ personal_city: e.target.value })}
                            id="city"
                            placeholder="Ville personnel"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Country">Pays</Label>
                        <Input
                            type="text"
                            defaultValue={this.ifExist("personal_country")}
                            onChange={e => this.setState({ personal_country: e.target.value })}
                            id="Country"
                            placeholder=">Pays personnel"
                        />
                    </FormGroup>
                </Col>
                <Col className="mt-1" md="6" sm="12">
                    <h5 className="mb-1">
                        <MapPin className="mr-50" size={16} />
                        <span className="align-middle">Adresse de sa société</span>
                    </h5>
                    <FormGroup>
                        <Label for="address1">Adresse1</Label>
                        <Input
                            type="text"
                            id="address1"
                            placeholder="Address de société1"
                            defaultValue={this.ifExist("society_address")}
                            onChange={e => this.setState({ society_address: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address2">Adresse2</Label>
                        <Input
                            type="text"
                            id="address2"
                            placeholder="Address de société2"
                            defaultValue={this.ifExist("society_address_2")}
                            onChange={e => this.setState({ society_address_2: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup form-group-lg>
                        <Label for="pincode">Code postal</Label>
                        <Input
                            type="number"
                            id="pincode"
                            placeholder="Code postal de société"
                            defaultValue={this.ifExist("society_zip_code")}
                            onChange={e => this.setState({ society_zip_code: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Ville</Label>
                        <Input
                            type="text"
                            defaultValue={this.ifExist("society_city")}
                            onChange={e => this.setState({ society_city: e.target.value })}
                            id="city"
                            placeholder="Ville société"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Country">Pays</Label>
                        <Input
                            type="text"
                            defaultValue={this.ifExist("society_country")}
                            onChange={e => this.setState({ society_country: e.target.value })}
                            id="Country"
                            placeholder="Pays de la société"
                        />
                    </FormGroup>
                </Col>
              <Col
                className="d-flex justify-content-end flex-wrap mt-2"
                sm="12"
              >
                <Button.Ripple className="mr-1" color="primary" type="submit">
                  Modifier
                </Button.Ripple>
                {/*<Button.Ripple color="flat-warning">Reset</Button.Ripple>*/}
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}
export default UserAccountTab

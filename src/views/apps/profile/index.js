import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button,
  Table
} from "reactstrap"
import { Edit, Trash, Lock, Check } from "react-feather"
import { Link } from "react-router-dom"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import userImg from "../../../assets/img/portrait/small/avatar-s-18.jpg"
import "../../../assets/scss/pages/users.scss"
import axios from "axios";
import {
  Globe,
  Info,
  MessageCircle,
  MapPin
} from "react-feather"

class UserView extends React.Component {
  state = {
    rowData: [],
    persoData:[],
  }

  async componentDidMount() {
    const Config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }
    var userid = localStorage.getItem("userid");

    await axios.get(global.config.server_url + "/users/" + userid, Config).then(response => {
      console.log(response.data);
      let rowData = response.data;
      let persoData = response.data.personal_informations;
      console.log(persoData);
      this.setState({ rowData, persoData })
    })
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <CardTitle><Globe className="primary" size={25} /> Account</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="mx-0" col="12">
                  <Col className="pl-0" sm="12">
                    <Media className="d-sm-flex d-block">
                      <Media body>
                        <Row>
                          <Col sm="9" md="6" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Civilité
                                </div>
                                <div>{this.state.persoData['civility']}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Nom
                                </div>
                                <div>{this.state.persoData['last_name']}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Prénom
                                </div>
                                <div className="text-truncate">
                                  <span>{this.state.persoData['first_name']}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col md="12" lg="5">
                            <div className="users-page-view-table">
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Password
                                </div>
                                <div>{this.state.rowData['p_password']}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Role
                                </div>
                                <div>{this.state.rowData['role']}</div>
                              </div>
                              <div className="d-flex user-info">
                                <div className="user-info-title font-weight-bold">
                                  Email
                                </div>
                                <div>
                                  <span>{this.state.rowData['email']}</span>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Media>
                    </Media>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <CardHeader>
                <CardTitle><Info className="success" size={25} /> Information</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Date Nais
                    </div>
                    <div> {this.state.persoData['birth_date']}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Statut Martial
                    </div>
                    <div>{this.state.persoData['martial_status']}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Service Nat
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['military_service']}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Nb d'enfant(s)
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['children_number']}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Tel mob
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['mobile_number']}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Tel bur
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['office_number']}</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card style={{minHeight:'280px'}}>
              <CardHeader>
                <CardTitle><MessageCircle className="warning" size={25} /> Notes</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div>
                      {this.state.persoData['notes'] && this.state.persoData['notes'].split('\n').map(function(item) {
                        return (<>{item}<br/></>)
                      })}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <CardHeader>
                <CardTitle><MapPin className="info" size={25} /> Personnel</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Adresse1
                    </div>
                    <div> {this.state.persoData['personal_address']}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Adresse2
                    </div>
                    <div>{this.state.persoData['personal_address_2']}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      CP
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['personal_zip_code']}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      VILLE
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['personal_city']}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      PAYS
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['personal_country']}</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6">
            <Card>
              <CardHeader>
                <CardTitle><MapPin className="info" size={25} /> Société: {this.state.persoData['society_name']}</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="users-page-view-table">
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Adresse1
                    </div>
                    <div> {this.state.persoData['society_address']}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      Adresse2
                    </div>
                    <div>{this.state.persoData['society_address_2']}</div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      CP
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['society_zip_code']}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      VILLE
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['society_city']}</span>
                    </div>
                  </div>
                  <div className="d-flex user-info">
                    <div className="user-info-title font-weight-bold">
                      PAYS
                    </div>
                    <div className="text-truncate">
                      <span>{this.state.persoData['society_country']}</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default UserView

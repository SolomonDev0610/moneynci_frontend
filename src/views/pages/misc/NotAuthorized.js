import React from "react"
import { Card, CardBody, Button, Row, Col } from "reactstrap"
import notAuthImg from "../../../assets/img/pages/not-authorized.png"

class NotAuthorized extends React.Component {
  render() {
    return (
      <Row className="m-0">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center">
              <img
                src={notAuthImg}
                alt="notAuthImg"
                className="img-fluid align-self-center mt-75"
              />
              <h1 className="font-large-2 my-2">Permissions insuffisantes !</h1>
              <p className="pt-2 mb-0">
                Il semblerait que vous n'avez pas les permissions suffisantes pour accéder à cettre page
              </p>
              <p className="pb-2">
                Vous devez d'abord vous connecter.
              </p>
              <Button.Ripple
                tag="a"
                href="/user_manage/pages/login"
                color="primary"
                size="lg"
                className="mt-2"
              >
                Me Connecter
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default NotAuthorized

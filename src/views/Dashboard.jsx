/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Dashboard extends React.Component {
  
  redirectToTab(url) {
    url = `/admin${url}`
    this.props.history.push(url);
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats card-hover" onClick={() => { this.redirectToTab('/giao-thiet-bi'); }}>
                <CardHeader>
                  <CardTitle tag="h3">Giao thiết bị</CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6">
              <Card className="card-stats card-hover" onClick={() => { this.redirectToTab('/nhan-thiet-bi'); }}>
                <CardHeader>
                  <CardTitle tag="h3">Nhận thiết bị</CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6" onClick={() => { this.redirectToTab('/quan-ly-nhan-vien'); }}>
              <Card className="card-stats card-hover">
                <CardHeader>
                  <CardTitle tag="h3">Quản lý nhân viên</CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="6" md="6" sm="6" onClick={() => { this.redirectToTab('/quan-ly-thiet-bi'); }}>
              <Card className="card-stats card-hover">
                <CardHeader>
                  <CardTitle tag="h3">Quản lý thiết bị</CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;

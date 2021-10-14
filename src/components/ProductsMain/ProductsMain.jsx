import { useState } from "react";
import { Nav, Tab, Row, Col, Form } from "react-bootstrap";
import ProductsApi from "./ProductsApi/ProductsApi";
import ProductsOwn from "./ProductsOwn/ProductsOwn";

export const ProductsMain = () => {
  const [showOnlyPublished, setShowOnlyPublished] = useState(false);

  return (
    <div className="container">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Products Api</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">
                  Products Own
                  <Form.Check
                    onChange={(e) => setShowOnlyPublished(e.target.checked)}
                    type="checkbox"
                    label="Only published"
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ProductsApi />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ProductsOwn showOnlyPublished={showOnlyPublished} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ProductsMain;

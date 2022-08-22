import React from "react";
import { Col, Pagination, Row } from "antd";

class PaginationPanel extends React.Component {
  state = {
    current: 1,
  };

  handleChange = (page) => {
    this.setState({ current: page }, () => {
      this.props.onSearchMovie(this.state.current);
    });
  };

  render() {
    const { current } = this.state;
    const { total } = this.props;

    return (
      <Row justify="center">
        <Col>
          <Pagination
            current={current}
            total={total}
            hideOnSinglePage={true}
            showSizeChanger={false}
            onChange={this.handleChange}
          />
        </Col>
      </Row>
    );
  }
}

export default PaginationPanel;

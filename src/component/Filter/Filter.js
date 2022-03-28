import React, { useState,useEffect } from "react";
import { Checkbox, Col, DatePicker, Radio, Row, Space } from "antd";
import "../../assets/css/modal.css";
import db from "../../database";

const defaultCheckedList = [];
const checkboxOptions = [ 1, 2, 3, 4, 5 ];

const plainOptions = [];
const FilterTicket = (props) => {
    const value = props.value;
    const handleFilter = props.handleFilter;


    // const onChange = e => {
    //     setValue(e.target.value);
    // };

    const handleReset = () => {
        
    }

    return (
        <>
            <h2 className="header-modal" style={{ marginBottom: 10 }}>
        Lọc vé
      </h2>
      <Row>
        <Col span={12}>
          <Space direction="vertical">
            Từ ngày
            <DatePicker picker="date" format="DD/MM/YYYY" />
          </Space>
        </Col>

        <Col span={12}>
          <Space direction="vertical">
            Đến ngày
            <DatePicker picker="date" format="DD/MM/YYYY" />
          </Space>
        </Col>
      </Row>
      <div style={{ marginTop: 20 }}>
        <Space direction="vertical">
          Tình trạng sử dụng
          <Radio.Group>
            <Radio value="Tất cả" onChange={value}>
              Tất cả
            </Radio>
            <Radio value="Đã sử dụng" onChange={value}>
              Đã sử dụng
            </Radio>
            <Radio value="Chưa sử dụng" onChange={value}>
              Chưa sử dụng
            </Radio>
            <Radio value="Hết hạn" onChange={value}>
              Hết hạn
            </Radio>
          </Radio.Group>
        </Space>
      </div>
      <div style={{ marginTop: 20, width: "100%" }}>
        <Space direction="vertical">
          Cổng Check - in
          <Checkbox.Group style={{ width: "100%" }}>
            <Row>
              <Col span={8}>
                <Checkbox value="F">{plainOptions[0]}Cổng 1</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="A">{plainOptions[1]}Cổng 2</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B">{plainOptions[2]}Cổng 3</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C">{plainOptions[3]}Cổng 4</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D">{plainOptions[4]}Cổng 5</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E">{plainOptions[5]}Cổng 6</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Space>
      </div>
      <div
        style={{
          width: 130,
          marginTop: 20,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <button
          type="button"
          className="button"
          style={{
            width: "100%",
            display: "block",
            textAlign: "center",
            lineHeight: 2,
          }}
          onClick={() => {
            handleFilter();
          }}
        >
          Lọc
        </button>
      </div>
    </>
  );
};

export default React.memo(FilterTicket);
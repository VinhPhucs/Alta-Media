import React from "react"
import { DatePicker, TimePicker, Space, Input, Checkbox, Dropdown, Menu, Button, Row, Col } from "antd"
import { DownOutlined } from '@ant-design/icons';
import ButtonGroup from "antd/lib/button/button-group";

import "../../assets/css/modal.css";

const menu = (
    <Menu>
        <Menu.Item key="1"  >
            Đang áp dụng
        </Menu.Item>
        <Menu.Item key="2" >
            Tắt
        </Menu.Item>

    </Menu>
);

const addticket = () => {
    return (
        <>
            <Space direction="vertical">
                <h2 className="header-modal">Thêm gói vé</h2>
                <Space direction="vertical">
                    <label className="required"> Tên gói vé</label>

                    <Input required placeholder="Nhập tên gói vé" style={{ width:'275px'}} />
                </Space>

                <Row style={{marginTop:10}}>
                    <Col span={12}>
                        <Space direction="vertical">
                            Ngày áp dụng
                            <Space>
                                <DatePicker
                                    picker="date"
                                    format="DD/MM/YYYY"
                                    placeholder="dd/mm/yy"
                                />
                                <TimePicker
                                    placeholder="hh:mm:ss"
                                />
                            </Space>
                        </Space>
                    </Col>

                    <Col span={12}>
                        <Space direction="vertical">
                            Ngày hết hạn
                            <Space>
                                <DatePicker
                                    picker="date"
                                    format="DD/MM/YYYY"
                                    placeholder="dd/mm/yy"
                                />
                                <TimePicker
                                    placeholder="hh:mm:ss"
                                />
                            </Space>
                        </Space>
                    </Col>
                </Row>

                <Space direction="vertical" style={{ marginTop: 10 }}>
                    Giá vé áp dụng
                    <Checkbox>Vé lẻ (vnđ/vé) với giá
                        <Input className="input-small" placeholder="Giá vé" style={{width:'70px'}} /> <p style={{position:'relative',top:'-30px',left:'205px'}}>/vé</p>
                    </Checkbox>
                    <Checkbox>Combo vé với giá
                        <Input className="input-small" placeholder="Giá vé" style={{width:'70px'}} />/<Input style={{ width: 72, margin: 5 }} placeholder="Giá vé" /> vé
                    </Checkbox>
                </Space>

                <Space direction="vertical" >
                    Tình trạng
                    <Dropdown overlay={menu}>
                        <Button style={{ borderRadius: 8 }}>
                            Đang áp dụng <DownOutlined style={{ color: "#FF993C" }} />
                        </Button>
                    </Dropdown>
                </Space>
                <div className="annotate"> * là thông tin bắt buộc</div>
                
                <div style={{ width: 300, marginTop: 20, display: "block", marginLeft: "auto", marginRight: "auto" }} >
                    <ButtonGroup style={{display:"flex", justifyContent:"space-between"}}>
                        <button type="button" className="button" style={{ width: "45%",display: "block", textAlign: "center", lineHeight:2 }}>Hủy </button>
                        <button type="button" className="button-save" style={{ width: "45%",display: "block", textAlign: "center", lineHeight:2 }}>Lưu</button>
                    </ButtonGroup>
                </div>

            </Space>
        </>
    )
}

export default React.memo(addticket)
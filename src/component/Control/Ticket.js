import { DatePicker, Radio, Space } from "antd"
import React from "react"

const plainOptions = ['Tất cả', 'Đã đối soát', 'Chưa đối soát'];

const Ticket = (props) => {
    const value = props.value;
    const handleFilter = props.handleFilter;

    const handleReset = () => {};

    return (
        <>
            <Space direction="vertical" style={{fontSize:16}}>
                <h2>Lọc vé</h2>
                <Space align="start">
                    <div className="filter-label">Tình trạng đối soát</div>
                    <Radio.Group>
                        <Space direction="vertical">
                            <Radio value="Tất cả" onChange={value}>Tất cả</Radio>
                            <Radio value="Đã đối soát"  onChange={value}>Đã đối soát</Radio>
                            <Radio value= "Chưa đối soát"  onChange={value}>Chưa đối soát</Radio>
                        </Space>
                    </Radio.Group>
                </Space>
                <Space align="baseline">
                    <div className="filter-label">Loại vé</div>
                    Vé cổng
                </Space>
                <Space>
                    <div className="filter-label">Từ ngày</div>
                    <DatePicker
                        format="DD/MM/YYYY"
                        disabled
                    >
                    </DatePicker>
                </Space>
                <Space>
                    <div className="filter-label">Đến ngày</div>
                    <DatePicker
                        picker="date"
                        format="DD/MM/YYYY"
                        placeholder="dd/mm/yy"
                    >
                    </DatePicker>
                </Space>
                <div style={{ width: 130, marginTop: 20, display: "block", marginLeft: "auto", marginRight: "auto" }} >
                    <button 
                    type="button" 
                    className="button"  
                    style={{ width: "100%", display: "block", textAlign: "center", lineHeight: 2 }}
                    onClick={() => {
                        handleFilter();
                      }}
                    
                    >
                        Lọc
                    </button>
                </div>
            </Space>
        </>
    )
}

export default React.memo(Ticket)
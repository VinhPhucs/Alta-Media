import { DatePicker, Radio, Space } from "antd"
import React from "react"

const plainOptions = ['Tất cả', 'Đã đối soát', 'Chưa đối soát'];

const Ticket = () => {
    const [value, setValue] = React.useState(1);

    const onChange = e => {
        setValue(e.target.value);
    };

    return (
        <>
            <Space direction="vertical" style={{fontSize:16}}>
                <h2>Lọc vé</h2>
                <Space align="start">
                    <div className="filter-label">Tình trạng đối soát</div>
                    <Radio.Group value={value} onChange={onChange}>
                        <Space direction="vertical">
                            <Radio value={1}>{plainOptions[0]}</Radio>
                            <Radio value={2}>{plainOptions[1]}</Radio>
                            <Radio value={3}>{plainOptions[2]}</Radio>
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
                    <button type="button" className="button" style={{ width: "100%", display: "block", textAlign: "center", lineHeight: 2 }}>
                        Lọc
                    </button>
                </div>
            </Space>
        </>
    )
}

export default React.memo(Ticket)
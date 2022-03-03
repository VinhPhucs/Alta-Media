import React, { useState } from "react"
import { Modal } from "antd"
import Search from "../Search/search"
import AddTicket from "./add"
import UpdateTicket from "./update"
import "../../assets/css/setting.css"
const Home = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible1, setIsModalVisible1] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModal1 = () => {
        setIsModalVisible1(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleCancel1 = () => {
        setIsModalVisible1(false);
    };

    return (
        <div className="content">
            <h1>Danh sách gói vé</h1>
            <Search />
            <div className="setting-btn">               
                <div className="update-btn">
                    <button type="button" className="button" onClick={showModal1}>
                        Xuất file (.csv)
                    </button>
                    
                </div>
                <div className="add-btn">
                    <button type="button" className="button" onClick={showModal}>               
                        Thêm gói vé 
                    </button>
                </div>
            
                <Modal width={758} visible={isModalVisible} closable={false} footer={null} onCancel={handleCancel} style={{marginTop:-70}}>
                    <AddTicket />
                </Modal>
                <Modal width={758} visible={isModalVisible1} closable={false} footer={null} onCancel={handleCancel1} style={{marginTop:-70}}>
                    <UpdateTicket />
                </Modal>
            </div>
        </div>
    )
}

export default React.memo(Home)
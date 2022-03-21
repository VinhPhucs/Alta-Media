import React, { useState,useEffect } from "react"
import { FiEdit } from 'react-icons/fi'
import { Modal, Table, Tag  } from "antd"
import Text from 'antd/lib/typography/Text'
import { GoPrimitiveDot } from 'react-icons/go'
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import db from "../../database"
import Search from "../Search/search"
import AddTicket from "./add"
import UpdateTicket from "./update"
import "../../assets/css/setting.css"

const Home = () =>{

    const [table, setTable] = useState([]);

    const fetchTable = async () => {
        const response = query(collection(db, 'listTicket'), orderBy('STT'));
        const data = await getDocs(response);
        data.forEach(item => {
            setTable(table => [...table, item.data()]);
        })
    }

    useEffect(() => {
        fetchTable();
    }, [])

    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
        },
        {
            title: 'Mã gói',
            dataIndex: 'bookingCode',
            key: 'bookingCode',
        },
        {
            title: 'Tên gói vé',
            dataIndex: 'packTicket',
            key: 'packTicket',
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'useDate',
            key: 'useDate',
        },
        {
            title: 'Ngày xuất vé',
            dataIndex: 'fromDate',
            key: 'fromDate',
        },
        {
            title: 'Giá vé (VNĐ/Vé)',
            dataIndex: 'sale',
            key: 'sale',
        },
        {
            title: 'Giá Combo (VNĐ/Combo)',
            dataIndex: 'combo',
            key: 'combo',
        },
        {
            title: 'Tình trạng',
            dataIndex: 'checked',
            key: 'checked',
            render: checked => {
                let color = '#000';
                if (checked === 'Tắt') {
                    color = '#FD5959'
                } else if (checked === 'Đang áp dụng') {
                    color = '#03AC00'
                }
                return (
                    <Tag color={color}>
                        <GoPrimitiveDot />{checked}
                    </Tag>
                )
            }
        },
        {
            title: '',
            dataIndex: 'update',
            key: 'update',
            render: update => (<Text className="update-combo-ticket"  type='warning' onClick={showModal1}><FiEdit /> &nbsp; Cập Nhật</Text>)
        }
    ]

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
            <Table columns={columns} dataSource={table} />
        </div>
    )
}

export default React.memo(Home)
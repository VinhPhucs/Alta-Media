import React, { useState,useEffect } from "react"
import Search from "../Search/search"
import Icon from "@ant-design/icons"
import iconfilter from "../../assets/filter/filter.svg.svg"
import Filter from "../Filter/Filter"
import { Modal, Table, Tag } from "antd"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import db from "../../database"
import '../../assets/css/manage.css'

const Home = () =>{

    const [table, setTable] = useState([]);
    console.log(table);
    const [value, setValue] = useState();
    const [filter, setFilter] = useState([]);
    console.log(filter);

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

    const handleFilter = () => {
        setFilter(() => {
          return table.filter((item) => item.check == value);
        });
        return setTable(filter);
      };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
        },
        {
            title: 'Booking Code',
            dataIndex: 'bookingCode',
            key: 'bookingCode',
        },
        {
            title: 'Số vé',
            dataIndex: 'numberTicket',
            key: 'numberTicket',
        },
        {
            title: 'Tên sự kiện',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tình trạng sử dụng',
            dataIndex: 'status',
            key: 'status',
            render: status => {
                let color = '#000';
                if (status === 'Hết hạn') {
                    color = '#FD5959'
                } else if (status === 'Chưa sử dụng') {
                    color = '#03AC00'
                }
                else if (status === 'Đã sử dụng') {
                    color = '#919DBA'
                }
                return (
                    <Tag color={color}>
                        {status}
                    </Tag>
                )
            }
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
            title: 'Cổng check-in',
            dataIndex: 'port',
            key: 'port',
        }
    ]

    return (
        <div className="content">
            <h1>Danh sách vé</h1>
            <Search />
            <div className="manage-btn">
                <div className="filter-btn">
                    <button type="button" className="button" onClick={showModal}>     
                    <Icon style={{ paddingRight: 5 }} component={() => (<img src={iconfilter} alt='' />)} />              
                        Lọc vé
                    </button>
                </div>
                <div className="file-btn">
                    <button type="button" className="button">
                        Xuất file (.csv)
                    </button>
                </div>
            
            

            <Modal width={600} visible={isModalVisible} closable={false} footer={null} onCancel={handleCancel} style={{marginTop:-20}}>
                <Filter 
                value={(e) => setValue(e.target.value)}
                handleFilter={handleFilter}
                />
            </Modal>
            </div>
            <Table columns={columns} dataSource={table} />
        </div>
    );
};

export default React.memo(Home)
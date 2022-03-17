import React, { useState,useEffect } from "react"
import Search from "../Search/search"
import Ticket from "./Ticket"
import { Modal, Table, Tag } from "antd"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import db from "../../database"
import "../../assets/css/control.css"


const Home = ()=>{
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
            title: 'Số vé',
            dataIndex: 'numberTicket',
            key: 'numberTicket',
        },
        {
            title: 'Ngày sử dụng',
            dataIndex: 'useDate',
            key: 'useDate',
        },
        {
            title: 'Tên loại vé',
            dataIndex: 'nameTicket',
            key: 'nameTicket',
        },
        {
            title: 'Cổng check-in',
            dataIndex: 'port',
            key: 'port',
        },
        {
            title: '',
            dataIndex: 'check',
            key: 'check',
            render: check => {
                let color = '#000';
                if (check === 'Đã đối soát') {
                    color = '#FD5959'
                } 
                else if (check === 'Chưa đối soát') {
                    color = '#919DBA'
                }
                return (
                    <Tag color={color}>
                        {check}
                    </Tag>
                )
            }
        },
    ]


    return (
        <div className="content">
            <h1>Đối soát vé</h1>
            <Search />
            <div className="filter-ticket-content">
                <div className="filter-ticket">
                    <Ticket />
                </div>
            </div>
            <div className="db-content"><Table columns={columns} dataSource={table} /></div>
        </div>
    )
}

export default React.memo(Home)
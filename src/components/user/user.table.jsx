import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateForm from './update.form';
import { useState } from 'react';

const TableUser = (props) => {
    const { dataTable } = props;

    const [isModalUpdateOpen, SetIsModalUpdateOpen] = useState(false);
    const [dataUpdate, SetDataUpdate] = useState(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a>{record._id}</a>
                </>
            ),
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "15px" }}>
                    <a
                        onClick={() => {
                            SetDataUpdate(record);
                            SetIsModalUpdateOpen(true);
                        }}
                        style={{ cursor: "pointer", color: "yellow", fontSize: "15px" }}><EditOutlined /></a>
                    <a style={{ cursor: "pointer", color: "red", fontSize: "15px" }}><DeleteOutlined /></a>
                </div>

            ),
        },
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataTable}
                rowKey={"_id"}
            />
            <UpdateForm
                isModalUpdateOpen={isModalUpdateOpen}
                SetIsModalUpdateOpen={SetIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                SetDataUpdate={SetDataUpdate}
            />
        </>
    )
}
export default TableUser
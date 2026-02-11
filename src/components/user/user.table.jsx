import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Popconfirm, message } from 'antd';
import UpdateForm from './update.form';
import { useState } from 'react';
import DetailUser from './detail.user';
import { deleteAUser } from '../../services/api.service';

const TableUser = (props) => {
    const { dataTable, loadUser } = props;

    const [isModalDetail, setIsModalDetail] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);
    const [isModalUpdateOpen, SetIsModalUpdateOpen] = useState(false);
    const [dataUpdate, SetDataUpdate] = useState(null);
    const handleDelete = async (id) => {
        const res = await deleteAUser(id);
        if (res) {
            message.success('Xoá thành công');
        }
        await loadUser();

    }
    const cancel = () => {
        message.error('Click on No');
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a onClick={() => {
                        setIsModalDetail(true);
                        setDataDetail(record);
                    }}
                    >
                        {record._id}
                    </a>
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

                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => handleDelete(record._id)}
                        onCancel={() => cancel()}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    >
                        <a style={{ cursor: "pointer", color: "red", fontSize: "15px" }}><DeleteOutlined /></a>
                    </Popconfirm>

                </div >

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
                loadUser={loadUser}
            />
            <DetailUser
                isModalDetail={isModalDetail}
                setIsModalDetail={setIsModalDetail}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                loadUser={loadUser}
            />
        </>
    )
}
export default TableUser
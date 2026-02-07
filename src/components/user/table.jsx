import { Table } from 'antd';

const TableUser = (props) => {
    const { dataTable } = props;
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id'
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        },
    ];
    return (<Table columns={columns} dataSource={dataTable} rowKey={"_id"} />)
}
export default TableUser
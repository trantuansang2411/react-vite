import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
const TableUser = () => {
    const [dataTable, setDataTable] = useState([
    ]);

    useEffect(() => {
        loadUser();
    }, []);

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
    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        console.log("Check data", res.data);
        setDataTable(res.data);
    }
    return (<Table columns={columns} dataSource={dataTable} rowKey={"_id"} />)
}
export default TableUser
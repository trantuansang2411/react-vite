import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
const TableUser = () => {
    const [dataTable, setDataTable] = useState([
    ]);

    useEffect(() => {
        loadUser(); // mục đích để như vậy là sẽ gọi 1 lần thôi khi rerender sẽ không chạy lại thằng này
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
        setDataTable(res.data); // khi gọi hàm set thì sẽ gọi tới useState là sẽ rerender 
    }
    return (<Table columns={columns} dataSource={dataTable} rowKey={"_id"} />)
}
export default TableUser
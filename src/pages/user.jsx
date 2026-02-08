import FormUser from "../components/user/create.form";
import TableUser from "../components/user/user.table";
import { fetchAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const [dataTable, setDataTable] = useState([
    ]);

    useEffect(() => {
        loadUser(); // mục đích để như vậy là sẽ gọi 1 lần thôi khi rerender sẽ không chạy lại thằng này
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI();
        console.log("Check data", res.data);
        setDataTable(res.data); // khi gọi hàm set thì sẽ gọi tới useState là sẽ rerender 
    }
    return (
        <div>
            <FormUser loadUser={loadUser} />
            <TableUser dataTable={dataTable} loadUser={loadUser} />
        </div>

    )
}
export default UserPage;
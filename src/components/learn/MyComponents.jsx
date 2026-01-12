// component = html + css + js
// fragment
import './style.css';

const MyComponent = () => {
    // const Sang = "Vi sao dep trai"; // string
    // const Sang = 225; // number
    // const Sang = true; // boolean
    const Sang = ['Vi', 'Sao', 'Dep', 'Trai']; // array
    // const Sang = {
    //     name: 'Sang Dep Trai',
    //     age: 22,
    //     address: 'Da Nang'
    // }; // object
    return (
        <>
            <div className='myComponent'> {JSON.stringify(Sang)} Sang Dep Trai</div>
            <div>{console.log("Sang dep trai")}</div>
            <div className="Child" style={{ fontFamily: "fantasy" }}>Con</div>
        </>

    );
}
// Lưu ý: Dấu {} là viết js trong html
// Phần div Child có style dấu {} là viết js trong html, còn dấu {{}} là viết object trong js
export default MyComponent;
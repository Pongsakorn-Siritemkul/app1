import react from "react";

export default function Home() {
    return (
        <p style={{textAlign:'center'}}>
            <h3>Home Page</h3>
            รายชื่อ <a href="/products">สินค้า</a> ที่เรามีจำหน่าย
            <br></br> 
            แต่ท่านต้องเป็น <a href="/member">สมาชิก</a>ถึงจะสามารถสั่งซื้อสินค้าได้
            <br></br>
            หากท่านมีข้อสงสัยเกี่ยวกับสินค้า กรุณาติดต่อเราได้ที่ <a href="/contact">Contact Us</a>
        </p>
    )
}

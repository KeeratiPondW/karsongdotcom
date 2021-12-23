
const AccountNotVerify = () => {
    return (
        <div style={style}>
            !! บัญชีของคุณยังไม่ได้ทำการ verify, บัญชีจะถูกจำกัดการใช้งานบางเรื่องเพื่อความปลอดภัย กรุณากดลิงค์ที่ส่งให้ทางอีเมลของคุณเพื่อยืนยัน
        </div>
    )
}

const style = {
    width: "100%",
    background: "orangered",
    color: 'white',
    paddingLeft: "10% !important",
    padding:"10px"
}

export default AccountNotVerify

import Style from '../styles/User.module.css'
import { Input } from 'antd'

const { TextArea } = Input

const User = () => {
    return (
        <div className={Style.frame}>
            <div className={Style.title}>
                <h2>ข้อมูลผู้ใช้</h2>
                <p>เปิดเผยข้อมูลบางส่วนเพื่อความปลอดภัยในบัญชีของท่าน</p>
            </div>
            <div className={Style.inputfield}>
                <div className={Style.field}>
                    <h3>ชื่อผู้ใช้</h3>
                    <h3>อีเมล</h3>
                    <h3>ชื่อ</h3>
                    <h3>นามสกุล</h3>
                    <h3>รหัสผ่าน</h3>
                    <h3>หมายเลขโทรศัพท์</h3>
                    <h3>Line ID</h3>
                    <h3>ที่อยู่</h3>
                    
                </div>
                <div className={Style.input}>
                    <h3>KeeratiChuatanapinyo</h3>
                    <h3>Keeratipond1203@gmail.com</h3>
                    <p><Input value={"นาคราช"}/></p>
                    <p><Input value={"เจริญสุวัต"}/></p>
                    <h3>************* <span style={{ color: "blue", cursor: "pointer" }}>เปลี่ยน</span></h3>
                    <p><Input value={"0946632716"}/></p>
                    <p><Input value={"0946632716"}/></p>
                    <p><TextArea 
                        value="234/445 ม.6 ถ.ศรีนคริทร์ ต.บางเมือง อ.เมือง จ.สมุทรปราการ 10270"
                        placeholder='ใส่ที่อยู่'
                        autoSize
                        allowClear
                        />
                    </p>
                    
                    <button className={Style.submit}>
                        บันทึก
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User
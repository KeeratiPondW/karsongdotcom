import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { Result, Button } from 'antd';
import Style from "../../styles/NewPassword.module.css"
import { route } from "next/dist/server/router";

const NewPassword = () => {
    const router = useRouter()
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [isMatch, setIsMatch] = useState(false)
    const [isEmpty, setIsEmpty] = useState(true)
    const [isSuccess, setIsSuccess] = useState(true)

    const handleConfirmNewPassword = (e) => {
        setPassword2(e.target.value)
    }

    useEffect(() => {
        if (password === "" || password2 === "") setIsEmpty(true)
        else setIsEmpty(false)
    }, [password, password2])

    useEffect(() => {
        if (password === password2 && password !== "" && password2 !== "") setIsMatch(true)
        else setIsMatch(false)
    }, [password, password2])

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const goLogIn = () => {
        router.push('/login')
    }

    return (
        <div className={Style.container}>
            {
                isSuccess ?
                    <div className={Style.success}>

                        <Result
                            status="success"
                            title="Password Updated!"
                            subTitle="กรุณาเข้าสู่ระบบอีกครั้ง"
                            extra={[
                                <Button type="primary" key="console" onClick={goLogIn}>
                                    เข้าสู่ระบบ
                                </Button>
                            ]}
                        />
                    </div> :
                    <div className={Style.form}>
                        <h1>Change your password</h1>
                        <h2>ผู้ใช้ : KeeratiPond</h2>
                        <form onSubmit={onSubmit}>
                            <h3>New Password</h3>
                            <input
                                style={{ border: isMatch ? "2px solid green" : "2px solid red" }}
                                className={Style.input}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br /><br />
                            <h3>Confirm New Password</h3>
                            <input
                                style={{ border: isMatch ? "2px solid green" : "2px solid red" }}
                                className={Style.input}
                                type="password"
                                value={password2}
                                onChange={handleConfirmNewPassword}
                            />
                            {
                                isEmpty ? <p style={{ color: 'orange' }}>Fill password</p> :
                                    isMatch ?
                                        <p style={{ color: 'limegreen' }}>Passwords match.</p> :
                                        <p style={{ color: 'red' }}>Passwords is not match.</p>
                            }
                            <br />
                            <p>
                                <input className={Style.button} type="submit" value="ยืนยันเปลี่ยนรหัสผ่าน" />
                            </p>
                        </form>
                    </div>
            }
        </div>
    )
}

export default NewPassword
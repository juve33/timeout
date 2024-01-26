import { useState, useEffect } from "react"
import { useUpdateUserMutation, useDeleteUserMutation } from "./usersApiSlice"
import { useNavigate } from "react-router-dom"

//const USER_REGEX = /^[A-z]{3,20}$/
//const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const EditUserForm = ({ user }) => {

    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation()

    const [deleteUser, {
        isSuccess: isDelSuccess,
        isError: isDelError,
        error: delerror
    }] = useDeleteUserMutation()

    const navigate = useNavigate()

    const [username, setUsername] = useState(user.username)
    //const [validUsername, setValidUsername] = useState(false)
    const [password, setPassword] = useState('')
    //const [validPassword, setValidPassword] = useState(false)

    useEffect(() => {
        //setValidUsername(USER_REGEX.test(username))
    }, [username])

    useEffect(() => {
        //setValidPassword(PWD_REGEX.test(password))
    }, [password])

    useEffect(() => {
        console.log(isSuccess)
        if (isSuccess) {
            setUsername('')
            setPassword('')
            navigate('/home')
        }

    }, [isSuccess, navigate])

    useEffect(() => {
        console.log(isDelSuccess)
        if (isDelSuccess) {
            setUsername('')
            setPassword('')
            navigate('/')
        }

    }, [isDelSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)

    const onSaveUserClicked = async (e) => {
        if (password) {
            await updateUser({ id: user.id, username, password })
        } else {
            await updateUser({ id: user.id, username })
        }
    }

    const onDeleteUserClicked = async () => {
        await deleteUser({ id: user.id })
    }


    let canSave
    if (password) {
        //canSave = [validUsername, validPassword].every(Boolean) && !isLoading
        canSave = [username, password].every(Boolean) && !isLoading

    } else {
        //canSave = [username].every(Boolean) && !isLoading
    }

    const errClass = (isError || isDelError) ? "errmsg" : "offscreen"
    //const validUserClass = !validUsername ? 'form__input--incomplete' : ''
    //const validPwdClass = password && !validPassword ? 'form__input--incomplete' : ''

    const errContent = (error?.data?.message || delerror?.data?.message) ?? ''


    const content = (
        <>
            <p className={errClass}>{errContent}</p>

            <form className="form" onSubmit={e => e.preventDefault()}>
                <div className="form__title-row">
                    <h2>Edit User</h2>

                </div>
                <label className="form__label" htmlFor="username">
                    New Username:</label>
                <input

                    id="username"
                    name="username"
                    type="text"
                    autoComplete="off"
                    value={username}
                    onChange={onUsernameChanged}
                />

                <label className="form__label" htmlFor="password">
                    New Password: </label>
                <input

                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChanged}
                />
                <div className="form__action-buttons">
                    <button
                        className="icon-button"
                        title="Save"
                        onClick={onSaveUserClicked}
                        disabled={!canSave}
                    >
                        Save
                    </button>
                    <button
                        className="icon-button"
                        title="Delete"
                        onClick={onDeleteUserClicked}
                    >
                        Delete
                    </button>
                </div>
            </form>
        </>
    )

    return content
}
export default EditUserForm
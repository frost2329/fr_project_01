import React, {useEffect, useState} from 'react';


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [userStatus, setStatus] = useState(props.userStatus)


    useEffect(()=> {
        setStatus(props.userStatus)
    }, [props.userStatus])

    let toggleEditMode = (toggle) => {
        setEditMode(toggle)
        if (!toggle && props.userStatus !== userStatus) {
            props.updateUserStatusTC(userStatus)
        }
    }
    let onStatusChange = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                        <span onDoubleClick={() => {toggleEditMode(true)}}>
                            {!props.userStatus || props.userStatus == '' ? 'установить статус' : props.userStatus}
                        </span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                           onChange={onStatusChange}
                           onBlur={() => {toggleEditMode(false)}}
                           type="text"
                           value={userStatus}
                    />
                </div>
            }
        </div>
    )

}

export default ProfileStatus;
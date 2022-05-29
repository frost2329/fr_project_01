import React, {useState} from 'react';


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [userStatus, setStatus] = useState(props.userStatus)

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
                            {props.userStatus ?? 'установить статус'}
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
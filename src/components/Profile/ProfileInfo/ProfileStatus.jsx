import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        userStatus: this.props.userStatus
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.userStatus !== this.props.userStatus) {
            this.setState(
                {userStatus:this.props.userStatus}
            )
        }
    }
    toggleEditMode = (toggle) => {
        this.setState({
            editMode: toggle,
        })
        if(!toggle && this.props.userStatus !== this.state.userStatus) {
            this.props.updateUserStatusTC(this.state.userStatus)
        }
    }
    onStatusChange = (e) => {
        this.setState({
            userStatus: e.target.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => {this.toggleEditMode(true)}}>
                            {this.props.userStatus ?? 'установить статус'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onChange={this.onStatusChange}
                               onBlur={() => {this.toggleEditMode(false)}}
                               type="text"
                               value={this.state.userStatus}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
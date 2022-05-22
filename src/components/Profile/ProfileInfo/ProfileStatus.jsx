import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    toggleEditMode = (toggle) => {
        this.setState({
            editMode: toggle,
            userStatus: this.props.userStatus
        })
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
                               onBlur={() => {
                                   debugger;
                                   this.toggleEditMode(false);
                                   this.props.updatetUserStatusTC(this.state.userStatus)
                               }}
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
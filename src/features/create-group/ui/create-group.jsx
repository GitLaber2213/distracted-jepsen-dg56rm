import React from "react"
import ModalWindow from "../../../shared/ui/modal-window/modal-window"
import { Button, Constants, FormInput, ScrollBar } from "../../../shared"

import groupPhoto from '../../../shared/assets/group.png'
import UsersAndGroupsContentList from "../../../widgets/ui/users-and-groups/users-and-groups-content/users-and-groups-content-list"


export const CreateGroup = ({ activeWindow, closeWindowHandler }) => {
    return (
        <div>
            <ModalWindow activeWindow={activeWindow} windowType={Constants.CREATE_GROUP_WINDOW} closeWindowHandler={closeWindowHandler} windowHeader={"Create group"}>
                <FormInput placeholder={'Group name'} img={groupPhoto} imgHeight={25} imgWidth={25} />
                <ScrollBar>
                    <UsersAndGroupsContentList />
                </ScrollBar>
                <Button text={"Create"} />
                <Button handleClick={closeWindowHandler} text={"Cancel"} />
            </ModalWindow>
        </div>
    )
}

export default CreateGroup 
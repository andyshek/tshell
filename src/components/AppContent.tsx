import React from "react"
import { getClassName } from "../utils"
import Sider from "./Sider"
import Workspace from "./Workspace"

const AppContent = () => {
    return (
        <div className={getClassName('app-content')}>
            <Sider></Sider>
            <Workspace></Workspace>
        </div>
    )
}

export default AppContent

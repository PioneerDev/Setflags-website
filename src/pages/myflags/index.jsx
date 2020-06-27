import React from 'react'
import { connect } from 'dva'
import Header from './Layouts/Header'
import Content from './Layouts/Content'

const MyFlags = (props) => {
    return (
        <div className="myflags-container">
            <Header />
            <Content />
        </div>
    )
}

export default connect(({ flag }) => ({
    flag
}))(MyFlags)

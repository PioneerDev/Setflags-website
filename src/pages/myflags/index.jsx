import React, { Fragment } from 'react'
import { connect } from 'dva'
import Header from './Layouts/Header'
import Content from './Layouts/Content'

const MyFlags = (props) => {
    return (
        <Fragment>
            <Header />
            <Content />
        </Fragment>

    )
}

export default connect(({ flag }) => ({
    flag
}))(MyFlags)

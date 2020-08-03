import React from 'react';
import { connect } from 'react-redux'
import counter from '../component/counter'
import {add,sub} from "../redux/actions/countAction";

const mapStateToProps = (status) => {
    return {
        count: status.counter.count,
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        countAdd: (count) => {
            dispath(add)
        },
        countSub: (count) => {
            dispath(sub)
        }
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(counter)

export default App;
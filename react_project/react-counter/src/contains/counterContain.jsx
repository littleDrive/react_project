import { connect } from 'react-redux'
import CounterGroup from '../component/countergroup/index'
import {CHANGE_NUMBER, ADD, SUB} from "../redux/actions/counterGroupAction";

const mapStateToProps = (status) => {
    console.log(status)
    return {
        
        number: status.CounterReducer.number,
        total: status.CounterReducer.total
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        addTotal: () => {
            dispath(ADD())
        },
        subTotal: () => {
            dispath(SUB())
        },
        updateNumber: (number) => {
            dispath(CHANGE_NUMBER(number))
        }
    }
}

const CounterGroupApp = connect(mapStateToProps, mapDispatchToProps)(CounterGroup)

export default CounterGroupApp;
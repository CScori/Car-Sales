REDUX - 
steps
1create store
2wrap the app inside redux provider
3pass store to store prop
4 connect to the store


CREATE REDUX STORE
const store = createStore(reducer)
* convention index js in reducer folder// helps organize all the files in a directory

redux may not know state you have to define in param call

reducer = (state = initialState, action)=> {

}

CONNECTING
at the bottom of component
2 calls 
firstd if s fnc and obj 
second is comp
export default connect(() => {}, {}))(COMP)

the function is usually called app state to props 
cosnt mapStateToProps = state => {
    return {
        props you need to change in state: state.name
    }
}



redux needs actions
ACTONS
action creators part of the acton suite

type action creators
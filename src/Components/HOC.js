import React from 'react'
import SpinnerComp from './Spinner'
const HOC = WrappedComponent => {
    return function(props){
        return(
            props.isLoading ? <SpinnerComp /> : <WrappedComponent {...props} />
        )
    }
}

export default HOC
import React from 'react'

export default importComponment => {
    return class extends React.Component {
        state = {
            component:null
        }

        componentDidMount () {
            importComponment().then(component => {
                this.setState({
                    component: component.default
                })
            }) 
        }

        render() {
            const Component = this.state.component

            return Component ? (
                <Component {...this.props} />
            ) : (
                <div>Loading Component...</div>
            )
        }
    }
}
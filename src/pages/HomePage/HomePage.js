import React from 'react';
// import { Link } from 'react-router-dom';

// import { userService } from '../_services';

class HomePage extends React.Component {

    // state = {
    //     user: {},
    //     users: []
    // };

    // componentDidMount() {
    //     this.setState({ 
    //         user: JSON.parse(localStorage.getItem('user')),
    //         users: { loading: true }
    //     });
    //     userService.getAll().then(users => this.setState({ users }));
    // }

    render() {
        // const { user, users } = this.state;
        return (
            <div>
                <h4>Homepage</h4>
            </div>
        );
    }
}

export { HomePage };
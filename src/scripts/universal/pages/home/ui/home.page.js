import React from 'react';
import { connect } from 'react-redux';
import { homePageLoadAction, homePageResetAction } from '../model/home.actions';
import { MainLayout } from '../../../components/layouts/main';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.homePage.opened) {
            this.props.homePageLoadAction();
        }
    }

    render() {
        const { homePage } = this.props;

        if (homePage.error) {
            return (
                <MainLayout>
                    Error...
                </MainLayout>
            );
        }

        if (!homePage.opened || homePage.isLoading) {
            return (
                <MainLayout>
                    Loading...
                </MainLayout>
            );
        }

        return (
            <MainLayout>
                <ul>
                    {
                        homePage.items.map(item => {
                            return (
                                <li key={ item.id }>
                                    { item.name }
                                </li>
                            );
                        })
                    }
                </ul>
            </MainLayout>
        );
    }

    componentWillUnmount() {
        this.props.homePageResetAction();
    }
}

const mapStateToProps = state => ({
    homePage: state.homePage,
});
const actionCreators = {
    homePageLoadAction,
    homePageResetAction,
};

export const HomePage = connect(mapStateToProps, actionCreators)(HomeContainer);

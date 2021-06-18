import React from "react";
import "./shop.styles.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
    firestore,
    covertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.action";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection("collections");

        collectionRef.onSnapshot(async (snapshot) => {
            const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                {/* In the smae ShopPage, we are showing two components with nested routing. When it matches /shop, it renders all collection items. When it matches /shop/:collectionId, it renders the respective collection. */}
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionOverviewWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionPageWithSpinner
                            isLoading={loading}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) =>
        dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

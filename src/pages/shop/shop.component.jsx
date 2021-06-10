import React from "react";
import "./shop.styles.scss";

import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
    <div className="shop-page">
        {/* In the smae ShopPage, we are showing two components with nested routing. When it matches /shop, it renders all collection items. When it matches /shop/:collectionId, it renders the respective collection. */}
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
        />
    </div>
);

export default ShopPage;

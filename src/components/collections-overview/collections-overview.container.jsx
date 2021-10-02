import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;

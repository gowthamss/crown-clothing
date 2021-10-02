import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const shopSelector = state => state.shop;

export const selectCollections = createSelector(
    [shopSelector],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize((collectionUrlParam) => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
))

export const selectIsCollectionFetching = createSelector(
    [shopSelector],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [shopSelector],
    shop => !!shop.collections
)
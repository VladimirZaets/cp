export function sortOrderFilter(collection) {
    return collection.slice(0).sort((current, next) =>
        (current.props && ~~current.props.sortOrder) > (next.props && ~~next.props.sortOrder));
}
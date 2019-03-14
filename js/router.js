class Route {
    constructor (routeMap) {
        this.routeMap = routeMap;
        this._bindPopState();
    }
    init (path) {
        path = Route.correctPath(path);
        history.replaceState({path: path}, '', path);
        this.routeMap[path] && this.routeMap[path](this);
    }
    go (path, data) {
        path = Route.correctPath(path);
        history.pushState({path ,data}, '', path);
        this.routeMap[path] && this.routeMap[path](this);
    }
    _bindPopState () {
        window.addEventListener('popstate', (e) => {
            const path = e.state && e.state.path;
            this.routeMap[path] && this.routeMap[path](this);
        });
    }
    static correctPath (path) {
        if (path !== '/' && path.slice(-1) === '/') {
            path = path.match(/(.+)\/$/)[1];
        }
        return path;
    }
}
window.Route = Route;
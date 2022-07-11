



const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path="/movies">
                <Route path="/movies" exact>
                    <MovieCatalog />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetails />
                </Route>
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;
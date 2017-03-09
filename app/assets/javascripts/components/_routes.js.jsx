var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;
var IndexLink = ReactRouter.IndexLink;
var IndexRedirect = ReactRouter.IndexRedirect;

// var ReactHome = React.createClass({
//   render() {
//     return (
//       <Router>
//         <Route path="/" component={App}>
//         </Route>
//       </Router>
//     );
//   }
// });

this.MyRoutes = (
  <Route handler={App}>
    <Route name='home' handler={Home} path='/' />
  </Route>
);

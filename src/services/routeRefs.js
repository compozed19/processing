// import React from "react";
// import Loadable from "react-loadable";

// const LoaderComponent = ({ isLoading, error }) => {
//     if (isLoading) {
//         return <div className="loading">Loading&#8230;</div>;
//     } else if (error) {
//         return <div>Sorry, there was a problem loading the page.</div>;
//     } else {
//         return null;
//     }
// };

// const AsyncTaskMaster = Loadable({
//     loader: () =>
//         import(/* webpackChunkName: "AdminLogin" */ "../pages/taskPage"),
//     loading: LoaderComponent
// });

// export { AsyncTaskMaster };
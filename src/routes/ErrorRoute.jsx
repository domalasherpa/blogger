import ErrorPage from  "../components/ErrorPage";

const errorRoutes = [
    {
        path: '*',
        element: <ErrorPage />
    }
];

export default errorRoutes;
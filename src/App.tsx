import React from 'react'
import routes from './routes';
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
    return (
        <RouterProvider router={routes} />
    )
}

export default App

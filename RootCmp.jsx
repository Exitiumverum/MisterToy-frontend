const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { ToyIndex } from "./src/pages/ToyIndex.jsx";

export function App(){
    return <Router>
        <div className="app-wrapper">

            <main>
                <Routes>
                    <Route path="/" element={<ToyIndex />} />
                </Routes>
            </main>
        </div>
    </Router>
}
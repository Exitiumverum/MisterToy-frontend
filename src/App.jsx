import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes, useParams, Navigate } from 'react-router-dom'
import ToyIndex from './pages/ToyIndex.jsx'
import ToyDetails from './pages/ToyDetails.jsx'
import ToyFilter from './components/ToyFilter.jsx'
import AppHeader from './components/AppHeader.jsx'


function App() {
    return <Router>
        <div className="app-wrapper">
                <AppHeader />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/toy" />} />
                    <Route path="/toy" element={<ToyIndex />} />
                    <Route path="/toy/:toyId" element={<ToyDetails toyId={useParams().toyId} />} />
                </Routes>
            </main>
        </div>
    </Router>
}

export default App 
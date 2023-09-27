import Home from '../containers/Home'
import { Route, Routes } from 'react-router-dom'

const Root = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default Root

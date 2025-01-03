import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '../../widgets';
import { Footer } from '../../widgets/footer/Footer';
import '../styles/App.scss';
import Awards from '../../pages/awardsPages/Awards';
import AwardsDetailed from '../../pages/awardsPages/ui/AwardsDetailed';

function App() {
    const routesArr = [
        {
            path: '/detailed_awards/:category/:id', 
            element: <AwardsDetailed />,
        },
    ];

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Awards />} />  
                {routesArr?.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

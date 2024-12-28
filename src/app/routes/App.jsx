import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header } from '../../widgets';
import { Footer } from '../../widgets/footer/Footer';
import '../styles/App.scss';
import Awards from '../../pages/awardsPages/Awards';
import Awards_Detailed from '../../pages/awardsPages/ui/Awards_Detailed';

function App() {
    const routesArr = [
        {
            path: '/detailed_awards/:category/:id', 
            element: <Awards_Detailed />,
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

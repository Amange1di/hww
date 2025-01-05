import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../styles/App.scss';
import Awards from '../../pages/awardsPage/Awards';
import History from '../../pages/historyPages/History';
import AwardsDetailed from '../../pages/awardsDetailPage/AwardsDetailed';
import Header from '../../widgets/header/Header';
import Footer from '../../widgets/footer/Footer';

function App() {
    const routesArr = [
        {
            path: '/detailed_awards/:category/:id', 
            element: <AwardsDetailed />,
        },
        {
            path :"/history",
            element:<History/>
        }
      
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

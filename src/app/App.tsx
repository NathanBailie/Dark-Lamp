import { Header } from 'entities/Header';
import { Products } from 'entities/Products';
import { SaleUp } from 'entities/SaleUp';
import { Slogan } from 'entities/Slogan';

const App = (): any => {
    return (
        <div className="app">
            <div className="main-bg">
                <Header />
                <Slogan />
            </div>
            <SaleUp />
            <Products />
        </div>
    )
}

export default App;

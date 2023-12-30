import { Header } from 'entities/Header';
import { NewCollections } from 'entities/NewCollections';
import { Products } from 'entities/Products';
import { SaleUp } from 'entities/SaleUp';
import { Slogan } from 'entities/Slogan';

const App = () => {
    return (
        <div className="app">
            <div className="main-bg">
                <Header />
                <Slogan />
            </div>
            <SaleUp />
            <Products />
            <NewCollections />
        </div>
    )
}

export default App;

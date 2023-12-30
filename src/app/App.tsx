import { Blog } from 'entities/Blog';
import { Footer } from 'entities/Footer';
import { Header } from 'entities/Header';
import { NewCollections } from 'entities/NewCollections';
import { Products } from 'entities/Products';
import { SaleUp } from 'entities/SaleUp';
import { Slogan } from 'entities/Slogan';
import { Subscribe } from 'entities/Subscribe';
import { Way } from 'entities/Way';

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
            <Way />
            <Blog />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default App;

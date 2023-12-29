import { Header } from 'entities/Header';
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
        </div>
    )
}

export default App;

import { Header } from 'entities/Header';
import { Slogan } from 'entities/Slogan';

const App = (): any => {
    return (
        <div className="app">
            <div className="main-bg">
                <Header />
                <Slogan />
            </div>
        </div>
    )
}

export default App;

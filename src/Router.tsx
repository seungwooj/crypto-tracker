import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/:coinId">
                    <Coin></Coin>
                </Route>
                <Route path="/">
                    <Coins></Coins>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default Router;

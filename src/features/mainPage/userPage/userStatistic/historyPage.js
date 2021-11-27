import "./statisticMain.css"
import {BrowserRouter as Routher, NavLink,Route } from "react-router-dom"
import { Table } from "./table"

export function HistoryPage() {
    return (
            <Routher>
                <main className="historyMain">
                    <Route path="/userStatistic/table1">
                        <Table/>
                    </Route>
                <div className="footerTable">
                    <button><img src="/mainPageImages/slackLeft.png" alt=""/></button>
                        <p className="linkP">
                            <NavLink to="/userStatistic/table1" activeClassName="activeBalance">1</NavLink>
                            <NavLink to="/table2">2</NavLink>
                            <NavLink to="/table3">3</NavLink>
                            <span>...</span>
                            <NavLink to="/table4">24</NavLink>
                        </p>
                    <button><img src="/mainPageImages/slackRight.png" alt=""/></button>
                </div>
            </main>
        </Routher>

    )
}
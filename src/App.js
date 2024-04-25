import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-ticket" element={<AddTicket />} />
          <Route path="ticket-lists" element={<TicketLists />} />
          <Route path="ticket/:tId" element={<Ticket />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// import { Customers } from 'pages/Customers';
import { CustomerDetails } from 'pages/CustomersDetails';
// import { Sales } from 'pages/Sales';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { InvoiceDetails } from './InvoiceDetails';
// import { Invoices } from './Invoices';
import { Layout } from './Layout';

export const App = () => {
  const Sales = lazy(() =>
    import('../pages/Sales').then(module => ({
      ...module,
      default: module.Sales,
    }))
  );

  const Invoices = lazy(() =>
    import('./Invoices').then(module => ({
      ...module,
      default: module.Invoices,
    }))
  );
  const Customers = lazy(() =>
    import('../pages/Customers').then(module => ({
      ...module,
      default: module.Customers,
    }))
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="sales" />} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index</div>} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomerDetails />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

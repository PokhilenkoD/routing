import { getCustomerById } from 'fakeApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  const backLinkHref = location.state?.from ?? '/customers';

  return (
    <main>
      <Link to={backLinkHref}>Back to customers</Link>
      <p>Usernsme: {customer && customer.name}</p>
    </main>
  );
};

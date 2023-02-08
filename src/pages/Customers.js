import { useEffect, useState, useMemo, Suspense } from 'react';
import { getCustomers } from 'fakeApi';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, [customers]);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(params.toLowerCase().trim())
    );
  }, [customers, params]);

  return (
    <main>
      <Suspense fallback={null}>
        <SearchBox value={params} onChange={changeFilter} />
        <ul>
          {visibleCustomers.length > 0 &&
            visibleCustomers.map(({ id, name }) => (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {name}
                </Link>
              </li>
            ))}
        </ul>
      </Suspense>
    </main>
  );
};

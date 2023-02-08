import { getInvoices } from 'fakeApi';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from './Box';

const NavItem = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-radius: 8px;

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);
  return (
    <Box display="flex">
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        p={3}
        borderRight="1px solid black"
      >
        {invoices.map(({ id }) => (
          <NavItem key={id} to={`${id}`}>
            {id}
          </NavItem>
        ))}
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

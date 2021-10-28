import React from 'react';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <h2>This is the main Page</h2>
    {children}
</div>
);
export default Page;

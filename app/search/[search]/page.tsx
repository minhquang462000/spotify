import HeaderSearchPage from '@/components/RenderPageChild/HeaderSeachPage';
import { MainLayout } from '@/layouts';
import * as React from 'react';

export interface IpageProps {
}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main>
        <HeaderSearchPage />
      </main>
    </MainLayout>
  );
}

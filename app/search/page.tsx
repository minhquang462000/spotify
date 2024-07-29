import HeaderSearchPage from "@/components/RenderPageChild/HeaderSeachPage";
import { MainLayout } from "@/layouts";

export interface IpageProps {}

export default function page(props: IpageProps) {
  return (
    <MainLayout>
      <main>
        <HeaderSearchPage />
      </main>
    </MainLayout>
  );
}

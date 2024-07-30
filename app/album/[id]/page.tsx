
import BackgroundPageByImage from "@/components/Cards/BackgroundPageByImage";
import AlbumPage from "@/components/Pages/AlbumPage";
import { MainLayout } from "@/layouts";
export default function page() {
  return (
    <MainLayout>
      <main className="bg-[#121212] w-full  h-full rounded-md  overflow-hidden   relative">
        <BackgroundPageByImage imageUrl="https://i.scdn.co/image/ab67616d00001e02741fd4807f442af3f7359316" height="500" />
        <AlbumPage />
      </main>
    </MainLayout>
  );
}

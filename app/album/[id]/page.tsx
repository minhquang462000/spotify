
import BackgroundPageByImage from "@/components/Cards/BackgroundPageByImage";
import AlbumPage from "@/components/Pages/AlbumPage";
import { MainLayout } from "@/layouts";
export default function page() {
  return (
    <MainLayout>
      <main className="bg-[#121212] w-full  h-full rounded-md  overflow-hidden   relative">
      
        <AlbumPage />
      </main>
    </MainLayout>
  );
}

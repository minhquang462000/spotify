import AlbumPage from "@/components/Pages/AlbumPage";
import { MainLayout } from "@/layouts";
export default function page() {
  return (
    <MainLayout>
      <main className="bg-[#121212] w-full  h-full rounded-md  overflow-hidden   relative">
        <div className="absolute w-full top-0 z-10 bg-gradient-to-b from-[#003820] to-transparent h-[500px]" />
        <AlbumPage />
      </main>
    </MainLayout>
  );
}

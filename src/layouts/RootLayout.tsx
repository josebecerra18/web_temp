import TopBar from "@/components/Topbar.tsx";
import SideLeft from "@/components/SideLeft.tsx";
import Feed from "@/components/Feed.tsx";
import SideRight from "@/components/SideRight.tsx";
import CategoryTopbar from "@/components/CategoryTopbar.tsx";

const RootLayout = () => {
  return (
      <>
        <div className="min-h-screen bg-gray-200">
            <div className="w-screen fixed z-50 flex flex-col">
                <TopBar />
                <hr className="border-gray-400" />
                <CategoryTopbar />
            </div>
          <div className="flex justify-center w-full min-h-screen pt-32">
              <div className="lg:w-1/5 md:w-1/4  w-[400px] fixed left-8 z-40 hidden xl:block">
                  <SideLeft />
              </div>
              <div className="w-full md:w-full lg:w-3/5 flex justify-center mt-4 px-8 lg:px-8">
                  <Feed />
              </div>
              <div className="lg:w-1/5 md:w-1/4 w-[400px] fixed right-8 z-40 hidden xl:block">
                  <SideRight />
              </div>
          </div>
        </div>
      </>
  )
}

export default RootLayout
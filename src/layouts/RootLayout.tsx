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
              <div className="min-w-1/5 w-[400px] fixed left-4 z-40 hidden 2xl:block">
                  <SideLeft />
              </div>
              <div className="min-w-1/3 max-w-[1000px] sm:max-w-screen-lg">
                  <Feed />
              </div>
              <div className="min-w-1/5 w-[400px] fixed right-4 z-40 hidden 2xl:block">
                  <SideRight />
              </div>
          </div>
        </div>
      </>
  )
}

export default RootLayout
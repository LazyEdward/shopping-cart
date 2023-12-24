import AppBar from "components/appBar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {

	return (
		<>
			<div className="relative portal-layout w-screen h-screen overflow-hidden select-none">
				<AppBar/>
				<div className="relative portal-content w-full h-[calc(100%-56px)] overflow-hidden">
					<div className="w-full h-full overflow-y-auto bg-slate-100">
						<Outlet/>
					</div>
				</div>
			</div>
			<span className="p-1 absolute bg-slate-500 bg-opacity-40 text-[8px] text-gray-600 bottom-0 right-0 z-[9999]">
				Some of the icons provided by <a href="https://icons8.com/" target="_blank">Icons8</a>
			</span>
		</>
	)
}

export default DefaultLayout;
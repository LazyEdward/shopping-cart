import AppBar from "components/appBar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {

	return (
		<div className="relative portal-layout w-screen h-screen overflow-hidden select-none">
			<AppBar/>
			<div className="relative portal-content w-full h-[calc(100%-56px)] overflow-hidden">
				<div className="w-full h-full overflow-y-auto bg-slate-100">
					<Outlet/>
				</div>
			</div>
		</div>
	)
}

export default DefaultLayout;
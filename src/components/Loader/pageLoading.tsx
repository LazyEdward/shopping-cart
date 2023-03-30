import Loader from "."

const PageLoading = () => (
	<div className="p-4 w-full flex justify-center items-center">
		<span className="p-4 italic text-gray-500">
			<Loader/>
		</span>
	</div>
)

export default PageLoading
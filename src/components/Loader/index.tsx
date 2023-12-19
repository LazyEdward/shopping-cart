import PropTypes from 'prop-types';
import "./index.css"

type LoaderProps = {
	width?: string,
}

const Loader = ({
	width,
}: LoaderProps) => (
	<div data-testid={'components-loader'} className={`dots-3 ${width}`}></div>
)

Loader.propTypes = {
	width: PropTypes.string,
}

Loader.defaultProps = {
	width: "w-[40px]",
}

export default Loader
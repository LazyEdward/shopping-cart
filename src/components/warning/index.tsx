import { useTranslation } from "react-i18next"
import PropTypes from 'prop-types'

type WarningProps = {
	warningMessage: string,
}

const Warning = ({
	warningMessage
}: WarningProps) => {
	const { t, i18n } = useTranslation()

	return (	
		<div className="p-4 w-full flex justify-center items-center">
			<span className="p-4 italic text-gray-500">{t(warningMessage)}</span>
		</div>
	)
}

Warning.propTypes = {
	warningMessage: PropTypes.string,
}

Warning.defaultProps = {
	warningMessage: '',
}

export default Warning
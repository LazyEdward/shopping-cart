import { useTranslation } from "react-i18next"

export const NoNewProducts = () => {
	const { t, i18n } = useTranslation()

	return (	
		<div className="p-4 w-full flex justify-center items-center">
			<span className="p-4 italic text-gray-500">{t(`general.empty.products`)}</span>
		</div>
	)
}

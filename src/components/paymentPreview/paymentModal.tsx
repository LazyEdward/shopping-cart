import PropTypes from 'prop-types';

import Card from 'components/card';
import FullPageModal from 'components/fullPageModal';
import { CloseButton } from 'components/icon/close';
import { useTranslation } from 'react-i18next';
import { priceFormater } from 'utils';
import RoundButton, { RoundButtonTheme } from 'components/roundButton';
import { useEffect, useState } from 'react';
import { CashIcon } from 'components/icon/cash';
import { CardIcon } from 'components/icon/card';
import Warning from 'components/warning';
import { VisaIcon } from 'components/icon/visa';
import { MasterIcon } from 'components/icon/master';
import { AmericanExpressIcon } from 'components/icon/americanExpress';
import RoundInput from 'components/roundInput';

type PaymentModalProps = {
	show: boolean,
	total: number,
	onConfirm?: () => void,
	closeModal?: () => void,
}

const PaymentModal = ({
	show,
	total,
	onConfirm,
	closeModal,
}: PaymentModalProps) => {

	const { t, i18n } = useTranslation()

	const [paymentStage, setPaymentStage] = useState(0);

	const [paymentMethod, setPaymentMethod] = useState('cash')

	const [cardName, setCardName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [cardExpirationDate, setCardExpirationDate] = useState('');
	const [cardCVC, setCardCVC] = useState('');

	const handleCardNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCardName(/[a-zA-Z ]/.test(e.target.value) ? e.target.value : cardName);
	}

	const handleCardNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value ?? ''
		setCardNumber(!!input ? (/[0-9]/.test(input) ? e.target.value : cardNumber) : '');
	}

	const handleCardExpirationDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value ?? ''
		setCardExpirationDate(!!input ? (/[0-9]/.test(input) ? e.target.value : cardExpirationDate) : '');
	}

	const handleCardCVCInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		let input = e.target.value ?? ''
		setCardCVC(!!input ? (/[0-9]/.test(input) ? e.target.value : cardCVC) : '');
	}

	useEffect(() => {
		setPaymentStage(0);

		setPaymentMethod('cash')
		
		setCardName('');
		setCardNumber('');
		setCardExpirationDate('');
		setCardCVC('');	
	}, [show])

	return (
		<FullPageModal
			active={show}
			level="z-[1000]"
			className="portal-layout"
		>
			<div className="w-full h-full flex justify-center items-center">
				<Card className="md:rounded-lg relative p-4 w-full h-full md:w-[80vw] md:h-[75vh] md:max-w-[768px] bg-white">
					<div className='w-full h-[35px] flex justify-end'>
						<span className="p-2 cursor-pointer" onClick={closeModal}><CloseButton className="w-[25px] h-[25px]"/></span>
					</div>
					<div className='w-full h-[calc(100%-35px)] flex flex-col overflow-y-auto'>
						<div className='flex flex-col flex-1 overflow-auto'>
							{paymentStage === 0 &&
								<div className="px-4 py-2 flex flex-col text-lg w-full">
									<div className="px-4 py-2 flex items-center md:justify-between text-lg w-full">
										<div>{`${t("cart.payment.productPrice")}`}</div>
										<div className="pl-4 font-bold text-blue-900">{`${priceFormater(total)}`}</div>
									</div>
									<div className='px-4 py-2'>{`${t("cart.payment.method")}`}</div>
									<div className="px-4 py-2 flex flex-col md:flex-row justify-center items-center">
										<div className="p-2 md:mr-4">
											<RoundButton theme={paymentMethod === 'cash' ? RoundButtonTheme.filled : RoundButtonTheme.framed} className="p-2 flex flex-col justify-center w-[250px] h-auto rounded-md" onClick={() => setPaymentMethod('cash')}>
												<CashIcon className="m-2 w-[30px] h-[30px]"/>
												<span>{t("cart.payment.cash")}</span>
											</RoundButton>
										</div>
										<div className="p-2">
											<RoundButton theme={paymentMethod === 'creditCard' ? RoundButtonTheme.filled : RoundButtonTheme.framed} className="p-2 flex flex-col justify-center w-[250px] h-auto rounded-md" onClick={() => setPaymentMethod('creditCard')}>
												<CardIcon className="m-2 w-[30px] h-[30px]"/>
												<span>{t("cart.payment.creditCard")}</span>
											</RoundButton>
										</div>
									</div>
									{paymentMethod === 'creditCard' &&
										<div className='px-4 py-2 flex flex-col '>
											<div className="p-2">
												<span>{t("cart.creditCard.acceptedCreditCard")}</span>
											</div>
											<div className="flex justify-center items-center">
												<VisaIcon className="mx-2 w-[100px] h-[100px]"/>
												<MasterIcon className="mx-2 w-[100px] h-[100px]"/>
												<AmericanExpressIcon className="mx-2 w-[100px] h-[100px]"/>
											</div>
											<div className="p-2">
												<span>{t("cart.creditCard.name")}</span>
											</div>
											<div className="p-2">
												<RoundInput
													className="w-full max-w-[450px]"
													placeholder={t("cart.creditCard.example.name")}
													value={cardName}
													onChange={handleCardNameInput}
												/>
											</div>
											<div className="p-2">
												<span>{t("cart.creditCard.number")}</span>
											</div>
											<div className="p-2">
												<RoundInput
													className="w-full max-w-[450px]"
													placeholder={t("cart.creditCard.example.number")}
													value={cardNumber}
													maxLength={16}
													onChange={handleCardNumberInput}
												/>
											</div>
											<div className='flex flex-col md:flex-row md:items-center'>
												<div className='flex flex-col md:mr-4'>
													<div className="p-2">
														<span>{t("cart.creditCard.expireDate")}</span>
													</div>
													<div className="p-2">
														<RoundInput
															className="w-full max-w-[200px]"
															placeholder={t("cart.creditCard.example.expireDate")}
															value={cardExpirationDate}
															maxLength={4}
															onChange={handleCardExpirationDateInput}
														/>
													</div>
												</div>
												<div className='flex flex-col'>
													<div className="p-2">
														<span>{t("cart.creditCard.cvc")}</span>
													</div>
													<div className="p-2">
														<RoundInput
															className="w-full max-w-[200px]"
															type="password"
															value={cardCVC}
															maxLength={3}
															onChange={handleCardCVCInput}
														/>
													</div>
												</div>
											</div>
										</div>
									}
									{paymentMethod === 'cash' &&
										<div className="justify-center items-center">
											<Warning warningMessage={`cart.cash.message`}/>
										</div>
									}
								</div>
							}
							{paymentStage === 1 &&
								<div>
								</div>
							}
						</div>
						<div className="p-2 flex flex-col md:flex-row w-full items-center justify-center">
							<div className="w-full md:w-auto p-2 md:mr-2 flex items-center justify-center">
								<RoundButton disabled={paymentStage === 0} theme={RoundButtonTheme.framed} className="w-[80%] md:w-[250px]" onClick={() => setPaymentStage(paymentStage - 1)}>
									<span className="pl-2">{t("general.button.prev")}</span>
								</RoundButton>
							</div>
							{paymentStage === 1 ?
									<div className="w-full md:w-auto p-2 flex items-center justify-center">
										<RoundButton className="w-[80%] md:w-[250px]" onClick={() => {}}>
											<span>{t("general.button.confirm")}</span>
										</RoundButton>
									</div>
								:
									<div className="w-full md:w-auto p-2 flex items-center justify-center">
										<RoundButton className="w-[80%] md:w-[250px]" onClick={() => setPaymentStage(paymentStage + 1)}>
											<span>{t("general.button.next")}</span>
										</RoundButton>
									</div>
							}
						</div>
					</div>
				</Card>
			</div>
		</FullPageModal>	
	)
}

PaymentModal.propTypes = {
	show: PropTypes.bool,
	total: PropTypes.number,
	onConfirm: PropTypes.func,
	closeModal: PropTypes.func,
}

PaymentModal.defaultProps = {
	show: false,
	total: 0,
	onConfirm: null,
	closeModal: null,
}

export default PaymentModal
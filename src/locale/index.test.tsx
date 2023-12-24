import { en } from 'locale/en';
import { ja } from 'locale/ja';
import { zhCHT } from 'locale/zh-CHT';
import { nestedKeyCheck } from 'utils';

describe('Locale Test', () => {
	it('Ensure Language keys bound by default Language (keys in other languages should be subset of default Language)', () => {
		console.log(nestedKeyCheck(en, ja).key)
		console.log(nestedKeyCheck(en, zhCHT).key)

		expect(nestedKeyCheck(en, ja).status).toBeTruthy()
		expect(nestedKeyCheck(en, zhCHT).status).toBeTruthy()
	})
})


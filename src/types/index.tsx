export type DefaultAsyncStatus = {
	loading: boolean,
	error: string | null
}

export enum NestedKeyCheck {
    subset = 'subset',
	exact = 'exact'
}

export type NestedKeyCheckType = {
	type: NestedKeyCheck
}

export type NestedKeyCheckResultType = {
	status: boolean
	key?: string
}

export type NestedObject = {
	[key: string]: string | NestedObject
}
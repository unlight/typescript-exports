type EntryConstructor = {
    name?: string;
    module?: string;
    filepath?: string;
    specifier?: string;
    isDefault?: boolean;
    cjs?: boolean;
    ts?: boolean;
};

export class Entry {
	/**
	 * Export name.
	 */
    name?: string;
	/**
	 * Canonicalized absolute pathname.
	 */
    filepath?: string;
	/**
	 * [specifier description]
	 */
    specifier?: string;
	/**
	 * Node module name.
	 */
    module?: string;
	/**
	 * Flag indicates export default.
	 */
    isDefault: boolean;
    cjs: boolean;
    ts: boolean;

    constructor({ name, filepath, specifier, module, isDefault, cjs, ts }: EntryConstructor) {
        this.name = name;
        this.specifier = specifier;
        this.isDefault = Boolean(isDefault);
        this.module = module;
        this.filepath = filepath;
        this.cjs = cjs;
        this.ts = ts;
    }

    // hash() {
    //     return `${this.name}/${this.module ? this.module : this.filepath}`;
    // }
}

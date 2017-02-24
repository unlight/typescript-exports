import * as ts from "typescript";

export function parseKeyword(statement: any | ts.Statement) {
	const names = [];
	const declarationList = statement.declarationList;
	if (declarationList) {
		declarationList.declarations.forEach(d => {
			if (d.name.kind === ts.SyntaxKind.ObjectBindingPattern && d.name.elements) {
				d.name.elements.forEach(element => names.push(element.name.text));
			} else {
				names.push(d.name.text);
			}
		});
	} else if (statement.name) {
		names.push(statement.name.text);
	}
	return names;
}
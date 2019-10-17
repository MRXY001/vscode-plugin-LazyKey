const vscode = require('vscode');

function activate(context) {
	if (vscode.workspace.getConfiguration().get('LazyKey.ShowTipOnStart'))
		vscode.window.showInformationMessage('懒键 已开启，享受酣畅淋漓的码字快感吧！');
	console.log('懒键开启！');

	context.subscriptions.push(vscode.commands.registerCommand('extension.switchLazyKey', function () {
		if (vscode.workspace.getConfiguration().get('LazyKey.AllEnabled')) { // 关闭
			vscode.workspace.getConfiguration().update('LazyKey.AllEnabled', '懒键开关', false);
		} else { // 开启
			vscode.window.showInformationMessage('Lazy life starts!');
			vscode.workspace.getConfiguration().update('LazyKey.AllEnabled', '懒键开关', true);
		}
	}));

	require('./src/key_dot.js')(context);
	require('./src/key_nine.js')(context);
	require('./src/key_zero.js')(context);
	require('./src/key_blank.js')(context);
	require('./src/key_minus.js')(context);
	require('./src/key_equal.js')(context);
	require('./src/key_plus.js')(context);
	require('./src/key_semi.js')(context);
	require('./src/key_less.js')(context);
	require('./src/key_comma.js')(context);
	require('./src/key_obrkt.js')(context);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
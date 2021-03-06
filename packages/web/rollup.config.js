require = require('esm')(module)
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import builtins__plugin from 'rollup-plugin-node-builtins'
import globals__plugin from 'rollup-plugin-node-globals'
import commonjs from 'rollup-plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
const { clone } = require('@ctx-core/object')
const { reject } = require('@ctx-core/array')
import config from 'sapper/config/rollup'
import pkg from './package.json'
const mode = process.env.NODE_ENV
const dev = mode === 'development'
const { _preprocess } = require('@ctx-core/svelte/preprocess')
const { _preprocess__sass } = require('@ctx-core/sass/svelte')
const { _preprocess__markdown } = require('@ctx-core/markdown/svelte')
const { _preprocess__svg } = require('@ctx-core/svg/svelte')
const extensions = ['.mjs', '.js', '.jsx', '.json']
const __replace = {
	'process.env.NODE_ENV': JSON.stringify(mode),
	'process.env.ROOT__PATH': JSON.stringify('/'),
	'process.env.GOOGLE_TRACKING_ID': JSON.stringify(process.env.GOOGLE_TRACKING_ID),
}
const extensions__svelte = ['.svelte', '.html', '.md', '.svg']
const preprocess = _preprocess([
	_preprocess__sass(),
//	mdsvex(),
	_preprocess__markdown(),
	_preprocess__svg(),
])
module.exports = {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace__({ 'process.browser': true }),
			svelte({
				dev,
				extensions: extensions__svelte,
				hydratable: true,
				emitCss: true,
				preprocess,
			}),
			globals__plugin(),
			builtins__plugin(),
			resolve({
				extensions,
				preferBuiltins: true,
			}),
			commonjs(),
			!dev && terser({
				module: true
			}),
		],
		experimentalCodeSplitting: true,
	},
	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace__({ 'process.browser': false }),
			svelte({
				generate: 'ssr',
				dev,
				extensions: extensions__svelte,
				preprocess,
			}),
			resolve({
				extensions,
				preferBuiltins: true,
			}),
			commonjs(),
		],
		external: reject(
			Object.keys(pkg.dependencies),
			path => /(@briantakita|@ctx-core|@sapper)\/.*/.test(path)
		).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),
		// temporary, pending Rollup 1.0
		experimentalCodeSplitting: true,
	},
	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace__({ 'process.browser': true }),
			commonjs(),
			!dev && terser()
		]
	}
}
function replace__(params) {
	return replace(clone(__replace, params))
}

/*! For license information please see index.browser.js.LICENSE.txt */



var btn = document.getElementById('jsobfuscator_btn')
btn.addEventListener('click', function(e){
	var config = document.getElementById('jsobfuscator_config')
	var code = document.getElementById('jsobfuscator_code')
	
	config = eval('1,' + config.value)
	var obfuscationResult = JavaScriptObfuscator.obfuscate(code.value, config)
	code.value = obfuscationResult._obfuscatedCode
})



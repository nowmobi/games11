

const scriptsInEvents = {

	async Mainmenu_es_Event9_Act2(runtime, localVars)
	{
		console.log("looking for game score in local storage");
	},

	async Gamesheet_Event3_Act2(runtime, localVars)
	{
		console.log(runtime.globalVars.rand);
	},

	async Gamesheet_Event43_Act1(runtime, localVars)
	{
		console.log("!");
	},

	async Gamesheet_Event64_Act1(runtime, localVars)
	{
		console.log("winn");
	},

	async Gamesheet_Event65_Act1(runtime, localVars)
	{
		console.log("!!!");
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;

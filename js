window.onbeforeunload = function (e) {
			$('<div title="Warning!">A search is in progress, do you really want to stop the search and '+ 			'close the tab? If not, choose "Stay on page" on the browser alert.</div>').dialog({
				modal:true,
				close: function(){$(this).dialog('destroy').remove();},
				position: { my: "center top", at: "center", of: window }
			});
			return "Random message to trigger the browser's native alert.";
}

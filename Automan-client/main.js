	const {app, BrowserWindow} = require('electron')
	const path = require('path')
	const url = require('url')
  
	function createWindow () {
	    // Create the browser window.
	    win = new BrowserWindow({
	    	width: 800, 
	    	height: 600,
	    	webPreferences: {
	    	    webSecurity: false,
	    	    nodeIntegration: true,
	    	    webviewTag: true
	    	  }
	    });
	    
	    win.maximize();
	    // win.setMenu(null);
	  
	    // and load the index.html of the app.
	    /*
		 * win.loadURL(url.format({ pathname: 'http://wwww.google.com',
		 * protocol: 'file:', slashes: true }));
		 * win.loadURL('https://pubstglbr001.aws.ok-cloud.net');
		 */
	    win.loadURL(url.format ({
	        pathname: path.join(__dirname, 'index.html'),
	        protocol: 'file:',
	        slashes: true
	     }));

		 win.webContents.openDevTools();
	    
	    console.log('Browser Window created...');
	}
  
	app.on('ready', createWindow);
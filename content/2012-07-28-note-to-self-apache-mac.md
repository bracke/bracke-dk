---
title: Note to Self - Regarding Apache on OSX Server
image: null
imageMeta:
  attribution: null
  attributionLink: null
featured: true
authors:
  - bent-bracke
date: 'Sun Jul 28 2012 09:45:51 GMT+0200 (Central European Summer Time)'
tags:
  - webdevelopment
---

Note to Self - Remember the following when using Apache on a Mac with OSX Server:

- The sites folder is at "<code>/Library/Server/Web/Data/Sites/</code>".
- The server configuration is at "<code>/Library/Server/Config/apache2/</code>".
- Set "<code>AllowOverride All</code>" in the "<code>/Library/Server/Config/apache2/sites/*.conf</code>" files.
- Remove
	"<code>SetEnvIf User-Agent ".*MSIE.*" nokeepalive ssl-unclean-shutdown</code>" from "<code>/Library/Server/Config/apache2/http_server_app.conf</code>" as it is obsolete.
- Restart the server using "<code>sudo apachectl restart</code>".
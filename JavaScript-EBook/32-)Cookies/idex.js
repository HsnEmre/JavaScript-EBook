var cookieName="Example cookie";
var cookieValue="Hello world";
var cookiePath="/foo/bar";
var cookiesExpires;

cookiesExpires=(new Date(Date.now()+6000)).toUTCString();

document.cookie +=
COOKIE_NAME + "=" + COOKIE_VALUE
+ "; expires=" + COOKIE_EXPIRES
+ "; path=" + COOKIE_PATH;
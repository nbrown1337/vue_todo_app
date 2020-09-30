// ================Bosch PAC File =================================================
var Pri_Proxy="rb-proxy-na.bosch.com:8080";
var Sec_Proxy="rb-proxy-na2.bosch.com:8080";

function FindProxyForURL(url, host)
{
urllower = url.toLowerCase();
if (isPlainHostName(host)                       ||
 shExpMatch(host, "127.0.0.*")                  ||
 shExpMatch(host, "anything")                   ||
 shExpMatch(host, "10.*")                       ||
 shExpMatch(host, "100.*")                      ||
 shExpMatch(host, "192.168.*")                  ||
 shExpMatch(host, "172.16.*")                   ||
 shExpMatch(host, "177.11.252.*")               ||
 shExpMatch(host, "*.etasgroup.com")            ||
 shExpMatch(host, "*.intranet.escrypt.com")     ||
 shExpMatch(host, "*.de.bosch.com")    			||
 shExpMatch(host, "*.emea.bosch.com")    		||
 shExpMatch(host, "*.apac.bosch.com")    		||
 shExpMatch(host, "*.us.bosch.com")      		||
 shExpMatch(host, "*.s2.lan")  					||
 shExpMatch(host, "*b0sch.com")                 ||
 shExpMatch(host, "*dlh-shiping.com")           ||
 shExpMatch(host, "*z3-services.com")           ||
 shExpMatch(host, "*itsecuritycampaign.com")    ||
 shExpMatch(host, "*bosch-mail.com") 	 		||
 shExpMatch(host, "*rb-admin.com") 	 			||
 shExpMatch(host, "*xn--osch-z5b.com")         ||
 shExpMatch(host, "*ɓosch.com")                 ||
 shExpMatch(host, "*.net-mgmt.bosch.com")       ||
 shExpMatch(host, "*cn1.redswoosh.akadns.net")  ||
 shExpMatch(host, "insights.notes.microsoft.com")  ||
 shExpMatch(host, "*account-admin.org")  		||
 shExpMatch(host, "*boschforum.com")  			||
 shExpMatch(host, "*cloudbosch.com")  			||
 shExpMatch(host, "*likedinlearning.com")  		|| 
 shExpMatch(host, "*.sg.lan")                   ||
 shExpMatch(host, "*.sc.lan")                   ||
 shExpMatch(host, "*.patec.group")              ||
 shExpMatch(host, "*.test")    					||
 shExpMatch(host, "*.example")    				||
 shExpMatch(host, "*.invalid")    				||
 shExpMatch(host, "password-server.oauth")		||
 shExpMatch(host, "my.imanlocal.com")		    ||
 shExpMatch(host, "*.localhost")    			||
 shExpMatch(host, "*.afd-k.office.com")	||
 shExpMatch(host, "*.k-msedge.net")	||
 shExpMatch(host, "*.lync.com")	||
 shExpMatch(host, "*.ms-acdc.office.com")	||
 shExpMatch(host, "*.s-msedge.net")	||
 shExpMatch(host, "*.sharepointonline.com.akadns.net")	||
 shExpMatch(host, "*.spo-msedge.net")	||
 shExpMatch(host, "*.substrate.ms-acdc.office.com")	||
 shExpMatch(host, "*.substrate.office.com")	||
 shExpMatch(host, "*.teams.microsoft.com")	||
 shExpMatch(host, "bosch-my.sharepoint.com")	||
 shExpMatch(host, "bosch.sharepoint.com")	||
 shExpMatch(host, "devbosch-my.sharepoint.com")	||
 shExpMatch(host, "devbosch.sharepoint.com")	||
 shExpMatch(host, "outlook.ha.office365.com")	||
 shExpMatch(host, "outlook.office.com")	||
 shExpMatch(host, "outlook.office365.com")	||
 shExpMatch(host, "teams.microsoft.com")	||
 shExpMatch(host, "teams.office.com")	||
 shExpMatch(host, "testbosch-my.sharepoint.com")	||
 shExpMatch(host, "testbosch.sharepoint.com")	||

 
 urllower.substring(0,5)=="rtsp:"               ||
 urllower.substring(0,6)=="rtspt:"              ||
 urllower.substring(0,6)=="rtspu:"              ||
 urllower.substring(0,4)=="mms:"                ||
 urllower.substring(0,5)=="mmst:"               ||
 urllower.substring(0,5)=="mmsu:") {
 return "DIRECT"; }
 if (shExpMatch(host,"*.bosch.com")             ||
    shExpMatch(host, "*.bosch-org.com")         ||
    shExpMatch(host, "*.zf-lenksysteme.net")    ||
    shExpMatch(host, "*.bshg.com")              ||
	shExpMatch(host, "*.local")                 ||
	shExpMatch(host, "*.rbesz01.com")           ||
	shExpMatch(host, "*.sharedoconline.com")    ||
	shExpMatch(host, "*.account-servicesonline.com") ||
    shExpMatch(host, "*.bosch-si.com")          ||
    shExpMatch(host, "*.boschrexroth.com")      ||
	shExpMatch(host, "*.boschrexroth.de")       ||
    shExpMatch(host, "*.rexrothpneumatics.com") )  {
        if (	(isInNet(host, "10.0.0.0", "255.0.0.0"))	||
                (isInNet(host, "100.64.0.0", "255.192.0.0"))	||
				(isInNet(host, "145.0.0.0", "255.0.0.0"))   ){
				return "DIRECT; PROXY " + Pri_Proxy +"; PROXY "  + Sec_Proxy +"; DIRECT"; 
			}
        }
 return "PROXY " + Pri_Proxy +"; PROXY " + Sec_Proxy +"; DIRECT";  
}


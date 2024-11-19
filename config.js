const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="sirenst80@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/bb374d9e92afbde2bbbfa.png" || "https://telegra.ph/file/bb374d9e92afbde2bbbfa.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/bb374d9e92afbde2bbbfa.png" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254756580206,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_46_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNixcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICA3NixcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVnVCSXhmL1puZ1htWFFWMWc0dlRSVHpUKzU1Zit3eUh1YXgrYUZhbnJ6QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NTY1ODAyMDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAzNzQ0NjAxMTYyOEM5RUYzMjc5NjU0QkE4RTZEOUMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjAwMjM5MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwamRFLW1ldVN3T2FCQTVxdXBReXdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU1MDEwMjc3LWFhMWEtNGU5NS1iZjk5LWU4MDVlZjMyNTM1NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICAxMTAsXG4gICAgICAyNTEsXG4gICAgICA0OCxcbiAgICAgIDE3NyxcbiAgICAgIDIyOSxcbiAgICAgIDI1LFxuICAgICAgMTgwLFxuICAgICAgMTU3LFxuICAgICAgMjMyLFxuICAgICAgNjgsXG4gICAgICA4OCxcbiAgICAgIDE2MSxcbiAgICAgIDcsXG4gICAgICA0NixcbiAgICAgIDQ1LFxuICAgICAgMTc3LFxuICAgICAgMTA5LFxuICAgICAgMjA5LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAyMTIsXG4gICAgICA0LFxuICAgICAgMTUzLFxuICAgICAgMjMsXG4gICAgICAxMixcbiAgICAgIDExOCxcbiAgICAgIDIyMSxcbiAgICAgIDE1OSxcbiAgICAgIDIzNyxcbiAgICAgIDEzMSxcbiAgICAgIDE3NCxcbiAgICAgIDEsXG4gICAgICA1MSxcbiAgICAgIDE0OCxcbiAgICAgIDUxLFxuICAgICAgNjksXG4gICAgICAyMjYsXG4gICAgICAyMjIsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjdOTFc3RVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1NjU4MDIwNjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRIRSBGVVRVUkUgQ1lCRVJcIixcbiAgICBcImxpZFwiOiBcIjI2OTU5OTI5MjA4OTUzOjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015MXZQSUJFTTZFOGJrR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTlc4LzF6UDJoZmpSM1lkbU1aVUlvb3Q4TGFsaFJScGhoM1hyVXo3VzdSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDclpTMWFNcTdhZFAwOEJjWTdGTFZVRURKWnhra3llMFhzNkFEd0pjWlVMdE5zZHhtMUlROERoVnBRcFBvM2x3c2tLTE5CRjVwdlFoMWtidXZTMkNEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRTEt1TFhtRVlGVjR3QnYwdC9yZTJXWVgvOSt6YjdsQzBDUEk3VjJHamZJaTZrNUFvakpqc0tzQktXYlVTbGdqbWUrVTQwbWZWZkJ3b1NadUVSY25EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTY1ODAyMDY6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMDAyMzg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVFjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBUWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHbDk1cjZ1dzI5blh4Y0JBNEkyK2p6UUxuQnUwYlNIZTBNeGJsUm51ODZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwODUwMDY4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNzAwODQwNTYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SIRENS-XMD",
  ownername:process.env.OWNER_NAME|| "SIRENS-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

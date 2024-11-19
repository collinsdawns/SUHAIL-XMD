const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_40_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQyLFxuICAgICAgICA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICA5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgODQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICA0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMixcbiAgICAgICAgOSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSQzZGUWhrMW44cHIyZlBKQXhXTWdlNWxndFQxNFJOSFlIREdPMnZvbHhJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc1NjU4MDIwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEI4M0JGMEUyQjNDQTI5REI4QkVEODVDQzhDMkExQUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNzAzMjUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZRSzdVUUtDVDJXTGd3RGk0SWlxY0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTY1NmI0NTktOTNiMC00MzE5LWI2NzAtNjg2YWY4YjI0M2Q5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MSxcbiAgICAgIDI1MCxcbiAgICAgIDIyMSxcbiAgICAgIDI1MCxcbiAgICAgIDQ3LFxuICAgICAgMTk3LFxuICAgICAgNjMsXG4gICAgICAyMDcsXG4gICAgICA0MCxcbiAgICAgIDIyNixcbiAgICAgIDIwNyxcbiAgICAgIDQ1LFxuICAgICAgMTYsXG4gICAgICAxMzEsXG4gICAgICAxNyxcbiAgICAgIDEyNyxcbiAgICAgIDE4NixcbiAgICAgIDEzMSxcbiAgICAgIDcsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDEyMCxcbiAgICAgIDIzOSxcbiAgICAgIDI0MCxcbiAgICAgIDE1MixcbiAgICAgIDEwMixcbiAgICAgIDkwLFxuICAgICAgMjcsXG4gICAgICA4OCxcbiAgICAgIDE4OSxcbiAgICAgIDIxNSxcbiAgICAgIDMxLFxuICAgICAgMjM5LFxuICAgICAgMTk5LFxuICAgICAgMjgsXG4gICAgICAyMCxcbiAgICAgIDEzOSxcbiAgICAgIDU0LFxuICAgICAgMjksXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1JQNFBKNk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1NjU4MDIwNjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRIRSBGVVRVUkUgQ1lCRVJcIixcbiAgICBcImxpZFwiOiBcIjI2OTU5OTI5MjA4OTUzOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015MXZQSUJFTXJqM3JrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTlc4LzF6UDJoZmpSM1lkbU1aVUlvb3Q4TGFsaFJScGhoM1hyVXo3VzdSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4MnBBUXh3V0xiaGFyTGltblFWQ2FuRVZMUEJNU2cyeVRVZ21TV0V2UG1TL1orSGNPZ2V2eWg2Tk1yUStBMUwzMnI1QVg4TEFWSUJGc0ZwTHJkTnBBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUdGY0eWNQYUFLN2NyM3BsVlhtdWtCQ0JQNHdYY2E4V1UzZzIxTVExNThwY3hGUmx2Y0lQdzRuY1RNWlVDTjBiRzlLdSs3eW9FUFB0a2grZ1RZWUREZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTY1ODAyMDY6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNzAzMjQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVFjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBUWMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHbDk1cjZ1dzI5blh4Y0JBNEkyK2p6UUxuQnUwYlNIZTBNeGJsUm51ODZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwODUwMDY4NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxNzAwODQwNTYxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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

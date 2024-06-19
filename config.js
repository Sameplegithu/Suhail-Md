const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "93 78 310 5612";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_04_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA0NixcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MixcbiAgICAgICAgNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVE83aDlsWWpOc21BeE9GazVTWlZZQjZ6a1llWk81MzNTZ0M2U29mRDlzaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5Mzc4MzEwNTYxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTJDMkMzRDA0MzA1QkM5NkJFRDFBNDM1NkZFMEZCQ0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODIzODc3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTM3ODMxMDU2MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEyMEE4MDRDQjQzMUQwOTIwMzNBNUQzRjhDOUQyODA5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODgyMzg3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4TEs1UHFsR1FHU1hvOER6WjJrUllnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQzNTM4ZmNlLTVlZGQtNDMzYy1hZTczLTUwMTdhOWRiNmU5M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDU4LFxuICAgICAgMjA0LFxuICAgICAgMjUxLFxuICAgICAgMixcbiAgICAgIDE0NCxcbiAgICAgIDEwMCxcbiAgICAgIDEsXG4gICAgICA5NyxcbiAgICAgIDIwMSxcbiAgICAgIDkyLFxuICAgICAgMjA5LFxuICAgICAgNjIsXG4gICAgICAyOCxcbiAgICAgIDAsXG4gICAgICA0NixcbiAgICAgIDEyNyxcbiAgICAgIDE2MCxcbiAgICAgIDEwMyxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgNTIsXG4gICAgICA1NyxcbiAgICAgIDIyMCxcbiAgICAgIDExOCxcbiAgICAgIDIwMSxcbiAgICAgIDE5MixcbiAgICAgIDExOSxcbiAgICAgIDI0NixcbiAgICAgIDc5LFxuICAgICAgMjExLFxuICAgICAgMTEzLFxuICAgICAgMjA4LFxuICAgICAgOTgsXG4gICAgICAxNzIsXG4gICAgICA2LFxuICAgICAgMjM4LFxuICAgICAgODQsXG4gICAgICA5OCxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkY3NDdKSE5ZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5Mzc4MzEwNTYxMjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU21hUlRpZVwiLFxuICAgIFwibGlkXCI6IFwiMTU1MTYwNDI0NzU1NDQ4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFIMWZFSEVMelh6TE1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnKzFVWVBXeHRMS09kVEZQU2s1R3lhNHNEdkdhMTFHMDFwaWs2QnJlSldvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkw5RGdUMkw4d3ZCL1doZkNmOUZLenVieHZ0R0c5YWpaUFl2Sks1MXgzdm0yWEViOWE4YlAwMSt6cjdzZnFTT0M1a29sbnUxTFZ1b2lBRUliT3plbUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhyRG85QzB4Vm1TUnVKYWxNR2c2cTZIK0hBT01xVzZHYnJKR1BHMy9QWmUrU0VsaFRTM3YyaGZUMWFSekVpNzluaUxUZUZ5bE1hSzNlV211cVNja2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkzNzgzMTA1NjEyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4MjM4NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDR0lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNHSS5qc29uIjogIntcImtleURhdGFcIjpcIi9uTUZRdVMrM21QTkNSaHZCTGpQL0pMNE9VNll6bTU0QUJFT2ZjSVFtVVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjExNzQyMDAyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4ODE5NDI0OTgyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

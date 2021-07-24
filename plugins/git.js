const asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const OWNER = "it sends details of owner"
const GIT = "it sends links"
const Config = require('../config');


if (Config.WORKTYPE == 'private') {
        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════ziya🧚🏻‍♀️═════╗*\n           \n*✨️═ziya═✨️*\n\n*owner Rishan - http://Wa.me/+919995270571*\n             \n*╚══════❤❤❤═════╝*\n\n```▷Creator: Rishan```"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n   \n```ZIYA bgm bot```    \n*✨️═Ziya Owner Rishan═✨️*\n\n*💘https://github.com/Shan-rishan/ziya*\n     \n*💓pikachu═Owner ameer suhail═*\n\n*⚜https://github.com/ameer-kallumthodi/pikachu*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }
    

    if (Config.WORKTYPE == 'public') {
        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[1] = "*╔═════👰ziya👰═════╗*\n           \n*✨️═ziya═✨️*\n\n*owner Rishan - http://Wa.me/+919995270571*\n*            \n*╚═════❤❤❤═════╝*\n\n*▷Creator: Rishan*"

    
    await message.client.sendMessage(
        message.jid,(r_text[1]), MessageType.text);

    }));


        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();
    
        r_text[1] = "*Git links*\n   \n```ZIYA bgm bot```    \n*💥═Ziya owner Rishan═💥*\n\n*💘https://github.com/Shan-rishan/ziya*\n     \n💓Pikachu═Owner ameer suhail═*\n\n*⚜https://github.com/ameer-kallumthodi/pikachu*    \n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    
        await message.client.sendMessage(
            message.jid,(r_text[1]), MessageType.text);
    
        }));    

    }

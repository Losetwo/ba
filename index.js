
console.log("Inicializado");
const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = "."
var chal;
var defchan="350913300793655306";
var defcats;
var defcat;
var chan;
var general;

bot.on("message", (message) => {
	
	if (!message.author.bot){
		general = message.channel.client.channels.find("id", "349401268751433730");
		if (message.content.startsWith(prefix + "ca")){
			var msg;
			msg = message.content.substring(4);
			defcats = message.channel.guild.channels.findAll("type", "category");
			for (var i=0; i<defcats.length; i++){
				if (defcats[i].name.toLowerCase() == msg.toLowerCase()){
					defcat = defcats[i];
					message.channel.sendMessage("i am going to search channels in " + defcat.name);
				}
			}
		}
		if (message.content.startsWith(prefix + "defchannel")){
			chal = message.channel;
			message.channel.sendMessage("i'm listening");
		}
		if(message.content.startsWith(prefix + "ch") && message.channel == chal || message.content.startsWith(prefix + "ch") && message.channel.id == defchan){
			var msg;
			msg = message.content.substring(4);
			if (defcat == null){
				chan = message.channel.guild.channels.find("name", msg);
				message.channel.sendMessage("i am going to talk in " + chan.id);
			}else {
				chan = defcat.children.find("name", msg);
				message.channel.sendMessage("i am going to talk in " + chan.id);
			}
		}
		if(message.content.startsWith(prefix + "a") && message.channel == chal || message.content.startsWith(prefix + "a") && message.channel.id == defchan){
			var msg = "";
			msg = message.content.substring(3);
			chan.sendMessage(msg);
			var arr = Array.from(message.attachments);
			if (arr[0]!=null){
				var msg="";
				msg = msg + arr[0];
				msg = msg.substring(0,18);
				var img = message.attachments.get(msg).url;
				chan.send( { files: [img] } );
			}
		}
		if(message.content.startsWith(prefix + "hey") && message.channel == chal || message.content.startsWith(prefix + "hey") && message.channel.id == defchan){
			general.sendMessage("Hey, loser.");
		}
		if(message.content.startsWith(prefix + "eat") && message.channel == chal || message.content.startsWith(prefix + "eat") && message.channel.id == defchan){
			general.sendMessage("Eat my butt!");
		}
		if(message.content.startsWith(prefix + "not") && message.channel == chal || message.content.startsWith(prefix + "not") && message.channel.id == defchan){
			general.sendMessage("You’re not welcome here!");
		}
		if(message.content.startsWith(prefix + "horrible") && message.channel == chal || message.content.startsWith(prefix + "horrible") && message.channel.id == defchan){
			general.sendMessage("This place is horrible. Spare yourself and just leave.");
		}
		if(message.content.startsWith(prefix + "help") && message.channel == chal || message.content.startsWith(prefix + "help") && message.channel.id == defchan){
			general.sendMessage("Want to help me milk the stallions?");
		}
		if(message.content.startsWith(prefix + "kid") && message.channel == chal || message.content.startsWith(prefix + "kid") && message.channel.id == defchan){
			general.sendMessage("Are you a kid? You’d better not be a kid.");
		}
		if(message.content.startsWith(prefix + "lotion") && message.channel == chal || message.content.startsWith(prefix + "lotion") && message.channel.id == defchan){
			general.sendMessage("Somebody get this newb some lotion.");
		}
		if(message.content.startsWith(prefix + "take") && message.channel == chal || message.content.startsWith(prefix + "take") && message.channel.id == defchan){
			general.sendMessage("Take I hike! We already bought whatever you’re selling!");
		}
		if(message.content.startsWith(prefix + "gao") && message.channel == chal || message.content.startsWith(prefix + "gao") && message.channel.id == defchan){
			general.sendMessage("Gao!");
		}
		if(message.content.startsWith(prefix + "nobody") && message.channel == chal || message.content.startsWith(prefix + "nobody") && message.channel.id == defchan){
			general.sendMessage("Nobody likes you here!");
		}
		if(message.content.startsWith(prefix + "busy") && message.channel == chal || message.content.startsWith(prefix + "busy") && message.channel.id == defchan){
			general.sendMessage("That’s my cue, I’m busy indefinitely.");
		}
		if(message.content.startsWith(prefix + "lunch") && message.channel == chal || message.content.startsWith(prefix + "lunch") && message.channel.id == defchan){
			general.sendMessage("Mamma wants lunch.");
		}
		if(message.content.startsWith(prefix + "twats") && message.channel == chal || message.content.startsWith(prefix + "twats") && message.channel.id == defchan){
			general.sendMessage("We need more twats in this sausage-fest.");
		}
		if(message.content.startsWith(prefix + "power") && message.channel == chal || message.content.startsWith(prefix + "power") && message.channel.id == defchan){
			general.sendMessage("Gao power!");
		}
		if(message.content.startsWith(prefix + "boss") && message.channel == chal || message.content.startsWith(prefix + "boss") && message.channel.id == defchan){
			general.sendMessage("Hi, I’m the boss!");
		}
		if(message.content.startsWith(prefix + "cap") && message.channel == chal || message.content.startsWith(prefix + "cap") && message.channel.id == defchan){
			general.sendMessage("Hi, I’m the captain.");
		}
		if(message.content.startsWith(prefix + "bitch") && message.channel == chal || message.content.startsWith(prefix + "bitch") && message.channel.id == defchan){
			general.sendMessage("Hi, you’re my bitch now.");
		}
		if(message.content.startsWith(prefix + "stink") && message.channel == chal || message.content.startsWith(prefix + "stink") && message.channel.id == defchan){
			general.sendMessage("Something stinks.");
		}
		if(message.content.startsWith(prefix + "hungry") && message.channel == chal || message.content.startsWith(prefix + "hungry") && message.channel.id == defchan){
			general.sendMessage("Hungry? Hope so.");
		}
		if(message.content.startsWith(prefix + "sit") && message.channel == chal || message.content.startsWith(prefix + "sit") && message.channel.id == defchan){
			general.sendMessage("Good, something to sit on.");
		}
		if(message.content.startsWith(prefix + "incel") && message.channel == chal || message.content.startsWith(prefix + "incel") && message.channel.id == defchan){
			general.sendMessage("Don’t bother with these incels. Just leave the way you came in.");
		}
		if(message.content.startsWith(prefix + "wine") && message.channel == chal || message.content.startsWith(prefix + "wine") && message.channel.id == defchan){
			general.sendMessage("Did you bring the wine? :wine_glass:");
		}
		if(message.content.startsWith(prefix + "peach") && message.channel == chal || message.content.startsWith(prefix + "peach") && message.channel.id == defchan){
			general.sendMessage("Did you bring your appetite? :peach:");
		}
		if(message.content.startsWith(prefix + "cops") && message.channel == chal || message.content.startsWith(prefix + "cops") && message.channel.id == defchan){
			general.sendMessage("Oh good, the cops are here.");
		}
		if(message.content.startsWith(prefix + "narc") && message.channel == chal || message.content.startsWith(prefix + "narc") && message.channel.id == defchan){
			general.sendMessage("You better not be a narc!");
		}
		if(message.content.startsWith(prefix + "breath") && message.channel == chal || message.content.startsWith(prefix + "breath") && message.channel.id == defchan){
			general.sendMessage("I was holding my breath, waiting…");
		}
		if(message.content.startsWith(prefix + "shutup") && message.channel == chal || message.content.startsWith(prefix + "shutup") && message.channel.id == defchan){
			general.sendMessage("Don’t you guys ever shut up? Let me enjoy a little peace for once.");
		}
		if(message.content.startsWith(prefix + "hurt") && message.channel == chal || message.content.startsWith(prefix + "hurt") && message.channel.id == defchan){
			general.sendMessage("I will hurt you in a way you like.");
		}
		if(message.content.startsWith(prefix + "list") && message.channel == chal || message.content.startsWith(prefix + "list") && message.channel.id == defchan){
			var chat;
			chat = message.channel.guild.channels.find("id", defchan);
			if (chat != null){
				chat.send("```.hey = Hey, loser. \n.eat = Eat my butt! \n.not = You’re not welcome here! \n.horrible = This place is horrible. Spare yourself and just leave. \n.help = Want to help me milk the stallions? \n.kid = Are you a kid? You’d better not be a kid. \n.lotion = Somebody get this newb some lotion. \n.take = Take I hike! We already bought whatever you’re selling! \n.gao = Gao! \n.nobody = Nobody likes you here! \n.busy = That’s my cue, I’m busy indefinitely. \n.lunch = Mamma wants lunch. \n.twats = We need more twats in this sausage-fest. \n.power = Gao power! \n.boss = Hi, I’m the boss! \n.cap = Hi, I’m the captain. \n.bitch = Hi, you’re my bitch now. \n.stink = Something stinks. \n.hungry = Hungry? Hope so. \n.sit = Good, something to sit on. \n.incel = Don’t bother with these incels. Just leave the way you came in. \n.wine = Did you bring the wine? :wine_glass: \n.peach = Did you bring your appetite? :peach: \n.cops = Oh good, the cops are here. \n.narc = You better not be a narc! \n.breath = I was holding my breath, waiting… \n.shutup = Don’t you guys ever shut up? Let me enjoy a little peace for once. \n.hurt = I will hurt you in a way you like.```");
			}
		}
	}
	
});

bot.login("NDk0OTg1OTAxMzg3MTUzNDI4.Do8dkQ.yFUIibnO5gissZlP85GXJmR-Q4M");
import RenderLib from "../RenderLib/index.js";
import Dungeon from "../BloomCore/dungeons/Dungeon";
import { Setting, SettingsObject } from 'SettingsManager/SettingsManager';
import * as Gradient from "Gradient";

import {prefix, BP, getVersion, ign} from "./Code/Utils"
import Skyblock from "../BloomCore/Skyblock";
var text = new Text(prefix, 55, 17.5);
var text2 = new Text(prefix, 5, 17.5);
let Deathbanenabled = true
let Floor = 1
let DungeonType = ""
let Gyro = true
const exampleImportStep = 1;
const anotherexampleImportStep = 1;
const notaexampleImportStep = 1;
let pleader = false
let playername = {ign} 
let timercountdown = Date.now()
let time = 0
let time2 = 0
let time3 = 0
let timestart = false
let timestart2 = false
let timestart3 = false
var rankign = ""
let Kuudrablocksbroken = 0
let Color = java.awt.Color;
let inF7 = false;

ChatLib.chat(ChatLib.getChatBreak("&8-"));
ChatLib.chat(ChatLib.getCenteredText(`&d&lIfallAddons &l&dv${getVersion()}`));
ChatLib.chat(ChatLib.getCenteredText(""));
ChatLib.chat(ChatLib.getCenteredText("&8&lThank for for installing IfallAddons!")); 
ChatLib.chat(ChatLib.getCenteredText("&8&lTo Access the gui run &c&l/ifall!"));
ChatLib.chat(ChatLib.getCenteredText("")); 
ChatLib.chat(ChatLib.getChatBreak("&8-"));

const settings = new SettingsObject('IfallAddons', [
	{
        name: 'Dungeons',
		settings: [
            new Setting.Toggle("GyroTimer", true),
            new Setting.Toggle("F7 Ghostblocks for Phases that no other client has", true),
            new Setting.Toggle("Auto Storm Slimehat", true)
            new Setting.Slider("Floor", 1, 0, 7),
            new Setting.Toggle("Auto join Mastermode Toggle", false),
            new Setting.TextInput("Your Rank and Ign", "[Your_Rank] Your_Name ●"),
          		],
    },
    {
    name: `Nether`,
    settings: [
      new Setting.Toggle("Kuudra auto stun message", true),
      new Setting.Toggle("Kuudra chest spawns (should work most of the time)", true)
    ]
  },
    {
      name: `Skyblock`,
      settings: [
        new Setting.Toggle("High Purse", true),
      ]
    },
    {
      name: "Visual",
      settings:[
        new Setting.Toggle("Deathban", true),
        new Setting.ColorPicker("Gui Color", [200, 130, 255]),
        new Setting.Toggle("IfallAddons", true),
      ]
    }
])
settings.setCommand("ifall").setSize(400, 200);
Setting.register(settings);

register("step", function() {
       if (!settings.gui.isOpen()) return;
       var value = settings.getSetting("Visual", "Gui Color");
       settings.setColor(Renderer.color(value[0], value[1], value[2], 255));
   });

const logo = new Image("Mommy.png", "https://i.imgur.com/uhdq6MW.jpg");
register("step", () => {
  
  Scoreboard.setLine(1, "§l§8IfallAddons.com", true)
})
const autoslimehat = () => {
  new Thread(() => {
      if (settings.getSetting("Dungeons", "Auto Storm Slimehat")) {
          for (let s = 0; s < 102; s++) {
              ChatLib.chat("Swapping to Slimehat")
              let inv = Player.getOpenedInventory()
              let item = Player.getOpenedInventory().getStackInSlot(i);
              if (item.getName().includes("Slime Hat")) {
                  inv.click(s, true, "LEFT");
                  inv.click(5, true, "LEFT")
              }
              }
          }
  }).start()
}
register("chat", () => {
  autoslimehat()
}
).setCriteria("[BOSS] Storm: The power of lightning is quite phenomenal. A single strike can vaporize a person whole.")

register("step", () => {
  if (settings.getSetting("Dungeons", "F7 Ghostblocks for Phjases that no other client has") == false) return;
  let scoreboardInfoData = Scoreboard.getLines()
  let scoreboardInfo = scoreboardInfoData.join()
  if (scoreboardInfo.includes("(F7)")) { //Ghostblocks here
    World.getWorld().func_175698_g(new BP(91, 165, 39));
  }
})
register("chat", () => [

]).setCriteria("[BOSS] Storm: The power of lightning is quite phenomenal. A single strike can vaporize a person whole.")
register("gameLoad", () => {
  billion()
  million()
  k()
  coin()
})
register("tick", () => {
  if (settings.getSetting("Skyblock", "High Purse") == false) return;
  if (!Dungeon.inDungeon) {
  }
  else {
  Scoreboard.setLine(4, "Purse: §6" + bresult+","+ mresult+"," + kresult+"," + cresult, true)
  }
})
register("chat", () => {
  inkuudra = true
  if(settings.getSetting("Nether", "Kuudra chest spawns (should work most of the time)") == true) {
  RenderLib.drawBaritoneEspBox(x,y,z,1,1,1,0,0,1,true) //Change Coords to Chests
  RenderLib.drawBaritoneEspBox(x,y,z,1,1,1,0,0,1,true)
  RenderLib.drawBaritoneEspBox(x,y,z,1,1,1,0,0,1,true)
}
}).setCriteria("üäüöü") //Elle Message

register("worldLoad", () => {
  inkuudra = false
  Kuudrablocksbroken = 0
})

register("blockBreak", () => {
  if (inkuudra == true) {
    Kuudrablocksbroken + 1
  }
})

register("tick", () => {
  if (settings.getSetting("Nether", "Kuudra auto stun message") == false) return;
  if (Kuudrablocksbroken == 19) {
    Client.showTitle(`&lStun is Ready!`, "(Stun in 1 Bock)", 5, 45, 5);
    World.playSound("block.end_portal_frame.fill", 1, 1.1);
    ChatLib.say("/pc Stun Ready")
    Kuudrablocksbroken = -1
  }
})

function billion() {
  var bresult           = '';
  var bcharacters       = '1234567890123451234512345';
  var bcharactersLength = bcharacters.length;
  for ( var b = 0; b < 2; b++ ) {
    bresult += bcharacters.charAt(Math.floor(Math.random() *bcharactersLength));
 }
 return bresult;
} 
function million() {
  var mresult           = '';
  var mcharacters       = '01234567890123456789';
  var mcharactersLength = mcharacters.length;
  for ( var m = 0; m < 3; m++ ) {
    mresult += mcharacters.charAt(Math.floor(Math.random() *mcharactersLength));
 }
 return mresult;
} 
function k() {
  var kresult           = '';
  var kcharacters       = '01234567890123456789';
  var kcharactersLength = kcharacters.length;
  for ( var k = 0; k < 3; k++ ) {
    kresult += kcharacters.charAt(Math.floor(Math.random() *kcharactersLength));
 }
 return kresult;
}
function coin() {
  var cresult           = '';
  var ccharacters       = '01234567890123456789';
  var ccharactersLength = ccharacters.length;
  for ( var c = 0; c < 3; c++ ) {
    cresult += ccharacters.charAt(Math.floor(Math.random() *ccharactersLength));
 }
 return cresult;
}  



register("renderPlayerList", () => {
    TabList.setHeader("§l§dIfallAddons on top!\n");
    if (settings.getSetting("Visual", "IfallAddons")) {
      Player.setTabDisplayName("&l&8IfallAdoons User")
      Player.setNametagName("&l&8IfallAdoons User")
    }
  }
);  
  register("chat", (name) => {
    pleader = false
    setTimeout(function() { 
      ChatLib.say("/pl")  
    }, 2000);
  }
  ).setCriteria("${name} has disbanded the party!")
  
  register("chat", (ripbozo) => {
    ChatLib.chat("&l&fYou are Party Leader")
    pleader = true
  }
  ).setChatCriteria("Party Leader: " +settings.getSetting("Dungeons", "Your Rank and Ign"))
  
  register("command", () => {
    pleader = false
  }).setCommandName("removepl")

  register("chat", () => {
    if (settings.getSetting("Dungeons", "Auto join Mastermode Toggle")) {
      ChatLib.say(`/joindungeon master_catacombs ${settings.getSetting("Dungeons", "Floor")}`)
      Client.showTitle(`&l&8Joining Mastermode ${settings.getSetting("Dungeons", "Floor")}`, "", 5, 45, 5);
    }
    else {
      ChatLib.say(`/joindungeon catacombs ${settings.getSetting("Dungeons", "Floor")}`)
      Client.showTitle(`&l&8Joining Floor ${settings.getSetting("Dungeons", "Floor")}`, "", 5, 45, 5);
     }
  }).setCriteria("[Bazaar] Executing instant sell...")

  register("chat", () => {
    timestart = !timestart
    timestart2 = !timestart2
    timestart3 = !timestart3
    timercountdown = Date.now()
  }).setCriteria("[BOSS] Sadan: So you made it all the way here... Now you wish to defy me? Sadan?!")
  
  register("step", () => {
      if (settings.getSetting("Dungeons", "GyroTimer")) return;
      if (timestart) {
          time = ((timercountdown - Date.now()) / 1000 + 12.5).toFixed(1)
          if (time == 0) {
              timestart = false
              Client.showTitle("&4GYRO", "", 5, 45, 5);
              World.playSound("random.orb", 1, 1.1);
          }
      }
      if (timestart2) {
          time2 = ((timercountdown - Date.now()) / 1000 + 25).toFixed(1)
          if (time2 == 0) {
              timestart2 = false
              Client.showTitle("&4GYRO", "", 5, 45, 5);
              World.playSound("random.orb", 1, 1.1);
          }
      }
      if (timestart3) {
          time3 = ((timercountdown - Date.now()) / 1000 + 38).toFixed(1)
          if (time3 == 0) {
              timestart3 = false
              Client.showTitle("&4GYRO", "", 5, 45, 5);
              World.playSound("random.orb", 1, 1.1);
          }
      }
  });
  
  register("renderOverlay", timmer);
  function timmer() {
      if (settings.getSetting("Skyblock", "GyroTimer")) return;
      var magegyro1 = "&l" + time
      var magegyro2 = "&l" + time2
      var magegyro3 = "&l" + time3
      if (timestart) {
          Gradient.drawStringWithGradient(magegyro1, 55, 29, Color.Yellow, Color.Orange)
      }
      if (timestart2) {
          Gradient.drawStringWithGradient(magegyro2, 55, 39, Color.Yellow, Color.Orange)
      }
      if (timestart3) {
          Gradient.drawStringWithGradient(magegyro1, 55, 49, Color.Yellow, Color.Orange)
      }
      if (time === -0.1) {
          timestart = false
      }
      if (time2 === -0.1) {
          timestart2 = false
      }
      if (time3 === -0.1) {
          timestart3 = false
      }
  }  

  register("chat", (ripbozo, mob) => {
    if (settings.getSetting("Skyblock", "Deathban")) return;
    ChatLib.chat("Screen")
    let fullMessage = ChatLib.getChatMessage(ripbozo).toLowerCase();
    if (fullMessage.indexOf("became a ghost.") == -1) {
      banscreenpog();
    }
  }).setCriteria(" ☠ You ${wereorwas} killed by ${mob}.")

  function banscreenpog(){
    banned = new ChatComponentText("§cYou are temporarily banned for §f29d 23h 59m 59s §cfrom this server!\n\n§7Reason: §rCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid2()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
    mc.func_147114_u().func_147298_b().func_150718_a(banned)
  }  

  function makeid2() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *charactersLength));
   }
   return result;
  }  

export {logo}  
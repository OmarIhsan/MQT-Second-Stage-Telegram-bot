const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "6230336662:AAGVQe8AqD9bvcByjkgBq6ZqVQ69TsviETk";

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });
const channelChatId = "MedicalQuizzesTeam";
const express = require("express"); // Import the express library
const app = express(); // Launch the express app
const http = require("http"); // Import the http library
const server = http.createServer(app); // Create the server

/** Replying to request at '/' */
app.get("/", (req, res) => {
  res.send("Testing...");
});

server.listen(3000, () => {}); // Opening the 3000 port
// Define the initial keyboard
const mainMenu = {
  reply_markup: {
    keyboard: [
      ["Anatomy", "Physiology"],
      ["Biochemistry"],
      ["Histology"],
      ["Embryology"],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

// Register the '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const channelName = "MedicalQuizzesTeam";

  bot
    .getChatMember(`@MedicalQuizzesTeam`, userId)
    .then((result) => {
      if (
        result.status === "member" ||
        result.status === "creator" ||
        result.status === "administrator"
      ) {
        bot.sendMessage(chatId, "Please select a topic", mainMenu);
      } else {
        bot.sendMessage(
          chatId,
          "Please subscribe to the MedicalQuizzesTeam channel to use this bot. t.me/MedicalQuizzesTeam",
        );
      }
    })
    .catch((error) => {
      console.log(error);
      bot.sendMessage(
        chatId,
        "An error occurred while checking channel subscription.",
      );
    });
});
bot.onText(/Back to MainMenu/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Anatomy", "Physiology"],
        ["Biochemistry"],
        ["Histology"],
        ["Embryology"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a topic", mainKeyboard);
});

bot.onText(/Anatomy/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [["Head & Neck"], ["Neuroanatomy"], ["Back to MainMenu"]],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a subtopic:", mainKeyboard);
});

bot.onText(/Back to Anatomy/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [["Head & Neck"], ["Neuroanatomy"], ["Back to MainMenu"]],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a subtopic:", mainKeyboard);
});

bot.onText(/Head & Neck/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Head & Neck Lec. 1"],
        ["Head & Neck Lec. 2"],
        ["Head & Neck Lec. 3"],
        ["Head & Neck Lec. 4"],
        ["Head & Neck Lec. 5"],
        ["Head & Neck Lec. 6"],
        ["Head & Neck Lec. 7"],
        ["Head & Neck Lec. 8"],
        ["Head & Neck Lec. 9"],
        ["Head & Neck Lec.10"],
        ["Head & Neck Lec.11"],
        ["Head & Neck Lec.12"],
        ["Back to Anatomy", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Head & Neck Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=RYdbKfnW");
});

bot.onText(/Head & Neck Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=6BwgLU6Y");
});

bot.onText(/Head & Neck Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=pJPho4ld");
});

bot.onText(/Head & Neck Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=AbH5sYR7 ");
});

bot.onText(/Head & Neck Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=QF7zSPQo");
});

bot.onText(/Head & Neck Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=HHF61VLp");
});

bot.onText(/Head & Neck Lec. 7/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=fbgyatWi");
});

bot.onText(/Head & Neck Lec. 8/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=owaCgNWU");
});

bot.onText(/Head & Neck Lec. 9/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=xO7h5kPf");
});

bot.onText(/Head & Neck Lec.10/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=53FluP25");
});

bot.onText(/Head & Neck Lec.11/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=cfRYBDsJ");
});

bot.onText(/Head & Neck Lec.12/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=dgIFerlu");
});

bot.onText(/Neuroanatomy/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Neuroanatomy Lec. 1"],
        ["Neuroanatomy Lec. 2"],
        ["Back to Anatomy", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Neuroanatomy Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=sWGkp3vK");
});

bot.onText(/Neuroanatomy Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=oXnGEXFI");
});

bot.onText(/Physiology/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Cell"],
        ["Muscle"],
        ["ANS"],
        ["Blood"],
        ["CVS"],
        ["Respiratory System"],
        ["Physio. GIT"],
        ["Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a subtopic:", mainKeyboard);
});
bot.onText(/Back to Physiology/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Cell"],
        ["Muscle"],
        ["ANS"],
        ["Blood"],
        ["CVS"],
        ["Respiratory System"],
        ["Physio. GIT"],
        ["Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a subtopic:", mainKeyboard);
});

bot.onText(/Cell/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Cell Lec. 1"],
        ["Cell Lec. 2"],
        ["Cell Lec. 3 & 4"],
        ["Back to Physiology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Cell Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=XbrugO4X");
});

bot.onText(/Cell Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=1svJSJb8");
});

bot.onText(/Cell Lec. 3 & 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=iynZn5dh");
});

bot.onText(/Muscle/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Skeletal Muscle Lec. 1"],
        ["Skeletal Muscle Lec. 2"],
        ["Smooth Muscle"],
        ["Cardiac Muscle"],
        ["Back to Physiology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Skeletal Muscle Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=68BTGx90");
});

bot.onText(/Skeletal Muscle Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=BRzlRvu3");
});

bot.onText(/Smooth Muscle/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=NxqAfuDj");
});

bot.onText(/Cardiac Muscle/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=vWobBd94");
});

bot.onText(/ANS/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["ANS Lec. 1"],
        ["ANS Lec. 2"],
        ["ANS Sympathetic NS"],
        ["ANS Adrenal Medulla"],
        ["Back to Physiology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/ANS Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=Q7Qq061A");
});

bot.onText(/ANS Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=Aevu71le");
});

bot.onText(/ANS Sympathetic NS/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=oLBSHKf4");
});

bot.onText(/ANS Adrenal Medulla/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=ur4lZYfV");
});

bot.onText(/Blood/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Blood Lec. 1"],
        ["Blood Lec. 2"],
        ["Blood Lec. 3"],
        ["Blood Lec. 4"],
        ["Blood Lec. 5"],
        ["Blood Lec. 6"],
        ["Blood Lec. 7"],
        ["Blood Lec. 8"],
        ["Blood Lec. 9"],
        ["Blood Lec.10"],
        ["Back to Physiology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Blood Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=Slf7pMNc");
});

bot.onText(/Blood Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=88RgOBQy");
});

bot.onText(/Blood Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=wIuwIRrF");
});

bot.onText(/Blood Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=x5b9nuXJ");
});

bot.onText(/Blood Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=LGwweEsi");
});

bot.onText(/Blood Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=5aOPpG9s");
});

bot.onText(/Blood Lec. 7/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=uGoun09o");
});

bot.onText(/Blood Lec. 8/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=n3V1X2C3");
});

bot.onText(/Blood Lec. 9/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=PsGO9Hy8");
});

bot.onText(/Blood Lec.10/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=tYRwoaNm");
});

bot.onText(/CVS/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["CVS Lec. 1"],
        ["CVS Lec. 2"],
        ["CVS Lec. 3"],
        ["CVS Lec. 4"],
        ["CVS Lec. 5"],
        ["CVS Lec. 6"],
        ["CVS Lec. 7"],
        ["CVS Lec. 8"],
        ["CVS Lec. 9+10"],
        ["Back to Physiology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/CVS Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=h0ITEZos");
});

bot.onText(/CVS Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=YYOnNoly");
});

bot.onText(/CVS Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=uiicB4v6");
});

bot.onText(/CVS Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=D97i8SjU");
});

bot.onText(/CVS Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=hkP07Fwl");
});

bot.onText(/CVS Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=qYIV2Evn");
});

bot.onText(/CVS Lec. 7/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=4hKEc69e");
});

bot.onText(/CVS Lec. 8/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=ZEoFa7gm");
});

bot.onText(/CVS Lec. 9+10/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=WDHu5aJR");
});

bot.onText(/Respiratory System/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Respiratory System Lec. 1"],
        ["Respiratory System Lec. 2"],
        ["Respiratory System Lec. 3"],
        ["Respiratory System Lec. 4"],
        ["Respiratory System Lec. 5"],
        ["Respiratory System Lec. 6"],
        ["Respiratory System Lec. 7"],
        ["Respiratory System Lec. 8"],
        ["Respiratory System Lec. 9"],
        ["Respiratory System Lec. 10"],
        ["Respiratory System Lec. 11"],
        ["Respiratory System Lec. 12"],
        ["Back to Physiology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Respiratory System Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=AaC2zxUD");
});

bot.onText(/Respiratory System Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=HSUsW545");
});

bot.onText(/Respiratory System Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=t0500pWO");
});

bot.onText(/Respiratory System Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=GW5U6ki0");
});

bot.onText(/Respiratory System Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=XAGV2O8b");
});

bot.onText(/Respiratory System Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=9FZbXIzE");
});

bot.onText(/Respiratory System Lec. 7/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=lTzqNuEI");
});

bot.onText(/Respiratory System Lec. 8/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=VOxWrUTh");
});

bot.onText(/Respiratory System Lec. 9/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=5uGTXmqM");
});

bot.onText(/Respiratory System Lec. 10/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=u8SmWqdu");
});

bot.onText(/Respiratory System Lec. 11/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=PAhFai4T");
});

bot.onText(/Respiratory System Lec. 12/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=cDAb2632");
});

bot.onText(/Physio. GIT/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Physio. GIT Lec. 1"],
        ["Physio. GIT Lec. 2"],
        ["Physio. GIT Lec. 3"],
        ["Physio. GIT Lec. 4"],
        ["Physio. GIT Lec. 5"],
        ["Physio. GIT Lec. 6"],
        ["Physio. GIT Lec. 7"],
        ["Physio. GIT Lec. 8"],
        ["Physio. GIT Lec. 9"],
        ["Back to Physiology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Physio. GIT Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=1sdshw0i");
});

bot.onText(/Physio. GIT Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=ypYAWA4T");
});

bot.onText(/Physio. GIT Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=4oBMScqX");
});

bot.onText(/Physio. GIT Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=gyDzxX7g");
});

bot.onText(/Physio. GIT Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=pygwHYks");
});

bot.onText(/Physio. GIT Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=afPz8mnH");
});

bot.onText(/Physio. GIT Lec. 7/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=6bjN4Pma");
});

bot.onText(/Physio. GIT Lec. 8/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=7ZZjVdUh");
});

bot.onText(/Physio. GIT Lec. 9/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=SFkD2CsU");
});

bot.onText(/Biochemistry/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Vitamins"],
        ["Amino-Acids"],
        ["Carbohydrates"],
        ["Nucleic Acids"],
        ["Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a subtopic:", mainKeyboard);
});

bot.onText(/Back to Biochemistry/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Vitamins"],
        ["Amino-Acids"],
        ["Carbohydrates"],
        ["Nucleic Acids"],
        ["Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a subtopic:", mainKeyboard);
});

bot.onText(/Vitamins/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Vitamins Lec. 1"],
        ["Vitamins Lec. 2"],
        ["Vitamins Lec. 3"],
        ["Vitamins Lec. 4"],
        ["Vitamins Lec. 5"],
        ["Back to Biochemistry", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Vitamins Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=M06ryOvG");
});

bot.onText(/Vitamins Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=d9yS2Cap");
});

bot.onText(/Vitamins Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=TKYP1k2v");
});

bot.onText(/Vitamins Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=wB85pcoJ");
});

bot.onText(/Vitamins Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=I4TXXUCk");
});

bot.onText(/Amino-Acids/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Amino-Acids Lec. 1"],
        ["Amino-Acids Lec. 2"],
        ["Back to Biochemistry", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Amino-Acids Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=XJLnzWhb");
});

bot.onText(/Amino-Acids Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=JzBxb62o");
});

bot.onText(/Carbohydrates/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Carbohydrates Lec. 1"],
        ["Carbohydrates Lec. 2"],
        ["Carbohydrates Lec. 3 part 1"],
        ["Carbohydrates Lec. 3 part 2"],
        ["Carbohydrates Lec. 4"],
        ["Carbohydrates Lec. 5"],
        ["Carbohydrates Lec. 6"],
        ["Carbohydrates Lec. 7"],
        ["Back to Biochemistry", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Carbohydrates Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=2ELqRuFf");
});

bot.onText(/Carbohydrates Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=9Mfmdafn");
});

bot.onText(/Carbohydrates Lec. 3 part 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=gXLDzzHt");
});

bot.onText(/Carbohydrates Lec. 3 part 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=vuZX9Ped");
});

bot.onText(/Carbohydrates Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=E4jCHKOj");
});

bot.onText(/Carbohydrates Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=x5P5q6iT");
});

bot.onText(/Carbohydrates Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=gJkjGDtk");
});

bot.onText(/Carbohydrates Lec. 7/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=QaQF7iGz");
});

bot.onText(/Nucleic Acids/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Nucleic Acids Lec. 1"],
        ["Nucleic Acids Lec. 2"],
        ["Nucleic Acids Lec. 3"],
        ["Nucleic Acids Lec. 4"],
        ["Nucleic Acids Lec. 5"],
        ["Back to Biochemistry", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Nucleic Acids Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=M0qCSKbs");
});

bot.onText(/Nucleic Acids Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=Q2kSmanH");
});

bot.onText(/Nucleic Acids Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=HjooEjlk");
});

bot.onText(/Nucleic Acids Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=b5r9caDv");
});

bot.onText(/Nucleic Acids Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=YtIydlAR");
});

bot.onText(/Histology/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Circulatory-System"],
        ["Lymphatic-System"],
        ["Respiratory-System"],
        ["Endocrine-System"],
        ["Histo. GIT"],
        ["Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a subtopic:", mainKeyboard);
});

bot.onText(/Back to Histology/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Circulatory-System"],
        ["Lymphatic-System"],
        ["Respiratory-System"],
        ["Endocrine-System"],
        ["Histo. GIT"],
        ["Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a subtopic:", mainKeyboard);
});

bot.onText(/Circulatory-System/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Circulatory-System Lec. 1"],
        ["Circulatory-System Lec. 2"],
        ["Circulatory-System Lec. 3"],
        ["Back to Histology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Circulatory-System Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=gF6XF1Ia");
});

bot.onText(/Circulatory-System Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=oOTjJCFw");
});

bot.onText(/Circulatory-System Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=WMAUkiFo");
});

bot.onText(/Lymphatic-System/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Lymphatic-System Lec. 1"],
        ["Lymphatic-System Lec. 2"],
        ["Lymphatic-System Lec. 3"],
        ["Back to Histology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Lymphatic-System Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=zAQiOE39");
});

bot.onText(/Lymphatic-System Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=JriofEZ8");
});

bot.onText(/Lymphatic-System Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=XDKwy8et");
});

bot.onText(/Respiratory-System/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Respiratory-System Lec. 1"],
        ["Respiratory-System Lec. 2"],
        ["Respiratory-System Lec. 3"],
        ["Back to Histology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Respiratory-System Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=TP9r27DS");
});

bot.onText(/Respiratory-System Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=tq5SjLjG");
});

bot.onText(/Respiratory-System Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=PsMDVxDy");
});

bot.onText(/Endocrine-System/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Endocrine-System Lec. 1"],
        ["Endocrine-System Lec. 2"],
        ["Endocrine-System Lec. 3"],
        ["Endocrine-System Lec. 4"],
        ["Back to Histology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Endocrine-System Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=UWz7jTaI");
});

bot.onText(/Endocrine-System Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=1wdwEcA8");
});

bot.onText(/Endocrine-System Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=KlH59akY");
});

bot.onText(/Endocrine-System Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=v4WL1eYY");
});

bot.onText(/Histo. GIT/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Histo. GIT Lec. 1"],
        ["Histo. GIT Lec. 2"],
        ["Histo. GIT Lec. 3"],
        ["Histo. GIT Lec. 4"],
        ["Histo. GIT Lec. 5"],
        ["Histo. GIT Lec. 6"],
        ["Back to Histology", "Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Histo. GIT Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=Jk5CkrMy");
});

bot.onText(/Histo. GIT Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=4ZJyveGA");
});

bot.onText(/Histo. GIT Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=IETjNJhy");
});

bot.onText(/Histo. GIT Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=nVA6r8ns");
});

bot.onText(/Histo. GIT Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=uhMGqc2z");
});

bot.onText(/Histo. GIT Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=ylPksSOJ");
});

bot.onText(/Embryology/, (msg) => {
  const chatId = msg.chat.id;

  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        ["Embryology Lec. 1"],
        ["Embryology Lec. 2"],
        ["Embryology Lec. 3"],
        ["Embryology Lec. 4"],
        ["Embryology Lec. 5"],
        ["Embryology Lec. 6"],
        ["Back to MainMenu"],
      ],
      resize_keyboard: true,
    },
  };

  bot.sendMessage(chatId, "Please select a lecture:", mainKeyboard);
});

bot.onText(/Embryology Lec. 1/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=DOl66Dz4");
});

bot.onText(/Embryology Lec. 2/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=i8wNH3YU");
});

bot.onText(/Embryology Lec. 3/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=rspgHMha");
});

bot.onText(/Embryology Lec. 4/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=a43Nl8oO");
});

bot.onText(/Embryology Lec. 5/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=RQfPyodQ");
});

bot.onText(/Embryology Lec. 6/, (msg) => {
  bot.sendMessage(msg.chat.id, "t.me/QuizBot?start=eKjE2VQk");
});

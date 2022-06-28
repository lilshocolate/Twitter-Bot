const Twit = require("twit");
const dotnev = require("dotenv");
dotnev.config();

//Responsible for gaining authorization to twitter API 
const T = new Twit({
    
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRECT,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,

})

const tweet = () => {
    const text = "I was lost, but now I am found lol"

    const onFinish = (err, reply) => {
        if (err) {
          console.log("Error: ", err.message);
        } else {
          console.log("Success: ", reply);
        }
      };
    
      T.post("statuses/update", { status: text }, onFinish);
    };
    
    tweet();
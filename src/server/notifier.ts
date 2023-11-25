import Pusher from "pusher";

const appId = process.env.PUSHER_APP_ID || "1501111";
const key = process.env.PUSHER_KEY || "213865c4a2397d491896";
const secret = process.env.PUSHER_SECRET || "";
const cluster = "eu";
const useTLS = true;

export const notifier = new Pusher({
  appId,
  key,
  secret,
  cluster,
  useTLS,
});

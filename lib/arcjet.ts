import arcjet, {
  detectBot,
  fixedWindow,
  protectSignup,
  shield,
  slidingWindow,
  sensitiveInfo,
} from "@arcjet/next";

export {
  detectBot,
  fixedWindow,
  protectSignup,
  shield,
  slidingWindow,
  sensitiveInfo,
};

export default arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["fingerprint"],
  rules: [
    shield({
      mode: "LIVE",
    }),
  ],
});

import { atom } from "recoil";

// atom : state를 보관하는 bubble
export const isDartAtom = atom({
    key: "isDark",
    default: false,
});

export type Lang = "en" | "zh";

const messages = {
  en: {
    // Navbar
    navHow: "How It Works",
    navDemo: "Try It",
    navPrivacy: "Privacy",
    navInstall: "Install",

    // Hero
    heroTitle: "Never Reset Your Password Again",
    heroSubtitle:
      "You don't have a bad memory. Websites just have different password rules. This extension remembers them for you.",
    heroCta: "Add to Chrome — It's Free",
    heroUsers: "Loved by 1,000+ users",

    // Pain point
    painTitle: "Sound Familiar?",
    painStep1: 'You type your password...',
    painStep2: '"Incorrect password."',
    painStep3: 'Fine. Reset password.',
    painStep4: 'You enter a new one...',
    painStep5: '"Must contain an uppercase letter!"',
    painStep6: "OK, you add one...",
    painStep7: '"Cannot be the same as a previous password."',
    painStep8: "...",
    painPunch: "This cycle ends today.",

    // How it works
    howTitle: "Three Steps. That's It.",
    howStep1Title: "Install",
    howStep1Desc: "One click from the Chrome Web Store. No account needed.",
    howStep2Title: "Visit Any Login Page",
    howStep2Desc:
      "The extension detects password fields automatically.",
    howStep3Title: "See the Rules",
    howStep3Desc:
      "Password requirements appear right below the input. No guessing.",

    // Demo
    demoTitle: "See It in Action",
    demoSubtitle: "Pick a website. See its password rules instantly.",
    demoSelectPlaceholder: "Choose a website...",

    // Community
    commTitle: "Built by the Community",
    commSubtitle:
      "Password rules are crowdsourced. Anyone can contribute, and everyone benefits.",
    commStat1Label: "Websites Covered",
    commStat2Label: "Contributors",
    commStat3Label: "Rules Verified",
    commHow1: "See missing rules?",
    commHow2: "Click to contribute",
    commHow3: "Everyone benefits",

    // Privacy
    privTitle: "Your Privacy is Non-Negotiable",
    privCard1Title: "No Passwords Collected",
    privCard1Desc:
      "We never read, store, or transmit your actual passwords. The extension only shows rules.",
    privCard2Title: "No Account Required",
    privCard2Desc:
      "Zero sign-up. Zero personal data. An anonymous ID prevents spam—that's all.",
    privCard3Title: "Rules Are Public Info",
    privCard3Desc:
      '"Must include uppercase letter" isn\'t a secret. We only store what websites already tell you.',

    // Footer CTA
    ctaTitle: "Stop the Password Guessing Game",
    ctaButton: "Add to Chrome — Free",

    // Footer
    footerGithub: "GitHub",
    footerPrivacy: "Privacy Policy",
    footerMadeWith: "Made with frustration & open source",
  },
  zh: {
    navHow: "工作原理",
    navDemo: "在线体验",
    navPrivacy: "隐私",
    navInstall: "安装",

    heroTitle: "再也不用重置密码了",
    heroSubtitle:
      "不是你记性差，是每个网站的密码规则都不一样。这个插件帮你记住它们。",
    heroCta: "添加到 Chrome — 免费",
    heroUsers: "已有 1,000+ 用户在用",

    painTitle: "是不是很熟悉？",
    painStep1: "你输入密码……",
    painStep2: '\u201c密码错误。\u201d',
    painStep3: "算了，重置密码。",
    painStep4: "你输入新密码……",
    painStep5: '\u201c密码必须包含大写字母！\u201d',
    painStep6: "好吧，加了一个大写字母……",
    painStep7: '\u201c不能与之前的密码相同。\u201d',
    painStep8: "……",
    painPunch: "这个死循环，今天终结。",

    howTitle: "三步搞定",
    howStep1Title: "安装",
    howStep1Desc: "Chrome 应用商店一键安装，不需要注册账号。",
    howStep2Title: "访问任意登录页",
    howStep2Desc: "插件自动检测密码输入框。",
    howStep3Title: "看到密码规则",
    howStep3Desc: "密码要求直接显示在输入框下方，不用猜了。",

    demoTitle: "实际效果",
    demoSubtitle: "选一个网站，立即看到它的密码规则。",
    demoSelectPlaceholder: "选择一个网站……",

    commTitle: "社区共建",
    commSubtitle: "密码规则由社区众包贡献。人人参与，人人受益。",
    commStat1Label: "已覆盖网站",
    commStat2Label: "贡献者",
    commStat3Label: "已验证规则",
    commHow1: "发现没有规则？",
    commHow2: "点击贡献",
    commHow3: "所有人受益",

    privTitle: "隐私是底线",
    privCard1Title: "不收集密码",
    privCard1Desc: "我们从不读取、存储或传输你的真实密码。插件只显示规则。",
    privCard2Title: "不需要账号",
    privCard2Desc: "零注册、零个人数据。匿名 ID 仅用于防止垃圾信息。",
    privCard3Title: "规则是公开信息",
    privCard3Desc:
      '\u201c必须包含大写字母\u201d不是秘密。我们只存储网站本来就会告诉你的信息。',

    ctaTitle: "别再猜密码了",
    ctaButton: "添加到 Chrome — 免费",

    footerGithub: "GitHub",
    footerPrivacy: "隐私政策",
    footerMadeWith: "出于对重置密码的愤怒 & 开源精神制作",
  },
} as const;

export type MessageKey = keyof (typeof messages)["en"];

export function t(lang: Lang, key: MessageKey): string {
  return messages[lang][key] ?? messages.en[key] ?? key;
}

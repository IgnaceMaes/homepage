import { Icon, IconCategory, IconStyle } from "./Icon";

export const iconList: Icon[] = [
  {
    name: "6-square",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DESIGN],
    tags: ["number", "digit", "six", "box"],
    asset: require("../assets/6-square.svg"),
  },
  {
    name: "6-square-sharp",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DESIGN],
    tags: ["number", "digit", "six", "box"],
    asset: require("../assets/6-square-sharp.svg"),
  },
  {
    name: "8-circle",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DESIGN],
    tags: ["number", "digit", "eight", "round"],
    asset: require("../assets/8-circle.svg"),
  },
  {
    name: "arrow-right-circle",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DESIGN],
    tags: ["pointer", "direction", "round"],
    asset: require("../assets/arrow-right-circle.svg"),
  },
  {
    name: "basketball",
    style: IconStyle.REGULAR,
    categories: [IconCategory.BRAND, IconCategory.HEALTH, IconCategory.OTHER],
    tags: ["sports", "games", "athletics", "dribbble"],
    asset: require("../assets/basketball.svg"),
  },
  {
    name: "battery-half",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DEVICE, IconCategory.SYSTEM],
    tags: ["charged", "charger", "charging", "power"],
    asset: require("../assets/battery-half.svg"),
  },
  {
    name: "battery-half-hash",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DEVICE, IconCategory.SYSTEM],
    tags: ["charged", "charger", "charging", "power"],
    asset: require("../assets/battery-half-hash.svg"),
  },
  {
    name: "book-open",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DOCUMENT, IconCategory.OTHER],
    tags: ["reading", "reader", "novel", "story"],
    asset: require("../assets/book-open.svg"),
  },
  {
    name: "calendar-6",
    style: IconStyle.REGULAR,
    categories: [IconCategory.BUSINESS, IconCategory.SYSTEM],
    tags: ["dates", "times", "events", "schedule", "six"],
    asset: require("../assets/calendar-6.svg"),
  },
  {
    name: "check-circle",
    style: IconStyle.REGULAR,
    categories: [IconCategory.BUSINESS, IconCategory.SYSTEM],
    tags: ["todo", "to-do", "list", "checkbox", "round"],
    asset: require("../assets/check-circle.svg"),
  },
  {
    name: "clock",
    style: IconStyle.REGULAR,
    categories: [IconCategory.SYSTEM],
    tags: ["times", "timer", "alarm", "schedule", "events", "watch"],
    asset: require("../assets/clock.svg"),
  },
  {
    name: "cloud",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.BUSINESS,
      IconCategory.SYSTEM,
      IconCategory.WEATHER,
    ],
    tags: ["serverless", "backup", "storage"],
    asset: require("../assets/cloud.svg"),
  },
  {
    name: "cube",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DESIGN, IconCategory.OTHER],
    tags: ["square", "box", "3d", "volume", "blocks"],
    asset: require("../assets/cube.svg"),
  },
  {
    name: "delete",
    style: IconStyle.REGULAR,
    categories: [IconCategory.SYSTEM],
    tags: ["keyboard", "remove", "backspace"],
    asset: require("../assets/delete.svg"),
  },
  {
    name: "doc",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DOCUMENT, IconCategory.EDITOR],
    tags: ["documents", "files", "save"],
    asset: require("../assets/doc.svg"),
  },
  {
    name: "doc-text",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DOCUMENT, IconCategory.EDITOR],
    tags: ["documents", "files", "save", "write"],
    asset: require("../assets/doc-text.svg"),
  },
  {
    name: "doc-x",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DOCUMENT, IconCategory.EDITOR],
    tags: ["documents", "files", "cancel", "discard", "close"],
    asset: require("../assets/doc-x.svg"),
  },
  {
    name: "do-not-disturb",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.SYSTEM,
      IconCategory.USERS,
      IconCategory.WEATHER,
      IconCategory.OTHER,
    ],
    tags: ["forbidden", "disallowed", "blocked", "spam"],
    asset: require("../assets/do-not-disturb.svg"),
  },
  {
    name: "droid",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.BRAND,
      IconCategory.COMMUNICATION,
      IconCategory.DEVELOPMENT,
      IconCategory.DEVICE,
      IconCategory.SYSTEM,
    ],
    tags: ["android", "google", "mobile", "phone", "cellular", "cellphone"],
    asset: require("../assets/droid.svg"),
  },
  {
    name: "folder",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.DOCUMENT,
      IconCategory.EDITOR,
      IconCategory.SYSTEM,
    ],
    tags: ["directory", "directories", "files"],
    asset: require("../assets/folder.svg"),
  },
  {
    name: "folder-dip",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.DOCUMENT,
      IconCategory.EDITOR,
      IconCategory.SYSTEM,
    ],
    tags: ["directory", "directories", "files"],
    asset: require("../assets/folder-dip.svg"),
  },
  {
    name: "heart",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.COMMUNICATION,
      IconCategory.DESIGN,
      IconCategory.HEALTH,
      IconCategory.OTHER,
    ],
    tags: ["wellness", "love", "healthy", "like"],
    asset: require("../assets/heart.svg"),
  },
  {
    name: "horse",
    style: IconStyle.REGULAR,
    categories: [IconCategory.HEALTH, IconCategory.OTHER],
    tags: ["animals", "equestrian", "chess", "knight", "games", "sports"],
    asset: require("../assets/horse.svg"),
  },
  {
    name: "intersect",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DESIGN],
    tags: ["merge", "join", "intersection", "layers"],
    asset: require("../assets/intersect.svg"),
  },
  {
    name: "mail",
    style: IconStyle.REGULAR,
    categories: [IconCategory.BUSINESS, IconCategory.COMMUNICATION],
    tags: ["email", "messages", "messaging", "send", "sent"],
    asset: require("../assets/mail.svg"),
  },
  {
    name: "medium",
    style: IconStyle.REGULAR,
    categories: [IconCategory.BRAND],
    tags: ["publish", "writing", "write"],
    asset: require("../assets/medium.svg"),
  },
  {
    name: "meh",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.COMMUNICATION,
      IconCategory.DESIGN,
      IconCategory.OTHER,
    ],
    tags: ["face", "smiley", "emoji", "unimpressed"],
    asset: require("../assets/meh.svg"),
  },
  {
    name: "mic",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.COMMUNICATION,
      IconCategory.DEVICE,
      IconCategory.MEDIA,
      IconCategory.SYSTEM,
    ],
    tags: ["microphone", "audio", "recording", "music", "sound", "podcast"],
    asset: require("../assets/mic.svg"),
  },
  {
    name: "music-beam-angled",
    style: IconStyle.REGULAR,
    categories: [IconCategory.MEDIA, IconCategory.SYSTEM],
    tags: ["songs", "audio", "playlist", "albums"],
    asset: require("../assets/music-beam-angled.svg"),
  },
  {
    name: "music-beam-straight",
    style: IconStyle.REGULAR,
    categories: [IconCategory.MEDIA, IconCategory.SYSTEM],
    tags: ["songs", "audio", "playlist", "albums"],
    asset: require("../assets/music-beam-straight.svg"),
  },
  {
    name: "pencil-line",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DESIGN, IconCategory.EDITOR],
    tags: ["write", "writing", "editing", "sign", "signature"],
    asset: require("../assets/pencil-line.svg"),
  },
  {
    name: "pen-nib",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DESIGN, IconCategory.EDITOR],
    tags: [
      "write",
      "writing",
      "editing",
      "sign",
      "signature",
      "fountain pen",
      "illustrator",
    ],
    asset: require("../assets/pen-nib.svg"),
  },
  {
    name: "profile-round",
    style: IconStyle.REGULAR,
    categories: [IconCategory.USERS],
    tags: ["person", "users", "account", "login", "circle"],
    asset: require("../assets/profile-round.svg"),
  },
  {
    name: "rewind",
    style: IconStyle.REGULAR,
    categories: [IconCategory.MEDIA, IconCategory.SYSTEM],
    tags: ["backwards", "reverse", "audio", "recording", "music", "sound"],
    asset: require("../assets/rewind.svg"),
  },
  {
    name: "send",
    style: IconStyle.REGULAR,
    categories: [IconCategory.BUSINESS, IconCategory.COMMUNICATION],
    tags: ["mail", "email", "messages", "up", "arrow", "pointer", "direction"],
    asset: require("../assets/chevron.svg"),
  },
  {
    name: "star",
    style: IconStyle.REGULAR,
    categories: [
      IconCategory.COMMUNICATION,
      IconCategory.MAP,
      IconCategory.OTHER,
    ],
    tags: ["rate", "ratings", "favorites"],
    asset: require("../assets/star.svg"),
  },
  {
    name: "table",
    style: IconStyle.REGULAR,
    categories: [IconCategory.EDITOR, IconCategory.OTHER],
    tags: ["tabular", "spreadsheet", "excel"],
    asset: require("../assets/table.svg"),
  },
  {
    name: "trash",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DOCUMENT, IconCategory.SYSTEM],
    tags: ["garbage", "delete", "destroy", "recycle", "recycling"],
    asset: require("../assets/trash.svg"),
  },
  {
    name: "trash-duo",
    style: IconStyle.DUOTONE,
    categories: [IconCategory.DOCUMENT, IconCategory.SYSTEM],
    tags: ["garbage", "delete", "destroy", "recycle", "recycling"],
    asset: require("../assets/trash-duo.svg"),
  },
  {
    name: "trash-solid",
    style: IconStyle.FILL,
    categories: [IconCategory.DOCUMENT, IconCategory.SYSTEM],
    tags: ["garbage", "delete", "destroy", "recycle", "recycling"],
    asset: require("../assets/trash-solid.svg"),
  },
  {
    name: "volume-off",
    style: IconStyle.REGULAR,
    categories: [IconCategory.DEVICE, IconCategory.MEDIA, IconCategory.SYSTEM],
    tags: ["speakers", "audio", "recording", "music", "sound"],
    asset: require("../assets/volume-off.svg"),
  },
  {
    name: "warning",
    style: IconStyle.REGULAR,
    categories: [IconCategory.SYSTEM],
    tags: ["alert", "danger", "dangerous", "caution"],
    asset: require("../assets/warning.svg"),
  },
  {
    name: "wifi-full",
    style: IconStyle.REGULAR,
    categories: [IconCategory.SYSTEM],
    tags: ["wireless", "internet", "network", "connection", "connectivity"],
    asset: require("../assets/wifi-full.svg"),
  },
  {
    name: "wifi-low",
    style: IconStyle.REGULAR,
    categories: [IconCategory.SYSTEM],
    tags: ["wireless", "internet", "network", "connection", "connectivity"],
    asset: require("../assets/wifi-low.svg"),
  },
  {
    name: "wifi-none",
    style: IconStyle.REGULAR,
    categories: [IconCategory.SYSTEM],
    tags: ["wireless", "internet", "network", "connection", "connectivity"],
    asset: require("../assets/wifi-none.svg"),
  },
];
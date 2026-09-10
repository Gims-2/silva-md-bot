const fs = require('fs');
// Load .env first (standard dotenv), then config.env (overrides .env if both exist)
if (fs.existsSync('.env')) require('dotenv').config({ path: './.env' });
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VW21LbSBD9l3lNV5juubsqVWsMCYKES7g4JMWD1hobgS17JdnGpPzvWz2CwMNuln2yPJrpy+lzzuinqOZlE4/iRvR+ikVdrvI28mO7WUTRE7vL8TjWAkSRt7no/UBDoB2gJECNgA7BKiCtAIPufn0A1AG8A1QKkAwgASoLJBWgcoAOVPeS0KZ96ACDBY4L/nmjSmEC3mxBLJZ/TsvR7+ryQKgBLQKSBP7hJeWBV70GDAEQA6A3QNKCDYBBQuAsEtBa4Da4UAOBAImASAOqFC8YQK25VUQNHsHhzZbrysu6rCb7i9s4i3U+PYqb07ys34allmBNalkCSQdoENAToDSArgOZlAVkVMESoOEyKIFoPCNHJAGBDMMOLgCRBbSUViiV67gtCYhvxJEQ0IBmOLu58jh5RGA06AAEznfIcIXGAqIE4mGhBat5F5cpQVtAht950AaQN6q0Yh2EADbh15STKhZZEau2bDdvZiEDRqmsoMFJcNSNWirwqiMCMyy4VIuzoExKC1qCCekUo8QscRYsYwZOgSIgJiaH7jB04U2oERHHJXRA3LdEcAZQBU7MoZ54jZS4bRkcj0AUgAeWHpmmtiMw1y8NEI9bmURQkpQmwaJRmun5Cr/T+lnA9/+Hf8byIJARUwiMH3rAhA8m0nE/SA5ISkBSaeRKMmODTGfQ+DRwabtCpU+aJcMNsqADEIMqgQyf029CUwKyAoNKQkWrgVNpSmK1TCkDBnmWnULSkIk6z1ABuHLD8iUGXQUIDnz33zE7VSqUBc6UfiFi3i7r3+FFrE8ObBBIhcSkpEqbWM7TTGy3gK/szyblWpkcLiGpDTAmJkGvdKIhr7GvesnORIoJblLvCXirgdKwiGXtupfMBWYQYjInNInNRjI4wYFJb1j/ynD/6GTnrA47zzNcF3sGArFZcm3K8Iju4yYrRA+3IOo4KZu2zttyXqU1SyDyYnUeR3VsE+3EIGS39vFw9td0d3D11/jj8WzzcVhfIA32Dk4+9rMH/3mupqNJ2Jt8ECAW9XwUmyYWB2XTzuvNl9g0+SQ2ovfjBkQVH9qO0JxOIYhxWTftZbVcTOd58cz255f5aDRfVu35phoN+CHWoidflmPbltWk4akuq7we3ZarOLjN20b0xvm0ib86jHUsntZ+neZTRWzzctpwl5ltdnYmB/uHe4d3x5efPvW/TPqDSV+8ZHsmUQfL58cqNGcu0Enh1kOZXcWzbJQ3wy8l7fdP7rOz/WF52Hz7/vUg+/APQURPHJwe2OUqtyffju6Pxv2T6UOl5qfX491zPNsne+yvVrONynI7fHc9PM92FqGR35plcx7uQzm53D9s8Gtz8lDP7mVet4dHxXSwHqw/cLYirspRfJ3MXGZxJ1+dXF3gek8bd3u7evfpLnu4Ljfn/bs4fOdP7+lysG4es731ajAYhOrx9ns+nDUXaj2+uvh8dHCXf+rvPl7PvauP14en15M7TrYFMUu6KgvRE6RVCOikVMr0iP5o3q95Hvli8b6KrQAxTdu8RGuCkUYGCoo38vqzUqdPV0aZWMOR+e+4jMn6qpzz/XemDgNmktzCqxhPZvpvtskfQMZ1ty5fgrq7btF2nsh6ZaeSATzw1wZ58N3t59joWaF8IyqC7ub0fG/azkzYhYNLzstOh/pmu70BsZjm7Xhez0RP5FVRz8tCgKjnSyZ3Vo3nv7sr+RvGA3ExrO1p3rT9F9FclLPYtPlsIXrofJDOWqW2fwN8wWTXFwoAAA==",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "Silva MD",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "243991700335",
    OWNER_NAME:            process.env.OWNER_NAME || "GIMS",
    DESCRIPTION:           process.env.DESCRIPTION || "Silva MD Bot",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG:              process.env.LIVE_MSG || "GIMS is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Silva MD",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'SILVA MD 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTICALL:              toBool(process.env.ANTICALL,               true),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'silva').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
    INSTAGRAM_SESSION:     process.env.INSTAGRAM_SESSION || '',
};

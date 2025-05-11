const images = {
  logo: "/images/logo.png",
  tokens: {
    XFI: "/images/tokens/XFI.png",
    JU: "/images/tokens/JU.svg",
  },
};

export const getTokenIcon = (symbol: keyof typeof images.tokens) => {
  return images.tokens[symbol];
};

export const publicImages = {
  ...images,
  getTokenIcon,
};

type CookieMap = {
  [key: string]: string;
};

export function getCookie(key: string): string | undefined {
  const cookiesRaw = document.cookie.split("; ");
  const cookieMap = cookiesRaw.reduce((a, b: string) => {
    const keyIndex = b.indexOf("=");

    a[b.slice(0, keyIndex)] = b.slice(keyIndex + 1, b.length);

    return a;
  }, {} as CookieMap);

  return cookieMap[key];
}

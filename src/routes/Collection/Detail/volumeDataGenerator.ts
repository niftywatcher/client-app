function generateRandomNum(): number {
  return Math.floor(Math.random() * 100);
}

function generateVolumeData() {
  const data = [];

  for (let i = 0; i <= 30; i++) {
    const date = new Date("2021-06-01T00:00:00.000Z");

    date.setDate(date.getDate() + i);

    data.push([+date, generateRandomNum()]);
  }

  return data as [number, number][];
}

export default generateVolumeData;

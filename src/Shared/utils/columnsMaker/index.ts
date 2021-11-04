import Column from "../../Interfaces/column";

export const columnsMaker = (): Column[] => {
  return [
    {
      title: "COLLECTION",
      key: "collection",
      dataIndex: "name",
      render: (data, row) => data,
    },
    {
      title: "FLOOR (SALES)",
      key: "floor",
      dataIndex: "minPriceInEth",
      render: (data, row) => data,
    },
    {
      title: "AVERAGE",
      key: "average",
      dataIndex: "averagePriceInEth",
      render: (data, row) => data,
    },
    {
      title: "VOLUME",
      key: "volume",
      dataIndex: "countVolume",
      render: (data, row) => data,
    },
    {
      title: "SALE VOLUME",
      key: "saleVolume",
      dataIndex: "volumeInEth",
      render: (data, row) => data,
    },
    {
      title: "7D VOLUME",
      key: "sevenDVolume",
      dataIndex: "sevenDayVolumes",
      render: (data, row) => data?.join(", "),
    },
  ];
};

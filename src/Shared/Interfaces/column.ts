export default interface Column {
  title: string | JSX.Element;
  key: string;
  dataIndex: string;
  render(data: any, row: any): any;
}

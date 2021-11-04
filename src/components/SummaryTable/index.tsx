import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import Column from "../../Shared/Interfaces/column";

export interface SummaryTableProps {
  data: any[];
  columns: Column[];
}

const SummaryTable = ({ data, columns }: SummaryTableProps) => {
  return (
    <Table variant="simple">
      <Thead backgroundColor="gray.100">
        <Tr>
          {columns.map((col) => (
            <Th key={col.key}>{col.title}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody backgroundColor="gray.50">
        {data.map((row) => (
          <Tr key={row.id}>
            {columns.map((col) => (
              <Td key={col.key}>{col.render(row[col.dataIndex], row)}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SummaryTable;

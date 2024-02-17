import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TabelContact = () => {
  return (
    <Table className="">
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Nama Pasien</TableHead>
          <TableHead>Nama Operator</TableHead>
          <TableHead>Jaminan</TableHead>
          <TableHead>Tindakan Operasi</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>INV001</TableCell>
          <TableCell>INV001</TableCell>
          <TableCell>INV001</TableCell>
          <TableCell>INV001</TableCell>
          <TableCell>INV001</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TabelContact;

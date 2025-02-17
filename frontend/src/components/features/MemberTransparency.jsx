import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Table from '../ui/Table';
import TableHead from '../ui/TableHead';
import TableBody from '../ui/TableBody';
import TableRow from '../ui/TableRow';
import TableCell from '../ui/TableCell';
import '../../styles/components/membertransparency.css';

const MemberTransparency = () => {
  const data = [
    { member: 'John Doe', contributions: 1000, loans: 500, repayments: 300 },
    { member: 'Jane Smith', contributions: 800, loans: 300, repayments: 200 },
    { member: 'Bob Johnson', contributions: 900, loans: 400, repayments: 250 },
    { member: 'Emily Davis', contributions: 700, loans: 250, repayments: 150 }
  ];

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Member Transparency</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Member</TableCell>
              <TableCell>Contributions</TableCell>
              <TableCell>Loans</TableCell>
              <TableCell>Repayments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.member}</TableCell>
                <TableCell>${member.contributions.toLocaleString()}</TableCell>
                <TableCell>${member.loans.toLocaleString()}</TableCell>
                <TableCell>${member.repayments.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default MemberTransparency;
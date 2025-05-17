import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import LoadingSkeleton from './LoadingSkeleton';

const dummyData = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', role: 'User', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@gmail.com', role: 'Editor', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@gmail.com', role: 'User', status: 'Pending' },
  { id: 5, name: 'Alice', email: 'alice1@gmail.com', role: 'User', status: 'Active' },
  { id: 6, name: 'James', email: 'james@gmail.com', role: 'User', status: 'Pending' },
  { id: 7, name: 'Raj', email: 'raj@gmail.com', role: 'User', status: 'Inactive' },
  { id: 8, name: 'Kumar', email: 'kumar@gmail.com', role: 'User', status: 'Pending' },
  { id: 9, name: 'Mahesh', email: 'mahesh@gmail.com', role: 'User', status: 'Active' },
  { id: 10, name: 'Alice Brown', email: 'alice@gmail.com', role: 'User', status: 'Pending' },
];

export default function DataTable() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortColumn, setSortColumn] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.toLowerCase()) ||
      item.email.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center gap-4">
        <Input
          placeholder="Filter by name or email..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead onClick={() => handleSort('id')} className="cursor-pointer">
                ID {sortColumn === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
              </TableHead>
              <TableHead onClick={() => handleSort('name')} className="cursor-pointer">
                Name {sortColumn === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
              </TableHead>
              <TableHead onClick={() => handleSort('email')} className="cursor-pointer">
                Email {sortColumn === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}
              </TableHead>
              <TableHead onClick={() => handleSort('role')} className="cursor-pointer">
                Role {sortColumn === 'role' && (sortDirection === 'asc' ? '↑' : '↓')}
              </TableHead>
              <TableHead onClick={() => handleSort('status')} className="cursor-pointer">
                Status {sortColumn === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
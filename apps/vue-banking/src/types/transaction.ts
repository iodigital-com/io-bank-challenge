export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  description: string;
  timestamp: Date;
}


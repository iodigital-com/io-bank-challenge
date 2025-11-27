import { TransactionForm } from '../components/TransactionForm';
import { TransactionHistory } from '../components/TransactionHistory';
import styles from './page.module.css';

export default function Index() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src="/assets/io-logo.svg" alt="iO" className={styles.logo} />
          <h1>Bank</h1>
        </div>
        <div className={styles.balanceDisplay}>
          <span className={styles.balanceLabel}>Current Balance</span>
          <span className={styles.balanceAmount}>$0.00</span>
        </div>
      </header>

      <main className={styles.main}>
        <TransactionForm />
        <TransactionHistory />
      </main>
    </div>
  );
}

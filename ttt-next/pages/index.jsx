import * as React from 'react';
import useHome from '../hooks/useHome';
import styles from '../styles/Home.module.css'
import { WithLoading } from '../util-components';

// eslint-disable-next-line react/display-name
const Home = React.memo(() => {

  const { rollNumbers, onChange, onClick, data, loading } = useHome();

  const listData = React.useMemo(() => {
    return data?.data.map((result) => {
      return (
        <tr key={result.roll_no}>
          <td data-label="Roll Number">{result.roll_no}</td>
          <td data-label="Result">{result.status.toUpperCase()}</td>
        </tr>
      )
    })
  }, [data]);

  return(
    <div className={styles.container}>
      <h1 className={styles.headerTitle}>Enter the comma separated list of role numbers.</h1>
      <input type="text" className={styles.rollNumberInput} value={rollNumbers} onChange={onChange} />
      <button type='button' className={styles.buttonStyle} onClick={onClick}>Submit</button>
      <WithLoading loading={loading}>
        {data && (
          <table>
          <caption>Student Results</caption>
          <thead>
            <tr>
              <th scope='col'>Roll Number</th>
              <th scope='col'>Result</th>
            </tr>
          </thead>
          <tbody>
            {listData}
          </tbody>
        </table>
        )}
        
      </WithLoading>
    </div>
  )
});

export default Home;

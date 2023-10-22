import Image from 'next/image'
import styles from './page.module.css'

import LineSearch from './search/LinearSearch'
import BinarySearch from './search/BinarySearch'

export default function Home() {
  let start = 0;
  const end = 10;
  const arr = [];

  while (start < end){
    arr.push(start);
    start++;
  }



  const numberSearch = 9
  const linearSearch = new LineSearch(arr, numberSearch).Search()[0]
  const binarySearch = new BinarySearch(arr, numberSearch).Search()[0]
  
  return (
    <main className={styles.main}>
      <section>
        <h2>Линейный поиск</h2>
        <div className='result'>
          <p>Искомое число: <span>{linearSearch.number}</span></p>
          <p>Число в массиве под индексом: <span>{linearSearch.arrayId}</span></p>
          <p>Время выполнения алгоритма: <span>{linearSearch.time}</span> мс.</p>
        </div>
      </section>


      <section>
        <h2>Бинарный поиск</h2>
        <div className='result'>
          <p>Искомое число: <span>{binarySearch.number}</span></p>
          <p>Число в массиве под индексом: <span>{binarySearch.arrayId}</span></p>
          <p>Время выполнения алгоритма: <span>{binarySearch.time}</span> мс.</p>
        </div>
      </section>
    </main>
  )
}

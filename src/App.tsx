import { useEffect, useState } from 'react';
import './App.css';
import { serverData, testData } from './services';
import { Score } from './type';
import Country from './components/Country';

function App() {
  const [dataSource, setDataSource] = useState<string>('test')
  const [data, setData] = useState<Score[]>([]);

  useEffect(() => {
    if (dataSource === 'server') {
      serverData().then(res => {
        setData(res);
      });
    } else {
      testData().then(res => {
        setData(res);
      })
    }

  }, [dataSource]);

  const handleDataSource = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataSource(event.currentTarget.value);
  }
  
  const getScoreByCountry = (countryName: string): number => {
    return (data.find(score => (score[0].toLowerCase() === countryName.toLowerCase())) || [])[1] || 0
  }

  return (
    <>
      <h1>Cricket Score by country</h1>
      <div className="card">
        <form>
          Source of data:
          <input id="src-test" type="radio" name="data-source" onChange={handleDataSource} defaultValue="test" checked={dataSource === 'test'} />
          <label htmlFor="src-local">Test Data</label>
          <input id="src-server" type="radio" name="data-source" defaultValue="server" onChange={handleDataSource} checked={dataSource === 'server'} />
          <label htmlFor="src-server">Server Data</label>
        </form>
        <Country getScoreByCountry={getScoreByCountry} />
        <Country getScoreByCountry={getScoreByCountry} />
      </div>

    </>
  )
}

export default App
